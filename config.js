// ─────────────────────────────────────────────────────────────────────────
//  ShowTime website settings — edit these values; no need to touch index.html
// ─────────────────────────────────────────────────────────────────────────
window.SHOWTIME_CONFIG = {
  // Google Analytics 4 — paste your Measurement ID here to switch analytics on.
  // Format: 'G-XXXXXXXXXX'. Leave blank ('') and nothing loads / no tracking.
  gaMeasurementId: '',

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
  }
};
