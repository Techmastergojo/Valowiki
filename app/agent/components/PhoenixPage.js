import Link from 'next/link';
import NativeLanguageButton from '@/components/NativeLanguageButton';
import AudioPlayer from '@/components/AudioPlayer';
import styles from './PhoenixPage.module.css';

export default function PhoenixPage({ agent, weapons, lang }) {
    const voiceLineUrl = agent.voiceLine?.mediaList?.[0]?.wave;
    const phoenixUUID = "eb93336a-449b-9c1b-0a54-a891f7921d69";

    // If API returns empty abilities for Phoenix, we hardcode the fallback
    const hardcodedAbilities = [
        {
            displayName: lang === 'en-LDN' ? "HOT HANDS // MOLLY" : "HOT HANDS",
            slot: "Grenade",
            description: lang === 'en-LDN' ? "EQUIP a fireball. FIRE to chuck it. It drops after a set time or hits the ground, creating a lingering fire zone. Damages those mandem, but heals me right up. Safe." : "EQUIP a fireball. FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies.",
            displayIcon: "https://static.wikia.nocookie.net/valorant/images/b/b2/Hot_Hands.png"
        },
        {
            displayName: lang === 'en-LDN' ? "BLAZE // WALL OF FIRE" : "BLAZE",
            slot: "Ability1",
            description: lang === 'en-LDN' ? "EQUIP a flame wall. FIRE to launch a line of pure fire that blocks vision and damages uninvited guests. HOLD FIRE to bend it to your will. Proper cheeky." : "EQUIP a flame wall. FIRE to create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it.",
            displayIcon: "https://static.wikia.nocookie.net/valorant/images/7/7b/Blaze.png"
        },
        {
            displayName: lang === 'en-LDN' ? "CURVEBALL // FLASH" : "CURVEBALL",
            slot: "Ability2",
            description: lang === 'en-LDN' ? "EQUIP a flare orb that takes a curving path and detonates, blinding anyone looking. FIRE handles the left curve, ALT-FIRE curves it right. Watch your eyes, fam." : "EQUIP a flare orb that takes a curving path and detonates shortly after throwing. FIRE to curve the flare orb to the left, detonating and blinding any player who sees the orb. ALT FIRE to curve the flare orb to the right.",
            displayIcon: "https://static.wikia.nocookie.net/valorant/images/9/91/Curveball.png"
        },
        {
            displayName: lang === 'en-LDN' ? "RUN IT BACK // RESURRECT" : "RUN IT BACK",
            slot: "Ultimate",
            description: lang === 'en-LDN' ? "ULTIMATE. INSTANTLY place a marker at your spot. For a short time, getting downed or running out of time brings you right back to this spot with full health. Joke's over, you're dead!" : "INSTANTLY place a marker at Phoenix's location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health.",
            displayIcon: "https://static.wikia.nocookie.net/valorant/images/8/86/Run_It_Back.png"
        }
    ];

    const abilitiesToRender = (agent.abilities && agent.abilities.length > 0) ? agent.abilities : hardcodedAbilities;

    // SYNTHETIC LLM LOCALIZATION (LONDON STREET DIALECT)
    if (lang === 'en-LDN') {
        agent.description = "Mans hot. Phoenix brings the literal fire to the fight, fam. Whether he's got backup or not, he's rushing in on his own terms. Don't blink, yeah? Cause he's about to light you up.";
        if (abilitiesToRender) {
            if (abilitiesToRender[0]) {
                abilitiesToRender[0].displayName = "HOT HANDS // MOLLY";
                abilitiesToRender[0].description = "EQUIP a fireball. FIRE to chuck it. It drops after a set time or hits the ground, creating a lingering fire zone. Damages those mandem, but heals me right up. Safe.";
            }
            if (abilitiesToRender[1]) {
                abilitiesToRender[1].displayName = "BLAZE // WALL OF FIRE";
                abilitiesToRender[1].description = "EQUIP a flame wall. FIRE to launch a line of pure fire that blocks vision and damages uninvited guests. HOLD FIRE to bend it to your will. Proper cheeky.";
            }
            if (abilitiesToRender[2]) {
                abilitiesToRender[2].displayName = "CURVEBALL // FLASH";
                abilitiesToRender[2].description = "EQUIP a flare orb that takes a curving path and detonates, blinding anyone looking. FIRE handles the left curve, ALT-FIRE curves it right. Watch your eyes, fam.";
            }
            if (abilitiesToRender[3]) {
                abilitiesToRender[3].displayName = "RUN IT BACK // RESURRECT";
                abilitiesToRender[3].description = "ULTIMATE. INSTANTLY place a marker at your spot. For a short time, getting downed or running out of time brings you right back to this spot with full health. Joke's over, you're dead!";
            }
        }
    }

    // Generate embers
    const embers = Array.from({ length: 40 });

    return (
        <main className={styles.phxMain}>

            {/* Floating Ember Particles Background */}
            <div className={styles.fireBackground}>
                {embers.map((_, i) => (
                    <div
                        key={i}
                        className={styles.ember}
                        style={{
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 6 + 2}px`,
                            height: `${Math.random() * 6 + 2}px`,
                            animationDelay: `-${Math.random() * 10}s`,
                            animationDuration: `${Math.random() * 5 + 3}s`,
                            transform: `translateX(${Math.random() * 40 - 20}px)`
                        }}
                    />
                ))}
                <div className={styles.smokeOverlay}></div>
            </div>

            <div className={styles.content}>
                <div className={styles.phxHeader}>
                    <Link href="/" className={styles.fireLink}>--- RUN IT BACK</Link>
                    <NativeLanguageButton agentUUID={phoenixUUID} currentLang={lang} />
                </div>

                <div className={styles.swaggerGrid}>
                    <div className={styles.imageCol}>
                        <div className={styles.blazeBox}>
                            <img
                                src={agent.fullPortraitV2 || agent.fullPortrait || agent.displayIcon}
                                alt={agent.displayName}
                                className={styles.phxPortrait}
                            />
                        </div>
                    </div>

                    <div className={styles.loreCol}>
                        <div className={styles.cockyPanel}>
                            <h1 className={styles.phxName}>
                                {agent.displayName.toUpperCase()}
                            </h1>
                            <h2 className={styles.fireSubtitle}>LONDON // DUELIST</h2>

                            <p className={styles.phxLore}>
                                {agent.description}
                            </p>

                            <div className={styles.roleBox}>
                                <img src={agent.role?.displayIcon} alt="Role" className={styles.roleIconFlame} />
                                <span>{agent.role?.displayName.toUpperCase()}</span>
                            </div>

                            {voiceLineUrl && (
                                <div className={styles.firePlayer}>
                                    <AudioPlayer audioUrl={voiceLineUrl} label="PLAY_MIX TAPE" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.abilitiesHeader}>
                    <h2 className={styles.flameTitle}>BLAZING ABILITIES</h2>
                    <div className={styles.orangeLine}></div>
                </div>

                <div className={styles.blazingGrid}>
                    {abilitiesToRender.map((ability, idx) => (
                        <div key={idx} className={styles.flameModule}>

                            <div className={styles.emberIconBox}>
                                <img src={ability.displayIcon} alt={ability.displayName} className={styles.flameIcon} />
                            </div>

                            <div className={styles.flameData}>
                                <h3 className={styles.flameAbilityName}>{ability.displayName.toUpperCase()}</h3>
                                <span className={styles.flameType}>// {ability.slot.replace('Ability', '').toUpperCase()}</span>
                                <p className={styles.flameText}>{ability.description}</p>
                            </div>

                            <div className={styles.igniteBorder}></div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}
