# It's Showtime — How-To Help

This is the functionality reference the It's Showtime AI assistants (in-app + website) answer from. It is
product documentation — how to USE It's Showtime — not source code. Keep entries short, each with a
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

It's Showtime manages members as **Payees** — there is **no** separate "Add Band Member" button.

1. From the **Home / Search** screen, open **Gigs & Billing** (the band-admin area) — the button is
   on the Home / Search page.
2. Go to the **Payees** tab → add the person; tick **Default player** and list which band(s) they
   play in.
3. The **Bands** tab then shows them in that band's default lineup (you can swap in a reserve
   per-gig).

---

## Importing songs (iReal Pro, ChordPro, pasted chords)
Keywords: import, iReal, iReal Pro, ireal chart, ChordPro, import setlist, add a chart, paste chords, export from ireal, ireal file, ireal html, change font, chord font, breathing space, lyrics line

Tap **Import Songs** and pick a source:
- **iReal Pro** — in the iReal Pro app, share a song (or make a backup) as the **HTML** export, email or
  transfer the file to your device, then choose **"Choose exported iReal Pro file"** here. It's Showtime
  reads iReal's own format and renders a proper **lead-sheet grid** — bars aligned in rows, **section
  markers (A/B/C)**, **repeats and 1st/2nd/3rd endings**, the **time signature**, and chords spaced **on
  the beat** (three chords in a 4/4 bar = first chord holds 2 beats). Preview it first; a single song opens
  straight away.
- **Paste a chart** — paste a ChordPro (`[C]`) or chords-over-lyrics chart you already have (covers
  Ultimate Guitar, OnSong, SongBook, etc.). It becomes a new song and opens.
- **It's Showtime (.showtimeset)** — restore a portable It's Showtime backup (songs, charts & annotations).
- **Sheet Music** — a MusicXML file (see the Sheet Music entry below).

The imported chart transposes and saves like any other. **Change the chord font** with the **Font**
selector in the toolbar. An iReal grid also has a blank **"breathing space"** line under each row where you
can type your **own** words — it ships empty, because It's Showtime distributes no lyrics of its own.

It's Showtime **only imports material you're allowed to use** (your own charts, ones you're licensed for,
or open-source / public-domain). It never fetches or scrapes charts from the web — you bring your own
exported file.

---

## Sheet music & MusicXML (importing and creating notation)
Keywords: MusicXML, sheet music, notation, .mxl, MuseScore, Sibelius, Finale, import score, engraved notation, dots, staff, stave

It's Showtime reads and displays **MusicXML** sheet music — the standard format that notation apps export —
and renders it as clean, engraved notation on your performance screen.

- **Import a score as a song:** **Import Songs → Sheet Music**, then choose a **.musicxml** or **.mxl**
  (compressed) file. It becomes a new song with the notation attached, named from the score's own title.
- **No MusicXML file yet?** Write your notation for free in **MuseScore** (musescore.org) — the popular,
  free, open-source notation editor — then **File → Export → MusicXML** and import it here. You can export
  the same way from Sibelius or Finale. It's Showtime handles the performing; MuseScore handles the writing.
- **Just a hook or riff?** You don't need a separate file — draw a few bars straight onto the chart with
  the built-in notation snippet tools, and It's Showtime engraves them professionally.

---

## Editing a song's chords / chart
Keywords: edit song, edit chart, edit chords, edit this song, fix chords, change lyrics, fix spacing, edit menu, config menu, how do I edit, font size, text size, bigger text, make lyrics bigger, resize text, bold italic underline, page breaks, fit on a page, edit button greyed out

To edit the current song's chart (chords, lyrics, spacing):
1. Open the **config / Setup menu** in the toolbar (the config / cog icon).
2. Choose **Edit Chart** — the edit icon that appears **just below the config icon**. (This is NOT
   the "Chart / Lyrics" view dropdown — that only switches what you're *viewing*.)
3. Make your changes, then save.

While editing:
- **Resize text** with **A− / A+** (or the size dropdown). **Highlight** some words first to resize
  just that selection — the highlight stays put, so you can keep pressing to step it up or down. With
  **nothing** selected, it resizes the **whole chart**. **B / I / U** (bold/italic/underline) also
  apply to the highlighted text.
- The editor shows the **same page breaks** you'll see on stage (portrait, or the landscape two-page
  spread), so you can lay a chorus out to fit a page and keep it readable.
