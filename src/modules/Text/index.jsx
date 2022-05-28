
import { useState } from "react";
import { TextBtn } from "./modules/TextBtn";
import { TextSection } from "./modules/TextSection";

let Datas = {
  Texts: [
      {
        Content: "Teste",
      },
      {
        Content: "Lorem ipsum dolor ",
      },
      {
        Content: "Lorem ipsum dolor sit amet gravid",
      },
      {
        Content: "Teste4",
      },
      {
        Content: "Teste5",
      },
      {
        Content: "Teste6",
      },

  ]
}

export function TextIndex() {
  const [isTextGenerated, setIsTextGenerated] = useState(false);
  const [TextGenerated, setTextGenerated] = useState(['', 0, '']);


  function GetRandomText(){
    let RandomTextIndex = Math.floor(Math.random()*Datas.Texts.length);
    let RandomText = Datas.Texts[RandomTextIndex].Content;

    return RandomText;
  }



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
       OnClick={()=>{
         setIsTextGenerated(true);

         let Random = GetRandomText();
         let Fs;
         let Align;

         console.log(Random, Random.length)

         if(Random.length < 10){
            Fs = 5;
            Align = 'center'
         } else if(Random.length < 30){
            Fs = 3;
            Align = 'center';
         } else if(Random.length >= 30) {
            Fs = 1.5;
            Align = 'justify';
         }
         setTextGenerated([Random, Fs, Align]);
        }}
      />

      {
        isTextGenerated ?
        <TextSection 
         Text={TextGenerated[0]}
         Font={TextGenerated[1]}
         Align={TextGenerated[2]}
        />
        :
        null
      }
    </main>
  )
}