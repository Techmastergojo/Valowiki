'use client';

import { useRouter, usePathname } from 'next/navigation';
import { getAgentTheme } from '@/utils/AgentThemeEngine';

export default function NativeLanguageButton({ agentUUID, currentLang }) {
    const router = useRouter();
    const pathname = usePathname();

    const theme = getAgentTheme(agentUUID);

    // Systematically lock out purely True Native English characters (like Brimstone) 
    // since translating from English to English is completely redundant.
    if (theme.language === 'en-US' && theme.localeName.includes('ENGLISH')) {
        return (
            <button className="valo-button diagonal-cut" style={{ position: 'relative', zIndex: 100, opacity: 0.5, cursor: 'not-allowed', background: '#333', color: '#888' }} disabled>
                SYS: NATIVE ENGLISH DETECTED
            </button>
        );
    }

    // If the agent is already native English, or we are already in their native language, show English toggle back.
    const isEng = currentLang === 'en-US';
    const targetLang = isEng ? theme.language : 'en-US';
    const buttonLabel = isEng ? `DECRYPT_NATIVE [ ${theme.localeName} ]` : `TRANSLATE_EN [ ENGLISH ]`;

    const toggleLanguage = () => {
        router.push(`${pathname}?lang=${targetLang}`);
    };

    return (
        <button className="valo-button diagonal-cut" onClick={toggleLanguage} style={{ position: 'relative', zIndex: 100 }}>
            {buttonLabel}
        </button>
    );
}
