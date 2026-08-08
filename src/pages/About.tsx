interface AboutCardProps {
	title: string
	desc: string
	color: string
}

function AboutCard({title, desc, color}: AboutCardProps) {
	return (
		<div className={"w-screen flex flex-col p-6 space-y-2 items-center italic " + color}>
			<h1 className="text-3xl font-bold text-white text-shadow-solid">{title}</h1>
			<p className="font-bold text-lg text-white s-text-shadow-solid">{desc}</p>
		</div>
	)
}

export default function About() {
	return (
		<>
			<section className="p-20">
				<div className="flex flex-row justify-evenly">
					<div className="flex flex-col w-2/3 space-y-5 my-5 italic">
						<h1 className="font-bold italic text-black text-5xl">ABOUT US</h1>
						<p>
						The University at Buffalo chapter of the Society of Asian
						Scientists and Engineers (SASE) is a student-run organization
						dedicated to empowering Asian heritage students and allies in the
						fields of science, technology, engineering, and mathematics (STEM). 

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
						desc="PREPARE MEMBERS FOR SUCCESS IN THE GLOBAL STEM WORKFORCE THROUGH PROFESSIONAL DEVELOPMENT AND NETWORKING"
						color="bg-blue-700"
					/>
					<AboutCard
						title="CULTURAL AWARENESS"
						desc="CELEBRATE AND PROMOTE DIVERSITY ACROSS COLLEGE CAMPUSES AND MODERN WORKPLACES"
						color="bg-green-500"
					/>
					<AboutCard
						title="COMMUNITY SERVICES"
						desc="PROVIDE A SUPPORTIVE NETWORK AND ENCOURAGE LOCAL COMMUNITY SERVICE"
						color="bg-blue-600"
					/>
				</div>
			</section>
		</>
	)
}
