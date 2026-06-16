const DATE_KEY_RE = /^(\d{4})-(\d{2})-(\d{2})/;
const DATE_ONLY_RE = /^(\d{4})-(\d{2})-(\d{2})$/;

/** Store calendar dates at noon UTC so YYYY-MM-DD comparisons stay correct across time zones. */
export function parseEventDateInput(value: string | Date): Date {
  if (value instanceof Date) return value;
  const dateOnly = value.match(DATE_ONLY_RE);
  if (dateOnly) {
    return new Date(`${dateOnly[1]}-${dateOnly[2]}-${dateOnly[3]}T12:00:00.000Z`);
  }
  return new Date(value);
}

/** Calendar day as YYYY-MM-DD. Date-only strings are taken literally (no UTC parsing). */
export function toLocalDateKey(value: string | Date): string {
  if (typeof value === 'string') {
    const match = value.match(DATE_KEY_RE);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
  }

  const date = typeof value === 'string' ? new Date(value) : value;
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function todayLocalDateKey(): string {
  return toLocalDateKey(new Date());
}

/** True when the event date is today or later (by calendar day, not clock time). */
export function isUpcomingEvent(startDate: string | Date): boolean {
  return toLocalDateKey(startDate) >= todayLocalDateKey();
}

export function isPastEvent(startDate: string | Date): boolean {
  return !isUpcomingEvent(startDate);
}
