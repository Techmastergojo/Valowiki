import Link from 'next/link';
import NativeLanguageButton from '@/components/NativeLanguageButton';
import AudioPlayer from '@/components/AudioPlayer';
import styles from './BreachPage.module.css';

export default function BreachPage({ agent, weapons, lang }) {
    const voiceLineUrl = agent.voiceLine?.mediaList?.[0]?.wave;
    const breachUUID = "5f8d3a7f-467b-97f3-062c-13acf203c006";

    return (
        <main className={styles.breachMain}>
            <div className={styles.faultLineBg}></div>
            <div className={styles.machineryOverlay}></div>

            <div className={styles.content}>
                <div className={styles.headerRow}>
                    <Link href="/" className={styles.backLink}>&#x25C4; ABORT_OP</Link>
                    <NativeLanguageButton agentUUID={breachUUID} currentLang={lang} />
                </div>

                <div className={styles.kineticGrid}>
                    <div className={styles.kineticColLeft}>
                        <div className={styles.heavyPortraitBox}>
                            <div className={styles.hazardStripesLeft}></div>
                            <img
                                src={agent.fullPortraitV2 || agent.fullPortrait || agent.displayIcon}
                                alt={agent.displayName}
                                className={styles.heavyPortraitImg}
                            />
                        </div>
                    </div>

                    <div className={styles.kineticColRight}>
                        <div className={styles.screws}>
                            <div className={styles.screw}>+</div>
                            <div className={styles.screw}>+</div>
                            <div className={styles.screw}>+</div>
                            <div className={styles.screw}>+</div>
                        </div>

                        <h1 className={styles.impactName}>
                            {agent.displayName.toUpperCase()}
                        </h1>

                        <div className={styles.cautionTape}>
                            {Array(10).fill("CAUTION").map((t, i) => <span key={i}>{t}</span>)}
                        </div>

                        <div className={styles.dataBlock}>
                            <p className={styles.steelText}>
                                {agent.description}
                            </p>
                        </div>

                        <div className={styles.heavyPill}>
                            <img src={agent.role?.displayIcon} alt="Role" className={styles.roleIcon} />
                            <span>{agent.role?.displayName.toUpperCase()} - SEISMIC UNIT</span>
                        </div>

                        {voiceLineUrl && (
                            <div className={styles.audioWrapper}>
                                <AudioPlayer audioUrl={voiceLineUrl} label="ACTIVATE SEISMIC COMMS" />
                            </div>
                        )}
                    </div>
                </div>

                <div className={styles.abilitiesHeaderBlock}>
                    <h2 className={styles.hazardTitle}>
                        KINETIC ABILITIES
                    </h2>
                </div>

                <div className={styles.seismicGrid}>
                    {agent.abilities.map((ability, idx) => (
                        <div key={idx} className={styles.steelBlock}>
                            <div className={styles.blockRivets}>
                                <span>&#x25CF;</span><span>&#x25CF;</span>
                            </div>

                            <div className={styles.heavyIconFrame}>
                                <img src={ability.displayIcon} alt={ability.displayName} className={styles.heavyIcon} />
                            </div>

                            <div className={styles.abilityInfo}>
                                <h3 className={styles.shakingText}>{ability.displayName.toUpperCase()}</h3>
                                <span className={styles.orangeSlot}>[ TYPE_ {ability.slot.toUpperCase()} ]</span>
                                <p>{ability.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}