- If the **Edit** button looks greyed out for a moment after you change songs, that's normal — it
  simply waits until the chart has finished loading, then lights up so editing always opens cleanly.

To change a song's *details* (BPM, key, drum pattern) instead, use **Edit Song Metadata**.

> Want **your own** version, or to add **passing chords** without changing the leader's chart? Don't
> use Edit Chart — see **Making your own version of a chart** below.

---

## Chart types — Lyrics-only for the singer, Chords-only, and more
Keywords: chart type, chart types, lyrics only, words only, chords only, lyrics and chords, notation, strip chords, strip lyrics, remove chords, remove lyrics, bigger lyrics, singer screen, singer view, singer's chart, vocalist, no chords, take the chords off, lyrics without chords, make a lyrics chart, make a chords chart, chart dropdown, chart selector, per-device chart, each screen different, different chart on each device

Each song can hold several **charts**, and they come in four standard types:

- **Lyrics & Chords** — the normal chart (chords sitting above the words). This is the default for new songs.
- **Lyrics** — words only, no chords. Because there are no chords crowding the lines, the lyrics can be shown **bigger** — ideal for a singer who just wants clean, large words.
- **Chords** — chords only, no lyrics. The chords are shown in **white** (in a Lyrics & Chords chart they're yellow to stand out from the words, but in a chords-only chart there are no words to distinguish them from).
- **Notation** — proper sheet music, created from a **MusicXML** import.

**Switching what you see:** the **Chart** selector at the **top-left** switches which chart you're *viewing* right now. It does **not** change anyone else's screen.

**Making a Lyrics-only or Chords-only chart (done while editing):** chart prep is a desk job, so the strip buttons live in the **edit toolbox** (the same toolbox as Save / Cancel / HTML-view). Open **Edit Chart** (config/cog menu → Edit Chart) on a Lyrics & Chords chart, then:
- **🎤 Lyr** — makes a **Lyrics** chart from the current one, with the chords **stripped off**.
- **🎸 Chd** — makes a **Chords** chart, with the lyrics **stripped off** (chords shown in white).

Your original Lyrics & Chords chart is left untouched — treat it as the **master**. The stripped versions are **derived** charts you pick from the Chart selector.

**Keeping the derived charts in sync (re-stripping after arrangement changes):** the idea is to make all your changes in the **Lyrics & Chords** master, then regenerate the derived charts from it. If you later change the arrangement (e.g. add a solo), just press **🎤 Lyr** / **🎸 Chd** again. If a Lyrics or Chords chart already exists, It's Showtime asks to **update that existing chart to match** — so it refreshes it instead of piling up duplicates. (Updating overwrites that derived chart, replacing anything you'd tweaked *directly* on it, which is why it confirms first.)

**Each device remembers its choice (per-device sticky preference):** whatever chart type you select **sticks for that device** as you move through the setlist. So the singer sets her tablet to **Lyrics** once, and every following song shows its **Lyrics** chart if it has one — and quietly falls back to **Lyrics & Chords** if that song has no Lyrics chart. Meanwhile the guitarist's screen can stay on Lyrics & Chords. This works in the page-flip "book" view too, and the preference is remembered per device, not shared across the band.

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

It's Showtime has two menus, on purpose:
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

You never need a mouse while performing. It's Showtime is fully touch-friendly (tap any on-screen button),
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
Keywords: circle of fifths, circle of keys, key wheel, related chords, chords in a key, chord relationships, 1-4-5, 145, blues chords, blues, 2-5-1, 251, 1-6-2-5-1, common progressions, what chords go together, improvise, improvising, soloing, solo, lead break, writing songs, songwriting, write a song, compose, composing, modulate, change key smoothly, change keys gracefully, neighbouring chords, next chord, focus on the tune, how do I use the circle

