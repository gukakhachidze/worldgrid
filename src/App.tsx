import { useState } from 'react';
import type { Country, Page } from './types';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import CountriesPage from './components/CountriesPage';

export default function App() {
  const [page, setPage] = useState<Page>('landing');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tripCountries, setTripCountries] = useState<Country[]>([]);

  function handlePlanTrip() {
    if (page === 'landing') {
      setPage('countries');
      // slight delay so page renders first
      setTimeout(() => setSidebarOpen(true), 80);
    } else {
      setSidebarOpen(true);
    }
  }

  function addToTrip(country: Country) {
    setTripCountries((prev) => {
      if (prev.some((c) => c.cca2 === country.cca2)) return prev;
      return [...prev, country];
    });
  }

  function removeFromTrip(country: Country) {
    setTripCountries((prev) => prev.filter((c) => c.cca2 !== country.cca2));
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--black)' }}>
      <Navbar
        page={page}
        tripCount={tripCountries.length}
        onHome={() => { setPage('landing'); setSidebarOpen(false); }}
        onPlanTrip={handlePlanTrip}
      />

      {page === 'landing' ? (
        <LandingPage onExplore={() => setPage('countries')} />
      ) : (
        <CountriesPage
          tripCountries={tripCountries}
          sidebarOpen={sidebarOpen}
          onAddToTrip={addToTrip}
          onRemoveFromTrip={removeFromTrip}
          onReorderTrip={setTripCountries}
          onCloseSidebar={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
