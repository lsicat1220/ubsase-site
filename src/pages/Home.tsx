// import Carousel from "./../components/Home/Carousel";
// import HomePageActivities from "./../data/homePageActivities.json" with {type: "json"};
import videoSrc from "../assets/video.mp4"
//WANT TO DO: Make the background a scrolling compilation of event photos
export default function Home() {
	return (
		<>
			<section className="text-white italic">
				<div className="bg-[url(./assets/newish_group_photo.png)] bg-cover py-10 px-10 w-fill h-150 flex items-end justify-start">
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
						<h1 className="font-bold text-5xl pb-4">SOCIETY OF ASIAN SCIENTISTS AND ENGINEERS</h1>
						<p className="text-2xl">
							From the classroom to the boardroom, SASE powers the full talent journey — connecting top STEM talent with opportunities, driving professional growth, and helping companies hire, retain, and promote diverse leaders.
							</p>
					</div>
				</div>
			</section>
			<section className="flex justify-center items-center h-150 text-black">
				<div className="w-1/2 px-20">
					<h1 className="font-bold italic text-4xl pb-4">WHAT WE DO</h1>
					<p className="text-2xl italic">
					Society of Asian Scientists and Engineers (SASE) is a national organization dedicated to the advancement of Asian heritage scientists and engineers in education and employment so that they can achieve their full career potential. In addition to professional development, SASE also encourages members to contribute to the enhancement of the communities in which they live.
					</p>
				</div>
				{/*TO DO: change this photo into an automatically playing video (probably an event recap)*/}
				<video
					autoPlay
					muted
					loop
					playsInline
					src={videoSrc}
					className="w-1/3 rounded-2xl"
				/>
			</section>
		</>
	)
}
