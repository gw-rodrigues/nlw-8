import { CloseButton } from "./CloseButton";

import bugImageUrl from "../assets/Bug.svg"
import ideaImageUrl from "../assets/Idea.svg"
import toughtImageUrl from "../assets/Thought.svg"

const feedbackTypes = {
    BUG: {
        title:"Problema",
        image: {
            source: bugImageUrl,
            alt: "Imagem de um inseto"
        }
    },
    IDEA: {
        title: "Ideia",
        image: {
            source: ideaImageUrl,
            alt: "Imagem de uma lampada"
        }
    },
    OTHER: {
        title: "Outro",
        image: {
            source: toughtImageUrl,
            alt: "Imagem de um balao de pensamento"
        }
    }
}

export function WidgetForm(){
    return(
        <div className=" bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            
            <header>
                <span className=" text-xl leading-6">Deixe seu Feedback</span>
                <CloseButton/>
            </header>
            
            <div className="flex py-8 gap-2 w-full">
                { Object.entries(feedbackTypes).map(([key, value])=>{
                    return(
                        <button>
                            <img src={value.image.source} alt={value.image.alt} />
                            <span>{value.title}</span>
                        </button>
                    )
                })}
            </div>

            <footer className="text-xs text-neutral-400">Feito por <a href="http://github.com/gw-rodrigues" className=" underline underline-offset-2">Gleydson</a></footer>
        </div>
    )
}