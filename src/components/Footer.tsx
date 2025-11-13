export default function Footer() {
	return (
		<footer className="w-fill shadow-md">
			<div className="text-gray-500 flex h-30 items-center justify-center space-x-5">
				<div>
					<h2>Contact us:</h2>	
					<p>
					Email: <a href="mailto:ubsase2@gmail.com"><u>ubsase2@gmail.com</u></a> <br/>
					Instagram: <a href="https://instagram.com/ubsase"><u>@ubsase</u></a>
					</p>
				</div>
				<img src="/src/assets/logo.png" className="h-20"/>
			</div>
			<div className="border-t border-gray-300 flex flex-row p-10 items-center justify-center">
				<p className="text-gray-400">© 2025 UB SASE. All rights reserved.</p>
			</div>
		</footer>
	)
}
