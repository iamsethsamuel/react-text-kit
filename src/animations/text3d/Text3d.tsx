import { AnimationProps } from "../utils";
import "./text3d.css";
import { useEffect } from "react";

export interface Text3dProps extends AnimationProps {
    backgroundColor?: string;
    color?: string;
}

export default function Text3d(props: Text3dProps) {
    useEffect(() => {
        const root = document.querySelector(":root") as HTMLElement;
        root.style.setProperty("--3d-text-background", props.backgroundColor || "grey");
        root.style.setProperty("--3d-text-color", props.color || "#f5f5f5");
        root.style.setProperty("--3d-text-spread", String(props.style?.fontSize) || "10px");
    }, []);

    return (
        <div className="text3d" style={props.style}>
            <span>{props.children}</span>
        </div>
    );
}
