import Link from 'next/link';
import TiltCard from '@/components/TiltCard';
import styles from './page.module.css';

export default async function Home() {
  const res = await fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true', {
    next: { revalidate: 3600 }
  });
  const data = await res.json();
  const agents = data.data;

  agents.sort((a, b) => a.displayName.localeCompare(b.displayName));

  return (
    <main className={styles.container}>
      <div className={styles.heroSection}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <h1 className="slide-up-fast">VALOWIKI</h1>
          <h2 className="slide-up-fast" style={{ animationDelay: '0.1s' }}>AGENT PROTOCOL</h2>
          <div className={styles.heroAccent} />
        </div>
      </div>

      <div className={styles.rosterContainer}>
        <div className={styles.rosterGrid}>
          {agents.map((agent, i) => (
            <Link href={`/agent/${agent.uuid}`} key={agent.uuid} className={styles.cardLink}>
              <TiltCard className={`${styles.agentCard} slide-up-fast`} style={{ animationDelay: `${0.1 + (i * 0.05)}s` }}>
                {/* Background color block extracted from agent */}
                <div
                  className={styles.agentColorFill}
                  style={{ backgroundColor: `#${agent.backgroundGradientColors?.[0]?.slice(0, 6) || 'ff4655'}` }}
                />

                {/* Agent Render Image floating outside card bound pseudo-3D */}
                <img
                  src={agent.fullPortrait}
                  alt={agent.displayName}
                  className={styles.agentImage}
                />

                <div className={styles.agentInfo}>
                  <div className={styles.agentRoleIcon}>
                    {agent.role?.displayIcon && <img src={agent.role.displayIcon} alt="Role" />}
                  </div>
                  <h3 className={styles.agentName}>
                    {agent.displayName.toUpperCase()}
                  </h3>
                </div>
              </TiltCard>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
