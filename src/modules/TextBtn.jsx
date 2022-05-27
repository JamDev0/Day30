import { CircleWavyQuestion } from "phosphor-react";

export function TextBtn({ OnClick }){
    return(
        <button
            onClick={OnClick}
            className="p-2 my-14 bg-brand-red-800 text-brand-red-300 w-min rounded-xl self-center"
        >
            <CircleWavyQuestion
            className="w-20 h-20"
            />
        </button>
    )
}