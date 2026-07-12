export default function Events() {
	return (
		//41% left is the center of each bubble
		<div className="relative flex items-center justify-center w-screen bg-white" style={{ minHeight: '130vh' }}>
			<img src="/background/SASE Events Deisgn.png" alt="SASE Events" className="w-[70%] object-contain" />
			<img
				src="/Upcoming Events/Matcha event.png"
				alt="Matcha Event"
				className="absolute object-cover"
				style={{ top: '23.5%', left: '41%', width: '20%' }}
			/>
			<h1
				className="absolute top-12 font-black italic uppercase text-white text-center whitespace-nowrap"
				style={{
					left: '41%',
					fontSize: 'clamp(1.15rem, 2.5vh, 2rem)',
					letterSpacing: '0.05em',
					textShadow: '3px 3px 0px rgba(0,0,0,0.4)',
					transform: 'skewX(-6deg)',
				}}
			>
				UPCOMING EVENTS !!
			</h1>
		</div>
	)
}
