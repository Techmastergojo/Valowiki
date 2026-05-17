import Link from 'next/link';
import NativeLanguageButton from '@/components/NativeLanguageButton';
import AudioPlayer from '@/components/AudioPlayer';
import styles from './ClovePage.module.css';

export default function ClovePage({ agent, weapons, lang }) {
    const voiceLineUrl = agent.voiceLine?.mediaList?.[0]?.wave;
    const cloveUUID = "1dbf2edd-4729-0984-3115-daa5eed44993";

    // SYNTHETIC LLM LOCALIZATION 
    // Manual mapping for Scottish Slang to bypass missing API tables
    if (lang === 'sco-GB') {
        agent.description = "Scottish troublemaker Clove maks mischief fae ayont the grave. Their immortal spirit keeps 'em intae the fight long aifter they drop, provin' death is pure bams an' nuthin' but a suggestion.";
        if (agent.abilities) {
            agent.abilities[0].displayName = "RUSE (SCOT)";
            agent.abilities[0].description = "Gobs of life-force. Set the locations for yer clouds to drop an' block vision entirely. Daen this even if yer dead, nae bother.";
            agent.abilities[1].displayName = "MEDDLE (SCOT)";
            agent.abilities[1].description = "Chucks a crackin' shard of immortal essence that severely decays a'bdy caught inside the blast zone. Give 'em hell.";
            agent.abilities[2].displayName = "PICK-ME-UP (SCOT)";
            agent.abilities[2].description = "Sucks up the life force of a bam you've damaged. Nae time to bleed—grants temporary over-health and brutal haste to keep battering on.";
            agent.abilities[3].displayName = "NOT DEAD YET (SCOT)";
            agent.abilities[3].description = "ULTIMATE. Aifter takin' a bullet, hit this instantly to rise up out yer grave! If ya dinnae drop a foe soon after, you'll die proper.";
        }
    }

    return (
        <main className={styles.cloveMain}>
            <div className={styles.grungeBase}></div>
            <div className={styles.butterflyVFX}></div>

            <div className={styles.content}>
                <div className={styles.headerRow}>
                    <Link href="/" className={styles.punkLink}>&#8592; BAIL_OUT</Link>
                    <NativeLanguageButton agentUUID={cloveUUID} currentLang={lang} />
                </div>

                <div className={styles.punkGrid}>
                    <div className={styles.colLeft}>
                        <div className={styles.portraitContainer}>
                            <div className={styles.glitchBackdrop}></div>
                            <div className={styles.scribbleWings}></div>
                            <img
                                src={agent.fullPortraitV2 || agent.fullPortrait || agent.displayIcon}
                                alt={agent.displayName}
                                className={styles.clovePortrait}
                            />

                            <div className={styles.stickerOne}>IMMORTAL</div>
                            <div className={styles.stickerTwo}>DEATH IS A SUGGESTION</div>
                        </div>
                    </div>

                    <div className={styles.colRight}>
                        <div className={styles.dossierSticker}>
                            <div className={styles.tapeTop}></div>
                            <h1 className={styles.glitchName} data-text={agent.displayName.toUpperCase()}>
                                {agent.displayName.toUpperCase()}
                            </h1>

                            <p className={styles.punkText}>
                                {agent.description}
                            </p>

                            <div className={styles.roleSticker}>
                                <img src={agent.role?.displayIcon} alt="Role" className={styles.roleIconVibrant} />
                                <span>{agent.role?.displayName.toUpperCase()} //</span>
                            </div>

                            {voiceLineUrl && (
                                <div className={styles.audioWrapper}>
                                    <AudioPlayer audioUrl={voiceLineUrl} label="PLAY COMMS MIXTAPE" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.stickerArsenalHeader}>
                    <h2 className={styles.arsenalSlap}>MISCHIEF PAYLOADS</h2>
                </div>

                <div className={styles.stickerGrid}>
                    {agent.abilities.map((ability, idx) => {
                        // Generate random rotations for sticker bomb effect
                        const rotateDeg = (Math.random() * 8 - 4).toFixed(2);
                        const offsetY = (Math.random() * 20 - 10).toFixed(0);

                        return (
                            <div
                                key={idx}
                                className={styles.abilitySticker}
                                style={{ transform: `rotate(${rotateDeg}deg) translateY(${offsetY}px)` }}
                            >
                                <div className={styles.tapeAngle}></div>
                                <div className={styles.abilityHeader}>
                                    <div className={styles.iconSlapBox}>
                                        <img src={ability.displayIcon} alt={ability.displayName} className={styles.stickerIcon} />
                                    </div>
                                    <div className={styles.stickerTitles}>
                                        <h3 className={styles.punkAbilityName}>{ability.displayName.toUpperCase()}</h3>
                                        <span className={styles.slotTag}>[ TYPE // {ability.slot.replace('Ability', '').toUpperCase()} ]</span>
                                    </div>
                                </div>

                                <p className={styles.stickerDesc}>{ability.description}</p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </main>
    );
}
