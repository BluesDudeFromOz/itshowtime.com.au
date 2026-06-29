# ShowTime — Functionality Guide

This is the user-facing functionality reference for **ShowTime** (itsshowtime.com.au) — what the
software does and how to use it. It is written for the in-app/website AI assistant and for users.
It describes features and how-to only; it is **not** source code.

ShowTime is an all-in-one app for gigging bands and live performers: digital chord/lyric charts
with instant transpose, setlists, real-time page-turn sync across every device, stage visuals,
a crew app, and a gig + invoicing (billing) engine. It's often described as a "music ERP" — it
runs a band as a business — but to a musician it's simply the app that keeps everyone on the same
page on stage.

---

## How it runs (platforms & modes)

- **Desktop app** — Windows, Mac, Linux (and Raspberry Pi). It runs a small local web server; the
  band's phones/tablets/laptops connect to it over Wi-Fi and view charts in a browser.
- **Cloud (SaaS)** — a hosted version. Sign in from anywhere, nothing to install, your library
  syncs across devices and is always on the latest version.
- **Standalone / offline** — gig-critical. ShowTime works with no internet at all; the host PC can
  even be the Wi-Fi hotspot the band connects to, so a venue with no Wi-Fi is fine.
- **Auto sync** — standalone installs keep a cloud copy of the library, so you can work offline or
  in the cloud and the data stays in step.

Every paid licence includes **both** the perpetual desktop app **and** the Cloud (SaaS) version
for the length of the licence.

## Getting started

1. Install the desktop app (or open the Cloud version and sign in).
2. Create your band and add members — invite by email, or have them scan a QR code to join.
3. Import or create songs, build a setlist, and you're ready for the gig.

## Songs & chord charts

- ShowTime shows **chords over lyrics** charts, formatted like a professional lead sheet.
- **Importing songs:**
  - **iReal Pro** charts.
  - **Paste from Ultimate Guitar** (or any web chart) — paste the page and ShowTime strips the
    HTML to plain text, then you format it.
  - **ShowTime setlists/songs** via the portable `.showtimeset` file.
- **The Chord Wizard (⚡ button):** type your chords plainly first, then press the wizard and it
  formats everything to a clean iReal-style look — e.g. maj7 → △, diminished → o, m7♭5 → ø,
  augmented → +, with raised root accidentals (G♭, A♯), stacked alterations, and slash/bass chords
  rendered underneath. It also recognises 1st/2nd endings and preserves time signatures.
- **Song metadata:** key, BPM, time signature, and free-text notes per song.
- **Notation (MusicXML sheet music)** is available on the Pro tier.
- **PDF fakebook pages** can be attached to any song (paid plans).

## Transpose & instrument modes

- **Instant transpose:** change any chart to any key with one tap. The choice is saved per song.
- **Instrument modes (Eb / Bb / F / G):** horn and other transposing players see their own key
  automatically, across the whole setlist, without changing anyone else's view.
- **Circle of Fifths** lookup for songwriting and improvisation.

## Setlists / playlists

- Organise songs into **setlists** (playlists) for each gig.
- **Drag to reorder** on the night, or use the song's right-click / ⋮ menu (Move up/down/to end).
- In **edit mode**, a playlist's ⋯ (or right-click) menu offers: new playlist, copy, delete,
  export, add a song (new or from the library), and add ticked songs from other playlists.
- **Export** a setlist as `.showtimeset`, PDF, HTML or DOCX.
- Deleting a song from a playlist (or deleting a whole playlist) **never** deletes the song from
  your library.

## Performance & band sync

- **Master / slave sync:** one device is the master and drives song changes, page turns, the
  backing track, the slideshow and the visualiser — every connected device follows in real time
  over Wi-Fi. No lag, no confusion.
- Each musician still **turns their own pages** independently — realistic page-curl, a Bluetooth
  foot pedal, a swipe, or keyboard navigation.
- **Mirror mode** for a second screen.

## Annotations

- Add **draggable notes** to a chart. Annotations **transpose in sync** with the chords, so they
  stay correct when you change key.

## Projection & media

