import Link from 'next/link';
import NativeLanguageButton from '@/components/NativeLanguageButton';
import AudioPlayer from '@/components/AudioPlayer';
import styles from './MiksPage.module.css';

export default function MiksPage({ agent, weapons, lang }) {
    const voiceLineUrl = agent.voiceLine?.mediaList?.[0]?.wave;
    const miksUUID = "7c8a4701-4de6-9355-b254-e09bc2a34b72";

    // SYNTHETIC LLM LOCALIZATION (CROATIAN DJ SLANG)
    if (lang === 'hr-HR') {
        agent.description = "Brate, straight from the underground rave scenes of Croatia, Miks takes the stage channeling pure sound energy. With his infectious passion and sonic powers, he rallies his squad to move as one. Idemo! Let's set the tempo on the battlefield together.";
        if (agent.abilities) {
            agent.abilities[0].displayName = "M-PULSE // BOMBA";
            agent.abilities[0].description = "EQUIP an M-pulse grenade. ALT-FIRE to toggle between Concuss and Healing frequencies. FIRE to drop the beat. Upon landing, M-pulse sends out heavy sound waves, either crushing enemies or Hyping up players. Idemo!";
            agent.abilities[1].displayName = "WAVEFORM // DIM";
            agent.abilities[1].description = "EQUIP a Map Targeter. FIRE to set festival locations. ALT-FIRE to spawn deep sonic Smokes at selected locations, blinding anyone caught inside the rave.";
            agent.abilities[2].displayName = "HARMONIZE // HARMONIJA";
            agent.abilities[2].description = "EQUIP Harmonize. Target an ally and FIRE to activate an insane Combat Stim on yourself and the ally. The beat refreshes with each kill! ALT-FIRE to grant Combat Stim just to yourself.";
            agent.abilities[3].displayName = "BASSQUAKE // ZEMLJOTRES";
            agent.abilities[3].description = "ULTIMATE. EQUIP Bassquake. FIRE to build up the drop and unleash pure Sonic Radiance forward, knocking back, Deafening, and heavily Slowing players caught in the massive shockwave. DROP IT!";
        }
    }

    // Generate 20 equalizer bars
    const eqBars = Array.from({ length: 40 });

    return (
        <main className={styles.miksMain}>

            {/* Massive CSS Audio Visualizer */}
            <div className={styles.equalizerBackground}>
                {eqBars.map((_, i) => (
                    <div
                        key={i}
                        className={styles.eqBar}
                        style={{
                            left: `${(i / 40) * 100}%`,
                            animationDelay: `-${Math.random() * 2}s`
                        }}
                    />
                ))}
                <div className={styles.fogOverlay}></div>
            </div>

            <div className={styles.content}>
                <div className={styles.raveHeader}>
                    <Link href="/" className={styles.raveLink}>&lt; EXIT BACKSTAGE</Link>
                    <NativeLanguageButton agentUUID={miksUUID} currentLang={lang} />
                </div>

                <div className={styles.djGrid}>
                    <div className={styles.imageCol}>
                        <div className={styles.djPortraitBox}>
                            <img
                                src={agent.fullPortraitV2 || agent.fullPortrait || agent.displayIcon}
                                alt={agent.displayName}
                                className={styles.miksPortrait}
                            />
                        </div>
                    </div>

                    <div className={styles.loreCol}>
                        <div className={styles.soundPanel}>
                            <h1 className={styles.miksName}>
                                {agent.displayName.toUpperCase()}
                            </h1>
                            <h2 className={styles.soundSubtitle}>SOUND PRODUCER // CROATIA</h2>

                            <p className={styles.miksLore}>
                                {agent.description}
                            </p>

                            <div className={styles.roleBox}>
                                <img src={agent.role?.displayIcon} alt="Role" className={styles.roleIconNeon} />
                                <span>{agent.role?.displayName.toUpperCase()}</span>
                            </div>

                            {voiceLineUrl && (
                                <div className={styles.djPlayer}>
                                    <AudioPlayer audioUrl={voiceLineUrl} label="PLAY TRACKMIX" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.trackHeader}>
                    <h2 className={styles.trackTitle}>SONIC FREQUENCIES</h2>
                    <div className={styles.neonLine}></div>
                </div>

                <div className={styles.trackGrid}>
                    {agent.abilities.map((ability, idx) => (
                        <div key={idx} className={styles.soundModule}>
                            <div className={styles.beatPulse}></div>

                            <div className={styles.trackIconBox}>
                                <img src={ability.displayIcon} alt={ability.displayName} className={styles.trackIcon} />
                            </div>

                            <div className={styles.trackData}>
                                <h3 className={styles.trackAbilityName}>{ability.displayName}</h3>
                                <span className={styles.trackType}>[ {ability.slot.replace('Ability', '').toUpperCase()} ]</span>
                                <p className={styles.trackText}>{ability.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}
