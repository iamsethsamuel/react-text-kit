import { useEffect } from "react";
import { AnimationProps } from "../utils";
import "./glitch.css";

export interface GlitchProps extends AnimationProps {
    firstColor?: string;
    secondColor?: string;
    thirdColor?: string;
}

export default function Glitch(props: GlitchProps) {
    useEffect(() => {
        const root = document.querySelector(":root") as HTMLElement;

        root.style.setProperty("--first-color", props.firstColor || "rgba(255, 0, 0, .75)");
        root.style.setProperty("--second-color", props.firstColor || "rgba(0, 255, 0, .75)");
        root.style.setProperty("--third-color", props.firstColor || "rgba(0, 0, 255, .75)");
        if (props.animate) {
            root.style.setProperty("--glitch-text-animation", "glitch");
            root.style.setProperty("--glitch-text-speed", props.animationSpeed || "500ms");
            root.style.setProperty("--glitch-text-animation-type", props.animationType || "infinite");
        }
    }, []);

    return (
        <div className="glitch" style={props.style}>
            <span>{props.children}</span>
            {/* <span aria-hidden>{props.children}</span>
            <span aria-hidden>{props.children}</span> */}
        </div>
    );
}