Open a song, then tap the **Circle of Fifths / Circle of Keys** button in the chart toolbar (next to
Transpose). It's not just a reference — it's a **playing, writing and improvising aid**, especially for
musicians getting comfortable with chord sequences:

- It shows the **related chords for each key**, so you don't have to *think* about the next chord —
  you can focus on the **tune** you're playing.
- **Common progressions are easy to spot** straight off the diagram: for **1-4-5** blues-type songs the
  three chords are right there; same for **2-5-1** and **1-6-2-5-1** sequences.
- **Writing songs:** it's a map of which chords sit naturally together, so you can build progressions
  that work and pick chords that complement each other as you compose.
- **For soloing and improvising — changing keys gracefully:** when you reach a given chord, find that
  **same chord somewhere else** on the diagram and borrow its **neighbouring chords** to move into a new
  key **without it sounding disjointed**. The same trick works off the **2-5-1** and **1-6-2-5-1** diagrams.

That key change *is* transposing in effect — but you're getting there **naturally, through harmonic
chord changes (modulation)**, not the **mechanical** semitone shift of the Transpose ▲/▼ button. The
music glides into the new key instead of being shifted into it.

---

## Sending messages to crew / roadies
Keywords: crew message, message roadies, send to crew, alert crew, stage manager, lighting, sound, send a message

Tap the **Send crew message** button in the toolbar (the crew / 📢 icon) to open the Crew Message
panel, then send your message. Crew on their phones receive it and can tap to **acknowledge** so you
know it landed. Crew connect free and never use a musician slot.

---

## DMX stage lighting — per-song lighting scenes
Keywords: dmx, lighting, stage lighting, lights, lighting scene, lighting control, light show, par cans, washes, colours, lighting operator, lighting cues, lights per song, skip a song lighting, out of order lighting

It's Showtime can drive your **DMX stage lighting** from the setlist. You attach a **DMX lighting scene to a
song**, and It's Showtime fires that scene automatically the moment that song comes up — colours, washes and
looks change with the music, no separate lighting operator needed.

The key advantage: because each scene is tied to its **song**, not a fixed cue timeline, the lighting
**follows however you actually play the set**. **Skip a song, reorder on the fly, or take a request on
the night** — the correct lighting still loads automatically. There's no rigid pre-programmed cue stack
to fall apart when you go off-script. On a synced gig the **Master** triggers the rig for everyone.

(DMX is a **Pro**-tier feature. Per-song **MIDI** setups are coming soon.)

---

## Setlist markers — set breaks & dividers in a playlist
Keywords: set marker, set break, setlist divider, mark the set, add a marker, first set, second set, split the setlist, set 1 set 2, breaks between sets, intermission in the setlist

To mark where a set ends / the break falls, **right-click a song** in the playlist and add a **marker**
before or after it. Markers show as dividers in the list, are **not** played as songs, and stay anchored
when you drag-reorder. Right-click also offers **remove all markers**.

When you **export** the setlist, the markers become **page breaks between sets** (they work in Word), and
the titles-only export is a clean **table** — overall number, per-set number (restarts each set), song
title, and metadata.

---

## Emailing the band or a gig's lineup (group email)
Keywords: email the band, email members, group email, bulk email, email everyone, email players, message the band, email lineup, email payees, contact the band, email history

You can email a group straight from It's Showtime, with a log of who was sent what and when:
- **From a gig** — open the gig in Gigs & Billing; each player has a checkbox (all ticked by default) and
  the subject is pre-filled with the gig/venue.
- **From the Bands tab** — email selected members of a band.
- **From Payees** — email selected payees.

Every send is recorded in an **email log** (viewable per-gig and in full). Sending needs the outgoing
email (SMTP) set up in configuration.

---

## Gigs, invoices, payment splits & year-end reports (Gigs & Billing)
Keywords: gig, gigs, booking, invoice, invoices, tax invoice, GST, ABN, bill the venue, payment split, pay the band, who gets paid, year end report, income report, venue, agency, billing, run the band as a business

**Gigs & Billing** (the band-admin area, reached from Home / Search) runs the band as a business:
- **Gigs** with a status flow (Enquiry → Booked → Billed → Paid), the venue, fee (inc-GST auto-splits into
  GST + ex-GST), agency and reference.
