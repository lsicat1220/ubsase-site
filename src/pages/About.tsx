interface AboutCardProps {
	title: string
	desc: string
	color: string
}

function AboutCard({title, desc, color}: AboutCardProps) {
	return (
		<>
				<div className={"w-screen flex flex-col p-6 space-y-2 items-center italic " + color}>
					<h1 className="text-3xl font-bold text-white text-shadow-solid">{title}</h1>
					<p className="text-lg text-white">{desc}</p>
				</div>
		</>
	)
}

export default function About() {
	return (
		<>
			<section className="p-20">
				<div className="flex flex-row justify-evenly">
					<div className="flex flex-col space-y-5 my-5 italic">
						<h1 className="font-bold italic text-black text-5xl">ABOUT US</h1>
						<p>I'm being forced to write this I don't even go to SASE please help me</p>
					</div>
					<div className="bg-red-500 w-100 h-100">image</div>
				</div>
			</section>
			<section
				className="flex flex-col justify-center items-center border-t-3"
			>
				<h1 className="font-bold italic text-black text-5xl my-10">OUR THREE PILLARS</h1>
				<div className="flex flex-col w-full">
					<AboutCard
						title="PROFESSIONAL DEVELOPMENT"
						desc="Prepare members for success in the global STEM workforce through professional development and networking"
						color="bg-blue-700"
					/>
					<AboutCard
						title="CULTURAL AWARENESS"
						desc="Celebrate and promote diversity across college campuses and modern workplaces"
						color="bg-green-500"
					/>
					<AboutCard
						title="COMMUNITY SERVICES"
						desc="Provide a supportive network and encourage local community service"
						color="bg-blue-600"
					/>
				</div>
			</section>
		</>
	)
}
