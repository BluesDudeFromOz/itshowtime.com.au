# ShowTime — How-To Help

This is the functionality reference the ShowTime AI assistants (in-app + website) answer from. It is
product documentation — how to USE ShowTime — not source code. Keep entries short, each with a
**Keywords** line so the assistant matches however a user phrases the question. If something isn't
covered here, say so briefly and point the user to **support@itsshowtime.com.au** — never invent a
button or setting.

---

## Chord shapes — guitar boxes & piano keyboard (Learner view)
Keywords: keyboard, piano chords, tablature, guitar tab, chord shapes, chord diagrams, learner view, show chords, finger positions, beginner chords, how do I see the keyboard, how do I get tablature to show

The chord-shape diagrams — a guitar fretboard box **and** a piano keyboard for every chord in the
song — are **off by default** so they don't clutter the view for experienced players. Turn them on
once:

1. Open **Setup** (the cog) → **System Configuration**.
2. Find the setting **`learner_view_enabled`** and set it to **`1`**, then **Save**.
3. **Reload** the page. A **🎹 Chord shapes** button now appears (bottom-left). Tap it and the
   diagrams dock down the right-hand side, redrawing live as you transpose.

Set **`learner_view_enabled`** back to **`0`** to hide them again. (It's a setting, not an
instrument/annotation filter.)

---

## Adding band members
Keywords: add musician, add band member, add player, new member, band lineup, who plays in the band, manage members

ShowTime manages members as **Payees** — there is **no** separate "Add Band Member" button.

1. From the **Home / Search** screen, open **Gigs & Billing** (the band-admin area) — the button is
   on the Home / Search page.
2. Go to the **Payees** tab → add the person; tick **Default player** and list which band(s) they
   play in.
3. The **Bands** tab then shows them in that band's default lineup (you can swap in a reserve
   per-gig).

---

## Importing songs (iReal Pro, ChordPro, pasted chords)
Keywords: import, iReal, iReal Pro, ireal chart, ChordPro, import setlist, add a chart, paste chords

Tap **Import Songs** to bring in iReal Pro charts, ChordPro files, or pasted chords. The chart renders
as a ShowTime chart you can transpose and save like any other.

---

## Editing a song's chords / chart
Keywords: edit song, edit chart, edit chords, edit this song, fix chords, change lyrics, fix spacing, edit menu, config menu, how do I edit

To edit the current song's chart (chords, lyrics, spacing):
1. Open the **config / Setup menu** in the toolbar (the config / cog icon).
2. Choose **Edit Chart** — the edit icon that appears **just below the config icon**. (This is NOT
   the "Chart / Lyrics" view dropdown — that only switches what you're *viewing*.)
3. Make your changes, then save.

To change a song's *details* (BPM, key, drum pattern) instead, use **Edit Song Metadata**.

---

## Adding images or videos to a song
Keywords: add video, add image, add a video, song video, per-song video, slideshow, media, picture, manage images and videos, attach video, video playback

Per-song images and videos are managed in the **Media Manager**:
1. Open the song's **Edit Song Metadata** (config / Setup menu → Edit Song Metadata).
2. Click **Manage Images & Videos**.
3. In the **Media Manager**, add your image(s) or video(s) for this song.

These power the per-song slideshow and video playback during performance.

---

## Pre-show, intermission & post-show slideshows / videos (projection)
Keywords: pre-show, preshow, intermission, intermission video, post-show, postshow, slideshow, projection, before the show, between sets, after the show, walk-in visuals, break video

These play on the projection screen before the show, during the break, and after the show. They're
managed in the **Media Manager** (the same place as song media):
1. Open the **Media Manager** (Edit Song Metadata → Manage Images & Videos).
2. Add your image(s) or video(s) and set each item's **type** to **Pre-Show**, **Intermission**, or
   **Post-Show** (the type selector / filter buttons).
3. Use **Slideshow Settings** in the Media Manager to control timing and transitions.
4. Start a pre-show or post-show from your **playlist's** show buttons.

---

## Seeing a song's story / history on stage (the "i" info button)
Keywords: song story, song history, history of the song, history of this song, artist notes, song info, information, the i button, small i, backstory, background, see the metadata while playing, song notes

When a song has a story/history saved in its metadata, a **small "i" (information) icon appears** in
the toolbar next to the song title. **If the song has no history saved, the icon doesn't show** — so
seeing the "i" means there's something to read.

- A **single tap / finger touch** on the "i" exposes the saved **song story & artist notes**.
- A **single tap** (anywhere) returns you to the song page.

You don't need the Setup menu or the metadata editor — the "i" is the one-tap on-stage path. (Small
**MIDI** and **DMX** icons appear beside it the same way when those are set for the song.)