- **Venues** and **Payees** (with banking details for disbursements).
- **Invoices** — an AU **tax invoice** (GST + ABN) you can view, print and **email to the venue**; invoice
  numbers are allocated automatically. You can add the band's logo to the top and bottom.
- **Payment splits** — set who gets paid what per gig.
- **Year-end reports** — gross income, GST collected, per-venue / per-band / per-payee totals and
  outstanding amounts (AU financial year).

---

## Inviting someone to join your band (cloud)
Keywords: invite, invite member, invite to band, join code, band code, invite link, add someone to my band online, send an invite, accept invitation

On the cloud version, the band **leader** invites someone by email. They get an email with an **"Accept
invitation"** button:
- **New to It's Showtime** — the button opens a sign-up already filled in (email + band); they just set a
  password and they're **in the band and signed straight in**.
- **Already have an account** — they sign in and the band is **added to their bands**.

If the button ever doesn't work, the email also shows a **join code** they can enter under **🎸 Band →
Join a band** after signing in.

---

## Where song & show media (slideshows, videos) are stored
Keywords: media storage, where are my videos, slideshow files, media folder, cloud storage, local drive, where is media saved, storage location, back up media

Your media (song, slideshow, and pre-/post-show videos & images) lives on **your own device**, stored
**beside your database file** by default — so copying that folder backs everything up, and it works fully
offline. You can point media at a specific **local folder** in configuration.

For the **actual show, a local drive is the most reliable** — gig venues have flaky networks — while the
cloud is best for the **configuring** phase (building songs and slideshows from any device). It's Showtime
doesn't host your media; you keep it, so you control who can see it.

---

## Printing or exporting a setlist with each song's key (HTML, Word, PDF)
Keywords: print setlist, export setlist, setlist pdf, setlist word, song key, key of each song, setlist with keys, print the set, running order, setlist for the band, pdf setlist, no word, members without word, share the setlist, setlist sheet

**Right-click a setlist** and choose **"Setlist — titles + keys"** in **HTML**, **Word**, or **PDF**. You get the
running order as a clean table: number, song **title**, **key**, artist and BPM, split by your set markers.

- The **key** is worked out from each song's **last chord** (the note it resolves to), so even older songs
  show a real key — no more writing keys on the sheet by hand.
- Choose **PDF** for band members who don't have Microsoft Word — a PDF opens on any phone or computer.
- **HTML** opens in a browser (print it for a paper copy); **Word** downloads a `.doc`.

---

## Roles & what band members can see (permissions)
Keywords: roles, permissions, who can see, musician role, band owner, group manager, site administrator, hide from members, restrict access, read only, read-only, make invisible, custom role, member can't see, hide banking, hide earnings, scope, what members see, assign a role, role designer

On the cloud version, members can be given a **role** that limits what they see and change:
- A **musician** (a member scoped to a band) sees **only their own band's** setlists and roster — not other
  bands, and not the demo library. The account **owner** sees everything.
- Set or change a member's role in the **Bands** area — each member has a **role dropdown**. Promote a
  trusted member to **Group Manager** (also shown as Band owner) so they can invite others and run the gig
  billing; a plain member just views.

**Custom roles (the Role Designer):** the owner can also build their own roles. Click the **🎛 Roles** button
(bottom-left when signed in) to open a floating **Role Designer** you can drag out of the way. Name a role
(Booking Agent, Sound, Accounts — anything), pick a **pen** — **Editable**, **Read-only** or **Invisible** —
then **draw a box** over fields on screen to set what that role can see or edit (e.g. hide the banking columns,
make fees read-only). **Highlight unclassified** shows fields not set yet; **Preview as this role** shows the
result live. Starter roles (**Owner, Site Administrator, Group Manager, Member**) are provided and fully
renamable to fit any group — a band, a talent agency, a cruise line, a TV production.

---

## When you don't know
If a question isn't covered above, say so briefly and suggest emailing **support@itsshowtime.com.au**.
Do not invent buttons, menus or settings that aren't documented here.
