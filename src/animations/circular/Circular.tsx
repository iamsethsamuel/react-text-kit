import { useEffect, useRef, useState } from "react";
import { AnimationProps } from "../utils";
import "./circle.css";

export interface CircularProps extends AnimationProps {
    /**
     * Arc of the circle e.g 180px, 2rem
     */
    arc: number;
}

export default function Circular(props: CircularProps) {
    const [children, setChildren] = useState<string[]>([]);

    useEffect(() => {
        //@ts-ignore
        setChildren(props.children?.toString().split(RegExp("")));
    }, []);

    return (
        <div style={{ height: "120%" }}>
            {children?.map((elem, index) => ( 
                <>
                <span
                    className="circle-text"
                    key={elem + index}
                    style={{
                        transform: `rotate(${+index * ( 16.5)}deg)`,
                        transformOrigin: `0 ${props.arc}px`,
                        position: "absolute",
                    }}>
                    {elem}
                </span>
                </>
                
            ))}
        </div>
    );
}
