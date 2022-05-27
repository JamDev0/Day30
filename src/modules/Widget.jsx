import { List } from "phosphor-react"

export function Widget(){
    return(
        <div
         className="fixed bottom-5 right-5 rounded-full w-12 h-12 p-[0.4rem] bg-brand-red-400 shadow-xl shadow-zinc-900"
        >
            <List
             weight="bold"
             className="w-full h-full text-brand-red-900"
            />
        </div>
    )
}