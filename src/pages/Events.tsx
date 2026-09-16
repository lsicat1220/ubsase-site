import allEvents from '../data/events.json'
const today = new Date();

export default function Events() {
	return (
		//41% left is the center of each bubble
		<div className="relative flex items-center justify-center w-screen bg-white" style={{ minHeight: '130vh' }}>
			<img src="/background/SASE Events Deisgn.png" alt="SASE Events" className="w-[70%] object-contain" />
			{/* <img
				src="/Upcoming Events/Matcha event.png"
				alt="Matcha Event"
				className="absolute object-cover"
				style={{ top: '23.5%', left: '41%', width: '20%' }}
			/> */}
			<h1
				className="absolute left-0 right-0 font-black italic uppercase text-white text-center whitespace-nowrap"
				style={{
					top: '8%',
					textAlign: 'center',
					fontSize: 'clamp(2rem, 5vh, 4rem)',
					letterSpacing: '0.05em',
					textShadow: '3px 3px 0px rgba(0,0,0,0.4)',
					transform: 'skewX(-6deg)',
				}}
			>
				UPCOMING EVENTS !!
			</h1>
			<section className="absolute left-0 right-0 italic text-center">
				{exportEvents()}
			</section>

		</div>
	)
}

function exportEvents() {
	const futureEvents = allEvents.filter(event => 
		Date.parse(event.date) >= today.getTime());
	const listEvents = futureEvents.map(event =>
		<li>
			{event.name}
		</li>
	);
	return <ul>{listEvents}</ul>;
}
