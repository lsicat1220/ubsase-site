

export default function Hero() {

	return (
		<div className=" text-white h-screen">
				<div className="bg-[url(./assets/genericUBbg.jpg)] bg-cover py-10 px-10 w-fill h-150 flex items-end justify-start">
					{/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
					<div className="text-white h-fit w-fit text-shadow-lg/60">
						<h1 className="font-bold text-5xl pb-4">Welcome to the SASE website!</h1>
						<p className="text-2xl">
							From the classroom to the boardroom, SASE powers the full talent journey — connecting top STEM talent with opportunities, driving professional growth, and helping companies hire, retain, and promote diverse leaders.
							</p>
					</div>
				</div>
			</div>
	)
}
