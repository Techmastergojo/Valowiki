import Link from 'next/link';
import NativeLanguageButton from '@/components/NativeLanguageButton';
import AudioPlayer from '@/components/AudioPlayer';
import styles from './RazePage.module.css';

export default function RazePage({ agent, weapons, lang }) {
    const voiceLineUrl = agent.voiceLine?.mediaList?.[0]?.wave;
    const razeUUID = "f94c3b30-42be-e959-889c-5aa313dba261";

    // SYNTHETIC LLM LOCALIZATION (BRAZILIAN PORTUGUESE)
    if (lang === 'pt-BR') {
        agent.description = "Raze explode direto do Brasil com sua personalidade enorme e armas gigantes. Com seu estilo de força bruta, ela é mestre em expulsar inimigos entrincheirados e limpar espaços apertados com uma dose generosa de BOOM. Bora!";
        if (agent.abilities) {
            if (agent.abilities[0]) {
                agent.abilities[0].displayName = "BLAST PACK // PACOTE EXPLOSIVO";
                agent.abilities[0].description = "INSTANTÂNEO — joga um Blast Pack que gruda nas superfícies. RE-USE para detonar, movendo qualquer coisa e causando dano se completamente armado. BUUM!";
            }
            if (agent.abilities[1]) {
                agent.abilities[1].displayName = "PAINT SHELLS // BOMBAS DE TINTA";
                agent.abilities[1].description = "EQUIPE uma granada. DISPARE para jogar — ela causa dano e cria submunições que explodem pra tudo que é lado. ALT FIRE pra arremessar. Reseta a cada 2 kills. Tá lindo!";
            }
            if (agent.abilities[2]) {
                agent.abilities[2].displayName = "BOOM BOT // BOOM BOT";
                agent.abilities[2].description = "EQUIPE o Boom Bot. DISPARE para enviar o robozinho em linha reta pelo chão, ricocheteando nas paredes. Ele mira nos inimigos e EXPLODE com dano pesado. Vai neném!";
            }
            if (agent.abilities[3]) {
                agent.abilities[3].displayName = "SHOWSTOPPER // ESPETÁCULO FINAL";
                agent.abilities[3].description = "ULTIMATE. EQUIPE um lança-foguetes. DISPARE para soltar um foguete que causa dano MASSIVO em área no impacto. É o show, bebê!";
            }
        }
    }

    // Generate paint splatters, boom rings, spray streaks, explosion flashes
    const splatters = Array.from({ length: 30 });
    const boomRings = Array.from({ length: 5 });
    const sprayStreaks = Array.from({ length: 8 });
    const explosionFlashes = Array.from({ length: 4 });
    const splatterColors = ['#d4602a', '#2c5942', '#ff8c42', '#e85d26', '#4a8f6a'];

    return (
        <main className={styles.razeMain}>

            {/* EXPLOSIVE BACKGROUND SYSTEM */}
            <div className={styles.paintBackground}>
                {/* Rising paint blobs */}
                {splatters.map((_, i) => (
                    <div key={`s${i}`} className={styles.splatter} style={{
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 10 + 4}px`,
                        height: `${Math.random() * 10 + 4}px`,
                        backgroundColor: splatterColors[i % splatterColors.length],
                        animationDelay: `-${Math.random() * 8}s`,
                        animationDuration: `${Math.random() * 5 + 4}s`,
                    }} />
                ))}
                {/* BOOM shockwave expanding rings */}
                {boomRings.map((_, i) => (
                    <div key={`b${i}`} className={styles.boomRing} style={{
                        left: `${Math.random() * 80 + 10}%`,
                        top: `${Math.random() * 80 + 10}%`,
                        animationDelay: `-${Math.random() * 4}s`,
                        animationDuration: `${Math.random() * 3 + 3}s`,
                    }} />
                ))}
                {/* Graffiti spray horizontal streaks */}
                {sprayStreaks.map((_, i) => (
                    <div key={`sp${i}`} className={styles.sprayStreak} style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 40}%`,
                        width: `${Math.random() * 300 + 100}px`,
                        animationDelay: `-${Math.random() * 3}s`,
                        animationDuration: `${Math.random() * 2 + 2}s`,
                    }} />
                ))}
                {/* Explosion flash pulses */}
                {explosionFlashes.map((_, i) => (
                    <div key={`e${i}`} className={styles.explosionFlash} style={{
                        left: `${Math.random() * 80 + 10}%`,
                        top: `${Math.random() * 80 + 10}%`,
                        width: `${Math.random() * 100 + 60}px`,
                        height: `${Math.random() * 100 + 60}px`,
                        animationDelay: `-${Math.random() * 5}s`,
                        animationDuration: `${Math.random() * 4 + 4}s`,
                    }} />
                ))}
                <div className={styles.graffitiOverlay}></div>
            </div>

            <div className={styles.content}>
                <div className={styles.boomHeader}>
                    <Link href="/" className={styles.boomLink}>💣 BACK TO BASE</Link>
                    <NativeLanguageButton agentUUID={razeUUID} currentLang={lang} />
                </div>

                <div className={styles.blastGrid}>
                    <div className={styles.imageCol}>
                        <div className={styles.blastBox}>
                            <img
                                src={agent.fullPortraitV2 || agent.fullPortrait || agent.displayIcon}
                                alt={agent.displayName}
                                className={styles.razePortrait}
                            />
                        </div>
                    </div>

                    <div className={styles.loreCol}>
                        <div className={styles.punkPanel}>
                            <h1 className={styles.razeName}>
                                {agent.displayName.toUpperCase()}
                            </h1>
                            <h2 className={styles.boomSubtitle}>BRAZIL // DUELIST // BOOM</h2>

                            <p className={styles.razeLore}>
                                {agent.description}
                            </p>

                            <div className={styles.roleBox}>
                                <img src={agent.role?.displayIcon} alt="Role" className={styles.roleIconBoom} />
                                <span>{agent.role?.displayName.toUpperCase()}</span>
                            </div>

                            {voiceLineUrl && (
                                <div className={styles.boomPlayer}>
                                    <AudioPlayer audioUrl={voiceLineUrl} label="PLAY_BOOM_MIX" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.kaboomHeader}>
                    <h2 className={styles.kaboomTitle}>EXPLOSIVE ABILITIES</h2>
                    <div className={styles.orangeLine}></div>
                </div>

                <div className={styles.kaboomGrid}>
                    {agent.abilities.map((ability, idx) => (
                        <div key={idx} className={styles.blastModule}>
                            <div className={styles.blastIconBox}>
                                <img src={ability.displayIcon} alt={ability.displayName} className={styles.blastIcon} />
                            </div>
                            <div className={styles.blastData}>
                                <h3 className={styles.blastAbilityName}>{ability.displayName.toUpperCase()}</h3>
                                <span className={styles.blastType}>// {ability.slot.replace('Ability', '').toUpperCase()}</span>
                                <p className={styles.blastText}>{ability.description}</p>
                            </div>
                            <div className={styles.sprayBorder}></div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
