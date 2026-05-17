import Link from 'next/link';
import NativeLanguageButton from '@/components/NativeLanguageButton';
import AudioPlayer from '@/components/AudioPlayer';
import styles from './KilljoyPage.module.css';

export default function KilljoyPage({ agent, weapons, lang }) {
    const voiceLineUrl = agent.voiceLine?.mediaList?.[0]?.wave;
    const killjoyUUID = "1e58de9c-4950-5125-93e9-a0aee9f98746";

    // SYNTHETIC LLM LOCALIZATION 
    // Manual mapping for Synthetic German Tech dialect
    if (lang === 'de-DE') {
        agent.description = "German genius Killjoy effortlessly secures the battlefield with her arsenal of customized inventions. If the damage from her gear doesn't stop her enemies, her bots' active debuffs will make short work of them. Keine Sorge (Don't worry), she's thought of absolutely everything.";
        if (agent.abilities) {
            agent.abilities[0].displayName = "NANOSWARM // NANOSCHWARM";
            agent.abilities[0].description = "EQUIP a Nanoswarm grenade. FIRE to throw. Upon landing, it goes covert. ACTIVATE to deploy a highly damaging swarm of explosive nanobots to tear targets apart. Einfach! (Easy!)";
            agent.abilities[1].displayName = "ALARMBOT // ALARMBOT";
            agent.abilities[1].description = "EQUIP a covert Alarmbot. FIRE to deploy a bot that angrily hunts down enemies entering its radius, leaving them extremely vulnerable to double damage. RE-EQUIP to recall it.";
            agent.abilities[2].displayName = "TURRET // GESCHÜTZ";
            agent.abilities[2].description = "EQUIP a Turret. FIRE to deploy an automated 180 degree cone perimeter-defense sentry. RE-EQUIP to instantly recall it back to your wrist.";
            agent.abilities[3].displayName = "LOCKDOWN // SPERRFEUER";
            agent.abilities[3].description = "ULTIMATE. EQUIP her magnum-opus Lockdown device. FIRE to deploy it. After a long calculated windup, it utterly detains all enemies caught in its massive radius, rendering them helpless.";
        }
    }

    return (
        <main className={styles.kjMain}>

            <div className={styles.blueprintBackgroundContainer}>
                <div className={styles.vectorCircle}></div>
                <div className={styles.vectorCross}>
                    <div className={styles.crossBar1}></div>
                    <div className={styles.crossBar2}></div>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.hazardHeader}>
                    <Link href="/" className={styles.hazardLink}>&lt; RETURN TO LAB</Link>
                    <NativeLanguageButton agentUUID={killjoyUUID} currentLang={lang} />
                </div>

                <div className={styles.inventorGrid}>
                    <div className={styles.imageCol}>
                        <div className={styles.techPortraitBox}>
                            <div className={styles.hazardStripesBackground}></div>
                            <img
                                src={agent.fullPortraitV2 || agent.fullPortrait || agent.displayIcon}
                                alt={agent.displayName}
                                className={styles.kjPortrait}
                            />
                        </div>
                    </div>

                    <div className={styles.loreCol}>
                        <div className={styles.techPanel}>
                            <h1 className={styles.kjName}>
                                {agent.displayName.toUpperCase()}
                            </h1>
                            <h2 className={styles.techSubtitle}>INVENTOR // GERMANY</h2>

                            <p className={styles.kjLore}>
                                {agent.description}
                            </p>

                            <div className={styles.roleBox}>
                                <img src={agent.role?.displayIcon} alt="Role" className={styles.roleIconPurple} />
                                <span>{agent.role?.displayName.toUpperCase()} // SYS.0.1</span>
                            </div>

                            {voiceLineUrl && (
                                <div className={styles.kjPlayer}>
                                    <AudioPlayer audioUrl={voiceLineUrl} label="ACCESS COMM-LINK" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.botHeader}>
                    <h2 className={styles.botTitle}>DEPLOYABLE INVENTIONS</h2>
                    <div className={styles.yellowLine}></div>
                </div>

                <div className={styles.botGrid}>
                    {agent.abilities.map((ability, idx) => (
                        <div key={idx} className={styles.blueprintModule}>
                            <div className={styles.scannerLine}></div>

                            <div className={styles.botIconBox}>
                                <img src={ability.displayIcon} alt={ability.displayName} className={styles.botIcon} />
                            </div>

                            <div className={styles.botData}>
                                <h3 className={styles.botAbilityName}>{ability.displayName}</h3>
                                <span className={styles.botType}>[ {ability.slot.replace('Ability', '').toUpperCase()} ]</span>
                                <p className={styles.botText}>{ability.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}
