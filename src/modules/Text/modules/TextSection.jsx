import { HeartStraight } from "phosphor-react";

export function TextSection({ Text, Font, Align }){
    return(
        <div
         className="flex flex-col gap-8 my-6"
        >
          <HeartStraight
           weight="fill"
           className="self-center text-brand-red-800 w-10 h-10"
          />

          <p
           className="text-justify indent-4 mx-5"
           style={{
             fontSize: Font + 'rem',
             textAlign: Align,
           }}
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