//WANT TO DO: Make the background a scrolling compilation of event photos
export default function Home() {
	return (
		<>
			<section className="py-10 text-white w-screen">
				<div className="bg-[url(./assets/genericUBbg.jpg)] bg-cover py-10 px-10 w-fill h-150 flex items-end justify-start">
					<div className="text-white h-fit w-fit text-shadow-lg/60">
						<h1 className="font-bold text-5xl pb-4">Welcome to the SASE website!</h1>
						<p className="text-2xl">
							From the classroom to the boardroom, SASE powers the full talent journey — connecting top STEM talent with opportunities, driving professional growth, and helping companies hire, retain, and promote diverse leaders.
							</p>
					</div>
				</div>
			</section>
			<section className="flex justify-center items-center w-screen h-150 text-black">
				<div className="w-1/2 px-20">
					<h1 className="font-bold text-4xl pb-4">What we do</h1>
					<p className="text-2xl">
					Society of Asian Scientists and Engineers (SASE) is a national organization dedicated to the advancement of Asian heritage scientists and engineers in education and employment so that they can achieve their full career potential. In addition to professional development, SASE also encourages members to contribute to the enhancement of the communities in which they live.
					</p>
				</div>
				<div className="w-1/3 h-1/2 shadow-md/50 bg-[url(./assets/oldSASEphoto.jpg)] bg-cover"></div>
			</section>
		</>
	)
}
