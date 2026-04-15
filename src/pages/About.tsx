export default function About() {
	return (
		<>
			<section className="flex flex-row p-20 w-screen h-150 bg-white space-x-10">
				<div className="w-2/3 h-1/2 space-y-5">
					<h1 className="text-bold text-5xl">About us</h1> 
					<p className="text-2xl">
					We are SASE and we love to party! 
					I am not a rapper
					Bing bop boom
					Badabop boom
					pow
					</p>
				</div>
				<div className="bg-red-500 w-1/2">
				picture here
				</div>
			</section>
			
			<section className="text-white flex flex-col w-screen h-150 bg-white">
			<div className="w-full h-1/7 bg-transparent flex flex-row items-center justify-center px-10">
			<h1 className="text-black text-bold text-5xl">The Core Pillars</h1>
			</div>
			<div className="w-full h-2/7 bg-blue-500 flex flex-col test-shadow-lg p-10 space-y-5">
				<h1 className="text-5xl text-bold">Professional development</h1>
				<p className="test-2xl">yada yada yada</p>
			</div>
			<div className="w-full h-2/7 bg-blue-700 flex flex-col test-shadow-lg p-10 space-y-5 items-end">
				<h1 className="text-5xl text-bold">Cultural awareness</h1>
				<p className="test-2xl">yada yada yada</p>
			</div>
			<div className="w-full h-2/7 bg-green-600 flex flex-col test-shadow-lg p-10 space-y-5">
				<h1 className="text-5xl text-bold">Community service</h1>
				<p className="test-2xl">yada yada yada</p>
			</div>
			</section>
		</>
	)
}
