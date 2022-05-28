import { Barricade } from "phosphor-react";
import { useState } from "react";



export function OnWork(){
    const [WH, setWH] = useState(window.innerHeight)
    return(
        <main
         style={
             {
                 marginTop: WH/2,
                 marginBottom: WH/2
             }
         }
         className="-translate-y-1/2 flex flex-col items-center gap-y-5"
        >
            <h1
             className="text-5xl text-center mx-5"
            >
                Em breve mais amor para você ;)
            </h1>
            <Barricade
             className="w-24 h-24"
            />
        </main>
    )
}