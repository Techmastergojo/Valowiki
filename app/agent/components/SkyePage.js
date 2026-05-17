import Link from 'next/link';
import NativeLanguageButton from '@/components/NativeLanguageButton';
import AudioPlayer from '@/components/AudioPlayer';
import styles from './SkyePage.module.css';

export default function SkyePage({ agent, weapons, lang }) {
    const voiceLineUrl = agent.voiceLine?.mediaList?.[0]?.wave;
    const skyeUUID = "6f2a04ca-43e0-be17-7f36-b3908627744d";

    const leaves = Array.from({ length: 20 });
    const hawkTrails = Array.from({ length: 5 });
    const vines = Array.from({ length: 8 });
    const breathPulses = Array.from({ length: 3 });

    return (
        <main className={styles.skyeMain}>
            <div className={styles.leafBackground}>
                {leaves.map((_, i) => (
                    <div key={`l${i}`} className={styles.leaf} style={{
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 12 + 6}px`,
                        height: `${Math.random() * 12 + 6}px`,
                        animationDelay: `-${Math.random() * 9}s`,
                        animationDuration: `${Math.random() * 6 + 6}s`,
                    }} />
                ))}
                {/* Hawk swooping arc trails */}
                {hawkTrails.map((_, i) => (
                    <div key={`h${i}`} className={styles.hawkTrail} style={{
                        top: `${Math.random() * 60 + 10}%`,
                        left: `${Math.random() * 30}%`,
                        width: `${Math.random() * 400 + 200}px`,
                        animationDelay: `-${Math.random() * 5}s`,
                        animationDuration: `${Math.random() * 3 + 4}s`,
                    }} />
                ))}
                {/* Vine tendrils growing from bottom */}
                {vines.map((_, i) => (
                    <div key={`v${i}`} className={styles.vine} style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `-${Math.random() * 8}s`,
                        animationDuration: `${Math.random() * 5 + 6}s`,
                    }} />
                ))}
                {/* Nature breath pulse rings */}
                {breathPulses.map((_, i) => (
                    <div key={`bp${i}`} className={styles.breathPulse} style={{
                        animationDelay: `-${i * 2}s`,
                    }} />
                ))}
                <div className={styles.natureOverlay}></div>
            </div>
            <div className={styles.content}>
                <div className={styles.wildHeader}>
                    <Link href="/" className={styles.wildLink}>🌿 BACK TO OUTBACK</Link>
                    <NativeLanguageButton agentUUID={skyeUUID} currentLang={lang} />
                </div>
                <div className={styles.trailGrid}>
                    <div className={styles.imageCol}>
                        <div className={styles.hawkBox}>
                            <img src={agent.fullPortraitV2 || agent.fullPortrait || agent.displayIcon} alt={agent.displayName} className={styles.skyePortrait} />
                        </div>
                    </div>
                    <div className={styles.loreCol}>
                        <div className={styles.wildPanel}>
                            <h1 className={styles.skyeName}>{agent.displayName.toUpperCase()}</h1>
                            <h2 className={styles.trailSubtitle}>AUSTRALIA // INITIATOR // WILD</h2>
                            <p className={styles.skyeLore}>{agent.description}</p>
                            <div className={styles.roleBox}>
                                <img src={agent.role?.displayIcon} alt="Role" className={styles.roleIconGreen} />
                                <span>{agent.role?.displayName.toUpperCase()}</span>
                            </div>
                            {voiceLineUrl && (<div className={styles.wildPlayer}><AudioPlayer audioUrl={voiceLineUrl} label="PLAY_WILD_CALL" /></div>)}
                        </div>
                    </div>
                </div>
                <div className={styles.seekHeader}>
                    <h2 className={styles.seekTitle}>FAUNA ABILITIES</h2>
                    <div className={styles.greenLine}></div>
                </div>
                <div className={styles.seekGrid}>
                    {agent.abilities.map((ability, idx) => (
                        <div key={idx} className={styles.faunaModule}>
                            <div className={styles.faunaIconBox}>
                                <img src={ability.displayIcon} alt={ability.displayName} className={styles.faunaIcon} />
                            </div>
                            <div className={styles.faunaData}>
                                <h3 className={styles.faunaAbilityName}>{ability.displayName.toUpperCase()}</h3>
                                <span className={styles.faunaType}>// {ability.slot.replace('Ability', '').toUpperCase()}</span>
                                <p className={styles.faunaText}>{ability.description}</p>
                            </div>
                            <div className={styles.trailBorder}></div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
