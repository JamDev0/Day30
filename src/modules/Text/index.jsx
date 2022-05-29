
import { useState } from "react";
import { TextBtn } from "./modules/TextBtn";
import { TextSection } from "./modules/TextSection";

let Datas = {
  Texts: [
      {
        Content: "Penso que vuce é meu cururu",
        Displayed: false,
      },
      {
        Content: "Penso que o unico jeito deu ser feliz e estando do seu lado, juntin, pra sempre",
        Displayed: false,
      },
      {
        Content: "Penso que minha vida é você",
        Displayed: false,
      },
      {
        Content: "Penso que meu futuro só sera realmente meu, com você",
        Displayed: false,
      },
      {
        Content: "Penso que você sera a melhor mãe possível para meus filhos, nossos filhos",
        Displayed: false,
      },
      {
        Content: "Penso que você é gostosa, gostosa pra kct, so quero te ter pertinho, pra sentir esse tesão que sai de você",
        Displayed: false,
      },
      {
        Content: "Penso que meu único desejo é você ser feliz",
        Displayed: false,
      },
      {
        Content: "Penso que, vou estar sempre aqui por você, não, não penso, eu vou, sempre vou, sempre",
        Displayed: false,
      },
      {
        Content: "Penso que você merece ser feliz, não so feliz, muito mais que isso",
        Displayed: false,
      },
      {
        Content: "Penso que você é perfeita",
        Displayed: false,
      },
      {
        Content: "Penso que você é surreal",
        Displayed: false,
      },
      {
        Content: "Penso que pqp, so preciso de você pra viver",
        Displayed: false,
      },
      {
        Content: "Penso que minha deusa é você",
        Displayed: false,
      },
      {
        Content: "Penso que sempre vou te amar",
        Displayed: false,
      },
      {
        Content: "Penso que você já é meu orgulho, e que esse sentimento de orgulho so vai evoluir, assim como você, em todos sentidos, academicamente, mentalmente",
        Displayed: false,
      },
      {
        Content: "Penso que seus olhos são de outro mundo, minhas esmeraldas místicas, lindas, perfeita",
        Displayed: false,
      },
      {
        Content: "Penso que seu sorriso é perfeito, lindo",
        Displayed: false,
      },
      {
        Content: "Penso que te amo, amo muito, muito muito",
        Displayed: false,
      },
      {
        Content: "Penso que te amo muito mais do que eu disse, muito mais que eu posso ter tentado dizer, te amo muito",
        Displayed: false,
      },
      {
        Content: "Penso que qualquer esforço é válido por você",
        Displayed: false,
      },
      {
        Content: "Penso, penso, penso, sempre nessa boca, gostosa, penso em te beijar, pra sempre",
        Displayed: false,
      },
      {
        Content: "Penso em me acabar de você, de você inteirinha",
        Displayed: false,
      },
      {
        Content: "Penso em você sempre, toda hora, a sdd nn para",
        Displayed: false,
      },
      {
        Content: "Penso que sem você, a vida não seria vida, felicidade não seria felicidade, viveria uma eterna solidão, eterna infelicidade",
        Displayed: false,
      },
      {
        Content: "Penso que sua genialidade é tão imensa que não cabe no nosso mundo",
        Displayed: false,
      },
      {
        Content: "Penso que seu esforço é incrível, surreal, seu esforço me inspira, me inspirou a fazer esse site, e me inspira a continuar, sempre, me inpira a caçar nosso futuro",
        Displayed: false,
      },
      {
        Content: "Penso que viveria com você e mais nada",
        Displayed: false,
      },
      {
        Content: "Penso que você me faz pensar mais e mais",
        Displayed: false,
      },
      {
        Content: "Penso que você é única",
        Displayed: false,
      },
      {
        Content: "Penso que vuce é a melhor professora que ja conheci",
        Displayed: false,
      },
      {
        Content: "Penso que você devia se amar mais, muito mais, você tem q se enxergar de verdade",
        Displayed: false,
      },
      {
        Content: "Penso que é impossível expressar tudo que penso sobre você, so sei que você é tudo",
        Displayed: false,
      },
      {
        Content: "Penso que seremos ótimos pais :3",
        Displayed: false,
      },
      {
        Content: "Penso que todas essas afirmações sobre você, sobre oque eu sinto, não são apenas pensamentos, mas fatos, as mais verdadeiras verdades, porém, verdades que veem so a superfície, você é muito mais do que eu conseguiria descrever com qualquer texto ou expressão, oque eu sinto é inexpressavel, so te amo, muito, e faço oque for por você",
        Displayed: false,
      },
  ]
}

export function TextIndex() {
  const [isTextGenerated, setIsTextGenerated] = useState(false);
  const [TextGenerated, setTextGenerated] = useState(['', 0, '']);


  function GetRandomText(){
    let TextAray = Datas.Texts;
    let RandomTextIndex = Math.floor(Math.random()*Datas.Texts.length);
    let RandomText = Datas.Texts[RandomTextIndex].Content;

    

    if(!TextAray[RandomTextIndex].Displayed){
      console.log('Novo texto mostrado');
    } else if(TextAray[RandomTextIndex].Displayed){
      console.log('Foi gerado um texto repetido')
      let Index = 0;

      while( TextAray[RandomTextIndex].Displayed && Index < TextAray.length ){
        console.log('A procura de um texto não repetido');
        RandomTextIndex = Index;
        RandomText = Datas.Texts[RandomTextIndex].Content;
        console.log('Achou o texto: ', RandomText)
        console.log('O index desse while é: ', Index);
        Index++;
      }
      if(Index >= TextAray.length){
        console.log('Acabou todos os textos, o ultimo index é: ', Index);
        return 'Acabou ;)';
      }
      console.log('Achou um texto que não foi mostrado');
    }

    TextAray[RandomTextIndex].Displayed = true;

    return RandomText;
  }

  function IsRandomTextDisplayed(Index){
    if(!Datas.Texts[Index].Displayed){
      Datas.Texts[Index].Displayed = true;
    }
  }


  return (
    <main
     className="mt-16 flex flex-col gap-y-14"
    >
      <h1
       className="text-center text-5xl font-TiroH mx-4"
      >
        {/* Talvez mudar essa fonte */}
        Oooi ^-^ <span className="underline underline-offset-2 decoration-brand-red-800">minha deusa</span>
      </h1>

      <h2
       className="text-justify text-4xl font-Lato indent-5 mx-5"
      >
        Clique sempre que quiser saber oque penso sobre você
      </h2>

      <TextBtn
       OnClick={()=>{
         setIsTextGenerated(true);

         let Random = GetRandomText();
         let Fs;
         let Align;

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