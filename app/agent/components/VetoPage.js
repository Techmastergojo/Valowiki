import Link from 'next/link';
import NativeLanguageButton from '@/components/NativeLanguageButton';
import AudioPlayer from '@/components/AudioPlayer';
import styles from './VetoPage.module.css';

export default function VetoPage({ agent, weapons, lang }) {
    const voiceLineUrl = agent.voiceLine?.mediaList?.[0]?.wave;
    const vetoUUID = "92eeef5d-43b5-1d4a-8d03-b3927a09034b";
    const helixStrands = Array.from({ length: 25 });
    const cellDivisions = Array.from({ length: 6 });
    const mutationRings = Array.from({ length: 3 });

    return (
        <main className={styles.vetoMain}>
            <div className={styles.dnaBackground}>
                {helixStrands.map((_, i) => (
                    <div key={i} className={styles.helixStrand} style={{
                        left: `${Math.random() * 100}%`, bottom: `${Math.random() * 30}%`,
                        width: `${Math.random() * 5 + 2}px`, height: `${Math.random() * 5 + 2}px`,
                        animationDelay: `-${Math.random() * 6}s`,
                        animationDuration: `${Math.random() * 4 + 4}s`,
                    }} />
                ))}
                {/* DNA double helix rotating strands */}
                <div className={styles.helixA}></div>
                <div className={styles.helixB}></div>
                {/* Cellular division bubbles */}
                {cellDivisions.map((_, i) => (
                    <div key={`cd${i}`} className={styles.cellDivide} style={{
                        left: `${Math.random() * 80 + 10}%`,
                        top: `${Math.random() * 80 + 10}%`,
                        width: `${Math.random() * 30 + 15}px`,
                        height: `${Math.random() * 30 + 15}px`,
                        animationDelay: `-${Math.random() * 5}s`,
                        animationDuration: `${Math.random() * 3 + 4}s`,
                    }} />
                ))}
                {/* Mutation pulse expanding rings */}
                {mutationRings.map((_, i) => (
                    <div key={`mr${i}`} className={styles.mutationRing} style={{
                        left: `${30 + i * 20}%`,
                        top: `${20 + i * 25}%`,
                        animationDelay: `-${i * 1.5}s`,
                    }} />
                ))}
                <div className={styles.mutationOverlay}></div>
            </div>
            <div className={styles.content}>
                <div className={styles.enforceHeader}>
                    <Link href="/" className={styles.enforceLink}>◄ DEACTIVATE — RTB</Link>
                    <NativeLanguageButton agentUUID={vetoUUID} currentLang={lang} />
                </div>
                <div className={styles.mutateGrid}>
                    <div className={styles.imageCol}>
                        <div className={styles.dnaBox}>
                            <img src={agent.fullPortraitV2 || agent.fullPortrait || agent.displayIcon} alt={agent.displayName} className={styles.vetoPortrait} />
                        </div>
                    </div>
                    <div className={styles.loreCol}>
                        <div className={styles.enforcePanel}>
                            <h1 className={styles.vetoName}>{agent.displayName.toUpperCase()}</h1>
                            <h2 className={styles.evoSubtitle}>SENEGAL // SENTINEL // MUTANT</h2>
                            <p className={styles.vetoLore}>{agent.description}</p>
                            <div className={styles.roleBox}>
                                <img src={agent.role?.displayIcon} alt="Role" className={styles.roleIconDna} />
                                <span>{agent.role?.displayName.toUpperCase()}</span>
                            </div>
                            {voiceLineUrl && (<div className={styles.evoPlayer}><AudioPlayer audioUrl={voiceLineUrl} label="PLAY_MUTATION_LOG" /></div>)}
                        </div>
                    </div>
                </div>
                <div className={styles.evoHeader}>
                    <h2 className={styles.evoTitle}>EVOLUTION ABILITIES</h2>
                    <div className={styles.tealLine}></div>
                </div>
                <div className={styles.evoGrid}>
                    {agent.abilities.map((ability, idx) => (
                        <div key={idx} className={styles.mutateModule}>
                            <div className={styles.mutateIconBox}>
                                <img src={ability.displayIcon} alt={ability.displayName} className={styles.mutateIcon} />
                            </div>
                            <div className={styles.mutateData}>
                                <h3 className={styles.mutateAbilityName}>{ability.displayName.toUpperCase()}</h3>
                                <span className={styles.mutateType}>// {ability.slot.replace('Ability', '').toUpperCase()}</span>
                                <p className={styles.mutateText}>{ability.description}</p>
                            </div>
                            <div className={styles.dnaBorder}></div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
