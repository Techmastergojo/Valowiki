import Link from 'next/link';
import NativeLanguageButton from '@/components/NativeLanguageButton';
import AudioPlayer from '@/components/AudioPlayer';
import styles from './JettPage.module.css';

export default function JettPage({ agent, weapons, lang }) {
    const voiceLineUrl = agent.voiceLine?.mediaList?.[0]?.wave;
    const jettUUID = "add6443a-41bd-e414-f6ad-e58d267f4e95";

    // SYNTHETIC LLM LOCALIZATION 
    // Manual mapping for Korean translation fusion to bypass API standard formats
    if (lang === 'ko-KR') {
        agent.description = "South Korean radiant Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies into pieces before they even know what hit them. 가자! (Let's go!)";
        if (agent.abilities) {
            agent.abilities[0].displayName = "CLOUDBURST // 연막 폭발";
            agent.abilities[0].description = "INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.";
            agent.abilities[1].displayName = "UPDRAFT // 상승 기류";
            agent.abilities[1].description = "INSTANTLY propel Jett high into the air. Combines lethally with her passive glide module.";
            agent.abilities[2].displayName = "TAILWIND // 순풍";
            agent.abilities[2].description = "ACTIVATE to prepare a gust of wind. RE-USE to instantly dash in the direction she is moving. If Jett is standing still, she will dash violently forward.";
            agent.abilities[3].displayName = "BLADE STORM // 칼날 폭풍";
            agent.abilities[3].description = "ULTIMATE. EQUIP a set of highly accurate throwing knives that recharge on killing an opponent. FIRE to throw a single deadly knife at your target. ALTERNATE FIRE to throw all remaining daggers simultaneously.";
        }
    }

    return (
        <main className={styles.jettMain}>

            <div className={styles.windGridContainer}>
                <div className={styles.windStreakOne}></div>
                <div className={styles.windStreakTwo}></div>
                <div className={styles.windStreakThree}></div>
            </div>

            <div className={styles.content}>
                <div className={styles.agileHeader}>
                    <Link href="/" className={styles.windLink}>&lt; DASH BACK</Link>
                    <NativeLanguageButton agentUUID={jettUUID} currentLang={lang} />
                </div>

                <div className={styles.driftGrid}>
                    <div className={styles.imageCol}>
                        <div className={styles.skyPortraitBox}>
                            <img
                                src={agent.fullPortraitV2 || agent.fullPortrait || agent.displayIcon}
                                alt={agent.displayName}
                                className={styles.jettPortrait}
                            />
                            <div className={styles.cloudAuraFrame}></div>
                        </div>
                    </div>

                    <div className={styles.loreCol}>
                        <div className={styles.driftPanel}>
                            <h1 className={styles.windName}>
                                {agent.displayName.toUpperCase()}
                            </h1>
                            <h2 className={styles.agileSubtitle}>SOUTH KOREAN RADIANT // 바람</h2>

                            <p className={styles.windLore}>
                                {agent.description}
                            </p>

                            <div className={styles.roleBox}>
                                <img src={agent.role?.displayIcon} alt="Role" className={styles.roleIconSky} />
                                <span>{agent.role?.displayName.toUpperCase()}</span>
                            </div>

                            {voiceLineUrl && (
                                <div className={styles.windPlayer}>
                                    <AudioPlayer audioUrl={voiceLineUrl} label="ACCESS WIND COMMS" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.kunaiHeader}>
                    <h2 className={styles.kunaiTitle}>WIND WALKER ABILITIES</h2>
                    <div className={styles.skyLine}></div>
                </div>

                <div className={styles.agileConstructGrid}>
                    {agent.abilities.map((ability, idx) => (
                        <div key={idx} className={styles.windModule}>
                            <div className={styles.snapDriftHighlight}></div>

                            <div className={styles.windIconBox}>
                                <img src={ability.displayIcon} alt={ability.displayName} className={styles.windIcon} />
                            </div>

                            <div className={styles.windData}>
                                <h3 className={styles.windAbilityName}>{ability.displayName}</h3>
                                <span className={styles.windType}>[ AGILE // {ability.slot.replace('Ability', '').toUpperCase()} ]</span>
                                <p className={styles.windText}>{ability.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}
