// interface AboutCardProps {
// 	title: string
// 	desc: string
// 	color: string
// }

// import { Button } from "../components/Button"

// function AboutCard({title, desc, color}: AboutCardProps) {
// 	return (
// 		<div className={"bg-amber-50"+" flex flex-col p-6 space-y-2 items-center italic"}>
// 			<h1 className="text-3xl font-bold text-white text-shadow-solid">{title}</h1>
// 			<p className="font-bold text-lg text-white s-text-shadow-solid">{desc}</p>
// 		</div>
// 	)
// }

export default function About() {
	return (
		<>
			<section id="about-us" 
			className="flex flex-col p-10 bg-gray-50 h-full">
				<div className="flex items-center align-middle 
				lg:px-[clamp(100px,15vw,300px)]
				md:px-[clamp(50px,5vw,100px)] 
				min-[900px]:flex-row 
				p-10 flex-col gap-x-[20%] gap-y-5">
					<div className="flex flex-col gap-y-5">
						<h1 className="font-serif-kaisei font-bold text-sase-light-blue-400 text-5xl w-fit whitespace-nowrap">About Us</h1>
						<p className="font-sans-zenkaku text-lg">
							The Society of Asian Scientists and Engineers (SASE) is a national organization
							dedicated to advancing Asian heritage scientists and engineers in both
							education and employment, empowering them to achieve their full potential while
							making meaningful contributions to their communities. As the University at
							Buffalo chapter, we bring that mission to campus by <text className=" font-bold">creating a space where
							students can grow professionally, build lasting connections, and support one
							another throughout their academic journey.</text>

							<br/><br/>
							As part of the national SASE network, we connect UB students to a
							community that spans academia, industry, and professional
							development, while celebrating the cultural identities that shape
							our members' experiences. We welcome students of all majors,
							backgrounds, and years. You don't need to be an engineer or a
							scientist to find a home here. What unites us is a shared
							commitment to community, growth, and representation in STEM
							fields.
						</p>
					</div>
					{/* <img
						src="/background/SASE Logo.png"
						alt="SASE Logo"
						className="w-28 h-28 object-contain drop-shadow-[0_0_16px_rgba(255,255,255,0.7)] rounded-xl"
					/>	 */}
				</div>	
				
				{/* <div className="flex flex-row justify-evenly">
					<div className="flex flex-col w-2/3 space-y-5">
						<h1 className="font-serif-kaisei text-bold italic text-black text-5xl">ABOUT US</h1>
						<p className="text-2xl">
						
						</p>
					</div>
					<div className="bg-red-500 w-100 h-80">image</div>
				</div> */}
			</section>
			<section id="our-mission"
			className="flex flex-col bg-blue-100 p-10">
				<div className="flex items-center align-middle 
				lg:px-[clamp(100px,15vw,300px)]
				md:px-[clamp(50px,5vw,100px)] 
				min-[900px]:flex-row 
				p-10 flex-col gap-x-10 gap-y-5">
					<h1 className="font-serif-kaisei font-bold text-black text-5xl w-fit whitespace-nowrap">OUR MISSION</h1>
					<p className="font-sans-zenkaku text-lg">
						We are committed to helping students develop into confident
						leaders, professionals, and changemakers. Through professional development
						workshops, networking events, mentorship opportunities, company partnerships,
						and regional conferences, we provide our members with the skills, experiences,
						and connections needed to succeed both during college and beyond.
					</p>
				</div>	
				<div id="pillars" className="flex flex-col md:flex-row p-5 gap-5 justify-center items-center">
					<div className={"bg-cover bg-center bg-[linear-gradient(color-mix(in_srgb,var(--color-sase-light-blue-500)_70%,transparent),color-mix(in_srgb,var(--color-sase-dark-blue-400)_70%,transparent)),url('/p/suitselevator.png')] w-full justify-center text-center flex flex-col p-5 space-y-2 items-center min-h-100 md:h-150 rounded-xl"}>
						<h1 className="text-4xl font-bold font-serif-kaisei text-white text-shadow-solid">Professional<br/> Development</h1>
						<p className="font-bold font-sans-zenkaku text-lg text-white s-text-shadow-solid">Prepare members for success in the global stem workforce through professional development and networking</p>
					</div>
					<div className={"bg-cover bg-center bg-[linear-gradient(color-mix(in_srgb,var(--color-sase-dark-blue-400)_70%,transparent),color-mix(in_srgb,var(--color-sase-dark-blue-400)_70%,transparent)),url('/Events/SASEOly.webp')] w-full justify-center text-center flex flex-col p-5 space-y-2 items-center min-h-100 md:h-150 rounded-xl"}>
						<h1 className="text-4xl font-serif-kaisei font-bold text-white text-shadow-solid">Cultural<br/>Awareness</h1>
						<p className="font-bold font-sans-zenkaku text-lg text-white s-text-shadow-solid">Celebrate and promote diversity across college campuses and modern workplaces</p>
					</div>
					<div className={"bg-cover bg-center bg-[linear-gradient(color-mix(in_srgb,var(--color-sase-dark-blue-400)_70%,transparent),color-mix(in_srgb,var(--color-sase-dark-blue-700)_70%,transparent)),url('/Events/LTNight.webp')] w-full justify-center text-center flex flex-col p-5 space-y-2 items-center min-h-100 md:h-150 rounded-xl"}>
						<h1 className="text-4xl font-serif-kaisei font-bold text-white text-shadow-solid">Community<br/>Services</h1>
						<p className="font-bold font-sans-zenkaku text-lg text-white s-text-shadow-solid">Provide a supportive network and encourage local community service</p>
					</div>
				</div>
				
			</section>
			<section id="call-to-action" className="my-5">
				<div className="flex items-center align-middle 
				lg:px-[clamp(100px,15vw,300px)]
				md:px-[clamp(50px,5vw,100px)] 
				min-[900px]:flex-row 
				p-10 flex-col gap-x-[10%] gap-y-10">
					<div className="flex flex-col gap-y-5">
						<h1 className="font-serif-kaisei font-bold text-sase-light-blue-400 text-5xl w-fit whitespace-nowrap">Join Us</h1>
						<p className="font-sans-zenkaku text-lg">
							What makes SASE different from UB's other engineering and cultural clubs is
							that we don't ask you to pick a lane. Engineering clubs on campus tend to focus
							purely on technical growth, and cultural clubs tend to focus purely on
							community, SASE does both, at the same time, in the same room. What sets us
							apart is our ability to combine career development with a welcoming and
							inclusive environment where members can celebrate Asian cultures, form genuine
							friendships, and learn from one another. Whether you're attending your first
							networking event, exploring career opportunities, or looking to meet
							like-minded students, SASE offers a place to grow both professionally and
							personally.
						</p>
					</div>
					<img
						src="/Events/NightEboard.webp"
						alt="Night E-Board Picture"
						className="object-cover object-[100%_0%] w-100 h-80 rounded-xl"
					/>
					{/* <img
						src="/background/SASE Logo.png"
						alt="SASE Logo"
						className="w-28 h-28 object-contain drop-shadow-[0_0_16px_rgba(255,255,255,0.7)]"
					/>	 */}
				</div>
			</section>
		</>
	)
}
