import Link from 'next/link';
import NativeLanguageButton from '@/components/NativeLanguageButton';
import AudioPlayer from '@/components/AudioPlayer';
import styles from './GekkoPage.module.css';

export default function GekkoPage({ agent, weapons, lang }) {
    const voiceLineUrl = agent.voiceLine?.mediaList?.[0]?.wave;
    const gekkoUUID = "e370fa57-4757-3604-3648-499e1f642d3f";

    return (
        <main className={styles.gekkoMain}>
            <div className={styles.fluidBackgroundContainer}>
                <div className={styles.blobLime}></div>
                <div className={styles.blobOrange}></div>
                <div className={styles.blobCyan}></div>
            </div>

            <div className={styles.content}>
                <div className={styles.skaterHeader}>
                    <Link href="/" className={styles.skateLink}>&#x276E;&#x276E; KICKFLIP BACK</Link>
                    <NativeLanguageButton agentUUID={gekkoUUID} currentLang={lang} />
                </div>

                <div className={styles.crewGrid}>
                    <div className={styles.imageCol}>
                        <div className={styles.bouncyPortraitBox}>
                            <img
                                src={agent.fullPortraitV2 || agent.fullPortrait || agent.displayIcon}
                                alt={agent.displayName}
                                className={styles.gekkoPortrait}
                            />
                            <div className={styles.graffitiTag}>CREW</div>
                        </div>
                    </div>

                    <div className={styles.bioCol}>
                        <div className={styles.stickerPanel}>
                            <div className={styles.stickerCorner}></div>

                            <h1 className={styles.streetName}>
                                {agent.displayName.toUpperCase()}
                            </h1>
                            <h2 className={styles.crewSubtitle}>LA LOCAL // RADIANT HANDLER</h2>

                            <p className={styles.streetLore}>
                                {agent.description}
                            </p>

                            <div className={styles.roleStickerBox}>
                                <img src={agent.role?.displayIcon} alt="Role" className={styles.roleIconPop} />
                                <span>{agent.role?.displayName.toUpperCase()} //</span>
                            </div>

                            {voiceLineUrl && (
                                <div className={styles.tapePlayer}>
                                    <AudioPlayer audioUrl={voiceLineUrl} label="PLAY CREW MIXTAPE" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.crewHeader}>
                    <h2 className={styles.radiantTitle}>THE CREW</h2>
                    <div className={styles.skateLine}></div>
                </div>

                <div className={styles.radiantGrid}>
                    {agent.abilities.map((ability, idx) => (
                        <div key={idx} className={styles.petModule}>
                            <div className={styles.petBackdrop}></div>

                            <div className={styles.petIconBox}>
                                <img src={ability.displayIcon} alt={ability.displayName} className={styles.petIcon} />
                            </div>

                            <div className={styles.petData}>
                                <h3 className={styles.petName}>{ability.displayName.toUpperCase()}</h3>
                                <span className={styles.petType}>[ MATE // {ability.slot.replace('Ability', '').toUpperCase()} ]</span>
                                <p className={styles.petText}>{ability.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}
