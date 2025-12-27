require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

// Protected Data
const POSTS = [
  { username: 'Admin', title: 'Admin Confidential Report' },
  { username: 'Leader1', title: 'Squad Goals 2026' }
]

app.get('/posts', authenticateToken, (req, res) => {
  // Only show posts that belong to the logged-in user
  res.json(POSTS.filter(post => post.username === req.user.name))
})

// Middleware (The Gatekeeper)
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

app.listen(3000, () => console.log('Resource Server running on port 3000'))