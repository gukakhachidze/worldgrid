import type { Page } from '../types';
import styles from './Navbar.module.css';

interface NavbarProps {
  page: Page;
  tripCount: number;
  onHome: () => void;
  onPlanTrip: () => void;
}

export default function Navbar({ page, tripCount, onHome, onPlanTrip }: NavbarProps) {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo} onClick={onHome}>
        World<span className={styles.logoAccent}>Grid</span>
        <span className={styles.logoBlink}>_</span>
      </div>

      <div className={styles.actions}>
        {page === 'countries' && (
          <button className="btn btn-ghost btn-sm" onClick={onHome}>
            ← Home
          </button>
        )}
        <button className="btn btn-cyan btn-sm" onClick={onPlanTrip}>
          ✈ Plan a Trip{tripCount > 0 ? ` (${tripCount})` : ''}
        </button>
      </div>
    </nav>
  );
}
