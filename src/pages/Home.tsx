// import Carousel from "./../components/Home/Carousel";
// import HomePageActivities from "./../data/homePageActivities.json" with {type: "json"};

//WANT TO DO: Make the background a scrolling compilation of event photos
export default function Home() {
	return (
		<>
			<section className="text-white">
				<div className="bg-[url(./assets/genericUBbg.jpg)] bg-cover py-10 px-10 w-fill h-150 flex items-end justify-start">
					{/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
					<div className="text-white h-fit w-fit text-shadow-lg/60">
						<h1 className="font-bold text-5xl pb-4">Welcome to the SASE website!</h1>
						<p className="text-2xl">
							From the classroom to the boardroom, SASE powers the full talent journey — connecting top STEM talent with opportunities, driving professional growth, and helping companies hire, retain, and promote diverse leaders.
							</p>
					</div>
				</div>
			</section>
			<section className="flex justify-center items-center h-150 text-black overflow-auto">
				<div className="w-1/2 px-20">
					<h1 className="font-bold text-4xl pb-4">What we do</h1>
					<p className="text-2xl">
					Society of Asian Scientists and Engineers (SASE) is a national organization dedicated to the advancement of Asian heritage scientists and engineers in education and employment so that they can achieve their full career potential. In addition to professional development, SASE also encourages members to contribute to the enhancement of the communities in which they live.
					</p>
				</div>
				{/*TO DO: change this photo into an automatically playing video (probably an event recap)*/}
				<div className="w-1/3 h-1/2 shadow-md/50 bg-[url(./assets/oldSASEphoto.jpg)] bg-cover"></div>
			</section>
			<section className="py-10 ">
				{/* <div>Our Activities</div> */}
				{/* <Carousel cards={HomePageActivities}/> */}
			</section>
			<section className="text-black flex flex-col items-center">
				<div className="p-20 w-300 text-center">
					<h1 className="text-4xl pb-10">Frequently Asked Questions</h1>
					<p className="text-2xl">
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					</p>
				</div>
			</section>
		</>
	)
}
