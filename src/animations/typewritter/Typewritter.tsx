import { ReactNode, useEffect } from "react";
import { useRef } from "react";
import { CSSProperties } from "react";
import { AnimationProps } from "../utils";
import "./style.css";
export interface TypeWritterProps extends AnimationProps {
    
    /**
     * This are the styles of the blinker.
     * Use CSS border properties to customize it
     */
    blinkerStyle?: string;
    /**
     * The duration of the typing animation. This should be in seconds.
     * E.g 10s, .5s
     */
    typeWritterDuration?: string;

    blinkerColor?: string;
    blinkerWidth?: string;
};

export default function TypeWritter(props: TypeWritterProps) {
    const typewritter = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const root = document.querySelector(":root") as HTMLElement;
        let time = 1300;

        root.style.setProperty("--typewritter-blinker-speed", props.animationSpeed || ".3s");
        root.style.setProperty("--animation-type", props.animationType || "none");
        root.style.setProperty(
            "--typewritter-blinker",
            props.blinkerStyle || `${props.blinkerWidth || "2px"} solid ${props.blinkerColor || "red"}`
        );
        root.style.setProperty("--type-duration", props.typeWritterDuration || "1.3s");

        if (props.typeWritterDuration?.includes(".")) {
            time = Number(props.typeWritterDuration.replace(".", "").replace("s", "")) * 1000;
        }
        if (props.typeWritterDuration?.includes("s")) {
            time = Number(props.typeWritterDuration.replace("s", "")) * 1000;
        }

        if (props.animationType === "none" || !props.animationType) {
            if (props.typeWritterDuration?.includes(".")) {
                time = Number(props.typeWritterDuration.replace(".", "").replace("s", "")) * 1000;
            }
            if (props.typeWritterDuration?.includes("s")) {
                time = Number(props.typeWritterDuration.replace("s", "")) * 1000;
            }

            setTimeout(() => {
                typewritter.current?.style.setProperty("width", "100%");
                typewritter.current?.style.setProperty("animation", "none");
                typewritter.current?.style.setProperty("border", "none");
            }, time);
        }
    }, []);

    return (
        <div ref={typewritter} className="typewritter" style={{ ...props.style }}>
            {props.children}
        </div>
    );
}
