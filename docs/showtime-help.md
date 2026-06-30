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

> Want **your own** version, or to add **passing chords** without changing the leader's chart? Don't
> use Edit Chart — see **Making your own version of a chart** below.

---

## Making your own version of a chart — passing chords & personal changes (without changing the leader's chart)
Keywords: passing chords, add a passing chord, my own chart, my own version, my version, make my chart different, the leader gave me, leader's chart, change my chart only, personalise chart, personalize chart, customise chords, customize chords, extra chord, add my own chords, different from the leader, my part, alternate chart, second chart

If the leader shared the charts but you want **your own** version — different voicings, extra
**passing chords**, personal reminders — there are **two non-destructive ways** that do **not** alter
the leader's original chart:

1. **Add your own chart for the song.** At the **top-left**, next to the **Chart** selector (it shows
   the current chart, e.g. "Lyrics"), tap the green **➕** to **add a new chart** for this song. Edit
   your new chart freely and add your passing chords. The leader's original stays intact as a separate
   chart you can switch back to from the same selector at any time.
2. **Add an annotation (an overlay).** Open the **Setup / cog menu on the right-hand side** to expand
   it, then tap the **Annotations** button. You can drop **extra chords, notes, or a key signature**
   straight onto the chart **without editing it** — and annotations **transpose with the song** if you
   change key.

Use **Edit Chart** (config/cog menu → Edit Chart) **only** when you genuinely want to change *this*
chart itself. For a separate personal version, use the **➕ new chart**; for quick non-destructive
markings, use **Annotations**.

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

> Want the band's **screens** dark during the break (but keep the projector lighting the stage)? Use
> the **Sleep / snooze (alarm-clock) icon** — see below.

---

## Blanking the band's screens for a break (Sleep / snooze — the alarm-clock icon)
Keywords: blank screen, blank the screens, black screen, sleep, snooze, alarm clock, alarm clock icon, break, intermission, interval, turn off screens, screens too bright, screen light, dim screens, hide the charts, dark screens between sets, blackout devices, lighting the stage, rest the screens

To black out the **band's device screens** (so the tablets/phones aren't lit up or showing charts
during a break), use the **Sleep / snooze button — the alarm-clock icon** in the toolbar.

- When the **Master** taps it, **every connected screen — the master and all slave devices — blanks to
  black** at once (it broadcasts to everyone). Tap it again to wake them and bring the charts back.
- The **projector is NOT affected** — it keeps showing whatever's on it.

So for "the screens are giving off light / we want to light the stage during the break": tap the
**alarm-clock (sleep) icon** to black out the band's screens, and let the **projector's Intermission
slideshow/video** light the room (see *Pre-show, intermission & post-show slideshows* above). The two
work together — dark band screens, lit stage.

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
Keywords: transpose, change key, key change, capo, raise key, lower key, what key, where is transpose

Open a song first — the transpose controls live in the **chart toolbar** (top of the screen):
- The **Transpose** button (then the **▲ / ▼** arrows) shifts the whole chart up or down a semitone.
- Next to it is the **Circle of Keys** button — a playing/improvising aid (see its own entry below).

On a synced gig the transpose follows to every connected device in real time, and annotations move
with it. (If the transpose button isn't visible, you're not on a song chart yet — open a song first.)

---

## The Circle of Fifths / Circle of Keys button — a playing & improvising aid
Keywords: circle of fifths, circle of keys, key wheel, related chords, chords in a key, chord relationships, 1-4-5, 145, blues chords, blues, 2-5-1, 251, 1-6-2-5-1, common progressions, what chords go together, improvise, improvising, modulate, change key smoothly, neighbouring chords, next chord, focus on the tune, how do I use the circle

Open a song, then tap the **Circle of Fifths / Circle of Keys** button in the chart toolbar (next to
Transpose). It's not just a reference — it's a **playing and improvising aid**, especially for
musicians getting comfortable with chord sequences:

- It shows the **related chords for each key**, so you don't have to *think* about the next chord —
  you can focus on the **tune** you're playing.
- **Common progressions are easy to spot** straight off the diagram: for **1-4-5** blues-type songs the
  three chords are right there; same for **2-5-1** and **1-6-2-5-1** sequences.
- **For improvising and smooth key changes:** when you reach a given chord, find that **same chord
  somewhere else** on the diagram and borrow its **neighbouring chords** to move into a new key
  **without it sounding disjointed**. The same trick works off the **2-5-1** and **1-6-2-5-1** diagrams.

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
