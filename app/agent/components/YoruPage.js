import Link from 'next/link';
import NativeLanguageButton from '@/components/NativeLanguageButton';
import AudioPlayer from '@/components/AudioPlayer';
import styles from './YoruPage.module.css';

export default function YoruPage({ agent, weapons, lang }) {
    const voiceLineUrl = agent.voiceLine?.mediaList?.[0]?.wave;
    const yoruUUID = "7f94d92c-4234-0a36-9646-3a87eb8b5c89";

    // SYNTHETIC LLM LOCALIZATION (JAPANESE)
    if (lang === 'ja-JP') {
        agent.description = "日本出身のYoruは、現実に穴を開けて敵の戦線に侵入する。欺瞞と攻撃性を等しく使い、各ターゲットに気づかれる前に倒す。影から来る者、次元の裂け目を操る者。覚悟しろ。";
    }

    // Hardcoded abilities for Yoru (API returns empty array)
    const hardcodedAbilities = [
        {
            displayName: lang === 'ja-JP' ? "フェイクアウト // FAKEOUT" : "FAKEOUT",
            slot: "Grenade",
            description: lang === 'ja-JP' ? "EQUIP。発射でYoruの幻影デコイを前方に送り出す。デコイが敵に発見されると爆発し、短時間フラッシュを与える。" : "EQUIP an echo that mimics footsteps when activated. FIRE to activate and send the echo forward. ALT FIRE to place an echo in place. USE the echo to send it forward. The echo explodes and Blinds nearby enemies when destroyed by an enemy.",
            displayIcon: "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/abilities/grenade/displayicon.png"
        },
        {
            displayName: lang === 'ja-JP' ? "ゲートクラッシュ // GATECRASH" : "GATECRASH",
            slot: "Ability1",
            description: lang === 'ja-JP' ? "EQUIP。次元の裂け目を発射し、直進する。味方が再使用するとその場所にテレポート。影を使え。" : "EQUIP to harness a rift tether. FIRE to send the tether out moving forward. ALT FIRE to place a tether in place. ACTIVATE to teleport to the tether's location.",
            displayIcon: "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/abilities/ability1/displayicon.png"
        },
        {
            displayName: lang === 'ja-JP' ? "ディメンショナル・ドリフト // DIMENSIONAL DRIFT" : "DIMENSIONAL DRIFT",
            slot: "Ultimate",
            description: lang === 'ja-JP' ? "ULTIMATE。次元の狭間に入り、敵に見えず影響を受けない状態になる。再使用で現実世界に戻る。完全なる隠密行動。" : "EQUIP a mask that can see between dimensions. FIRE to drift into Yoru's dimension, unable to be affected or seen by enemies from the outside.",
            displayIcon: "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/abilities/ultimate/displayicon.png"
        },
        {
            displayName: lang === 'ja-JP' ? "ブラインドサイド // BLINDSIDE" : "BLINDSIDE",
            slot: "Ability2",
            description: lang === 'ja-JP' ? "EQUIP。フラッシュを投げる。最初の表面で跳ね返り、爆発して視界内の全員を眩ませる。" : "EQUIP to rip an unstable dimensional fragment from reality. FIRE to throw the fragment, activating a flash that winds up once it collides with a hard surface in the world.",
            displayIcon: "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/abilities/ability2/displayicon.png"
        }
    ];

    const abilitiesToRender = (agent.abilities && agent.abilities.length > 0) ? agent.abilities : hardcodedAbilities;

    const riftTears = Array.from({ length: 20 });
    const glitchBands = Array.from({ length: 6 });
    const portalRings = Array.from({ length: 3 });
    const riftCracks = Array.from({ length: 8 });

    return (
        <main className={styles.yoruMain}>
            <div className={styles.riftBackground}>
                {riftTears.map((_, i) => (
                    <div key={i} className={styles.riftTear} style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: `${Math.random() * 3 + 1}px`, height: `${Math.random() * 40 + 10}px`,
                        animationDelay: `-${Math.random() * 8}s`,
                        animationDuration: `${Math.random() * 5 + 3}s`,
                    }} />
                ))}
                {/* Reality glitch distortion bands */}
                {glitchBands.map((_, i) => (
                    <div key={`gb${i}`} className={styles.glitchBand} style={{
                        top: `${Math.random() * 100}%`,
                        animationDelay: `-${Math.random() * 3}s`,
                        animationDuration: `${Math.random() * 2 + 2}s`,
                    }} />
                ))}
                {/* Dimensional portal opening rings */}
                {portalRings.map((_, i) => (
                    <div key={`pr${i}`} className={styles.portalRing} style={{
                        left: '50%', top: '40%',
                        animationDelay: `-${i * 1.8}s`,
                    }} />
                ))}
                {/* Rift crack diagonal tears */}
                {riftCracks.map((_, i) => (
                    <div key={`rc${i}`} className={styles.riftCrack} style={{
                        left: `${Math.random() * 80 + 10}%`,
                        top: `${Math.random() * 60 + 10}%`,
                        transform: `rotate(${Math.random() * 60 - 30}deg)`,
                        animationDelay: `-${Math.random() * 4}s`,
                        animationDuration: `${Math.random() * 3 + 3}s`,
                    }} />
                ))}
                <div className={styles.voidOverlay}></div>
            </div>
            <div className={styles.content}>
                <div className={styles.stealthHeader}>
                    <Link href="/" className={styles.stealthLink}>⌁ EXIT DIMENSION</Link>
                    <NativeLanguageButton agentUUID={yoruUUID} currentLang={lang} />
                </div>
                <div className={styles.dimensionGrid}>
                    <div className={styles.imageCol}>
                        <div className={styles.portalBox}>
                            <img src={agent.fullPortraitV2 || agent.fullPortrait || agent.displayIcon} alt={agent.displayName} className={styles.yoruPortrait} />
                        </div>
                    </div>
                    <div className={styles.loreCol}>
                        <div className={styles.stealthPanel}>
                            <h1 className={styles.yoruName}>{agent.displayName.toUpperCase()}</h1>
                            <h2 className={styles.riftSubtitle}>JAPAN // DUELIST // RIFT WALKER</h2>
                            <p className={styles.yoruLore}>{agent.description}</p>
                            <div className={styles.roleBox}>
                                <img src={agent.role?.displayIcon} alt="Role" className={styles.roleIconRift} />
                                <span>{agent.role?.displayName.toUpperCase()}</span>
                            </div>
                            {voiceLineUrl && (<div className={styles.riftPlayer}><AudioPlayer audioUrl={voiceLineUrl} label="PLAY_RIFT_ECHO" /></div>)}
                        </div>
                    </div>
                </div>
                <div className={styles.tearHeader}>
                    <h2 className={styles.tearTitle}>DIMENSIONAL ABILITIES</h2>
                    <div className={styles.indigoLine}></div>
                </div>
                <div className={styles.tearGrid}>
                    {abilitiesToRender.map((ability, idx) => (
                        <div key={idx} className={styles.riftModule}>
                            <div className={styles.riftIconBox}>
                                <img src={ability.displayIcon} alt={ability.displayName} className={styles.riftIcon} />
                            </div>
                            <div className={styles.riftData}>
                                <h3 className={styles.riftAbilityName}>{ability.displayName.toUpperCase()}</h3>
                                <span className={styles.riftType}>// {ability.slot.replace('Ability', '').toUpperCase()}</span>
                                <p className={styles.riftText}>{ability.description}</p>
                            </div>
                            <div className={styles.dimensionBorder}></div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
