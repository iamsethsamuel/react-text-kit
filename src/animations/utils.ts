import { CSSProperties, ReactNode } from "react";

export interface AnimationProps {
    /**
     * Speed of the animation eg 100ms, 10s
     */
    
    animationSpeed?: string;
    animationType?:
        | "alternate"
        | "alternate-reverse"
        | "backwards"
        | "both"
        | "forwards"
        | "infinite"
        | "normal"
        | "reverse"
        | "none";
    children: ReactNode;
    style?: CSSProperties;
    animate?: boolean;

}
