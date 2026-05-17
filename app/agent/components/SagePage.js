import Link from 'next/link';
import NativeLanguageButton from '@/components/NativeLanguageButton';
import AudioPlayer from '@/components/AudioPlayer';
import styles from './SagePage.module.css';

export default function SagePage({ agent, weapons, lang }) {
    const voiceLineUrl = agent.voiceLine?.mediaList?.[0]?.wave;
    const sageUUID = "569fdd95-4d10-43ab-ca70-79becc718b46";

    // SYNTHETIC LLM LOCALIZATION (MANDARIN CHINESE)
    if (lang === 'zh-CN') {
        agent.description = "中华的堡垒，Sage在所到之处为自己和队伍创造安全。她能够复活倒下的战友、抵挡猛烈的攻击，在混沌的战场上提供一个平静的核心。平衡即是力量 (Balance is power)。";
        if (agent.abilities) {
            if (agent.abilities[0]) {
                agent.abilities[0].displayName = "减速之球 // SLOW ORB";
                agent.abilities[0].description = "装备减速球。发射后落地产生一个持续区域，减缓并降低区域内玩家的冲刺速度。冷静，不要急。";
            }
            if (agent.abilities[1]) {
                agent.abilities[1].displayName = "治愈之球 // HEALING ORB";
                agent.abilities[1].description = "装备治愈球。瞄准受伤的队友发射以对其施加持续治疗。按ALT键自我治疗。生命是最宝贵的。";
            }
            if (agent.abilities[2]) {
                agent.abilities[2].displayName = "屏障之球 // BARRIER ORB";
                agent.abilities[2].description = "装备屏障球。发射后放置一面屏障墙，几秒后会强化。ALT键旋转方向。坚不可摧！";
            }
            if (agent.abilities[3]) {
                agent.abilities[3].displayName = "复活 // RESURRECTION";
                agent.abilities[3].description = "终极技能。装备复活技能。瞄准倒下的队友发射以开始复活。短暂引导后，队友将以满血回归战场。你的旅途还未结束。";
            }
        }
    }

    const crystals = Array.from({ length: 25 });
    const healCircles = Array.from({ length: 4 });
    const resGlows = Array.from({ length: 6 });
    const barrierLines = Array.from({ length: 5 });

    return (
        <main className={styles.sageMain}>
            <div className={styles.jadeBackground}>
                {/* Floating jade crystals */}
                {crystals.map((_, i) => (
                    <div key={`c${i}`} className={styles.crystal} style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: `${Math.random() * 14 + 6}px`,
                        height: `${Math.random() * 14 + 6}px`,
                        animationDelay: `-${Math.random() * 10}s`,
                        animationDuration: `${Math.random() * 8 + 6}s`,
                    }} />
                ))}
                {/* Healing circles radiating from bottom center */}
                {healCircles.map((_, i) => (
                    <div key={`hc${i}`} className={styles.healCircle} style={{
                        animationDelay: `-${i * 1.2}s`,
                        animationDuration: `${5 + i}s`,
                    }} />
                ))}
                {/* Resurrection glow columns rising from bottom */}
                {resGlows.map((_, i) => (
                    <div key={`rg${i}`} className={styles.resGlow} style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `-${Math.random() * 7}s`,
                        animationDuration: `${Math.random() * 4 + 5}s`,
                    }} />
                ))}
                {/* Barrier wall formation lines */}
                {barrierLines.map((_, i) => (
                    <div key={`bl${i}`} className={styles.barrierLine} style={{
                        top: `${20 + i * 15}%`,
                        animationDelay: `-${i * 1.5}s`,
                        animationDuration: `${Math.random() * 4 + 6}s`,
                    }} />
                ))}
                <div className={styles.healOverlay}></div>
            </div>

            <div className={styles.content}>
                <div className={styles.zenHeader}>
                    <Link href="/" className={styles.zenLink}>◇ RETURN TO PEACE</Link>
                    <NativeLanguageButton agentUUID={sageUUID} currentLang={lang} />
                </div>

                <div className={styles.healGrid}>
                    <div className={styles.imageCol}>
                        <div className={styles.orbBox}>
                            <img
                                src={agent.fullPortraitV2 || agent.fullPortrait || agent.displayIcon}
                                alt={agent.displayName}
                                className={styles.sagePortrait}
                            />
                        </div>
                    </div>

                    <div className={styles.loreCol}>
                        <div className={styles.zenPanel}>
                            <h1 className={styles.sageName}>{agent.displayName.toUpperCase()}</h1>
                            <h2 className={styles.healSubtitle}>CHINA // SENTINEL // HEALER</h2>
                            <p className={styles.sageLore}>{agent.description}</p>
                            <div className={styles.roleBox}>
                                <img src={agent.role?.displayIcon} alt="Role" className={styles.roleIconJade} />
                                <span>{agent.role?.displayName.toUpperCase()}</span>
                            </div>
                            {voiceLineUrl && (
                                <div className={styles.healPlayer}>
                                    <AudioPlayer audioUrl={voiceLineUrl} label="PLAY_HARMONY" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.resHeader}>
                    <h2 className={styles.resTitle}>RESTORATIVE ABILITIES</h2>
                    <div className={styles.jadeLine}></div>
                </div>

                <div className={styles.resGrid}>
                    {agent.abilities.map((ability, idx) => (
                        <div key={idx} className={styles.orbModule}>
                            <div className={styles.orbIconBox}>
                                <img src={ability.displayIcon} alt={ability.displayName} className={styles.orbIcon} />
                            </div>
                            <div className={styles.orbData}>
                                <h3 className={styles.orbAbilityName}>{ability.displayName.toUpperCase()}</h3>
                                <span className={styles.orbType}>// {ability.slot.replace('Ability', '').toUpperCase()}</span>
                                <p className={styles.orbText}>{ability.description}</p>
                            </div>
                            <div className={styles.sereneBorder}></div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
