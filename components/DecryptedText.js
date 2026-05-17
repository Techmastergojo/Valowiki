'use client';

import { useState, useEffect } from 'react';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*!+=';

export default function DecryptedText({
    text,
    speed = 30,
    delay = 0,
    className = '',
    as: Component = 'span'
}) {
    const [displayText, setDisplayText] = useState('');
    const [started, setStarted] = useState(false);

    useEffect(() => {
        let timeout;
        if (delay > 0) {
            timeout = setTimeout(() => setStarted(true), delay);
        } else {
            setStarted(true);
        }
        return () => clearTimeout(timeout);
    }, [delay]);

    useEffect(() => {
        if (!started || !text) return;

        let iteration = 0;
        const maxIterations = text.length;
        let interval = null;

        setDisplayText(
            text.split('').map(char => (char === ' ' ? ' ' : CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)])).join('')
        );

        interval = setInterval(() => {
            setDisplayText(current =>
                text.split('').map((char, index) => {
                    if (char === ' ') return ' ';
                    if (index < iteration) {
                        return text[index];
                    }
                    return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
                }).join('')
            );

            if (iteration >= maxIterations) {
                clearInterval(interval);
            }

            iteration += 1 / 3; // Controls how fast it settles
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed, started]);

    return <Component className={className}>{displayText || text.replace(/./g, '*')}</Component>;
}
