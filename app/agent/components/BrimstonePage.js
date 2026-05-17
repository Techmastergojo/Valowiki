import Link from 'next/link';
import NativeLanguageButton from '@/components/NativeLanguageButton';
import AudioPlayer from '@/components/AudioPlayer';
import styles from './BrimstonePage.module.css';

export default function BrimstonePage({ agent, weapons, lang }) {
    const voiceLineUrl = agent.voiceLine?.mediaList?.[0]?.wave;
    const brimstoneUUID = "9f0d8ba9-4140-b941-57d3-a7ad57c6b417";

    return (
        <main className={styles.brimstoneMain}>
            <div className={styles.radarBackground}>
                <div className={styles.radarSweep}></div>
            </div>
            <div className={styles.gridOverlay}></div>

            <div className={styles.content}>
                <div className={styles.hudHeaderRow}>
                    <Link href="/" className={styles.abortCommand}>&#9664; TERMINATE_LINK</Link>
                    <NativeLanguageButton agentUUID={brimstoneUUID} currentLang={lang} />
                </div>

                <div className={styles.tacticalGrid}>
                    <div className={styles.tacticalColLeft}>
                        <div className={styles.commanderFrame}>
                            <div className={styles.crosshairTL}>+</div>
                            <div className={styles.crosshairTR}>+</div>
                            <div className={styles.crosshairBL}>+</div>
                            <div className={styles.crosshairBR}>+</div>

                            <img
                                src={agent.fullPortraitV2 || agent.fullPortrait || agent.displayIcon}
                                alt={agent.displayName}
                                className={styles.commanderPortrait}
                            />

                            <div className={styles.scanLine}></div>
                        </div>
                    </div>

                    <div className={styles.tacticalColRight}>
                        <div className={styles.dossierTerminal}>
                            <div className={styles.terminalHeader}>
                                <span>SECURE COMMS LINK ESTABLISHED</span>
                                <span className={styles.blinkingNode}>&#x25CF; LIVE</span>
                            </div>

                            <h1 className={styles.callsign}>
                                {agent.displayName.toUpperCase()}
                            </h1>

                            <p className={styles.intelText}>
                                {agent.description}
                            </p>

                            <div className={styles.tacPill}>
                                <img src={agent.role?.displayIcon} alt="Role" className={styles.roleIconTac} />
                                <span>{agent.role?.displayName.toUpperCase()} // ORBITAL COMMAND</span>
                            </div>

                            {voiceLineUrl && (
                                <div className={styles.commsWrapper}>
                                    <AudioPlayer audioUrl={voiceLineUrl} label="PLAY BRIMSTONE COMMS" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.arsenalHeader}>
                    <h2 className={styles.arsenalTitle}>TACTICAL PAYLOADS</h2>
                    <div className={styles.arsenalLine}></div>
                </div>

                <div className={styles.payloadGrid}>
                    {agent.abilities.map((ability, idx) => (
                        <div key={idx} className={styles.payloadBlock}>
                            <div className={styles.targetCrosshair}></div>

                            <div className={styles.payloadIconBox}>
                                <img src={ability.displayIcon} alt={ability.displayName} className={styles.payloadIcon} />
                            </div>

                            <div className={styles.payloadData}>
                                <h3 className={styles.payloadName}>{ability.displayName.toUpperCase()}</h3>
                                <span className={styles.payloadSlot}>[ SLOT: {ability.slot.toUpperCase()} ]</span>
                                <p>{ability.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}
