type Event = {
    "name": string;
    "date": string;
    "image": string
}

export default function HoverableCard({name, date, image}: Event) {
    return(
    <div className="h-100 w-100 overflow-hidden">
        {/* {name}
        {date} */}
        <img className="w-fill h-fill" src={image} alt={`Background image for our ${name} event`}/>
    </div>
    );
}
