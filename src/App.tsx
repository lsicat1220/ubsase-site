import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Footer from "./components/Footer.tsx";
//This component is where the entire website resides
function App() {
	return (
		<>
			{/*This item handles the links of every page of the website*/}
			<BrowserRouter>
				<Navbar />
				{/*You can imagine that the Routes item below gets replaced with the current url's page*/}
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/about" element={<About />}/>
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	)
}

export default App
