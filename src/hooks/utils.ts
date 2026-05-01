import type { Country } from '../types';

export function formatPopulation(n: number): string {
  if (!n) return 'N/A';
  if (n >= 1e9) return (n / 1e9).toFixed(1) + 'B';
  if (n >= 1e6) return (n / 1e6).toFixed(1) + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(0) + 'K';
  return n.toString();
}

export function formatArea(n?: number): string {
  if (!n) return 'N/A';
  return n.toLocaleString() + ' km²';
}

export function formatCurrencies(currencies?: Country['currencies']): string {
  if (!currencies) return 'N/A';
  return Object.values(currencies)
    .map((c) => `${c.name}${c.symbol ? ` (${c.symbol})` : ''}`)
    .join(', ');
}

export function getFlagEmoji(cca2: string): string {
  if (!cca2 || cca2.length !== 2) return '🌍';
  return cca2
    .toUpperCase()
    .replace(/./g, (c) => String.fromCodePoint(0x1f1e6 - 65 + c.charCodeAt(0)));
}

export function getCallingCode(country: Country): string {
  const root = country.idd?.root ?? '';
  const suffix = (country.idd?.suffixes ?? [''])[0] ?? '';
  return root ? `${root}${suffix}` : 'N/A';
}

export function getNativeName(country: Country): string {
  if (!country.name.nativeName) return '';
  const first = Object.values(country.name.nativeName)[0];
  return first?.common ?? '';
}
