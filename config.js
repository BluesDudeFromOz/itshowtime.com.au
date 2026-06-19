// ─────────────────────────────────────────────────────────────────────────
//  ShowTime website settings — edit these values; no need to touch index.html
// ─────────────────────────────────────────────────────────────────────────
window.SHOWTIME_CONFIG = {
  // Hero "splash" — the cycling stage visuals behind the headline panel.
  hero: {
    enabled: true,        // false = single static backdrop (no cycling)
    holdMs: 6000,         // how long each stage visual stays before fading
    fadeMs: 1200,         // cross-fade duration between visuals
    frames: [             // add / remove / reorder freely (paths from site root)
      'static/hero_frame1.jpg',   // yellow beams + crowd
      'static/hero_frame2.jpg',   // orange crowd, light bars
      'static/hero_frame3.jpg'    // red light-rig
    ]
  }
};
