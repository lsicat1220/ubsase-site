import allEvents from '../data/events.json'
const today = new Date();
import { useEffect, useState } from 'react';

// created with the help of claude
export default function Events() {
	const listPhotos = eventPhotos();
	const leftPhotos = listPhotos.filter((_, index) => index % 2 === 0);
	const rightPhotos = listPhotos.filter((_, index) => index % 2 !== 0);
	return (
		<div style= {{display: 'flex', justifyContent: 'center', alignItems: 'center',flexWrap: "wrap",
        gap: 24, padding: 24, minHeight: '100vh'}}>
			<PhotoColumn photos={leftPhotos} />
			<div style={{position: "relative", flex: "1 1 800px", maxWidth: 800, height: 600,}}>
				<iframe
				title="UBSASE events calendar"
				src="https://calendar.google.com/calendar/embed?src=ubsase2%40gmail.com&ctz=America%2FNew_York"
				style={{ border: 0, width: "100%", height: "100%" }}
				/>
				<CustomCalendar />
			</div>

			<PhotoColumn photos={rightPhotos} />

		</div>
	)
}

// returns 4 photos/posters to display 
function eventPhotos() {
	const futureEvents = allEvents.filter(event => 
		Date.parse(event.date) >= today.getTime());
	const futurePhotos = futureEvents
		.filter(event => event.photo != null)
		.map(event => event.photo);
	let listPhotos = [];
	if (futurePhotos.length < 4) {
		const allPhotos = allEvents
			.filter(event => event.photo != null)
			.map(event => event.photo);
		if (allPhotos.length <= 4) {
			return allPhotos;
		}
		listPhotos = allPhotos.slice((allPhotos.length - 4), allPhotos.length);
	}
	else {
		listPhotos = futurePhotos.slice(0, 4)
	}
	return listPhotos
}

// like 98% claude
// requires a custom calendar image in public/calendar/ folder with the name MM-YYYY.png
function CustomCalendar() {
	const monthYear = `${String(today.getMonth() + 1).padStart(2, "0")}-${today.getFullYear()}`;
	const src = `/calendar/${monthYear}.png`;
	const [loadedSrc, setLoadedSrc] = useState<string | null>(null);

	useEffect(() => {
		const img = new Image();
		img.onload = () => setLoadedSrc(src); // only called later, when the image loads
		img.src = src;

		return () => {
		img.onload = null;
		};
	}, [src]);

	// Show the overlay only if the image that loaded is the one we want right now.
	if (loadedSrc !== src) return null;

	return (
		<img
			src={src}
			alt="Calendar for this month"
			style={{
				position: "absolute",
				inset: 0,
				width: "100%",
				height: "100%",
				objectFit: "contain",
				background: "#fff", 
			}}
		/>
	);
}

// fully generated with claude, then debugged
function PhotoColumn({ photos }: { photos: string[] }) {
  return (
    // Rendered even when empty so the calendar stays centered.
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        flex: "0 0 200px",
      }}
    >
      {photos.map((src, i) => (
        <img
          key={`${i}-${src}`}
          src={src}
          alt={`Event photo ${i + 1}`}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: 8,
          }}
        />
      ))}
    </div>
  );
}

/*
old code


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
			/> * /}
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
			<section 
				className="absolute left-0 right-0 italic text-center"
				style={{
					top: '20%', 
					fontSize: '2rem'
				}}
			>
				{exportEvents()}
			</section>

		</div>
	)
}

function exportEvents() {
	const futureEvents = allEvents.filter(event => 
		Date.parse(event.date) >= today.getTime());
	const listEvents = futureEvents.map(event =>
		<li 
			style={{
				margin:'20%'
			}}
		>
			{event.name}
		</li>
	);
	return <ul>{listEvents}</ul>;
}
*/