import { CircleWavyQuestion, ImageSquare, List, MusicNotes } from "phosphor-react";
import { Popover } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useState } from "react";


var style = window.getComputedStyle(document.querySelector('html'), null).getPropertyValue('font-size');
var Rem = parseFloat(style);

export function Widget(){
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, (-1.5*Rem)],
                },
            },
        ],
    });


    return(
        <Popover>
            <Popover.Button
             className="fixed bottom-5 right-5 rounded-full w-12 h-12 p-[0.4rem] bg-brand-red-400 shadow-xl shadow-zinc-900"
             type="button" 
             ref={setReferenceElement}
            >
                <List
                 weight="bold"
                 className="w-full h-full text-brand-red-900"
                />
            </Popover.Button>

            <Popover.Panel
             className='flex flex-col items-center gap-y-3 text-brand-red-900 bg-brand-red-200 w-12 -z-10 pb-10'
             ref={setPopperElement}
             style={styles.popper}
             {...attributes.popper}
            >
                <MusicNotes className="w-11/12 h-auto"/>
                <ImageSquare className="w-11/12 h-auto"/>
                <CircleWavyQuestion className="w-11/12 h-auto"/>
            </Popover.Panel>
        </Popover>
    )
}