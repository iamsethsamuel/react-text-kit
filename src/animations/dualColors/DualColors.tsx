import { useEffect } from "react";
import { AnimationProps } from "../utils";
import "./dualcolors.css";

export interface DualColorsProp extends AnimationProps {
    firstColor: string;
    secondColor: string;
}

export default function DualColors(props: DualColorsProp) {
    useEffect(() => {
        const root = document.querySelector(":root") as HTMLElement;

        root.style.setProperty("--first-color", props.firstColor);
        root.style.setProperty("--second-color", props.secondColor);
        if (props.animate) {
            root.style.setProperty("--animate-1", "dualcolor-animate1");
            root.style.setProperty("--animate-2", "dualcolor-animate2");
            root.style.setProperty("--dual-animation-speed", props.animationSpeed || "2s");
            root.style.setProperty("--dual-animation-type", props.animationType || "infinite");
        }
    }, []);

    return (
        <div className="dualcolor" style={props.style}>
            <span>{props.children}</span>
            <span>{props.children}</span>
        </div>
    );
}
