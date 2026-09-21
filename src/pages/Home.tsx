// import Carousel from "./../components/Home/Carousel";
// import HomePageActivities from "./../data/homePageActivities.json" with {type: "json"};
//WANT TO DO: Make the background a scrolling compilation of event photos
//

import video from "../../public/videos/video.mp4"
export default function Home() {
	return (
		<>
			<section className="text-white italic">
				<div className="bg-[url(/public/p/lnygroup.JPG)] bg-cover py-10 px-10 w-fill h-150 flex items-end justify-start">
					{/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
					<div 
						className="text-white h-fit w-fit text-shadow-lg/60"
						style={{
							left: '41%',
							fontSize: 'clamp(1.15rem, 2.5vh, 2rem)',
							letterSpacing: '0.05em',
							textShadow: '3px 3px 0px rgba(0,0,0,0.8)',
							transform: 'skewX(-6deg)',
						}}
					>
						<h1 className="font-bold text-3xl md:text-5xl pb-4">SOCIETY OF ASIAN SCIENTISTS AND ENGINEERS</h1>
						<p className="text-base md:text-2xl">
							From the classroom to the boardroom, SASE powers the full talent journey — connecting top STEM talent with opportunities, driving professional growth, and helping companies hire, retain, and promote diverse leaders.
							</p>
					</div>
				</div>
			</section>
			<section className="flex flex-col md:flex-row min-h-fit justify-center md:h-150 py-10 lg:py-0 items-center text-black gap-5">
				<div className="md:w-fill md:w-1/2 px-10 md:5 lg:px-20 flex flex-col">
					<h1 className="text-3xl lg:text-6xl pb-4 font-serif-kaisei text-sase-light-blue-500">What We Do</h1>
					<p className="text-2xl font-sans-zenkaku">
					Society of Asian Scientists and Engineers (SASE) is a national organization dedicated to the <b>advancement of Asian heritage scientists and engineers</b> in education and employment so that they can achieve their <b>full career potential.</b> In addition to professional development, SASE also encourages members to contribute to the enhancement of the communities in which they live.
					</p>
				</div>
				<video
					autoPlay
					muted
					loop
					playsInline
					src={video}
					className="w-3/4 md:w-1/3 rounded-2xl"
				/>
			</section>
		</>
	)
}
