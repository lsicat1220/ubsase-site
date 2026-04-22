import HoverableCard from "./HoverableCard";

type Event = {
    "name": string;
    "date": string;
    "image": string
}

type Events = {
    events: Event[]
}

// We have the "container" and "slides", we need "navigation"
/*
	CAROUSEL {
		<CAROUSELITEMS> <-- 0 item = no carousel at all
		<NAVIGATION> <-- <= 1 item = remove
	}
*/

// some have it so active hoverable

export default function Carousel({events}: Events) {
	if (events == null){
		return;
	}
	const items = events.map(e => <HoverableCard {...e}/>)
	if (items.length <= 1){
		return (
			<div>{items}</div>
		)
	} else {
		return (
			<div className="w-fill h-50">
				<div>
					{items}
				</div>
				<button className="hover:text-red-700">
					GO LEFT
				</button>
				<button className="hover:text-red-700">
					GO RIGHT
				</button>
			</div>
		);
	}
	
}