import { useState, useMemo } from 'react';
import type { Country, Continent } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';
import COUNTRIES_DATA from '../data/countries';
import CountryCard from './CountryCard';
import CountryModal from './CountryModal';
import TripSidebar from './TripSidebar';
import styles from './CountriesPage.module.css';

const CONTINENTS: Continent[] = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

interface CountriesPageProps {
  tripCountries: Country[];
  sidebarOpen: boolean;
  onAddToTrip: (c: Country) => void;
  onRemoveFromTrip: (c: Country) => void;
  onReorderTrip: (countries: Country[]) => void;
  onCloseSidebar: () => void;
}

export default function CountriesPage({
  tripCountries, sidebarOpen,
  onAddToTrip, onRemoveFromTrip, onReorderTrip, onCloseSidebar,
}: CountriesPageProps) {
  const [search, setSearch] = useState('');
  const [continent, setContinent] = useState<Continent>('All');
  const [showFavs, setShowFavs] = useState(false);
  const [modalCountry, setModalCountry] = useState<Country | null>(null);
  const [favorites, setFavorites] = useLocalStorage<string[]>('wg_favorites', []);

  function toggleFav(country: Country) {
    setFavorites((prev) =>
      prev.includes(country.cca2)
        ? prev.filter((c) => c !== country.cca2)
        : [...prev, country.cca2]
    );
  }

  function handleDragStart(e: React.DragEvent, country: Country) {
    e.dataTransfer.setData('countryCode', country.cca2);
    e.dataTransfer.effectAllowed = 'copy';
  }

  const filtered = useMemo(() => {
    return COUNTRIES_DATA.filter((c) => {
      const matchSearch = c.name.common.toLowerCase().includes(search.toLowerCase());
      const matchContinent = continent === 'All' || c.region === continent;
      const matchFav = !showFavs || favorites.includes(c.cca2);
      return matchSearch && matchContinent && matchFav;
    }).sort((a, b) => a.name.common.localeCompare(b.name.common));
  }, [search, continent, showFavs, favorites]);

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <div className={styles.pageTitle}>
          <span className={styles.titleSlash}>// </span>Countries
        </div>
        <span className={styles.count}>{filtered.length} results</span>
        <div style={{ flex: 1 }} />
        <button
          className={`btn btn-sm ${showFavs ? 'btn-primary' : 'btn-ghost'}`}
          onClick={() => setShowFavs((v) => !v)}
        >
          {showFavs ? '★' : '☆'} Favorites ({favorites.length})
        </button>
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <div className={styles.searchWrap}>
          <span className={styles.searchIcon}>⌕</span>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search countries..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button className={styles.searchClear} onClick={() => setSearch('')}>✕</button>
          )}
        </div>

        <div className={styles.filterTabs}>
          {CONTINENTS.map((c) => (
            <button
              key={c}
              className={`${styles.filterTab}${continent === c ? ` ${styles.activeTab}` : ''}`}
              onClick={() => setContinent(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {filtered.length === 0 ? (
          <div className={styles.empty}>
            <div>No countries match your search</div>
            <button className="btn btn-ghost btn-sm" style={{ marginTop: '1rem' }}
              onClick={() => { setSearch(''); setContinent('All'); setShowFavs(false); }}>
              Clear filters
            </button>
          </div>
        ) : (
          filtered.map((c) => (
            <CountryCard
              key={c.cca2}
              country={c}
              isFav={favorites.includes(c.cca2)}
              inTrip={tripCountries.some((t) => t.cca2 === c.cca2)}
              onOpen={setModalCountry}
              onToggleFav={toggleFav}
              onAddToTrip={onAddToTrip}
              onDragStart={handleDragStart}
            />
          ))
        )}
      </div>

      {/* Modal */}
      {modalCountry && (
        <CountryModal
          country={modalCountry}
          isFav={favorites.includes(modalCountry.cca2)}
          inTrip={tripCountries.some((t) => t.cca2 === modalCountry.cca2)}
          onClose={() => setModalCountry(null)}
          onToggleFav={toggleFav}
          onAddToTrip={onAddToTrip}
        />
      )}

      {/* Sidebar */}
      <TripSidebar
        open={sidebarOpen}
        tripCountries={tripCountries}
        onClose={onCloseSidebar}
        onRemove={onRemoveFromTrip}
        onReorder={onReorderTrip}
      />
    </div>
  );
}
