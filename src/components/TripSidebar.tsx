import { useState, useEffect } from 'react';
import type { Country, SavedTrip } from '../types';
import { getFlagEmoji } from '../hooks/utils';
import styles from './TripSidebar.module.css';

interface TripSidebarProps {
  open: boolean;
  tripCountries: Country[];
  onClose: () => void;
  onRemove: (c: Country) => void;
  onReorder: (countries: Country[]) => void;
}

export default function TripSidebar({ open, tripCountries, onClose, onRemove, onReorder }: TripSidebarProps) {
  const [savedTrips, setSavedTrips] = useState<SavedTrip[]>([]);
  const [showSaved, setShowSaved] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'ok' | 'err' | null>(null);
  const [dragIdx, setDragIdx] = useState<number | null>(null);
  const [dropIdx, setDropIdx] = useState<number | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('wg_savedTrips');
      if (stored) setSavedTrips(JSON.parse(stored));
    } catch { /* ignore */ }
  }, [open]);

  function handleSave() {
    if (tripCountries.length === 0) return;
    const newTrip: SavedTrip = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      countries: tripCountries.map((c) => ({ name: c.name.common, cca2: c.cca2 })),
    };
    const updated = [...savedTrips, newTrip];
    setSavedTrips(updated);
    localStorage.setItem('wg_savedTrips', JSON.stringify(updated));

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({ trip: newTrip }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(() => { setSaveStatus('ok'); setTimeout(() => setSaveStatus(null), 2500); })
      .catch(() => { setSaveStatus('err'); setTimeout(() => setSaveStatus(null), 2500); });
  }

  function handleDragStart(idx: number) { setDragIdx(idx); }
  function handleDragOver(e: React.DragEvent, idx: number) { e.preventDefault(); setDropIdx(idx); }
  function handleDrop(e: React.DragEvent, idx: number) {
    e.preventDefault();
    if (dragIdx === null || dragIdx === idx) { setDragIdx(null); setDropIdx(null); return; }
    const reordered = [...tripCountries];
    const [removed] = reordered.splice(dragIdx, 1);
    reordered.splice(idx, 0, removed);
    onReorder(reordered);
    setDragIdx(null); setDropIdx(null);
  }

  if (!open) return null;

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <aside className={styles.sidebar}>
        <div className={styles.header}>
          <div className={styles.title}>
            <span className={styles.titlePrefix}>// </span>
            {showSaved ? 'Saved Trips' : 'Plan a Trip'}
          </div>
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
        </div>

        {!showSaved ? (
          <>
            <div className={styles.body}>
              {tripCountries.length === 0 ? (
                <div className={styles.emptyHint}>
                  <div className={styles.emptyIcon}>✈</div>
                  <div>Drag countries from the list</div>
                  <div>or use the <strong>+ Trip</strong> button</div>
                  <div className={styles.emptyDrop}>↓ drop here ↓</div>
                </div>
              ) : (
                tripCountries.map((c, idx) => (
                  <div
                    key={c.cca2}
                    className={`${styles.tripItem}${dropIdx === idx ? ` ${styles.dropTarget}` : ''}`}
                    draggable
                    onDragStart={() => handleDragStart(idx)}
                    onDragOver={(e) => handleDragOver(e, idx)}
                    onDrop={(e) => handleDrop(e, idx)}
                    onDragEnd={() => { setDragIdx(null); setDropIdx(null); }}
                  >
                    <span className={styles.dragHandle}>⠿</span>
                    <span className={styles.tripFlag}>{getFlagEmoji(c.cca2)}</span>
                    <div className={styles.tripInfo}>
                      <div className={styles.tripName}>{c.name.common}</div>
                      <div className={styles.tripRegion}>{c.region}</div>
                    </div>
                    <button className={styles.removeBtn} onClick={() => onRemove(c)} title="Remove">✕</button>
                  </div>
                ))
              )}
            </div>

            <div className={styles.footer}>
              {saveStatus && (
                <div className={`${styles.saveStatus} ${saveStatus === 'ok' ? styles.saveOk : styles.saveErr}`}>
                  {saveStatus === 'ok' ? '✓ Trip saved successfully' : '✗ Saved locally only'}
                </div>
              )}
              <button
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={handleSave}
                disabled={tripCountries.length === 0}
              >
                💾 Save a Trip
              </button>
              {savedTrips.length > 0 && (
                <button
                  className="btn btn-ghost"
                  style={{ width: '100%' }}
                  onClick={() => setShowSaved(true)}
                >
                  📋 Saved Trips ({savedTrips.length})
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            <div className={styles.body}>
              {savedTrips.length === 0 ? (
                <div className={styles.emptyHint}>No saved trips yet.</div>
              ) : (
                <div className={styles.savedList}>
                  {[...savedTrips].reverse().map((trip) => (
                    <div key={trip.id} className={styles.savedItem}>
                      <div className={styles.savedDate}>{trip.date}</div>
                      <div className={styles.savedCountries}>
                        {trip.countries.map((c) => (
                          <span key={c.cca2} className={styles.savedTag}>
                            {getFlagEmoji(c.cca2)} {c.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className={styles.footer}>
              <button className="btn btn-ghost" style={{ width: '100%' }} onClick={() => setShowSaved(false)}>
                ← Back to Planner
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
