import Link from 'next/link';
import NativeLanguageButton from '@/components/NativeLanguageButton';
import AudioPlayer from '@/components/AudioPlayer';
import styles from './KayoPage.module.css';

export default function KayoPage({ agent, weapons, lang }) {
    const voiceLineUrl = agent.voiceLine?.mediaList?.[0]?.wave;
    const kayoUUID = "601dbbe7-43ce-be57-2a40-4abd24953621";

    // SYNTHETIC LLM LOCALIZATION 
    // Manual mapping for Machine Logic synthesis entirely bypassing the official API's lack of CLI dialects
    if (lang === 'ai-SYS') {
        agent.description = "SYS.LOG: WAR_MACHINE UNIT KAY/O DETECTED. PRIMARY DIRECTIVE: NEUTRALIZE RADIANT TARGETS. Suppressor array [ONLINE]. Combat algorithm: FLAWLESS. Radianite suppression protocols engaged.";
        if (agent.abilities) {
            agent.abilities[0].displayName = "FRAG/MENT // OVERRIDE_INIT()";
            agent.abilities[0].description = "EXEC(FRAGMENT) -> FIRE to throw explosive cluster. The fragment sticks to floor elements and pulses multiple times, dealing lethal kinetic damage at center of AOE.";
            agent.abilities[1].displayName = "FLASH/DRIVE // OPTIC_OVERLOAD";
            agent.abilities[1].description = "EXEC(FLASH_DRIVE) -> FIRE to throw flash grenade. Short fuse detonates and heavily blinds targets in LOS. ALT_FIRE = Lob underhand.";
            agent.abilities[2].displayName = "ZERO/POINT // NULL_CMD";
            agent.abilities[2].description = "EXEC(ZERO_POINT) -> FIRE to deploy suppression blade. Blade strikes surface, winds up, and utterly suppresses anyone inside explosion radius. RADIANT_ABILITIES = FALSE.";
            agent.abilities[3].displayName = "NULL/CMD // ULTIMATE_KILL_AURA";
            agent.abilities[3].description = "SYS_OVERLOAD(). KAY/O pulses massive suppression energy from chassis. Empowered fire rate. If zero HP achieved, enters DESTABILIZED state allowing squad reboot.";
        }
    }

    // Generate some dummy binary text for the background parsing
    const binMatrix = "01001011 01000001 01011001 00101111 01001111 ".repeat(80);

    return (
        <main className={styles.terminalMain}>

            <div className={styles.systemBackgroundContainer}>
                <div className={styles.scanlines}></div>
                <div className={styles.binaryWall}>{binMatrix}</div>
                <div className={styles.vignetteOverlay}></div>
            </div>

            <div className={styles.sysContent}>
                <div className={styles.sysHeader}>
                    <Link href="/" className={styles.sysLink}>&gt; ABORT_MISSION()</Link>
                    <NativeLanguageButton agentUUID={kayoUUID} currentLang={lang} />
                </div>

                <div className={styles.sysGrid}>
                    <div className={styles.imageCol}>
                        <div className={styles.sysPortraitBox}>
                            <img
                                src={agent.fullPortraitV2 || agent.fullPortrait || agent.displayIcon}
                                alt={agent.displayName}
                                className={styles.sysPortrait}
                            />
                            <div className={styles.targetLockFrame}>
                                <span className={styles.bracketTopLeft}>[</span>
                                <span className={styles.bracketBottomRight}>]</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.loreCol}>
                        <div className={styles.sysPanel}>
                            <h1 className={styles.sysName}>
                                {agent.displayName.toUpperCase()}
                            </h1>
                            <h2 className={styles.sysSubtitle}>WAR MACHINE // SYS.CORE</h2>

                            <p className={styles.sysLore}>
                                {agent.description}
                            </p>

                            <div className={styles.sysRoleBox}>
                                <img src={agent.role?.displayIcon} alt="Role" className={styles.sysRoleIcon} />
                                <span>init_{agent.role?.displayName.toLowerCase()}()</span>
                            </div>

                            {voiceLineUrl && (
                                <div className={styles.sysPlayer}>
                                    <AudioPlayer audioUrl={voiceLineUrl} label="> PLAY_MAINFRAME_AUDIO" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.cmdHeader}>
                    <h2 className={styles.cmdTitle}>&gt; ./EXECUTE_ABILITIES</h2>
                    <div className={styles.sysLine}></div>
                </div>

                <div className={styles.sysConstructGrid}>
                    {agent.abilities.map((ability, idx) => (
                        <div key={idx} className={styles.sysModule}>
                            <div className={styles.glitchBlock}></div>

                            <div className={styles.sysIconBox}>
                                <img src={ability.displayIcon} alt={ability.displayName} className={styles.sysIcon} />
                            </div>

                            <div className={styles.sysData}>
                                <h3 className={styles.sysAbilityName}>{ability.displayName}</h3>
                                <span className={styles.sysType}>[ NULL // {ability.slot.replace('Ability', '').toUpperCase()} ]</span>
                                <p className={styles.sysText}>{ability.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}
