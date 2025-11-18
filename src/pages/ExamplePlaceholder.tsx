interface Props {
	input?: string;
}
export default function Example({input}: Props) {
	var message: string;
	if (input) {
		message = input;
	} else {
		message = "This is an example page!";
	}
	//React relies on functions that return what are basically snippets of HTML
	//As you can see, the above code handles the input, and gives a default value for the message
	return (
		<>
			{/*
				React replaces the class value from HTML with className.
				Using Tailwind, we can replicate most CSS functions with HTML classes,
				so you don't need to worry about that. 
				Here, we set the background color using bg-[color], height with h-[number],
				padding with p-[number], then use CSS's flexbox layout to justify the text in the center.
			*/}
			<div className="bg-sase-blue h-200 p-50 flex flex-col justify-center">
			{/*Javascript inside the return value (like this comment or the variable below) is surrounded by brackets*/}
				<h1 className="text-4xl text-white">{message}</h1>
			</div>
		</>
	)
}
