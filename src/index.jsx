import { useState } from "react"


import { Widget } from './modules/Widget';
import { TextIndex } from './modules/Text';
import { OnWork } from './modules/OnWork';


export function Index(){
    const [PageSelectedId, setPageSelectedId] = useState("TextIndex");

    function WhichPageIdIsSelected(PageId){
        switch(PageId){
            case 'TextIndex':
                return (<TextIndex/>);
                break;

            case 'OnWork':
                return (<OnWork/>);
                break;
        }
    }

    return(
        <>
            <Widget
             TextClick={()=>{setPageSelectedId('TextIndex')}}
             OnWorkClick={()=>{setPageSelectedId('OnWork')}}
            />
            {
                WhichPageIdIsSelected(PageSelectedId)
            }
        </>
    )
}