/** Calendar day as YYYY-MM-DD in local timezone (not UTC midnight parsing). */
export function toLocalDateKey(value: string | Date): string {
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
