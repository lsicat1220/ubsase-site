import memberData from "./../data/members.json" with {type: "json"}
interface Member {
	id: number,
	name: string,
	desc: string
}
function MemberSection({id, name, desc}: Member) {
	return (
		<section className="p-20 h-80 text-black flex flex-row items-center space-x-10">
			<div className="h-50 w-50 rounded-full drop-shadow-lg bg-blue-500"></div>
			<div>
				<h3 className="text-4xl">{name}</h3>
				<p>{desc}</p>
			</div>	
		</section> 
	)
}
export default function Leadership() {
	const members = memberData as Member[];
	return (
		<>
		{members.map((item) => (
			<MemberSection key={item.id} id={item.id} name={item.name} desc={item.desc}/>
		))}
		</>
	)
}
