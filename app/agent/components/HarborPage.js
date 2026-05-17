import Link from 'next/link';
import NativeLanguageButton from '@/components/NativeLanguageButton';
import AudioPlayer from '@/components/AudioPlayer';
import styles from './HarborPage.module.css';

export default function HarborPage({ agent, weapons, lang }) {
    const voiceLineUrl = agent.voiceLine?.mediaList?.[0]?.wave;
    const harborUUID = "95b78ed7-4637-86d9-7e41-71ba8c293152";

    // SYNTHETIC LLM LOCALIZATION 
    // Manual mapping for Hindi/Hinglish Slang to bypass missing API tables
    if (lang === 'hi-IN') {
        agent.description = "Bharat ka apna rogue agent! Harbor manipulates ancient technology to command the tides. Bhai, iske samne enemies easily wash away under raging torrents or get violently crushed by his massive oceanic water shields.";
        if (agent.abilities) {
            agent.abilities[0].displayName = "HIGH TIDE // लहर";
            agent.abilities[0].description = "EQUIP a wall of water. FIRE to send the water screaming forward along the ground. ALTERNATE FIRE to curve the wave perfectly to your will.";
            agent.abilities[1].displayName = "COVE // कछुआ कवच";
            agent.abilities[1].description = "EQUIP a sphere of shielding water. FIRE to throw. It drops a bullet-blocking oceanic dome that protects the squad like an iron shell.";
            agent.abilities[2].displayName = "CASCADE // झरना";
            agent.abilities[2].description = "EQUIP a wave of water. FIRE to send it rolling forward, passing through walls and crashing over enemies, severely slowing them down.";
            agent.abilities[3].displayName = "RECKONING // जल विनाश";
            agent.abilities[3].description = "ULTIMATE. FIRE to summon an ancient artifact pool on the ground. Water geysers violently erupt under enemies, causing massive concussive strikes.";
        }
    }

    return (
        <main className={styles.harborMain}>

            <div className={styles.oceanicBackgroundContainer}>
                <div className={styles.deepWaterLayer}></div>
                <div className={styles.ringContainer}>
                    <div className={styles.бронзRings}></div>
                    <div className={styles.бронзRingsInner}></div>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.waterHeader}>
                    <Link href="/" className={styles.tideLink}>&lt; RETREAT TO SHORE</Link>
                    <NativeLanguageButton agentUUID={harborUUID} currentLang={lang} />
                </div>

                <div className={styles.rogueGrid}>
                    <div className={styles.imageCol}>
                        <div className={styles.waterPortraitBox}>
                            <img
                                src={agent.fullPortraitV2 || agent.fullPortrait || agent.displayIcon}
                                alt={agent.displayName}
                                className={styles.harborPortrait}
                            />
                            <div className={styles.waterCausticsContainer}></div>
                        </div>
                    </div>

                    <div className={styles.loreCol}>
                        <div className={styles.artifactPanel}>
                            <div className={styles.bronzeBorderLeft}></div>

                            <h1 className={styles.oceanName}>
                                {agent.displayName.toUpperCase()}
                            </h1>
                            <h2 className={styles.rogueSubtitle}>ROGUE AGENT // ARTIFACT BEARER</h2>

                            <p className={styles.oceanLore}>
                                {agent.description}
                            </p>

                            <div className={styles.roleBronzeBox}>
                                <img src={agent.role?.displayIcon} alt="Role" className={styles.roleIconBronze} />
                                <span>{agent.role?.displayName.toUpperCase()} //</span>
                            </div>

                            {voiceLineUrl && (
                                <div className={styles.waterPlayer}>
                                    <AudioPlayer audioUrl={voiceLineUrl} label="ACCESS WATER COMMS" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.tideHeader}>
                    <h2 className={styles.tideTitle}>ARTIFACT MANIFESTATIONS</h2>
                    <div className={styles.bronzeLine}></div>
                </div>

                <div className={styles.torrentGrid}>
                    {agent.abilities.map((ability, idx) => (
                        <div key={idx} className={styles.waterModule}>
                            <div className={styles.cascadingTide}></div>

                            <div className={styles.waterIconBox}>
                                <img src={ability.displayIcon} alt={ability.displayName} className={styles.waterIcon} />
                            </div>

                            <div className={styles.waterData}>
                                <h3 className={styles.waterName}>{ability.displayName}</h3>
                                <span className={styles.waterType}>[ TIDE // {ability.slot.replace('Ability', '').toUpperCase()} ]</span>
                                <p className={styles.waterText}>{ability.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}
