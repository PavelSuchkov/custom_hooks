import React, {useRef} from 'react';
import {useHover} from "../hooks/useHover";

export const Hover = () => {
    const ref = useRef();
    const isHovering = useHover(ref);

    console.log(isHovering)
    // console.log(ref)

    return (
        <div ref={ref} style={{width: 300, height: 300, background: isHovering ? 'red' : 'green'}}>
        </div>
    );
};