import Link from 'next/link';
import NativeLanguageButton from '@/components/NativeLanguageButton';
import AudioPlayer from '@/components/AudioPlayer';
import styles from './ReynaPage.module.css';

export default function ReynaPage({ agent, weapons, lang }) {
    const voiceLineUrl = agent.voiceLine?.mediaList?.[0]?.wave;
    const reynaUUID = "a3bfb853-43b2-7238-a4f1-ad90e9e46bcc";

    // SYNTHETIC LLM LOCALIZATION (MEXICAN SPANISH)
    if (lang === 'es-MX') {
        agent.description = "Forjada en el corazón de México, Reyna domina el combate singular. Se alimenta de cada eliminación que logra. Su poder solo está limitado por su habilidad pura, haciéndola cruelmente dependiente de su rendimiento. ¿Tienes miedo? Deberías.";
        if (agent.abilities) {
            if (agent.abilities[0]) {
                agent.abilities[0].displayName = "DEVORAR // DEVOUR";
                agent.abilities[0].description = "Cosecha de Almas: Los enemigos que mueren dejan Orbes de Alma. INSTANTÁNEAMENTE consume un orbe, ganando salud temporal rápidamente. Con EMPERATRIZ activa, Devorar se lanza automáticamente y la curación es permanente.";
            }
            if (agent.abilities[1]) {
                agent.abilities[1].displayName = "DESCARTAR // DISMISS";
                agent.abilities[1].description = "INSTANTÁNEAMENTE consume un Orbe de Alma cercano, volviéndote Intangible por un breve periodo. Con EMPERATRIZ activa, también te vuelves Invisible. ¡Adiós, tontos!";
            }
            if (agent.abilities[2]) {
                agent.abilities[2].displayName = "MIRADA // LEER";
                agent.abilities[2].description = "EQUIPA un ojo etéreo destructible. ACTIVA para lanzar el ojo. El ojo cegará a todos los enemigos que lo miren. ¿No puedes ver? Qué lástima.";
            }
            if (agent.abilities[3]) {
                agent.abilities[3].displayName = "EMPERATRIZ // EMPRESS";
                agent.abilities[3].description = "ULTIMATE. INSTANTÁNEAMENTE entra en frenesí, ganando Estímulo de Combate que aumenta velocidad de disparo, equipamiento y recarga dramáticamente. Cargas infinitas de habilidades. ¡Soy la reina!";
            }
        }
    }

    const soulOrbs = Array.from({ length: 20 });
    const tendrils = Array.from({ length: 12 });
    const soulLines = Array.from({ length: 8 });

    return (
        <main className={styles.reynaMain}>
            <div className={styles.soulBackground}>
                {/* Floating soul orbs */}
                {soulOrbs.map((_, i) => (
                    <div key={`o${i}`} className={styles.soulOrb} style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: `${Math.random() * 20 + 8}px`,
                        height: `${Math.random() * 20 + 8}px`,
                        animationDelay: `-${Math.random() * 8}s`,
                        animationDuration: `${Math.random() * 6 + 5}s`,
                    }} />
                ))}
                {/* Dark tendrils reaching from left and right edges */}
                {tendrils.map((_, i) => (
                    <div key={`t${i}`} className={`${styles.tendril} ${i % 2 === 0 ? '' : styles.tendrilRight}`} style={{
                        top: `${Math.random() * 100}%`,
                        width: `${Math.random() * 200 + 80}px`,
                        animationDelay: `-${Math.random() * 6}s`,
                        animationDuration: `${Math.random() * 4 + 4}s`,
                    }} />
                ))}
                {/* Empress eye glow at top center */}
                <div className={styles.empressEye}></div>
                {/* Soul harvest lines being pulled upward */}
                {soulLines.map((_, i) => (
                    <div key={`sl${i}`} className={styles.soulLine} style={{
                        left: `${Math.random() * 100}%`,
                        height: `${Math.random() * 150 + 50}px`,
                        animationDelay: `-${Math.random() * 4}s`,
                        animationDuration: `${Math.random() * 3 + 3}s`,
                    }} />
                ))}
                <div className={styles.darkOverlay}></div>
            </div>

            <div className={styles.content}>
                <div className={styles.empressHeader}>
                    <Link href="/" className={styles.empressLink}>👁 RETURN TO THE VOID</Link>
                    <NativeLanguageButton agentUUID={reynaUUID} currentLang={lang} />
                </div>

                <div className={styles.devourGrid}>
                    <div className={styles.imageCol}>
                        <div className={styles.eyeBox}>
                            <img
                                src={agent.fullPortraitV2 || agent.fullPortrait || agent.displayIcon}
                                alt={agent.displayName}
                                className={styles.reynaPortrait}
                            />
                        </div>
                    </div>

                    <div className={styles.loreCol}>
                        <div className={styles.empressPanel}>
                            <h1 className={styles.reynaName}>{agent.displayName.toUpperCase()}</h1>
                            <h2 className={styles.soulSubtitle}>MEXICO // DUELIST // EMPRESS</h2>
                            <p className={styles.reynaLore}>{agent.description}</p>
                            <div className={styles.roleBox}>
                                <img src={agent.role?.displayIcon} alt="Role" className={styles.roleIconVamp} />
                                <span>{agent.role?.displayName.toUpperCase()}</span>
                            </div>
                            {voiceLineUrl && (
                                <div className={styles.soulPlayer}>
                                    <AudioPlayer audioUrl={voiceLineUrl} label="PLAY_SOUL_HARVEST" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.devourHeader}>
                    <h2 className={styles.devourTitle}>SOUL ABILITIES</h2>
                    <div className={styles.purpleLine}></div>
                </div>

                <div className={styles.devourGrid2}>
                    {agent.abilities.map((ability, idx) => (
                        <div key={idx} className={styles.soulModule}>
                            <div className={styles.soulIconBox}>
                                <img src={ability.displayIcon} alt={ability.displayName} className={styles.soulIcon} />
                            </div>
                            <div className={styles.soulData}>
                                <h3 className={styles.soulAbilityName}>{ability.displayName.toUpperCase()}</h3>
                                <span className={styles.soulType}>// {ability.slot.replace('Ability', '').toUpperCase()}</span>
                                <p className={styles.soulText}>{ability.description}</p>
                            </div>
                            <div className={styles.devourBorder}></div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