---

## Finding / opening a song
Keywords: find a song, search, open a song, song library, where are my songs

Go to the **Home / Search** screen. Use the search box, or browse the song library, and tap a song to
open its chart.

---

## The dots on the bottom bar — visual metronome (BPM beat dots)
Keywords: dots, four dots, 4 dots, bottom bar dots, beat dots, metronome, visual metronome, tempo, pulsing dots, flashing dots, what are the dots, turn off the dots, BPM dots, speed guide

The dots along the bottom bar are a **visual metronome** (BPM beat dots) — **not** a page indicator.
When a song has a **BPM** and **time signature** set in its metadata, the dots pulse in time as a
silent speed guide for the song. The number of dots matches the time signature — **4/4 → 4 dots,
3/4 → 3 dots, 6/8 → 6 dots**.

If they're distracting, **turn them off with the "BPM beat dots" toggle switch right next to them**.

---

## The two menus — top toolbar vs the Setup (cog) menu
Keywords: top menu, top toolbar, right menu, side menu, cog, cog menu, gear icon, setup menu, two menus, why two menus, difference between the menus, what is the cog, the menu on the right

ShowTime has two menus, on purpose:
- **Top toolbar** = **performance controls** you use *while playing* — transpose, play, crew messages,
  blackout, page view, fullscreen, etc. It stays clean and tap-friendly on stage.
- **Setup menu** = the **cog / gear icon on the right**; click it to expand the **admin & editing**
  tools you use *before or after* a gig — Edit Chart, Edit Song Metadata, Manage Images & Videos,
  System Configuration, and more.

They're kept separate so the performance toolbar stays focused on what you tap mid-song, and the
editing tools are tucked away on the right where you won't hit them by accident while playing.

---

## Playing hands-free / foot pedal navigation (no mouse on stage)
Keywords: foot pedal, footswitch, foot controller, no mouse, hands free, hands-free, pedal, play without mouse, navigate without touching, up down left right, page turn pedal, four button pedal

You never need a mouse while performing. ShowTime is fully touch-friendly (tap any on-screen button),
and for true hands-free control it drives from a **4-button foot pedal — Up / Down / Left / Right**:

- **Left / Right** — move along the toolbar to **select** the function you want.
- **Up / Down** — **execute** the selected function (and, for some functions, perform the action
  directly).

Examples:
- **Home**: **Up** jumps to the **setlist you were playing from**; **Down** drops the cursor into the
  **search box**.
- **Transpose**: **Up** transposes the chords **up** a semitone, **Down** transposes **down** (same
  for changing the key).
- **Instrument transpose** (Eb / Bb / F / G modes): **Up / Down** scroll through the available
  **instrument keys**; press **Left or Right** to **select** the highlighted one.

(On a multi-device gig, the **Master** player's controls follow to everyone in sync, so often only one
person needs to act at all.)

---

## Transposing a song / changing key
Keywords: transpose, change key, key change, circle of keys, circle of fifths, capo, raise key, lower key, what key, where is transpose

Open a song first — the transpose controls live in the **chart toolbar** (top of the screen):
- The **Transpose** button (then the **▲ / ▼** arrows) shifts the whole chart up or down a semitone.
- Next to it is the **Circle of Fifths** button — the "circle of keys" — a visual key reference.

On a synced gig the transpose follows to every connected device in real time, and annotations move
with it. (If the transpose button isn't visible, you're not on a song chart yet — open a song first.)

---

## Sending messages to crew / roadies
Keywords: crew message, message roadies, send to crew, alert crew, stage manager, lighting, sound, send a message

Tap the **Send crew message** button in the toolbar (the crew / 📢 icon) to open the Crew Message
panel, then send your message. Crew on their phones receive it and can tap to **acknowledge** so you
know it landed. Crew connect free and never use a musician slot.

---

## When you don't know
If a question isn't covered above, say so briefly and suggest emailing **support@itsshowtime.com.au**.
Do not invent buttons, menus or settings that aren't documented here.
