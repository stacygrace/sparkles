import React from 'react';
import {random} from "../utils";


export const useRandomInterval = (callback, minDelay, maxDelay) => {
    const timeoutId = React.useRef(null);
    const savedCallback = React.useRef(callback);
    React.useEffect(() => {
        savedCallback.current = callback;
    });
    React.useEffect(() => {
        let isEnabled =
            typeof minDelay === 'number' &&
            typeof maxDelay === 'number';
        if (isEnabled) {
            const handleTick = () => {
                const nextTickAt = random(minDelay, maxDelay);
                timeoutId.current = window.setTimeout(() => {
                    savedCallback.current();
                    handleTick();
                }, nextTickAt);
            };
            handleTick();
        }
        return () => window.clearTimeout(timeoutId.current);
    }, [minDelay, maxDelay]);
    return React.useCallback(function () {
        window.clearTimeout(timeoutId.current);
    }, []);
};


