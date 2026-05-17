import Link from 'next/link';
import NativeLanguageButton from '@/components/NativeLanguageButton';
import AudioPlayer from '@/components/AudioPlayer';
import TiltCard from '@/components/TiltCard';
import { getAgentTheme } from '@/utils/AgentThemeEngine';
import styles from './agent.module.css';

import CypherPage from '../components/CypherPage';
import AstraPage from '../components/AstraPage';
import BreachPage from '../components/BreachPage';
import BrimstonePage from '../components/BrimstonePage';
import ChamberPage from '../components/ChamberPage';
import ClovePage from '../components/ClovePage';
import DeadlockPage from '../components/DeadlockPage';
import FadePage from '../components/FadePage';
import GekkoPage from '../components/GekkoPage';
import HarborPage from '../components/HarborPage';
import IsoPage from '../components/IsoPage';
import JettPage from '../components/JettPage';
import KilljoyPage from '../components/KilljoyPage';
import MiksPage from '../components/MiksPage';
import NeonPage from '../components/NeonPage';
import OmenPage from '../components/OmenPage';
import PhoenixPage from '../components/PhoenixPage';
import RazePage from '../components/RazePage';
import ReynaPage from '../components/ReynaPage';
import SagePage from '../components/SagePage';
import SkyePage from '../components/SkyePage';
import SovaPage from '../components/SovaPage';
import TejoPage from '../components/TejoPage';
import VetoPage from '../components/VetoPage';
import ViperPage from '../components/ViperPage';
import VysePage from '../components/VysePage';
import WaylayPage from '../components/WaylayPage';
import YoruPage from '../components/YoruPage';
import KayoPage from '../components/KayoPage';


