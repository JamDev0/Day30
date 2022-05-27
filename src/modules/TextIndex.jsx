
import { useState } from "react";
import { TextBtn } from "./TextBtn";
import { TextSection } from "./TextSection";

export function TextIndex() {
  const [isTextGenerated, setIsTextGenerated] = useState(false);
  const [TextGenerated, setTextGenerated] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum enim consequat diam convallis, sit amet aliquam risus iaculis. Nunc egestas vitae turpis vitae egestas. Fusce neque felis, porttitor vitae.');

  return (
    <main
     className="mt-16 flex flex-col gap-y-14"
    >
      <h1
       className="text-center text-5xl font-TiroH mx-4 "
      >
        {/* Talvez mudar essa fonte */}
        Oooi ^-^ minha deusa
      </h1>

      <h2
       className="text-justify text-4xl font-Lato indent-5 mx-5"
      >
        Clique sempre que quiser saber o'que penso sobre você
      </h2>

      <TextBtn
       OnClick={()=>{setIsTextGenerated(true)}}
      />

      {
        isTextGenerated ?
        <TextSection 
         Text={TextGenerated}
        />
        :
        null
      }
    </main>
  )
}