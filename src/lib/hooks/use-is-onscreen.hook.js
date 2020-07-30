import React from 'react';

const BUFFER = 100;

export default function useIsOnscreen(elementRef, buffer = BUFFER) {
    const [isOnscreen, setIsOnscreen] = React.useState(true);

    React.useEffect(() => {
        if (!elementRef.current) {
            return null;
        }

        const observer = new window.IntersectionObserver((entries, observer) => {
            const [entry] = entries;

            setIsOnscreen(entry.intersectionRatio > 0);
        });

        observer.observe(elementRef.current);

        return () => {
            observer.disconnect();
        };
    }, [elementRef]);

    return isOnscreen;
}
