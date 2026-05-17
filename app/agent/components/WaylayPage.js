import Link from 'next/link';
import NativeLanguageButton from '@/components/NativeLanguageButton';
import AudioPlayer from '@/components/AudioPlayer';
import styles from './WaylayPage.module.css';

export default function WaylayPage({ agent, weapons, lang }) {
    const voiceLineUrl = agent.voiceLine?.mediaList?.[0]?.wave;
    const waylayUUID = "df1cb487-4902-002e-5c17-d28e83e78588";
    const shimmers = Array.from({ length: 20 });
    const prismBands = Array.from({ length: 3 });
    const fractureLines = Array.from({ length: 8 });
    const lightBeams = Array.from({ length: 5 });

    return (
        <main className={styles.waylayMain}>
            <div className={styles.prismBackground}>
                {shimmers.map((_, i) => (
                    <div key={i} className={styles.shimmerParticle} style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: `${Math.random() * 8 + 3}px`, height: `${Math.random() * 8 + 3}px`,
                        animationDelay: `-${Math.random() * 8}s`,
                        animationDuration: `${Math.random() * 5 + 4}s`,
                    }} />
                ))}
                {/* Prismatic color-shifting sweep bands */}
                {prismBands.map((_, i) => (
                    <div key={`pb${i}`} className={styles.prismBand} style={{
                        animationDelay: `-${i * 1.8}s`,
                        animationDuration: `${4 + i}s`,
                    }} />
                ))}
                {/* Crystal fracture lines radiating out */}
                {fractureLines.map((_, i) => (
                    <div key={`fl${i}`} className={styles.fractureLine} style={{
                        left: `${40 + Math.random() * 20}%`,
                        top: `${30 + Math.random() * 30}%`,
                        transform: `rotate(${i * 45}deg)`,
                        animationDelay: `-${Math.random() * 6}s`,
                        animationDuration: `${Math.random() * 4 + 4}s`,
                    }} />
                ))}
                {/* Light beam diagonal refractions */}
                {lightBeams.map((_, i) => (
                    <div key={`lb${i}`} className={styles.lightBeam} style={{
                        left: `${Math.random() * 80 + 10}%`,
                        top: `${Math.random() * 60 + 10}%`,
                        animationDelay: `-${Math.random() * 4}s`,
                        animationDuration: `${Math.random() * 3 + 3}s`,
                    }} />
                ))}
                <div className={styles.rainbowOverlay}></div>
            </div>
            <div className={styles.content}>
                <div className={styles.lightHeader}>
                    <Link href="/" className={styles.lightLink}>✦ REFRACT BACK</Link>
                    <NativeLanguageButton agentUUID={waylayUUID} currentLang={lang} />
                </div>
                <div className={styles.prismGrid}>
                    <div className={styles.imageCol}>
                        <div className={styles.crystalBox}>
                            <img src={agent.fullPortraitV2 || agent.fullPortrait || agent.displayIcon} alt={agent.displayName} className={styles.waylayPortrait} />
                        </div>
                    </div>
                    <div className={styles.loreCol}>
                        <div className={styles.lightPanel}>
                            <h1 className={styles.waylayName}>{agent.displayName.toUpperCase()}</h1>
                            <h2 className={styles.prismSubtitle}>THAILAND // DUELIST // PRISMATIC</h2>
                            <p className={styles.waylayLore}>{agent.description}</p>
                            <div className={styles.roleBox}>
                                <img src={agent.role?.displayIcon} alt="Role" className={styles.roleIconPrism} />
                                <span>{agent.role?.displayName.toUpperCase()}</span>
                            </div>
                            {voiceLineUrl && (<div className={styles.prismPlayer}><AudioPlayer audioUrl={voiceLineUrl} label="PLAY_LIGHT_TRACE" /></div>)}
                        </div>
                    </div>
                </div>
                <div className={styles.refractHeader}>
                    <h2 className={styles.refractTitle}>PRISMATIC ABILITIES</h2>
                    <div className={styles.spectrumLine}></div>
                </div>
                <div className={styles.refractGrid}>
                    {agent.abilities.map((ability, idx) => (
                        <div key={idx} className={styles.shardModule}>
                            <div className={styles.shardIconBox}>
                                <img src={ability.displayIcon} alt={ability.displayName} className={styles.shardIcon} />
                            </div>
                            <div className={styles.shardData}>
                                <h3 className={styles.shardAbilityName}>{ability.displayName.toUpperCase()}</h3>
                                <span className={styles.shardType}>// {ability.slot.replace('Ability', '').toUpperCase()}</span>
                                <p className={styles.shardText}>{ability.description}</p>
                            </div>
                            <div className={styles.prismBorder}></div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
