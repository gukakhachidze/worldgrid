import type { Country } from '../types';
import { getFlagEmoji, formatPopulation } from '../hooks/utils';
import styles from './CountryCard.module.css';

interface CountryCardProps {
  country: Country;
  isFav: boolean;
  inTrip: boolean;
  onOpen: (c: Country) => void;
  onToggleFav: (c: Country) => void;
  onAddToTrip: (c: Country) => void;
  onDragStart: (e: React.DragEvent, c: Country) => void;
}

export default function CountryCard({
  country, isFav, inTrip, onOpen, onToggleFav, onAddToTrip, onDragStart,
}: CountryCardProps) {
  const emoji = getFlagEmoji(country.cca2);

  return (
    <div
      className={styles.card}
      draggable
      onDragStart={(e) => onDragStart(e, country)}
    >
      {/* Flag */}
      <div className={styles.flagWrap}>
        {country.flags?.png || country.flags?.svg ? (
          <img
            src={country.flags.png ?? country.flags.svg}
            alt={country.name.common}
            className={styles.flag}
            loading="lazy"
          />
        ) : (
          <div className={styles.flagPlaceholder}>{emoji}</div>
        )}

        <button
          className={`${styles.favBtn}${isFav ? ` ${styles.favActive}` : ''}`}
          onClick={(e) => { e.stopPropagation(); onToggleFav(country); }}
          title={isFav ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFav ? '★' : '☆'}
        </button>

        {inTrip && <div className={styles.inTripBadge}>IN TRIP</div>}
      </div>

      {/* Info */}
      <div className={styles.info} onClick={() => onOpen(country)}>
        <div className={styles.name}>{country.name.common}</div>
        <div className={styles.region}>{country.subregion ?? country.region}</div>
        <div className={styles.meta}>
          <span className={styles.metaLabel}>Capital </span>
          {country.capital?.[0] ?? 'N/A'}
        </div>
        <div className={styles.meta}>
          <span className={styles.metaLabel}>Pop </span>
          {formatPopulation(country.population)}
        </div>
      </div>

      {/* Actions */}
      <div className={styles.actions}>
        <button className="btn btn-ghost btn-sm" style={{ flex: 1 }} onClick={() => onOpen(country)}>
          Details
        </button>
        <button
          className={`btn btn-sm ${inTrip ? 'btn-ghost' : 'btn-cyan'}`}
          style={{ flex: 1 }}
          onClick={() => onAddToTrip(country)}
          disabled={inTrip}
        >
          {inTrip ? '✓ Added' : '+ Trip'}
        </button>
      </div>
    </div>
  );
}
