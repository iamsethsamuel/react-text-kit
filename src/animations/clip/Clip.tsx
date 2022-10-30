import { AnimationProps } from "../utils"
import "./clip.css"
import { useEffect } from "react"

export interface ClipProps extends AnimationProps{
    imageurl: string
}

export default function Clip(props: ClipProps){
    useEffect(()=>{
        const root = document.querySelector(":root") as HTMLElement

        root.style.setProperty("--clip-image", props.imageurl)

    },[])
    return <div className="clip-text" style={{...props.style,backgroundImage: `url(${props.imageurl})`}}>
        {props.children}
    </div>
}