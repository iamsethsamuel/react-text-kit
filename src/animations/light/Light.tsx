import { useEffect } from "react";
import { AnimationProps } from "../utils";
import "./light.css";

export interface LightProp extends AnimationProps {
    color?: string;
    reflectionColor?: string;
}

export default function Light(props: LightProp) {
    useEffect(() => {
        const root = document.querySelector(":root") as HTMLElement;
        root.style.setProperty("--light-text", props.color || "#0e3742");
        root.style.setProperty("--light-text-color", props.color || "#0e3742");
        root.style.setProperty("--light-text-reflection-color", props.reflectionColor || "#0e3742");

        if (props.animate) {
            root.style.setProperty("--light-text-animation", "light-blink");
            root.style.setProperty("--light-text-speed", props.animationSpeed || "5s");
            root.style.setProperty("--light-text-animation-type", props.animationType || "infinite");
        }
    }, []);

    return (
        <div className="light-text" style={props.style}>
            <h5>{props.children}</h5>
        </div>
    );
}
