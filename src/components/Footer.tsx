export default function Footer() {
	return (
		<footer className="w-fill shadow-md">
			<div className="text-gray-500 flex h-30 items-center justify-center space-x-5">
				<div className="mx-12">
					<h2>Contact us:</h2>	
					<p>
					Email: <a href="mailto:ubsase2@gmail.com"><u>ubsase2@gmail.com</u></a> <br/>
					</p>
				</div>
				<a href="https://discord.gg/Pg2zGyK3Gy">
					<div className="bg-sase-blue w-12 h-12 rounded-full flex items-center justify-center">
						<img src="/src/assets/discord-white-icon.svg" className="h-5"/>
					</div>
				</a>
				<a href="https://instagram.com/ubsase">
					<div className="bg-sase-blue w-12 h-12 rounded-full flex items-center justify-center">
						<img src="/src/assets/insta-logo.svg" className="h-7"/>
					</div>
				</a>
				<img src="/src/assets/logo.png" className="mx-5 h-20"/>
			</div>
			<div className="border-t border-gray-300 p-10">
				<p className="text-gray-400 text-center">© 2025 UB SASE. All rights reserved.</p>
			</div>
		</footer>
	)
}
