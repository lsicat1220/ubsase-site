interface AboutCardProps {
	title: string
	desc: string
	color: string
}

function AboutCard({title, desc, color}: AboutCardProps) {
	return (
		<>
				<div className={"w-full flex flex-col p-6 space-y-2 items-center " + color}>
					<h1 className="text-3xl font-bold text-white italic text-shadow-solid">{title}</h1>
					<p className="text-lg text-white">{desc}</p>
				</div>
		</>
	)
}

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
