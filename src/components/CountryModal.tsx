import type { Country } from '../types';
import { getFlagEmoji, formatPopulation, formatArea, formatCurrencies, getCallingCode, getNativeName } from '../hooks/utils';
import styles from './CountryModal.module.css';

interface CountryModalProps {
  country: Country;
  isFav: boolean;
  inTrip: boolean;
  onClose: () => void;
  onToggleFav: (c: Country) => void;
  onAddToTrip: (c: Country) => void;
}

export default function CountryModal({ country, isFav, inTrip, onClose, onToggleFav, onAddToTrip }: CountryModalProps) {
  const nativeName = getNativeName(country);
  const langs = country.languages ? Object.values(country.languages) : [];
  const currencies = formatCurrencies(country.currencies);
  const borders = country.borders ?? [];
  const emoji = getFlagEmoji(country.cca2);

  const fields: [string, string][] = [
    ['Capital', country.capital?.[0] ?? 'N/A'],
    ['Region', country.region],
    ['Sub-region', country.subregion ?? 'N/A'],
    ['Population', formatPopulation(country.population)],
    ['Area', formatArea(country.area)],
    ['Currencies', currencies],
    ['Calling Code', getCallingCode(country)],
    ['TLD', country.tld?.[0] ?? 'N/A'],
    ['Timezones', country.timezones?.length ? country.timezones[0] + (country.timezones.length > 1 ? ` +${country.timezones.length - 1}` : '') : 'N/A'],
    ['Continent', country.continents?.join(', ') ?? 'N/A'],
  ];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Close */}
        <button className={styles.closeBtn} onClick={onClose}>✕</button>

        {/* Flag header */}
        <div className={styles.flagHeader}>
          {country.flags?.svg || country.flags?.png ? (
            <img src={country.flags.svg ?? country.flags.png} alt={country.name.common} className={styles.flagImg} />
          ) : (
            <div className={styles.flagPlaceholder}>{emoji}</div>
          )}
          <div className={styles.flagOverlay} />
          <div className={styles.flagInfo}>
            <div className={styles.flagEmoji}>{emoji}</div>
            <div className={styles.flagCca}>{country.cca2}</div>
          </div>
        </div>

        {/* Body */}
        <div className={styles.body}>
          <div className={styles.heading}>
            <div className={styles.title}>{country.name.common}</div>
            {nativeName && nativeName !== country.name.common && (
              <div className={styles.nativeName}>{nativeName}</div>
            )}
            <div className={styles.officialName}>{country.name.official}</div>
          </div>

          <div className={styles.divider} />

          <div className={styles.grid}>
            {fields.map(([label, value]) => (
              <div className={styles.field} key={label}>
                <div className={styles.fieldLabel}>{label}</div>
                <div className={styles.fieldValue}>{value}</div>
              </div>
            ))}
          </div>

          {langs.length > 0 && (
            <>
              <div className={styles.divider} />
              <div className={styles.sectionTitle}>// Languages</div>
              <div className={styles.tags}>
                {langs.map((l) => <span key={l} className="tag">{l}</span>)}
              </div>
            </>
          )}

          {borders.length > 0 && (
            <>
              <div className={styles.divider} />
              <div className={styles.sectionTitle}>// Bordering Countries</div>
              <div className={styles.tags}>
                {borders.map((b) => <span key={b} className="tag tag-cyan">{b}</span>)}
              </div>
            </>
          )}

          <div className={styles.divider} />
          <div className={styles.modalActions}>
            <button
              className={`btn btn-sm ${isFav ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => onToggleFav(country)}
            >
              {isFav ? '★ Favorited' : '☆ Add to Favorites'}
            </button>
            <button
              className={`btn btn-sm ${inTrip ? 'btn-ghost' : 'btn-cyan'}`}
              onClick={() => onAddToTrip(country)}
              disabled={inTrip}
            >
              {inTrip ? '✓ In Trip' : '✈ Add to Trip'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
