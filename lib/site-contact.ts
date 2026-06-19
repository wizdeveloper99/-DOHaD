export const SECRETARIAT_ORG_LINES = [
  "Centre for Developmental and Lifecourse Research (CDLR),",
  "Public Health Foundation of India (PHFI),",
] as const;

export const SECRETARIAT_ADDRESS_LINES = [
  "Epidemic Diseases (Isolation) Hospital compound,",
  "Near Swami Vivekananda Metro Station, Old Madras Road,",
  "Indiranagar, Bengaluru -560038",
] as const;

export const SECRETARIAT_WHO_WE_ARE_TEXT = `The current secretariat is at the ${[
  ...SECRETARIAT_ORG_LINES,
  ...SECRETARIAT_ADDRESS_LINES,
].join(" ")}`;

export const SECRETARIAT_COORDINATES = {
  lat: 12.9859373,
  lng: 77.6442694,
} as const;

export const SECRETARIAT_MAPS_URL = "https://share.google/n8tDoU7EX3yVWckMO";

export const SECRETARIAT_MAPS_EMBED_URL = `https://www.google.com/maps?q=${SECRETARIAT_COORDINATES.lat},${SECRETARIAT_COORDINATES.lng}&hl=en&z=17&output=embed`;
