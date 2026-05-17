import Link from 'next/link';
import NativeLanguageButton from '@/components/NativeLanguageButton';
import AudioPlayer from '@/components/AudioPlayer';
import styles from './TejoPage.module.css';

export default function TejoPage({ agent, weapons, lang }) {
    const voiceLineUrl = agent.voiceLine?.mediaList?.[0]?.wave;
    const tejoUUID = "b444168c-4e35-8076-db47-ef9bf368f384";

    const missileTrails = Array.from({ length: 8 });
    const radarPings = Array.from({ length: 3 });
    const artilleryArcs = Array.from({ length: 4 });

    return (
        <main className={styles.tejoMain}>
            <div className={styles.radarBackground}>
                <div className={styles.radarSweep}></div>
                {missileTrails.map((_, i) => (
                    <div key={i} className={styles.missileTrail} style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `-${Math.random() * 5}s`,
                        animationDuration: `${Math.random() * 3 + 3}s`,
                    }} />
                ))}
                {/* Radar ping expanding circles */}
                {radarPings.map((_, i) => (
                    <div key={`rp${i}`} className={styles.radarPing} style={{
                        left: '50%', top: '50%',
                        animationDelay: `-${i * 1}s`,
                    }} />
                ))}
                {/* Artillery trajectory arcs */}
                {artilleryArcs.map((_, i) => (
                    <div key={`aa${i}`} className={styles.artilleryArc} style={{
                        left: `${Math.random() * 60 + 10}%`,
                        top: `${Math.random() * 60 + 20}%`,
                        width: `${Math.random() * 200 + 100}px`,
                        animationDelay: `-${Math.random() * 4}s`,
                        animationDuration: `${Math.random() * 3 + 3}s`,
                    }} />
                ))}
                {/* Targeting crosshair grid */}
                <div className={styles.crosshairGrid}></div>
                <div className={styles.tacOverlay}></div>
            </div>
            <div className={styles.content}>
                <div className={styles.tacHeader}>
                    <Link href="/" className={styles.tacLink}>◄◄ RTB — RETURN TO BASE</Link>
                    <NativeLanguageButton agentUUID={tejoUUID} currentLang={lang} />
                </div>
                <div className={styles.strikeGrid}>
                    <div className={styles.imageCol}>
                        <div className={styles.targetBox}>
                            <img src={agent.fullPortraitV2 || agent.fullPortrait || agent.displayIcon} alt={agent.displayName} className={styles.tejoPortrait} />
                        </div>
                    </div>
                    <div className={styles.loreCol}>
                        <div className={styles.tacPanel}>
                            <h1 className={styles.tejoName}>{agent.displayName.toUpperCase()}</h1>
                            <h2 className={styles.tacSubtitle}>COLOMBIA // INITIATOR // TACTICAL</h2>
                            <p className={styles.tejoLore}>{agent.description}</p>
                            <div className={styles.roleBox}>
                                <img src={agent.role?.displayIcon} alt="Role" className={styles.roleIconTac} />
                                <span>{agent.role?.displayName.toUpperCase()}</span>
                            </div>
                            {voiceLineUrl && (<div className={styles.tacPlayer}><AudioPlayer audioUrl={voiceLineUrl} label="PLAY_COMMS" /></div>)}
                        </div>
                    </div>
                </div>
                <div className={styles.salvoHeader}>
                    <h2 className={styles.salvoTitle}>BALLISTIC ABILITIES</h2>
                    <div className={styles.khakiLine}></div>
                </div>
                <div className={styles.salvoGrid}>
                    {agent.abilities.map((ability, idx) => (
                        <div key={idx} className={styles.salvoModule}>
                            <div className={styles.salvoIconBox}>
                                <img src={ability.displayIcon} alt={ability.displayName} className={styles.salvoIcon} />
                            </div>
                            <div className={styles.salvoData}>
                                <h3 className={styles.salvoAbilityName}>{ability.displayName.toUpperCase()}</h3>
                                <span className={styles.salvoType}>// {ability.slot.replace('Ability', '').toUpperCase()}</span>
                                <p className={styles.salvoText}>{ability.description}</p>
                            </div>
                            <div className={styles.strikeBorder}></div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
