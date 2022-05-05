import bugImageUrl from "../../assets/Bug.svg"
import ideaImageUrl from "../../assets/Idea.svg"
import thoughtImageUrl from "../../assets/Thought.svg"
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
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
            source: thoughtImageUrl,
            alt: "Imagem de um balao de pensamento"
        }
    }
}

//get only the keys [BUG | IDEA | OTHER]
export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){

    const [feedbackType,setFeedbackType] = useState<FeedbackType | null>(null)

    return(
        <div className=" bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            
            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ):(
                <FeedbackContentStep feedbackType={feedbackType} />
            )}

            <footer className="text-xs text-neutral-400">Feito por <a href="http://github.com/gw-rodrigues" className=" underline underline-offset-2">Gleydson</a></footer>
        </div>
    )
}