- **Slideshows** for pre-show, intermission and post-show (images and video).
- **Per-song video & images** linked to any song, with transitions, Ken Burns and fade effects.
- **Backing track to the PA:** audio is routed to the device nearest the mixing desk — one tap to
  claim it.
- **Beat-sync visualiser:** 30+ real-time visual designs (kaleidoscope, fire, particles and more)
  that pulse to the music via a beat detector.

## Connect devices (QR codes)

Open **Connect Devices** and you'll see QR tabs for each role — **Slave**, **Projector**, **Beat
Detector**, **Wi-Fi**, and **Crew**. A band member or crew scans the relevant code on their phone
to instantly join in that role; no typing of addresses. The Crew join QR is also in the Send Crew
Message panel.

## Crew app & messaging

- Sound, lighting, stage manager and roadies connect on their phones via the **Crew app** — it's
  **free on every plan and never uses a musician slot**.
- Send colour-coded alerts mid-show (e.g. "vocals up", "tighten the lights"); crew **tap to
  acknowledge** and you see the confirmation instantly.

## Gigs & invoicing (the billing engine)

ShowTime includes a full gig + billing engine for running the band as a business:

- **Gigs:** track each booking — venue, date, fee (inc/ex GST), service, and a status workflow
  (Enquiry → Booked → Billed → Paid, plus Cancelled).
- **Venues & payees:** store venue contacts and member details (including banking for payouts).
- **Member splits:** divide each gig's fee across the players.
- **Tax invoices:** generate a branded AU tax invoice (with GST and ABN) and **email it to the
  venue in a couple of clicks**; invoice numbers are allocated automatically.
- **Reports:** year-end / period finance reports — gross income, GST, per-musician payouts, and
  outstanding amounts.

## Pricing & licensing

Every licence is **perpetual** — pay once and the app is yours to keep. The price covers your
**free-update window**; after it ends the app keeps working on your current version, and you can
renew updates any time. Prices are in AUD.

| Plan | Players | Songs | Price |
|---|---|---|---|
| **Try-It 2** (Free) | up to 2 | 25 (20 your own + 5 demo) | Free |
| **Band 2** | up to 2 | unlimited | $59 once (perpetual) |
| **Band 4** | up to 4 | unlimited | $99 / year |
| **Band 6** | up to 6 | unlimited | $124 / year |
| **Band 8** | up to 8 | unlimited | $149 / year |
| **Band 12 · Pro** | up to 12 | unlimited | $499 / 3 years |

- **Free-update window:** 1 year on Band 2 / 4 / 6 / 8; 3 years on Band 12 · Pro. The free tier
  runs in the Cloud too (free Cloud accounts are kept for 3 months).
- **Every paid licence includes a Cloud (SaaS) subscription** for the licence term — desktop +
  cloud together.
- **Crew connect free** on every plan and never count toward the player limit.
- **Pro extras:** MusicXML sheet music, multiple band profiles, and DMX/MIDI control (coming soon).
- **Schools, studios & large ensembles** (groups bigger than Pro's 12): contact
  support@itsshowtime.com.au for a custom multi-seat key.

## AI assistant

ShowTime offers an **optional** AI helper. It runs on **your own Anthropic (Claude) account** —
you pay Anthropic directly, pay-as-you-use, only for the questions you ask. No monthly fee and no
lock-in. It helps you learn the app, build setlists, and tidy up charts.

## On the roadmap (coming soon)

- Multiple projection screens with live streaming / camera input.
- Per-song MIDI setups — recall patches and program changes for every song.
- DMX lighting scenes, configurable from third-party DMX software.

## Common questions

- **Is there a free trial?** Yes — the Try-It 2 free tier (up to 2 players, 25 songs). The free
  desktop app keeps working indefinitely; free Cloud accounts are kept for 3 months.
- **What devices does it run on?** Mac, PC, Linux (and Raspberry Pi) as the host; band members
  view on iOS, Android, laptops — anything with a browser on the same Wi-Fi.
- **Does it work without internet at a gig?** Yes — standalone/offline mode is built for exactly
  that, and the host PC can be the Wi-Fi hotspot.
- **How do I get help or buy a large/education licence?** Email **support@itsshowtime.com.au**.
