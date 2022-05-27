import { HeartStraight } from "phosphor-react";

export function TextSection({ Text }){
    return(
        <div
         className="flex flex-col gap-8 my-6"
        >
          <HeartStraight
           weight="fill"
           className="self-center text-brand-red-800 w-10 h-10"
          />

          <p
          className="text-justify text-1xl indent-4 mx-5"
          >
            {Text}
          </p>

          <HeartStraight
           weight="fill"
           className="self-center text-brand-red-800 w-10 h-10"
          />
        </div>
    )
}