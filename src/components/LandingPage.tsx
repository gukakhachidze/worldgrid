import styles from './LandingPage.module.css';

interface LandingPageProps {
  onExplore: () => void;
}

const FEATURES = [
  {
    icon: '🌐',
    title: 'Global Atlas',
    text: '60+ countries with detailed data — population, area, currencies, languages and more.',
  },
  {
    icon: '🔍',
    title: 'Smart Search',
    text: 'Filter by name, continent, or your personal favorites list in real time.',
  },
  {
    icon: '★',
    title: 'Favorites',
    text: 'Bookmark countries you love. Your list is saved across sessions.',
  },
  {
    icon: '✈',
    title: 'Trip Planner',
    text: 'Drag & drop countries to build a custom route and save it to the cloud.',
  },
];

export default function LandingPage({ onExplore }: LandingPageProps) {
  return (
    <main className={`${styles.landing} grid-bg`}>
      {/* ambient glow */}
      <div className={styles.glowOuter} />
      <div className={styles.glowInner} />

      {/* corner decorators */}
      <div className={`${styles.corner} ${styles.cornerTL}`} />
      <div className={`${styles.corner} ${styles.cornerTR}`} />
      <div className={`${styles.corner} ${styles.cornerBL}`} />
      <div className={`${styles.corner} ${styles.cornerBR}`} />

      {/* hero */}
      <div className={styles.hero}>
        <div className={styles.eyebrow}>// CYBERNETIC ATLAS v2.0</div>
        <h1 className={styles.title}>
          <span className={styles.titleLine1}>EXPLORE</span>
          <span className={styles.titleLine2}>THE&nbsp;WORLD</span>
        </h1>
        <p className={styles.subtitle}>
          A next-generation atlas for the modern explorer. Discover every nation,
          analyze geo-intelligence, plan your route across the grid.
        </p>
        <div className={styles.ctaRow}>
          <button className="btn btn-primary btn-lg" onClick={onExplore}>
            ▶&nbsp;Explore Places
          </button>
        </div>
      </div>

      {/* feature cards */}
      <div className={styles.featureGrid}>
        {FEATURES.map(({ icon, title, text }) => (
          <div className={styles.featureCard} key={title}>
            <div className={styles.featureIcon}>{icon}</div>
            <div className={styles.featureTitle}>{title}</div>
            <div className={styles.featureText}>{text}</div>
          </div>
        ))}
      </div>

      {/* data strip */}
      <div className={styles.dataStrip}>
        {['60+ Nations', '7 Continents', 'Real Data', 'Drag & Drop', 'Cloud Save'].map((s) => (
          <span key={s} className={styles.dataItem}>
            <span className={styles.dataMarker}>◈</span> {s}
          </span>
        ))}
      </div>
    </main>
  );
}
