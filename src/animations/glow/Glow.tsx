import "./glow.css";
import { ReactNode, useEffect } from "react";
import { AnimationProps } from "../utils";

export interface GlowProps extends AnimationProps {
    color?: string;
    glowColor?: string;
    children: string | ReactNode;
}

export default function Glow(props: GlowProps) {
    useEffect(() => {
        const root = document.querySelector(":root") as HTMLElement;

        root.style.setProperty("--glow-color", props.glowColor || "#00b3ff");
        root.style.setProperty("--glow-animation-duration", props.animationSpeed || "3s");
        root.style.setProperty("--glow-animation-type", props.animationType || "infinite");
        root.style.setProperty("--glow-text-color", props.color || "white");
    }, []);

    if (!props.animate) {
        return (
            <div style={props.style} className={"glow"}>
                {props.children}
            </div>
        );
    }
    return (
        <div>
            <h1 className="animate-glow">
                {(props.children as String)?.split(RegExp("")).map((node, index) => (
                    <span
                        key={node + index}
                        /* @ts-ignore */
                        style={{ marginLeft: node.match(RegExp(/\s/)) ? "10px" : 0, "--glow": `${index}` }}>
                        {node}
                    </span>
                ))}
            </h1>
        </div>
    );
}
