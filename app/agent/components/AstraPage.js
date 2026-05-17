import Link from 'next/link';
import NativeLanguageButton from '@/components/NativeLanguageButton';
import AudioPlayer from '@/components/AudioPlayer';
import styles from './AstraPage.module.css';

export default function AstraPage({ agent, weapons, lang }) {
    const voiceLineUrl = agent.voiceLine?.mediaList?.[0]?.wave;
    const astraUUID = "41fb69c1-4189-7b37-f117-bcaf1e96f1bf";

    return (
        <main className={styles.astraMain}>
            {/* Deep Space Background Array */}
            <div className={styles.cosmicNebula}></div>
            <div className={styles.starfield}></div>

            <div className={styles.content}>
                <div className={styles.headerRow}>
                    <Link href="/" className={styles.backLink}>&#x2727; ASCEND_TO_ROSTER</Link>
                    <NativeLanguageButton agentUUID={astraUUID} currentLang={lang} />
                </div>

                <div className={styles.astralContainer}>
                    <div className={styles.etherealPortrait}>
                        <div className={styles.galaxyAura}></div>
                        <img src={agent.fullPortrait} alt={agent.displayName} className={styles.portraitImg} />
                    </div>

                    <div className={styles.lorePanel}>
                        <h1 className={styles.cosmicName}>
                            {agent.displayName.toUpperCase()}
                        </h1>

                        <div className={styles.goldLine}></div>

                        <div className={styles.dataBlock}>
                            <p className={styles.etherealText}>
                                {agent.description}
                            </p>
                        </div>

                        <div className={styles.originPill}>
                            <img src={agent.role?.displayIcon} alt="Role" className={styles.roleIcon} />
                            <span>{agent.role?.displayName.toUpperCase()} // GHANA</span>
                        </div>

                        {voiceLineUrl && (
                            <div className={styles.audioWrapper}>
                                <AudioPlayer audioUrl={voiceLineUrl} label="LISTEN TO THE STARS" />
                            </div>
                        )}
                    </div>
                </div>

                <h2 className={styles.sectionTitle}>
                    &#x2728; ASTRAL ABILITIES
                </h2>

                <div className={styles.cosmosGrid}>
                    {agent.abilities.map((ability, idx) => (
                        <div key={idx} className={styles.floatingStarContent} style={{ animationDelay: `${idx * 0.5}s` }}>
                            <div className={styles.starCore}>
                                <img src={ability.displayIcon} alt={ability.displayName} className={styles.starIcon} />
                            </div>
                            <div className={styles.starAura}></div>

                            <div className={styles.abilityInfo}>
                                <h3>{ability.displayName.toUpperCase()}</h3>
                                <span className={styles.goldenSlot}>[{ability.slot.toUpperCase()}]</span>
                                <p>{ability.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}
