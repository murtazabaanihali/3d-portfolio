import { useState, useEffect, useCallback } from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile(mobile_breakpoint = MOBILE_BREAKPOINT) {
    const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

    const onChange = () => {
        setIsMobile(window.innerWidth < mobile_breakpoint);
    };

    useEffect(() => {
        const mql = window.matchMedia(`(max-width: ${mobile_breakpoint - 1}px)`);

        mql.addEventListener("change", onChange);
        setIsMobile(window.innerWidth < mobile_breakpoint);
        return () => mql.removeEventListener("change", onChange);
    }, []);

    return !!isMobile;
};

export const useCopyToClipboard = ({ timeout = 2000 }: { timeout: number }) => {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = useCallback((text: string | number) => {
        if (typeof text === 'string' || typeof text === 'number') {
            navigator.clipboard.writeText(text.toString()).then(() => {
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, timeout);
            });
        } else {
            console.error('Cannot copy text to clipboard');
        };
    }, [timeout]);

    return { isCopied, copyToClipboard };
};

export const useIsWebGLEnabled = () => {
    try {
        const canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext &&
            (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch {
        return false;
    };
};