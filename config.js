// ─────────────────────────────────────────────────────────────────────────
//  ShowTime website settings — edit these values; no need to touch index.html
// ─────────────────────────────────────────────────────────────────────────
window.SHOWTIME_CONFIG = {
  // Google Analytics 4 — paste your Measurement ID here to switch analytics on.
  // Format: 'G-XXXXXXXXXX'. Leave blank ('') and nothing loads / no tracking.
  gaMeasurementId: 'G-N9YQL53K74',

  // Hero "splash" — the cycling stage visuals behind the headline panel.
  hero: {
    enabled: true,        // false = single static backdrop (no cycling)
    holdMs: 6000,         // how long each stage visual stays before fading
    fadeMs: 1200,         // cross-fade duration between visuals
    // add / remove / reorder freely — each visual has a name and an image path
    frames: [
      { name: 'Yellow beams + crowd',   src: 'static/hero_frame1.jpg' },
      { name: 'Orange crowd, light bars', src: 'static/hero_frame2.jpg' },
      { name: 'Red light-rig',           src: 'static/hero_frame3.jpg' }
    ]
  },

  // Page backdrop — a SUBTLE rotating wallpaper behind the whole page (below the hero).
  // Add / remove / reorder image paths freely. Keep opacity low so text stays readable.
  // Set enabled:false for a plain dark page; or list a single image for a static backdrop.
  wallpaper: {
    enabled: true,
    opacity: 0.14,        // 0.10 = whisper, 0.20 = bolder; readability drops above ~0.22
    holdMs: 9000,         // how long each photo holds before fading
    fadeMs: 1600,         // cross-fade duration
    frames: [
      'static/hero_frame1.jpg',
      'static/hero_frame2.jpg',
      'static/hero_frame3.jpg'
    ]
  }
};
