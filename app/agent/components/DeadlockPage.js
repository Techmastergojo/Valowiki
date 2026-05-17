import Link from 'next/link';
import NativeLanguageButton from '@/components/NativeLanguageButton';
import AudioPlayer from '@/components/AudioPlayer';
import styles from './DeadlockPage.module.css';

export default function DeadlockPage({ agent, weapons, lang }) {
    const voiceLineUrl = agent.voiceLine?.mediaList?.[0]?.wave;
    const deadlockUUID = "cc8b64c8-4b25-4ff9-6e7f-37b4da43d235";

    // SYNTHETIC LLM LOCALIZATION
    // Norwegian translation bypass
    if (lang === 'no-NO') {
        agent.description = "Norsk detektiv og overlevelsesekspert Iselin. Bruker banebrytende nanotråd for å låse ned fiender i iskalde områder. Ingen slipper unna garnet hennes.";
        if (agent.abilities) {
            agent.abilities[0].displayName = "GRAVITASJONSNETT";
            agent.abilities[0].description = "KAST for å detonere et gravitasjonsnett som tvinger all fiendtlig bevegelse til asen å krype.";
            agent.abilities[1].displayName = "SONISK SENSOR";
            agent.abilities[1].description = "MONTERER en akustisk sensor som reagerer med et øyeblikkelig angrep forutsatt all lyd generert i området.";
            agent.abilities[2].displayName = "BARRIERENETT";
            agent.abilities[2].description = "KAST for å slippe løs et knutepunkt av krystallinske nanovegger for absolutt romlig blokkering.";
            agent.abilities[3].displayName = "UTSLETNING";
            agent.abilities[3].description = "ULTIMAT. Skyter ut en ustoppelig nanowire-puls. Den første fienden i veien låses fast og dras inn i hennes absolutte utryddelse hvis de ikke reddes.";
        }
    }

    return (
        <main className={styles.deadlockMain}>
            <div className={styles.nanoNetBackground}>
                <div className={styles.verticalWire1}></div>
                <div className={styles.verticalWire2}></div>
                <div className={styles.horizontalWire1}></div>
            </div>

            <div className={styles.content}>
                <div className={styles.clinicalHeader}>
                    <Link href="/" className={styles.abortBtn}>&#x25A0; RELEASE_LOCK</Link>
                    <NativeLanguageButton agentUUID={deadlockUUID} currentLang={lang} />
                </div>

                <div className={styles.containmentGrid}>
                    <div className={styles.gridColLeft}>
                        <div className={styles.containmentCell}>
                            <div className={styles.cornerTLL}></div>
                            <div className={styles.cornerTRR}></div>
                            <div className={styles.cornerBLL}></div>
                            <div className={styles.cornerBRR}></div>

                            <img
                                src={agent.fullPortraitV2 || agent.fullPortrait || agent.displayIcon}
                                alt={agent.displayName}
                                className={styles.containedSubject}
                            />

                            <div className={styles.medicalOverlay}>
                                <span>HUD_OVERLAY // ACTIVE</span>
                                <div className={styles.scanningBar}></div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.gridColRight}>
                        <div className={styles.dataTerminal}>
                            <h1 className={styles.subjectName}>
                                {agent.displayName.toUpperCase()}
                            </h1>
                            <h2 className={styles.subjectDesignation}>CONTAINMENT CLASSIFICATION: MAXIMUM</h2>

                            <p className={styles.clinicalData}>
                                {agent.description}
                            </p>

                            <div className={styles.rolePlate}>
                                <img src={agent.role?.displayIcon} alt="Role" className={styles.roleIconIce} />
                                <span>{agent.role?.displayName.toUpperCase()} //</span>
                            </div>

                            {voiceLineUrl && (
                                <div className={styles.commsLock}>
                                    <AudioPlayer audioUrl={voiceLineUrl} label="ACCESS VOICE RECORDS" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.payloadHeader}>
                    <h2 className={styles.payloadTitle}>NANO-WIRE ARSENAL</h2>
                    <div className={styles.iceLine}></div>
                </div>

                <div className={styles.arsenalGrid}>
                    {agent.abilities.map((ability, idx) => (
                        <div key={idx} className={styles.arsenalModule}>
                            <div className={styles.arsenalBorderGlow}></div>
                            <div className={styles.nanoMeshPattern}></div>

                            <div className={styles.moduleIconBox}>
                                <img src={ability.displayIcon} alt={ability.displayName} className={styles.moduleIcon} />
                            </div>

                            <div className={styles.moduleData}>
                                <h3 className={styles.moduleName}>{ability.displayName.toUpperCase()}</h3>
                                <span className={styles.moduleSlot}>[ PARAMETER {ability.slot.replace('Ability', '').toUpperCase()} ]</span>
                                <p className={styles.moduleDesc}>{ability.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}
