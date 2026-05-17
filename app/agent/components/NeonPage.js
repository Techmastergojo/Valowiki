import Link from 'next/link';
import NativeLanguageButton from '@/components/NativeLanguageButton';
import AudioPlayer from '@/components/AudioPlayer';
import styles from './NeonPage.module.css';

export default function NeonPage({ agent, weapons, lang }) {
    const voiceLineUrl = agent.voiceLine?.mediaList?.[0]?.wave;
    const neonUUID = "bb2a4828-46eb-8cd1-e765-15848195d751";

    // SYNTHETIC LLM LOCALIZATION (TAGALOG MANILA SPRINTER)
    if (lang === 'tl-PH') {
        agent.description = "Manila's very own Neon! Ang bilis (So fast), she darts forward at shocking speeds, discharging bursts of pure bioelectric radiance. She rushes ahead to catch enemies off guard, then strikes them down quicker than lightning. Tara na! (Let's go!)";
        if (agent.abilities) {
            agent.abilities[0].displayName = "RELAY BOLT // PAK";
            agent.abilities[0].description = "INSTANTLY throw an energy bolt that bounces once. Upon hitting each surface, the bolt electrifies the ground below with a concussive blast. Gulat sila no? (Surprised them right?)";
            agent.abilities[1].displayName = "HIGH GEAR // TAKBO";
            agent.abilities[1].description = "INSTANTLY channel Neon's power for massive sprinting speed. When charged, ALT-FIRE to trigger an electric slide. Slide charge resets every two kills. Bilis, bilis!";
            agent.abilities[2].displayName = "FAST LANE // KURYENTE";
            agent.abilities[2].description = "FIRE two energy lines forward on the ground that extend a short distance or until they hit a surface. The lines rise into walls of static electricity that block vision and damage enemies passing through.";
            agent.abilities[3].displayName = "OVERDRIVE // GIGIL";
            agent.abilities[3].description = "ULTIMATE. Unleash Neon's full bioelectric power and speed for a short duration. FIRE to channel the sheer electricity into a deadly lightning beam with high movement accuracy. Sigeee!";
        }
    }

    // Generate some raw lightning strikes
    const lightningBolts = Array.from({ length: 7 });

    return (
        <main className={styles.neonMain}>

            {/* Massive CSS Lightning Vectors */}
            <div className={styles.lightningBackground}>
                {lightningBolts.map((_, i) => (
                    <div
                        key={i}
                        className={styles.lightningBolt}
                        style={{
                            left: `${Math.random() * 80 + 10}%`,
                            top: `${Math.random() * 50}%`,
                            transform: `rotate(${Math.random() * 60 - 30}deg)`,
                            animationDelay: `-${Math.random() * 5}s`,
                            animationDuration: `${Math.random() * 4 + 2}s`
                        }}
                    />
                ))}
                <div className={styles.speedLineOverlay}></div>
            </div>

            <div className={styles.content}>
                <div className={styles.sprintHeader}>
                    <Link href="/" className={styles.sprintLink}>&lt;&lt;&lt; BACKTRACK</Link>
                    <NativeLanguageButton agentUUID={neonUUID} currentLang={lang} />
                </div>

                <div className={styles.runGrid}>
                    <div className={styles.imageCol}>
                        <div className={styles.sprintPortraitBox}>
                            <img
                                src={agent.fullPortraitV2 || agent.fullPortrait || agent.displayIcon}
                                alt={agent.displayName}
                                className={styles.neonPortrait}
                            />
                        </div>
                    </div>

                    <div className={styles.loreCol}>
                        <div className={styles.speedPanel}>
                            <h1 className={styles.neonName}>
                                {agent.displayName.toUpperCase()}
                            </h1>
                            <h2 className={styles.speedSubtitle}>SPRINTER // MANILA</h2>

                            <p className={styles.neonLore}>
                                {agent.description}
                            </p>

                            <div className={styles.roleBox}>
                                <img src={agent.role?.displayIcon} alt="Role" className={styles.roleIconBlue} />
                                <span>{agent.role?.displayName.toUpperCase()}</span>
                            </div>

                            {voiceLineUrl && (
                                <div className={styles.runPlayer}>
                                    <AudioPlayer audioUrl={voiceLineUrl} label="PLAY_TAPE" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.strikeHeader}>
                    <h2 className={styles.strikeTitle}>BIOELECTRIC ABILITIES</h2>
                    <div className={styles.cyanLine}></div>
                </div>

                <div className={styles.strikeGrid}>
                    {agent.abilities.map((ability, idx) => (
                        <div key={idx} className={styles.surgeModule}>

                            <div className={styles.surgeIconBox}>
                                <img src={ability.displayIcon} alt={ability.displayName} className={styles.surgeIcon} />
                            </div>

                            <div className={styles.surgeData}>
                                <h3 className={styles.surgeAbilityName}>{ability.displayName}</h3>
                                <span className={styles.surgeType}>/ {ability.slot.replace('Ability', '').toUpperCase()} /</span>
                                <p className={styles.surgeText}>{ability.description}</p>
                            </div>

                            <div className={styles.kineticStripes}></div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}