export default async function AgentBiodata({ params, searchParams }) {
    const { id } = await params;
    const sParams = await searchParams;
    const lang = sParams?.lang || 'en-US';

    // MULTILINGUAL VALORANT API SPOOFING 
    // We bypass the lack of Scottish/Norwegian API database entries by forcing them to evaluate in English for the Fetch, 
    // and passing the true 'lang' parameter down to their React components for hardcoded LLM substitution!
    let fetchLang = lang;
    if (lang === 'no-NO' || lang === 'sco-GB' || lang === 'hi-IN' || lang === 'zh-CN' || lang === 'ko-KR' || lang === 'ai-SYS' || lang === 'de-DE' || lang === 'hr-HR' || lang === 'tl-PH' || lang === 'en-VO' || lang === 'ja-JP' || lang === 'th-TH' || lang === 'es-CO' || lang === 'fr-SN' || lang === 'en-AU' || lang === 'en-LDN') {
        fetchLang = 'en-US';
    }

    const [agentRes, weaponsRes] = await Promise.all([
        fetch(`https://valorant-api.com/v1/agents/${id}?language=${fetchLang}`, { next: { revalidate: 3600 } }),
        fetch(`https://valorant-api.com/v1/weapons?language=${fetchLang}`, { next: { revalidate: 3600 } })
    ]);

    if (!agentRes.ok) {
        return <div className="p-8 text-red-500 font-mono">SYS: FAILED TO FETCH AGENT DATA [ 400 ]</div>;
    }

    const agentData = await agentRes.json();
    let agent = agentData.data;
    try { agent = JSON.parse(JSON.stringify(agent)); } catch (e) { }

    const weaponsData = await weaponsRes.json();
    let weapons = weaponsData.data;
    try { weapons = JSON.parse(JSON.stringify(weapons)); } catch (e) { }

    // BESPOKE ROUTER INTERCEPTOR //
    // If the UUID matches a bespoke specialized component, brutally hijack the router and send it there instead
    if (id === '5f8d3a7f-467b-97f3-062c-13acf203c006') {
        return <BreachPage agent={agent} weapons={weapons} lang={lang} />;
    }
    if (id === '117ed9e3-49f3-6512-3ccf-0cada7e3823b') {
        return <CypherPage agent={agent} weapons={weapons} lang={lang} />;
    }
    if (id === '41fb69c1-4189-7b37-f117-bcaf1e96f1bf') {
        return <AstraPage agent={agent} weapons={weapons} lang={lang} />;
    }
    if (id === '9f0d8ba9-4140-b941-57d3-a7ad57c6b417') {
        return <BrimstonePage agent={agent} weapons={weapons} lang={lang} />;
    }
    if (id === '22697a3d-45bf-8dd7-4fec-84a9e28c69d7') {
        return <ChamberPage agent={agent} weapons={weapons} lang={lang} />;
    }
    if (id === '1dbf2edd-4729-0984-3115-daa5eed44993') {
        return <ClovePage agent={agent} weapons={weapons} lang={lang} />;
    }
    if (id === 'cc8b64c8-4b25-4ff9-6e7f-37b4da43d235') {
        return <DeadlockPage agent={agent} weapons={weapons} lang={lang} />;
    }
    if (id === 'dade69b4-4f5a-8528-247b-219e5a1facd6') {
        return <FadePage agent={agent} weapons={weapons} lang={lang} />;
    }
    if (id === 'e370fa57-4757-3604-3648-499e1f642d3f') {
        return <GekkoPage agent={agent} weapons={weapons} lang={lang} />;
    }
    if (id === '95b78ed7-4637-86d9-7e41-71ba8c293152') {
        return <HarborPage agent={agent} weapons={weapons} lang={lang} />;
    }
    if (id === '0e38b510-41a8-5780-5e8f-568b2a4f2d6c') {
        return <IsoPage agent={agent} weapons={weapons} lang={lang} />;
    }
    if (id === 'add6443a-41bd-e414-f6ad-e58d267f4e95') {
        return <JettPage agent={agent} weapons={weapons} lang={lang} />;
    }
    if (id === '601dbbe7-43ce-be57-2a40-4abd24953621') {
        return <KayoPage agent={agent} weapons={weapons} lang={lang} />;
    }
    if (id === '1e58de9c-4950-5125-93e9-a0aee9f98746') {
        return <KilljoyPage agent={agent} weapons={weapons} lang={lang} />;
    }
    if (id === 'bb2a4828-46eb-8cd1-e765-15848195d751') {
        return <NeonPage agent={agent} weapons={weapons} lang={lang} />;
    }
    if (id === '8e253930-4c05-31dd-1b6c-968525494517') {
        return <OmenPage agent={agent} weapons={weapons} lang={lang} />;
    }
    if (id === 'eb93336a-449b-9c1b-0a54-a891f7921d69') {
        return <PhoenixPage agent={agent} weapons={weapons} lang={lang} />;
    }
    if (id === 'f94c3b30-42be-e959-889c-5aa313dba261') {
        return <RazePage agent={agent} weapons={weapons} lang={lang} />;
    }
    if (id === 'a3bfb853-43b2-7238-a4f1-ad90e9e46bcc') {
        return <ReynaPage agent={agent} weapons={weapons} lang={lang} />;
    }
    if (id === '569fdd95-4d10-43ab-ca70-79becc718b46') {
        return <SagePage agent={agent} weapons={weapons} lang={lang} />;
    }
    if (id === '6f2a04ca-43e0-be17-7f36-b3908627744d') {
        return <SkyePage agent={agent} weapons={weapons} lang={lang} />;
    }
    if (id === '320b2a48-4d9b-a075-30f1-1f93a9b638fa') {
        return <SovaPage agent={agent} weapons={weapons} lang={lang} />;
    }
    if (id === 'b444168c-4e35-8076-db47-ef9bf368f384') {
        return <TejoPage agent={agent} weapons={weapons} lang={lang} />;
    }
    if (id === '92eeef5d-43b5-1d4a-8d03-b3927a09034b') {
        return <VetoPage agent={agent} weapons={weapons} lang={lang} />;
    }
    if (id === '707eab51-4836-f488-046a-cda6bf494859') {
        return <ViperPage agent={agent} weapons={weapons} lang={lang} />;
    }
    if (id === 'efba5359-4016-a1e5-7626-b1ae76895940') {
        return <VysePage agent={agent} weapons={weapons} lang={lang} />;
    }
    if (id === 'df1cb487-4902-002e-5c17-d28e83e78588') {
        return <WaylayPage agent={agent} weapons={weapons} lang={lang} />;
    }
    if (id === '7f94d92c-4234-0a36-9646-3a87eb8b5c89') {
        return <YoruPage agent={agent} weapons={weapons} lang={lang} />;
    }

    const theme = getAgentTheme(id);
    const themeHex = agent.backgroundGradientColors?.[0]?.slice(0, 6) || 'ff4655';

    const customTheme = {
        '--agent-color': `#${themeHex}`,
        'fontFamily': theme.fontClass
    };

    const voiceLineUrl = agent.voiceLine?.mediaList?.[0]?.wave;
    const randomWeapons = weapons.sort(() => 0.5 - Math.random()).slice(0, 2);

    return (
        <main className={styles.container} style={customTheme}>
            {agent.background && (
                <div
                    className={styles.massiveBackground}
                    style={{ backgroundImage: `url(${agent.background})` }}
                />
            )}

            <div className={styles.topSection}>
                <div className={styles.navigationRow}>
                    <Link href="/" className={styles.backBtn}>&#x25C0; ROSTER</Link>
                    <NativeLanguageButton agentUUID={id} currentLang={lang} />
                </div>

                <div className={`${styles.nameWrapper} slide-up-fast`}>
                    <h1 className={styles.giantName}>{agent.displayName.toUpperCase()}</h1>
                    <h1 className={styles.giantNameGhost}>{agent.displayName.toUpperCase()}</h1>
                </div>
            </div>

            <div className={styles.mainLayout}>
                <div className={`${styles.portraitCol} slide-up-fast`} style={{ animationDelay: '0.1s' }}>
                    <img src={agent.fullPortrait} alt={agent.displayName} className={styles.fullPortrait} />
                </div>

                <div className={`${styles.dossierCol} slide-up-fast`} style={{ animationDelay: '0.2s' }}>
                    <div className={`${styles.roleBox} diagonal-cut`}>
                        <img src={agent.role?.displayIcon} alt="Role" className={styles.roleIcon} />
                        <h2>{agent.role?.displayName || "CLASSIFIED"} //</h2>
                    </div>

                    <p className={styles.agentBio}>{agent.description}</p>

                    {voiceLineUrl && (
                        <div style={{ marginTop: '2rem' }}>
                            <AudioPlayer audioUrl={voiceLineUrl} label={`PLAY [${agent.displayName.toUpperCase()}] VOICE LINE`} />
                        </div>
                    )}

                    <div className={styles.abilitiesSection}>
                        <h3 className={styles.sectionHeading}>ABILITIES</h3>
                        <div className={styles.abilityList}>
                            {agent.abilities.map((ability, idx) => (
                                <div key={idx} className={`${styles.abilityBlock} diagonal-cut-reverse`}>
                                    <div className={styles.abilityIcon}>
                                        {ability.displayIcon ? <img src={ability.displayIcon} alt={ability.displayName} /> : "?"}
                                    </div>
                                    <div className={styles.abilityDetails}>
                                        <h4>{ability.displayName} <span className={styles.slotLabel}>[{ability.slot}]</span></h4>
                                        <p>{ability.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.weaponsSection}>
                        <h3 className={styles.sectionHeading}>PREFERRED ARSENAL</h3>
                        <div className={styles.weaponsGrid}>
                            {randomWeapons.map((weapon) => (
                                <TiltCard key={weapon.uuid} className={`${styles.weaponCard} diagonal-cut`}>
                                    <div className={styles.weaponBg} />
                                    <img src={weapon.displayIcon} alt={weapon.displayName} />
                                    <h4>{weapon.displayName.toUpperCase()}</h4>
                                </TiltCard>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
