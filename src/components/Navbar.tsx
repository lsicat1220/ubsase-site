import {useState} from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
	return (
		<>
			{/*This is the desktop navbar, mobile version WIP. 
				 In order to get the right layout, we're using a flexbox within a flexbox.
				 The outside flexbox aligns the logo button to the left and the text buttons to the right using justify-between
				 The inside flexbox just manages the row layout of the text buttons*/}
			<nav className="p-4 w-screen bg-white fixed flex flex-row justify-between shadow-md items-center text-sase-blue">
				<Link to="/">
					<img src="/src/assets/logo-full.png" className="h-20 inline-block m-2" alt="UB Sase Logo"/>
				</Link>
				{/*Links on the navbar are listed in order from left to right
					 When adding a new link, simply copy the format below*/}
				<div className="text-2xl justify-right p-4 flex flex-row md:visible items-center space-x-4 h-fit w-fit">
					<Link to="/events">
					Events
					</Link>
					<Link to="/about">
					About
					</Link>
					<Link to="/leadership">
					Leadership
					</Link>
					<Link to="/example">
					Example
					</Link>
				</div>
			</nav>
		</>
	)
}
