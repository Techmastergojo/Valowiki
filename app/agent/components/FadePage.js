import Link from 'next/link';
import NativeLanguageButton from '@/components/NativeLanguageButton';
import AudioPlayer from '@/components/AudioPlayer';
import styles from './FadePage.module.css';

export default function FadePage({ agent, weapons, lang }) {
    const voiceLineUrl = agent.voiceLine?.mediaList?.[0]?.wave;
    const fadeUUID = "dade69b4-4f5a-8528-247b-219e5a1facd6";

    return (
        <main className={styles.fadeMain}>
            <div className={styles.nightmareSmokeOne}></div>
            <div className={styles.nightmareSmokeTwo}></div>

            <div className={styles.content}>
                <div className={styles.gothicHeader}>
                    <Link href="/" className={styles.runLink}>&lt; FLEE</Link>
                    <NativeLanguageButton agentUUID={fadeUUID} currentLang={lang} />
                </div>

                <div className={styles.terrorGrid}>
                    <div className={styles.imageCol}>
                        <div className={styles.shadowPortraitBox}>
                            <img
                                src={agent.fullPortraitV2 || agent.fullPortrait || agent.displayIcon}
                                alt={agent.displayName}
                                className={styles.stalkerPortrait}
                            />
                            <div className={styles.creepingDarkness}></div>
                        </div>
                    </div>

                    <div className={styles.loreCol}>
                        <div className={styles.tombstone}>
                            <h1 className={styles.bloodyTitle}>
                                {agent.displayName.toUpperCase()}
                            </h1>
                            <h2 className={styles.fearSubtitle}>DREAM STALKER // RADIANT</h2>

                            <p className={styles.propheticLore}>
                                {agent.description}
                            </p>

                            <div className={styles.roleEmblem}>
                                <img src={agent.role?.displayIcon} alt="Role" className={styles.roleIconCrimson} />
                                <span>{agent.role?.displayName.toUpperCase()}</span>
                            </div>

                            {voiceLineUrl && (
                                <div className={styles.whisperBox}>
                                    <AudioPlayer audioUrl={voiceLineUrl} label="LISTEN TO THE WHISPERS" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.fearHeader}>
                    <h2 className={styles.fearTitle}>NIGHTMARE MANIFESTATIONS</h2>
                    <div className={styles.bloodLine}></div>
                </div>

                <div className={styles.shadowGrid}>
                    {agent.abilities.map((ability, idx) => (
                        <div key={idx} className={styles.shadowModule}>
                            <div className={styles.moduleSmokeBackdrop}></div>

                            <div className={styles.terrorIconBox}>
                                <img src={ability.displayIcon} alt={ability.displayName} className={styles.terrorIcon} />
                            </div>

                            <div className={styles.terrorData}>
                                <h3 className={styles.abilityName}>{ability.displayName}</h3>
                                <span className={styles.abilityType}>[ {ability.slot.replace('Ability', '').toUpperCase()} ]</span>
                                <p className={styles.abilityText}>{ability.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}
