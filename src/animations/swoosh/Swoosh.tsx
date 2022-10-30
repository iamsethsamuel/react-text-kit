import { AnimationProps } from "../utils";
import "./swoosh.css";

export interface SwooshProps extends AnimationProps {
    /**
     * The swoosh blurring value
     * The default is 100 0
     */
    blurValue?: string
}

export default function Swoosh(props: SwooshProps) {
    return (
        <div style={props.style} className="swoosh">
            <svg xmlns="http://www.w3.org/2000/svg" id="swoosh-svg">
                <filter id="motion-blur-filter" filterUnits="userSpaceOnUse">
                    <feGaussianBlur stdDeviation={props.blurValue || "100 0"}></feGaussianBlur>
                </filter>
            </svg>

            <span filter-content={props.children?.toString()[0]}>{props.children}</span>
        </div>
    );
}
