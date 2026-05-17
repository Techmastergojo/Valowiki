import Link from 'next/link';
import NativeLanguageButton from '@/components/NativeLanguageButton';
import AudioPlayer from '@/components/AudioPlayer';
import styles from './OmenPage.module.css';

export default function OmenPage({ agent, weapons, lang }) {
    const voiceLineUrl = agent.voiceLine?.mediaList?.[0]?.wave;
    const omenUUID = "8e253930-4c05-31dd-1b6c-968525494517";

    // SYNTHETIC LLM LOCALIZATION (VOID DIALECT)
    if (lang === 'en-VO') {
        agent.description = "...Where did it all begin? A phantom of a memory... I hunt in the shadows. I blind enemies with darkness, teleport across the field, and strike when they feel safest. They are so fragile... Watch them run.";
        if (agent.abilities) {
            if (agent.abilities[0]) {
                agent.abilities[0].displayName = "SHROUDED STEP // FRAGMENT";
                agent.abilities[0].description = "EQUIP a shadow walk ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location. They cannot look away from the void... it calls them.";
            }
            if (agent.abilities[1]) {
                agent.abilities[1].displayName = "PARANOIA // WHISPERS";
                agent.abilities[1].description = "INSTANTLY fire a shadow projectile forward, briefly reducing the vision range of all players it touches. The fear is palpable...";
            }
            if (agent.abilities[2]) {
                agent.abilities[2].displayName = "DARK COVER // THE ABYSS";
                agent.abilities[2].description = "EQUIP a shadow orb, entering a phased world to place and target the spheres. FIRE to throw the shadow orb to the marked location, creating a long-lasting shadow sphere that blocks vision. I am everywhere.";
            }
            if (agent.abilities[3]) {
                agent.abilities[3].displayName = "FROM THE SHADOWS // NOWHERE";
                agent.abilities[3].description = "ULTIMATE. EQUIP a tactical map. FIRE to teleport to any location. While teleporting, I appear as a Shade that can be destroyed by an enemy to cancel my teleport... They will think it's over, but it's only begun.";
            }
        }
    }

    return (
        <main className={styles.omenMain}>

            {/* Ghostly Radial Void Elements */}
            <div className={styles.voidBackground}>
                <div className={`${styles.orb} ${styles.orb1}`}></div>
                <div className={`${styles.orb} ${styles.orb2}`}></div>
                <div className={`${styles.orb} ${styles.orb3}`}></div>
                <div className={styles.voidMistOverlay}></div>
            </div>

            <div className={styles.content}>
                <div className={styles.voidHeader}>
                    <Link href="/" className={styles.voyagerLink}>...RETURN</Link>
                    <NativeLanguageButton agentUUID={omenUUID} currentLang={lang} />
                </div>

                <div className={styles.phantomGrid}>
                    <div className={styles.imageCol}>
                        <div className={styles.manifestBox}>
                            <img
                                src={agent.fullPortraitV2 || agent.fullPortrait || agent.displayIcon}
                                alt={agent.displayName}
                                className={styles.omenPortrait}
                            />
                        </div>
                    </div>

                    <div className={styles.loreCol}>
                        <div className={styles.whisperPanel}>
                            <h1 className={styles.omenName}>
                                {agent.displayName.toUpperCase()}
                            </h1>
                            <h2 className={styles.abyssSubtitle}>phantom // unknown</h2>

                            <p className={styles.omenLore}>
                                {agent.description}
                            </p>

                            <div className={styles.roleBox}>
                                <img src={agent.role?.displayIcon} alt="Role" className={styles.roleIconPurple} />
                                <span>{agent.role?.displayName.toLowerCase()} // formless</span>
                            </div>

                            {voiceLineUrl && (
                                <div className={styles.voidPlayer}>
                                    <AudioPlayer audioUrl={voiceLineUrl} label="LISTEN_WHISPERS" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.shadowHeader}>
                    <h2 className={styles.shadowTitle}>TORN REALITY</h2>
                    <div className={styles.violetLine}></div>
                </div>

                <div className={styles.phantomAbilitiesGrid}>
                    {agent.abilities.map((ability, idx) => (
                        <div key={idx} className={styles.dissolveModule}>

                            <div className={styles.voidIconBox}>
                                <img src={ability.displayIcon} alt={ability.displayName} className={styles.voidIcon} />
                            </div>

                            <div className={styles.voidData}>
                                <h3 className={styles.dissolveAbilityName}>{ability.displayName.toLowerCase()}</h3>
                                <span className={styles.dissolveType}>... {ability.slot.replace('Ability', '').toLowerCase()} ...</span>
                                <p className={styles.dissolveText}>{ability.description}</p>
                            </div>

                            <div className={styles.shadowBleed}></div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}
