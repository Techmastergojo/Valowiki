'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const languages = [
    { code: 'en-US', label: 'ENGLISH (US)' },
    { code: 'ko-KR', label: 'KOREAN (JETT)' },
    { code: 'pt-BR', label: 'PORTUGUESE (RAZE)' },
    { code: 'zh-CN', label: 'CHINESE (SAGE/ISO)' },
    { code: 'ru-RU', label: 'RUSSIAN (SOVA)' },
    { code: 'ar-AE', label: 'ARABIC (CYPHER)' },
    { code: 'es-MX', label: 'SPANISH (REYNA)' },
    { code: 'fr-FR', label: 'FRENCH (CHAMBER)' },
    { code: 'tr-TR', label: 'TURKISH (FADE)' }
];

export default function LanguageToggle({ currentLang }) {
    const router = useRouter();
    const pathname = usePathname();

    const handleLanguageChange = (e) => {
        const lang = e.target.value;
        router.push(`${pathname}?lang=${lang}`);
    };

    return (
        <div className="language-toggle">
            <label htmlFor="lang-select" className="glitch-text" data-text="DECRYPT_LANG:"> DECRYPT_LANG: </label>
            <select
                id="lang-select"
                value={currentLang}
                onChange={handleLanguageChange}
                style={{
                    background: 'transparent',
                    color: 'var(--text-primary)',
                    border: '1px solid var(--border-color)',
                    padding: '0.5rem',
                    fontFamily: 'var(--font-cia)',
                    marginLeft: '1rem',
                    cursor: 'pointer'
                }}
            >
                {languages.map(l => (
                    <option key={l.code} value={l.code} style={{ background: 'black', color: 'var(--text-primary)' }}>
                        {l.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
