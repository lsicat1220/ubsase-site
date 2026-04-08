import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";
import Merch from "./pages/Merch.tsx";
import Leadership from "./pages/Leadership.tsx";
import Events from "./pages/Events.tsx";
import Contact from "./pages/Contact.tsx";
import Example from "./pages/ExamplePlaceholder.tsx"
import Footer from "./components/Footer.tsx";
//This component is where the entire website resides
function App() {
	return (
		<>
			{/*This item handles the links of every page of the website*/}
			<BrowserRouter>
				<Navbar />
				{/*You can imagine that the Routes item below gets replaced with the current url's page*/}
				<main>
					<Routes>
					{/*The path element of the Route tag tells the browser what the link to the page should look like*/}
						<Route path="/" element={<Home />}/>
						<Route path="/merch" element={<Merch />}/>
						<Route path="/leadership" element={<Leadership />}/>
						<Route path="/events" element={<Events />}/>
						<Route path="/example" element={<Example />}/>
						<Route path="/contact" element={<Contact />}/>
					</Routes>
				</main>
			</BrowserRouter>
			<Footer />
		</>
	)
}

export default App
