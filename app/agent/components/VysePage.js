import Link from 'next/link';
import NativeLanguageButton from '@/components/NativeLanguageButton';
import AudioPlayer from '@/components/AudioPlayer';
import styles from './VysePage.module.css';

export default function VysePage({ agent, weapons, lang }) {
    const voiceLineUrl = agent.voiceLine?.mediaList?.[0]?.wave;
    const vyseUUID = "efba5359-4016-a1e5-7626-b1ae76895940";
    const mercuryBlobs = Array.from({ length: 15 });
    const metalVeins = Array.from({ length: 8 });
    const chromeWaves = Array.from({ length: 3 });
    const liquidMorphs = Array.from({ length: 4 });

    return (
        <main className={styles.vyseMain}>
            <div className={styles.metalBackground}>
                {mercuryBlobs.map((_, i) => (
                    <div key={i} className={styles.mercuryBlob} style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: `${Math.random() * 12 + 4}px`, height: `${Math.random() * 12 + 4}px`,
                        animationDelay: `-${Math.random() * 8}s`,
                        animationDuration: `${Math.random() * 6 + 5}s`,
                    }} />
                ))}
                {/* Metallic vein tendrils pulsing */}
                {metalVeins.map((_, i) => (
                    <div key={`mv${i}`} className={styles.metalVein} style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 30}%`,
                        width: `${Math.random() * 300 + 100}px`,
                        animationDelay: `-${Math.random() * 4}s`,
                        animationDuration: `${Math.random() * 3 + 3}s`,
                    }} />
                ))}
                {/* Chrome wave horizontal shimmer sweeps */}
                {chromeWaves.map((_, i) => (
                    <div key={`cw${i}`} className={styles.chromeWave} style={{
                        animationDelay: `-${i * 2}s`,
                        animationDuration: `${5 + i}s`,
                    }} />
                ))}
                {/* Liquid metal morphing blobs */}
                {liquidMorphs.map((_, i) => (
                    <div key={`lm${i}`} className={styles.liquidMorph} style={{
                        left: `${Math.random() * 80 + 10}%`,
                        top: `${Math.random() * 80 + 10}%`,
                        width: `${Math.random() * 60 + 30}px`,
                        height: `${Math.random() * 60 + 30}px`,
                        animationDelay: `-${Math.random() * 8}s`,
                        animationDuration: `${Math.random() * 5 + 6}s`,
                    }} />
                ))}
                <div className={styles.chromeOverlay}></div>
            </div>
            <div className={styles.content}>
                <div className={styles.metalHeader}>
                    <Link href="/" className={styles.metalLink}>◆ DISENGAGE METAL</Link>
                    <NativeLanguageButton agentUUID={vyseUUID} currentLang={lang} />
                </div>
                <div className={styles.forgeGrid}>
                    <div className={styles.imageCol}>
                        <div className={styles.chromeBox}>
                            <img src={agent.fullPortraitV2 || agent.fullPortrait || agent.displayIcon} alt={agent.displayName} className={styles.vysePortrait} />
                        </div>
                    </div>
                    <div className={styles.loreCol}>
                        <div className={styles.metalPanel}>
                            <h1 className={styles.vyseName}>{agent.displayName.toUpperCase()}</h1>
                            <h2 className={styles.forgeSubtitle}>SENTINEL // METALLIC MASTERMIND</h2>
                            <p className={styles.vyseLore}>{agent.description}</p>
                            <div className={styles.roleBox}>
                                <img src={agent.role?.displayIcon} alt="Role" className={styles.roleIconMetal} />
                                <span>{agent.role?.displayName.toUpperCase()}</span>
                            </div>
                            {voiceLineUrl && (<div className={styles.metalPlayer}><AudioPlayer audioUrl={voiceLineUrl} label="PLAY_FORGE_LOG" /></div>)}
                        </div>
                    </div>
                </div>
                <div className={styles.steelHeader}>
                    <h2 className={styles.steelTitle}>LIQUID METAL ABILITIES</h2>
                    <div className={styles.silverLine}></div>
                </div>
                <div className={styles.steelGrid}>
                    {agent.abilities.map((ability, idx) => (
                        <div key={idx} className={styles.bladeModule}>
                            <div className={styles.bladeIconBox}>
                                <img src={ability.displayIcon} alt={ability.displayName} className={styles.bladeIcon} />
                            </div>
                            <div className={styles.bladeData}>
                                <h3 className={styles.bladeAbilityName}>{ability.displayName.toUpperCase()}</h3>
                                <span className={styles.bladeType}>// {ability.slot.replace('Ability', '').toUpperCase()}</span>
                                <p className={styles.bladeText}>{ability.description}</p>
                            </div>
                            <div className={styles.chromeBorder}></div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
