type Event = {
    "name": string;
    "date": string;
    "image": string
}

export default function HoverableCard({name, date, image}: Event) {
    return(
    <div className="h-40 w-40">
        {name}
        {date}
        <img src={image} alt={`Background image for our ${name} event`}/>
    </div>
    );
}
