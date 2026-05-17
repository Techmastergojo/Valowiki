import Link from 'next/link';
import NativeLanguageButton from '@/components/NativeLanguageButton';
import AudioPlayer from '@/components/AudioPlayer';
import DecryptedText from '@/components/DecryptedText';
import styles from './CypherPage.module.css';

export default function CypherPage({ agent, weapons, lang }) {
    const voiceLineUrl = agent.voiceLine?.mediaList?.[0]?.wave;
    const randomWeapons = weapons.sort(() => 0.5 - Math.random()).slice(0, 2);

    return (
        <main className={styles.cypherMain}>
            <div className={styles.hackerGrid}></div>

            <div className={styles.content}>
                <div className={styles.headerRow}>
                    <Link href="/" className={styles.backLink}>&#9664; SYSTEM_EXIT</Link>
                    <NativeLanguageButton agentUUID="117ed9e3-49f3-6512-3ccf-0cada7e3823b" currentLang={lang} />
                </div>

                <div className={styles.surveillanceContainer}>
                    <div className={styles.camFeed}>
                        <div className={styles.camOverlay}>
                            <span>REC &#9679;</span>
                            <span>UUID: {agent.uuid}</span>
                        </div>
                        <img src={agent.fullPortrait} alt={agent.displayName} className={styles.camImage} />
                    </div>

                    <div className={styles.terminalPanel}>
                        <h1 className={styles.hackerName}>
                            <DecryptedText text="> CYPHER" speed={15} />
                            <span className={styles.cursor}>_</span>
                        </h1>

                        <div className={styles.dataBlock}>
                            <span className={styles.redLabel}>[ ROLE ]</span>
                            <span className={styles.terminalText}>
                                <DecryptedText text={agent.role?.displayName.toUpperCase() || "UNKNOWN"} speed={40} delay={600} />
                            </span>
                        </div>

                        <div className={styles.dataBlock}>
                            <span className={styles.redLabel}>[ DOSSIER ]</span>
                            <p className={styles.terminalText}>
                                <DecryptedText text={agent.description} speed={20} delay={1000} />
                            </p>
                        </div>

                        {voiceLineUrl && (
                            <div className={styles.audioWrapper}>
                                <AudioPlayer audioUrl={voiceLineUrl} label="PLAY_WIRETAP.WAV" />
                            </div>
                        )}
                    </div>
                </div>

                <h2 className={styles.sectionTitle}>
                    <DecryptedText text="// SURVEILLANCE_TECH_" speed={50} delay={1500} />
                </h2>
                <div className={styles.techGrid}>
                    {agent.abilities.map((ability, idx) => (
                        <div key={idx} className={styles.wireframeNode}>
                            <div className={styles.wireframeHeader}>
                                <img src={ability.displayIcon} alt={ability.displayName} className={styles.wireIcon} />
                                <span>{ability.slot.toUpperCase()}</span>
                            </div>
                            <div className={styles.wireframeBody}>
                                <h3><DecryptedText text={ability.displayName.toUpperCase()} speed={30} delay={1800 + idx * 200} /></h3>
                                <p><DecryptedText text={ability.description} speed={10} delay={2000 + idx * 200} /></p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}
