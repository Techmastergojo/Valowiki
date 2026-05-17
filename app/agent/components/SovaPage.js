import Link from 'next/link';
import NativeLanguageButton from '@/components/NativeLanguageButton';
import AudioPlayer from '@/components/AudioPlayer';
import styles from './SovaPage.module.css';

export default function SovaPage({ agent, weapons, lang }) {
    const voiceLineUrl = agent.voiceLine?.mediaList?.[0]?.wave;
    const sovaUUID = "320b2a48-4d9b-a075-30f1-1f93a9b638fa";

    if (lang === 'ru-RU') {
        agent.description = "Рождённый в вечной зиме российской тундры, Сова выслеживает, находит и уничтожает врагов с безжалостной точностью. Его уникальный лук и невероятные разведывательные способности гарантируют — даже если ты бежишь, ты не спрячешься. Охота начинается.";
        if (agent.abilities) {
            if (agent.abilities[0]) { agent.abilities[0].displayName = "ШОКОВЫЙ БОЛТ // SHOCK BOLT"; agent.abilities[0].description = "ЭКИПИРУЙ лук с шоковым болтом. ВЫСТРЕЛИ, чтобы отправить взрывной болт вперёд. Он детонирует при столкновении. УДЕРЖИ для увеличения дальности. АЛТ-ОГОНЬ для рикошетов. Меткий выстрел!"; }
            if (agent.abilities[1]) { agent.abilities[1].displayName = "РАЗВЕДЫВАТЕЛЬНЫЙ БОЛТ // RECON BOLT"; agent.abilities[1].description = "ЭКИПИРУЙ лук с болтом разведки. ВЫСТРЕЛИ для обнаружения противников. Враги могут уничтожить болт. Нигде не спрятаться."; }
            if (agent.abilities[2]) { agent.abilities[2].displayName = "ДРОН-СОВА // OWL DRONE"; agent.abilities[2].description = "ЭКИПИРУЙ дрон-сову. ВЫСТРЕЛИ для запуска. Управляй дроном. Стреляй маркером для обнаружения. Я вижу тебя."; }
            if (agent.abilities[3]) { agent.abilities[3].displayName = "ЯРОСТЬ ОХОТНИКА // HUNTER'S FURY"; agent.abilities[3].description = "УЛЬТИМЕЙТ. ЭКИПИРУЙ лук с тремя дальнобойными энергетическими выстрелами. Пробивают стены. Наносят урон и раскрывают позиции."; }
        }
    }

    const snowflakes = Array.from({ length: 30 });
    const reconArcs = Array.from({ length: 3 });
    const dronePaths = Array.from({ length: 2 });
    const arrowTrajectories = Array.from({ length: 6 });

    return (
        <main className={styles.sovaMain}>
            <div className={styles.arcticBackground}>
                {snowflakes.map((_, i) => (
                    <div key={i} className={styles.snowflake} style={{
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 4 + 2}px`, height: `${Math.random() * 4 + 2}px`,
                        animationDelay: `-${Math.random() * 12}s`,
                        animationDuration: `${Math.random() * 8 + 8}s`,
                    }} />
                ))}
                <div className={styles.scanLine}></div>
                {/* Recon bolt sweeping arcs */}
                {reconArcs.map((_, i) => (
                    <div key={`ra${i}`} className={styles.reconArc} style={{
                        animationDelay: `-${i * 1.8}s`,
                        animationDuration: `${4 + i}s`,
                    }} />
                ))}
                {/* Owl drone circular flight paths */}
                {dronePaths.map((_, i) => (
                    <div key={`dp${i}`} className={styles.dronePath} style={{
                        left: `${30 + i * 35}%`,
                        top: `${20 + i * 30}%`,
                        width: `${100 + i * 60}px`,
                        height: `${100 + i * 60}px`,
                        animationDuration: `${10 + i * 4}s`,
                        animationDirection: i % 2 === 0 ? 'normal' : 'reverse',
                    }} />
                ))}
                {/* Arrow trajectory diagonal lines */}
                {arrowTrajectories.map((_, i) => (
                    <div key={`at${i}`} className={styles.arrowTrajectory} style={{
                        left: `${Math.random() * 80 + 10}%`,
                        top: `${Math.random() * 60 + 10}%`,
                        animationDelay: `-${Math.random() * 3}s`,
                        animationDuration: `${Math.random() * 2 + 2}s`,
                    }} />
                ))}
                <div className={styles.frostOverlay}></div>
            </div>
            <div className={styles.content}>
                <div className={styles.hunterHeader}>
                    <Link href="/" className={styles.hunterLink}>◄ RETURN TO BASE</Link>
                    <NativeLanguageButton agentUUID={sovaUUID} currentLang={lang} />
                </div>
                <div className={styles.reconGrid}>
                    <div className={styles.imageCol}>
                        <div className={styles.bowBox}>
                            <img src={agent.fullPortraitV2 || agent.fullPortrait || agent.displayIcon} alt={agent.displayName} className={styles.sovaPortrait} />
                        </div>
                    </div>
                    <div className={styles.loreCol}>
                        <div className={styles.hunterPanel}>
                            <h1 className={styles.sovaName}>{agent.displayName.toUpperCase()}</h1>
                            <h2 className={styles.arcticSubtitle}>RUSSIA // INITIATOR // HUNTER</h2>
                            <p className={styles.sovaLore}>{agent.description}</p>
                            <div className={styles.roleBox}>
                                <img src={agent.role?.displayIcon} alt="Role" className={styles.roleIconBlue} />
                                <span>{agent.role?.displayName.toUpperCase()}</span>
                            </div>
                            {voiceLineUrl && (<div className={styles.reconPlayer}><AudioPlayer audioUrl={voiceLineUrl} label="PLAY_HUNTER_LOG" /></div>)}
                        </div>
                    </div>
                </div>
                <div className={styles.furyHeader}>
                    <h2 className={styles.furyTitle}>HUNTER ABILITIES</h2>
                    <div className={styles.iceLine}></div>
                </div>
                <div className={styles.furyGrid}>
                    {agent.abilities?.filter(a => a.slot !== 'Passive').map((ability, idx) => (
                        <div key={idx} className={styles.arrowModule}>
                            <div className={styles.arrowIconBox}>
                                {ability.displayIcon && <img src={ability.displayIcon} alt={ability.displayName} className={styles.arrowIcon} />}
                            </div>
                            <div className={styles.arrowData}>
                                <h3 className={styles.arrowAbilityName}>{ability.displayName.toUpperCase()}</h3>
                                <span className={styles.arrowType}>// {ability.slot.replace('Ability', '').toUpperCase()}</span>
                                <p className={styles.arrowText}>{ability.description}</p>
                            </div>
                            <div className={styles.frostBorder}></div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
