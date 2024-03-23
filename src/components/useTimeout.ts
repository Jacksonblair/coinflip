import React from "react";
export default function useTimeout(callback: () => void, delay: number) {
    const timeoutRef = React.useRef(null);
    const savedCallback = React.useRef(callback);
    React.useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
    React.useEffect(() => {
        const tick = () => savedCallback.current();
        if (typeof delay === "number") {
            // @ts-expect-error
            timeoutRef.current = window.setTimeout(tick, delay);
            // @ts-expect-error
            return () => window.clearTimeout(timeoutRef.current);
        }
    }, [delay]);
    return timeoutRef;
}
