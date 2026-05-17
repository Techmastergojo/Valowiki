'use client';

import { useState, useRef, useEffect } from 'react';

export default function AudioPlayer({ audioUrl, label = "PLAY CLASSIFIED AUDIO" }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioUrl) {
            audioRef.current = new Audio(audioUrl);
            audioRef.current.volume = 0.5;

            audioRef.current.addEventListener('ended', () => setIsPlaying(false));

            return () => {
                audioRef.current.pause();
                audioRef.current = null;
            };
        }
    }, [audioUrl]);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0; // reset
        } else {
            audioRef.current.play().catch(e => console.error("Audio play blocked", e));
        }
        setIsPlaying(!isPlaying);
    };

    if (!audioUrl) return null;

    return (
        <button
            onClick={togglePlay}
            style={{
                background: isPlaying ? 'var(--theme-glow)' : 'transparent',
                border: '1px solid var(--theme-color)',
                color: isPlaying ? '#fff' : 'var(--theme-color)',
                padding: '0.8rem 1.5rem',
                fontFamily: 'var(--font-cia)',
                fontSize: '1rem',
                cursor: 'pointer',
                letterSpacing: '2px',
                marginTop: '1rem',
                transition: 'all 0.3s ease',
                boxShadow: isPlaying ? '0 0 15px var(--theme-color)' : 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
            }}
        >
            <span style={{ fontSize: '1.2rem' }}>{isPlaying ? '■' : '▶'}</span>
            {isPlaying ? 'PLAYING INTERCEPT...' : label}
        </button>
    );
}
