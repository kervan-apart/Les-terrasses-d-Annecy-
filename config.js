// ============================================================
// CONFIGURATION GOOGLE SHEETS — Les Terrasses d'Annecy
// ============================================================
const SHEET_PUBLISHED_ID = '2PACX-1vQvrN_QDXFXyGAPrHldKdEWRrcqUrWYk3pxwlGnp1_IRld9lQa4mRCQ20HSzNFtX2kutrObEIzOj0E-';
const GID_TARIFS = '1581779442';
const GID_RESERVATIONS = '1808993612';

const BASE_URL = `https://docs.google.com/spreadsheets/d/e/${SHEET_PUBLISHED_ID}/pub?output=csv`;
const URL_TARIFS       = BASE_URL + `&gid=${GID_TARIFS}`;
const URL_RESERVATIONS = BASE_URL + `&gid=${GID_RESERVATIONS}`;
