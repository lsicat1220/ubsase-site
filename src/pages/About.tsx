interface AboutCardProps {
	title: string
	desc: string
	color: string
}

function AboutCard({title, desc, color}: AboutCardProps) {
	return (
		<div className={"flex flex-col p-6 space-y-2 items-center italic " + color}>
			<h1 className="text-3xl font-bold text-white text-shadow-solid">{title}</h1>
			<p className="font-bold text-lg text-white s-text-shadow-solid">{desc}</p>
		</div>
	)
}

export default function About() {
	return (
		<>
			<section className="p-20 flex flex-col space-x-5 my-10">
				<div className="flex flex-row justify-evenly">
					<div className="flex flex-col w-2/3 space-y-5 italic">
						<h1 className="font-bold italic text-black text-5xl">ABOUT US</h1>
						<p className="text-2xl">
						The Society of Asian Scientists and Engineers (SASE) is a national organization
						dedicated to advancing Asian heritage scientists and engineers in both
						education and employment, empowering them to achieve their full potential while
						making meaningful contributions to their communities. As the University at
						Buffalo chapter, we bring that mission to campus by creating a space where
						students can grow professionally, build lasting connections, and support one
						another throughout their academic journey.

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
					<div className="bg-red-500 w-100 h-80">image</div>
				</div>
			</section>
			<section
				className="flex flex-row justify-center border-y-3 pr-20 space-x-10 my-10"
			>
				<div className="flex flex-col w-2/3">
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
				<div className="w-1/3 py-10 space-y-5">
					<h1 className="font-bold italic text-black text-5xl">OUR MISSION</h1>
					<p className="italic">
						We are committed to helping students develop into confident
						leaders, professionals, and changemakers. Through professional development
						workshops, networking events, mentorship opportunities, company partnerships,
						and regional conferences, we provide our members with the skills, experiences,
						and connections needed to succeed both during college and beyond.
					</p>
				</div>
			</section>
			<section className="my-5">
				<div className="flex flex-row justify-evenly">
					<div className="flex flex-col w-2/3 space-y-5 my-5 italic">
						<h1 className="font-bold italic text-black text-5xl">JOIN US</h1>
						<p className="">
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
					<div className="bg-red-500 w-100 h-80">image</div>
				</div>
			</section>
		</>
	)
}
