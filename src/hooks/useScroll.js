// source with explainings https://www.youtube.com/watch?v=ks8oftGP2oc&ab_channel=UlbiTV

import {useEffect, useRef} from "react";

export default function useScroll(parentRef, childRef, callback) {
    const observer = useRef();

    useEffect(() => {
        const options = {
            root: parentRef.current,
            rootMargin: '0px',
            threshold: 0
        }
        console.log('observer.current ===>', observer.current)
        observer.current = new IntersectionObserver(([target]) => {  // cоздаём обсервер
            if (target.isIntersecting) {
                console.log('intersected ===>', target)
                callback()
            }
        }, options)

        observer.current.observe(childRef.current)   // следим за персечением чайлда с парентом

        return function () {
            observer.current.unobserve(childRef.current)
        };
    }, [callback])
};