import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
//Remember to import the function of a site here, so that this file knows about it.
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Leadership from "./pages/Leadership.tsx";
import Events from "./pages/Events.tsx";
import Example from "./pages/ExamplePlaceholder.tsx"
import Footer from "./components/Footer.tsx";
//This function is where the entire website resides. 
//All a React function needs to do is return an object that contains a piece of the website.
//If you've ever seen HTML, that's essentially what it's returning, but it's slightly different
function App() {
	return (
		<>
			{/*This item handles the links of every page of the website*/}
			<BrowserRouter>
				<Navbar />
				{/*You can imagine that the Routes item below gets replaced with the current url's page*/}
				<main className="pt-30">
					<Routes>
					{/*The path element of the Route tag tells the browser what the link to the page should look like*/}
						<Route path="/" element={<Home />}/>
						<Route path="/about" element={<About />}/>
						<Route path="/leadership" element={<Leadership />}/>
						<Route path="/events" element={<Events />}/>
						<Route path="/example" element={<Example />}/>
					</Routes>
				</main>
			</BrowserRouter>
			<Footer />
		</>
	)
}

export default App
