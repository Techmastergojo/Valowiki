import Link from 'next/link';
import NativeLanguageButton from '@/components/NativeLanguageButton';
import AudioPlayer from '@/components/AudioPlayer';
import styles from './IsoPage.module.css';

export default function IsoPage({ agent, weapons, lang }) {
    const voiceLineUrl = agent.voiceLine?.mediaList?.[0]?.wave;
    const isoUUID = "0e38b510-41a8-5780-5e8f-568b2a4f2d6c";

    // SYNTHETIC LLM LOCALIZATION 
    // Manual mapping for Mandarin/English fusion to bypass missing API tables
    if (lang === 'zh-CN') {
        agent.description = "Chinese fixer Iso goes into a state of absolute flow to dismantle the opposition. Reconfiguring ambient radianite energy into impenetrable shields, he advances with lethal precision towards his next duel. 无处可逃 (No escape).";
        if (agent.abilities) {
            agent.abilities[0].displayName = "DOUBLE TAP // 致命一击";
            agent.abilities[0].description = "START a focus timer. Once completed, enter a flow state during which downed enemies you kill or damage generate an energy orb. Shooting this orb grants you a shield which absorbs one instance of absolute damage from any source.";
            agent.abilities[1].displayName = "UNDERCUT // 削弱";
            agent.abilities[1].description = "EQUIP a molecular bolt. Fire to throw it forward, applying a brief Fragile/Vulnerable debuff to all players it touches. The bolt can pass through solid objects, including walls.";
            agent.abilities[2].displayName = "CONTINGENCY // 防御矩阵";
            agent.abilities[2].description = "EQUIP to assemble prismatic energy. FIRE to push an indestructible wall of amethyst energy forward that blocks all incoming ballistics.";
            agent.abilities[3].displayName = "KILL CONTRACT // 死亡契约";
            agent.abilities[3].description = "ULTIMATE. EQUIP an interdimensional arena. FIRE to hurl a column of energy through the battlefield, pulling you and the first enemy hit into a terrifying 1v1 void deathmatch.";
        }
    }

    return (
        <main className={styles.isoMain}>

            <div className={styles.voidBackgroundContainer}>
                <div className={styles.voidGrid}></div>
                <div className={styles.voidShardOne}></div>
                <div className={styles.voidShardTwo}></div>
            </div>

            <div className={styles.content}>
                <div className={styles.assassinHeader}>
                    <Link href="/" className={styles.voidLink}>&lt; EVACUATE</Link>
                    <NativeLanguageButton agentUUID={isoUUID} currentLang={lang} />
                </div>

                <div className={styles.contractGrid}>
                    <div className={styles.imageCol}>
                        <div className={styles.crystalPortraitBox}>
                            <img
                                src={agent.fullPortraitV2 || agent.fullPortrait || agent.displayIcon}
                                alt={agent.displayName}
                                className={styles.isoPortrait}
                            />
                            <div className={styles.crystalContainmentFrame}></div>
                        </div>
                    </div>

                    <div className={styles.dossierCol}>
                        <div className={styles.fixerPanel}>
                            <h1 className={styles.assassinName}>
                                {agent.displayName.toUpperCase()}
                            </h1>
                            <h2 className={styles.fixerSubtitle}>CHINESE FIXER // 雇佣兵</h2>

                            <p className={styles.voidLore}>
                                {agent.description}
                            </p>

                            <div className={styles.roleHexBox}>
                                <img src={agent.role?.displayIcon} alt="Role" className={styles.roleIconPurple} />
                                <span>{agent.role?.displayName.toUpperCase()}</span>
                            </div>

                            {voiceLineUrl && (
                                <div className={styles.voidPlayer}>
                                    <AudioPlayer audioUrl={voiceLineUrl} label="ACCESS FIXER COMMS" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.trapHeader}>
                    <h2 className={styles.trapTitle}>RADIANITE CONSTRUCTS</h2>
                    <div className={styles.amethystLine}></div>
                </div>

                <div className={styles.constructGrid}>
                    {agent.abilities.map((ability, idx) => (
                        <div key={idx} className={styles.voidModule}>
                            <div className={styles.targetReticleLineTop}></div>
                            <div className={styles.targetReticleLineBottom}></div>

                            <div className={styles.voidIconBox}>
                                <img src={ability.displayIcon} alt={ability.displayName} className={styles.voidIcon} />
                            </div>

                            <div className={styles.voidData}>
                                <h3 className={styles.voidName}>{ability.displayName}</h3>
                                <span className={styles.voidType}>[ SHARD // {ability.slot.replace('Ability', '').toUpperCase()} ]</span>
                                <p className={styles.voidText}>{ability.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}
