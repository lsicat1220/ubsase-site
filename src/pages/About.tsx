export default function About() {
	return (
		<>
			<section
				className="-mt-6 w-screen h-screen bg-cover bg-top bg-no-repeat"
				style={{ backgroundImage: "url('/background/SASE About Us 1.png')" }}
			/>

			<section
				className="w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
				style={{ backgroundImage: "url('/background/SASE About Us 2.png')" }}
			>
				<div className="flex flex-col w-full px-20 mt-32">
					<div className="w-full bg-blue-500 flex flex-col p-6 space-y-2">
						<h1 className="text-3xl font-bold text-white">Professional development</h1>
						<p className="text-lg text-white">yada yada yada</p>
					</div>
					<div className="w-full bg-blue-700 flex flex-col p-6 space-y-2 items-end">
						<h1 className="text-3xl font-bold text-white">Cultural awareness</h1>
						<p className="text-lg text-white">yada yada yada</p>
					</div>
					<div className="w-full bg-green-600 flex flex-col p-6 space-y-2">
						<h1 className="text-3xl font-bold text-white">Community service</h1>
						<p className="text-lg text-white">yada yada yada</p>
					</div>
				</div>
			</section>
		</>
	)
}
