import Link from 'next/link';
import NativeLanguageButton from '@/components/NativeLanguageButton';
import AudioPlayer from '@/components/AudioPlayer';
import styles from './ChamberPage.module.css';

export default function ChamberPage({ agent, weapons, lang }) {
    const voiceLineUrl = agent.voiceLine?.mediaList?.[0]?.wave;
    const chamberUUID = "22697a3d-45bf-8dd7-4fec-84a9e28c69d7";

    return (
        <main className={styles.chamberMain}>
            <div className={styles.luxuryBackground}></div>
            <div className={styles.geometricLines}></div>

            <div className={styles.content}>
                <div className={styles.headerRow}>
                    <Link href="/" className={styles.backLink}>&#x25C4; RETOUR</Link>
                    <NativeLanguageButton agentUUID={chamberUUID} currentLang={lang} />
                </div>

                <div className={styles.luxuryGrid}>
                    <div className={styles.luxuryColLeft}>
                        <div className={styles.portraitBox}>
                            <div className={styles.diamondDecalTL}></div>
                            <div className={styles.diamondDecalBR}></div>

                            <img
                                src={agent.fullPortraitV2 || agent.fullPortrait || agent.displayIcon}
                                alt={agent.displayName}
                                className={styles.portraitImg}
                            />
                        </div>
                    </div>

                    <div className={styles.luxuryColRight}>
                        <div className={styles.dossierLuxury}>
                            <h1 className={styles.brandName}>
                                {agent.displayName.toUpperCase()}
                            </h1>
                            <h2 className={styles.subBrand}>MAISON DE {agent.displayName.toUpperCase()} // PARIS</h2>

                            <p className={styles.elegantText}>
                                {agent.description}
                            </p>

                            <div className={styles.classPill}>
                                <img src={agent.role?.displayIcon} alt="Role" className={styles.roleIconGold} />
                                <span>{agent.role?.displayName.toUpperCase()}</span>
                            </div>

                            {voiceLineUrl && (
                                <div className={styles.audioWrapper}>
                                    <AudioPlayer audioUrl={voiceLineUrl} label="ÉCOUTER L'ENREGISTREMENT" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.arsenalHeaderBlock}>
                    <h2 className={styles.arsenalTitle}>PRÉCISION ET ÉLÉGANCE</h2>
                    <div className={styles.goldLine}></div>
                </div>

                <div className={styles.luxuryCardGrid}>
                    {agent.abilities.map((ability, idx) => (
                        <div key={idx} className={styles.luxuryCard}>
                            <div className={styles.cardInternalBorder}></div>
                            <div className={styles.goldDiamondCenter}></div>

                            <div className={styles.cardIconBox}>
                                <img src={ability.displayIcon} alt={ability.displayName} className={styles.cardIcon} />
                            </div>

                            <div className={styles.cardData}>
                                <h3 className={styles.luxuryAbilityName}>{ability.displayName.toUpperCase()}</h3>
                                <span className={styles.goldSlot}>[ ABSOLU {ability.slot.replace('Ability', '').toUpperCase()} ]</span>
                                <p>{ability.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}
