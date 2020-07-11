/* eslint-disable array-callback-return */
import React, { useEffect, useRef } from 'react';

import { useIncrementingNumber } from "./useIncrementingNumber";
import {generateId, range} from "../utils";


// During compile-time build, we have to assume no browser support.
// On mount, we'll check if `CSS.registerProperty` exists
const hasBrowserSupport =
    typeof window !== 'undefined'
        ? typeof window.CSS.registerProperty === 'function'
        : false;

const getColorPropName = (id, index) => `--magic-rainbow-color-${id}-${index}`;

export const useRainbow = ({
                        rainbowColors,
                        windowSize = 3,
                        intervalDelay = 2000,
                    }) => {
    const paletteSize = rainbowColors.length;
    const prefersReducedMotion =
        typeof window === 'undefined'
            ? true
            : window.matchMedia('(prefers-reduced-motion: no-preference)');

    const isEnabled = hasBrowserSupport && prefersReducedMotion.matches;

    const { current: uniqueId } = useRef(generateId());

    // Register all custom properties
    useEffect(() => {
        if (!isEnabled) {
            return;
        }

        range(0, windowSize).map(index => {
            const name = getColorPropName(uniqueId, index);
            const initialValue = rainbowColors[index];

            try {
                CSS.registerProperty({
                    name,
                    initialValue,
                    syntax: '<color>',
                    inherits: false,
                });
            } catch (err) {}
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uniqueId, isEnabled]);

    const intervalCount = useIncrementingNumber(intervalDelay);

    return range(0, windowSize).reduce((acc, index) => {
        const effectiveIntervalCount = isEnabled ? intervalCount : 0;

        const name = getColorPropName(uniqueId, index);
        const value = rainbowColors[(effectiveIntervalCount + index) % paletteSize];

        return {
            ...acc,
            [name]: value,
        };
    }, {});
};

