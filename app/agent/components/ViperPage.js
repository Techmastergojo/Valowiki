import Link from 'next/link';
import NativeLanguageButton from '@/components/NativeLanguageButton';
import AudioPlayer from '@/components/AudioPlayer';
import styles from './ViperPage.module.css';

export default function ViperPage({ agent, weapons, lang }) {
    const voiceLineUrl = agent.voiceLine?.mediaList?.[0]?.wave;
    const viperUUID = "707eab51-4836-f488-046a-cda6bf494859";
    const drips = Array.from({ length: 15 });
    const bubbles = Array.from({ length: 12 });
    const snakeTendrils = Array.from({ length: 6 });
    const toxicClouds = Array.from({ length: 4 });
    const chemFlashes = Array.from({ length: 3 });

    return (
        <main className={styles.viperMain}>
            <div className={styles.toxicBackground}>
                {drips.map((_, i) => (
                    <div key={`d${i}`} className={styles.toxicDrip} style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `-${Math.random() * 8}s`,
                        animationDuration: `${Math.random() * 5 + 4}s`,
                    }} />
                ))}
                {bubbles.map((_, i) => (
                    <div key={`b${i}`} className={styles.chemBubble} style={{
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 10 + 4}px`, height: `${Math.random() * 10 + 4}px`,
                        animationDelay: `-${Math.random() * 6}s`,
                        animationDuration: `${Math.random() * 5 + 3}s`,
                    }} />
                ))}
                {/* Poison snake tendrils slithering */}
                {snakeTendrils.map((_, i) => (
                    <div key={`st${i}`} className={styles.snakeTendril} style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 30}%`,
                        width: `${Math.random() * 300 + 150}px`,
                        animationDelay: `-${Math.random() * 5}s`,
                        animationDuration: `${Math.random() * 3 + 4}s`,
                    }} />
                ))}
                {/* Toxic cloud haze rising from bottom */}
                {toxicClouds.map((_, i) => (
                    <div key={`tc${i}`} className={styles.toxicCloud} style={{
                        left: `${Math.random() * 80 + 10}%`,
                        width: `${Math.random() * 200 + 100}px`,
                        height: `${Math.random() * 80 + 40}px`,
                        animationDelay: `-${Math.random() * 10}s`,
                        animationDuration: `${Math.random() * 5 + 8}s`,
                    }} />
                ))}
                {/* Chemical reaction flash bursts */}
                {chemFlashes.map((_, i) => (
                    <div key={`cf${i}`} className={styles.chemFlash} style={{
                        left: `${Math.random() * 80 + 10}%`,
                        top: `${Math.random() * 80 + 10}%`,
                        width: `${Math.random() * 50 + 30}px`,
                        height: `${Math.random() * 50 + 30}px`,
                        animationDelay: `-${Math.random() * 6}s`,
                        animationDuration: `${Math.random() * 4 + 4}s`,
                    }} />
                ))}
                <div className={styles.gasOverlay}></div>
            </div>
            <div className={styles.content}>
                <div className={styles.toxHeader}>
                    <Link href="/" className={styles.toxLink}>☠ EXIT TOXIN ZONE</Link>
                    <NativeLanguageButton agentUUID={viperUUID} currentLang={lang} />
                </div>
                <div className={styles.poisonGrid}>
                    <div className={styles.imageCol}>
                        <div className={styles.chemBox}>
                            <img src={agent.fullPortraitV2 || agent.fullPortrait || agent.displayIcon} alt={agent.displayName} className={styles.viperPortrait} />
                        </div>
                    </div>
                    <div className={styles.loreCol}>
                        <div className={styles.toxPanel}>
                            <h1 className={styles.viperName}>{agent.displayName.toUpperCase()}</h1>
                            <h2 className={styles.chemSubtitle}>USA // CONTROLLER // CHEMIST</h2>
                            <p className={styles.viperLore}>{agent.description}</p>
                            <div className={styles.roleBox}>
                                <img src={agent.role?.displayIcon} alt="Role" className={styles.roleIconTox} />
                                <span>{agent.role?.displayName.toUpperCase()}</span>
                            </div>
                            {voiceLineUrl && (<div className={styles.toxPlayer}><AudioPlayer audioUrl={voiceLineUrl} label="PLAY_TOXIN_LOG" /></div>)}
                        </div>
                    </div>
                </div>
                <div className={styles.pitHeader}>
                    <h2 className={styles.pitTitle}>TOXIC ABILITIES</h2>
                    <div className={styles.toxLine}></div>
                </div>
                <div className={styles.pitGrid}>
                    {agent.abilities?.filter(a => a.slot !== 'Passive').map((ability, idx) => (
                        <div key={idx} className={styles.chemModule}>
                            <div className={styles.chemIconBox}>
                                {ability.displayIcon && <img src={ability.displayIcon} alt={ability.displayName} className={styles.chemIcon} />}
                            </div>
                            <div className={styles.chemData}>
                                <h3 className={styles.chemAbilityName}>{ability.displayName.toUpperCase()}</h3>
                                <span className={styles.chemType}>// {ability.slot.replace('Ability', '').toUpperCase()}</span>
                                <p className={styles.chemText}>{ability.description}</p>
                            </div>
                            <div className={styles.toxBorder}></div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
