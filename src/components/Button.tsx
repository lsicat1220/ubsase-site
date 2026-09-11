import { Link } from "react-router-dom"
import arrow from "../../src/assets/arrow.svg"

export function Button({txt, link}: {txt: string, link : string}){
    return (
        <>
            <Link to={link} className="
            group flex items-center gap-2 p-3 rounded-xl relative overflow-hidden bg-gray-100
            before:absolute
            before:right
            before:top-1/2
            before:left-6/5
            before:h-30 before:w-30
            before:-translate-x-1/2
            before:-translate-y-1/2
            before:scale-0
            before:rounded-full
            before:bg-blue-100
            before:transition-transform
            before:duration-500
            before:ease-linear
            hover:before:scale-[5]
            ">
                <span className="z-1 font-serif-kaisei font-bold">{txt}</span>
                <div className="z-1 group">
                    <img
                        src={arrow}
                        className="h-6 w-6 transition-transform duration-300 group-hover:-rotate-45"
                    />
                </div>
            </Link>
        </>
    )
}