import {useCallback, useRef} from "react";

export const useDebounce = (callback, delay) => {
    const timer = useRef();
    console.log("timmer ===>", timer)
    return useCallback((...args) => {
        if (timer.current) {
            clearTimeout(timer.current)
        }
        timer.current = setTimeout(() => {
            callback(...args)
        }, delay)
    }, [callback, delay]);
};