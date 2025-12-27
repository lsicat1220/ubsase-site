require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const cors = require('cors')
const RefreshToken = require('./models/RefreshToken')

const app = express()
app.use(express.json())
app.use(cors())

// 1. CONNECT TO MONGODB
mongoose.connect('mongodb://localhost/jwt_auth_db')
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to MongoDB for Token Storage'))

// 2. USER CONFIG (Easy to update in future)
const USERS = [
  { id: 1, username: "Admin", password: "password123" },
  { id: 2, username: "Leader1", password: "leaderpass" }
]

// LOGIN ROUTE
app.post('/login', async (req, res) => {
  const { username, password } = req.body

  // A. Authenticate User (Simple Array Check)
  const user = USERS.find(u => u.username === username && u.password === password)
  if (!user) return res.status(400).send('Invalid Credentials')

  // B. Generate Tokens
  const userPayload = { name: username } 
  const accessToken = generateAccessToken(userPayload)
  const refreshToken = jwt.sign(userPayload, process.env.REFRESH_TOKEN_SECRET)

  // C. SAVE TO DB (The MongoDB Integration)
  await RefreshToken.create({ token: refreshToken })

  res.json({ accessToken: accessToken, refreshToken: refreshToken })
})

// REFRESH ROUTE
app.post('/token', async (req, res) => {
  const incomingToken = req.body.token
  if (incomingToken == null) return res.sendStatus(401)

  // A. Check DB: Does this token exist?
  const tokenExists = await RefreshToken.exists({ token: incomingToken })
  if (!tokenExists) return res.sendStatus(403) // Forbidden if not in DB

  // B. Verify Signature
  jwt.verify(incomingToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    
    // C. Issue new Access Token
    const accessToken = generateAccessToken({ name: user.name })
    res.json({ accessToken: accessToken })
  })
})

// LOGOUT ROUTE
app.delete('/logout', async (req, res) => {
  // A. Remove from DB
  await RefreshToken.deleteOne({ token: req.body.token })
  res.sendStatus(204)
})

function generateAccessToken(user) {
  // Expires in 20 seconds so you can test the refresh logic easily
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '20s' }) 
}

app.listen(4000, () => console.log('Auth Server running on port 4000'))