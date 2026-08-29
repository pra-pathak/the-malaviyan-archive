# AI Prompt — Generate The Malaviyan Archive Website

> Copy this entire prompt and paste it into any AI code generation tool —
> Claude, ChatGPT, Cursor, v0.dev, or similar.
> The output will be a complete, ready-to-deploy single HTML file.

---

## PROMPT

Build a complete, multi-page website called **The Malaviyan Archive** as a single HTML file with internal CSS and JavaScript. The website is for **Pandit Madan Mohan Malaviya Hall of Residence, IIT Kharagpur** — the largest hall of residence in IIT Kharagpur, founded on 27th February 2005. This is a heritage archive website built as part of IIT Kharagpur's Platinum Jubilee celebration under the Institute of Eminence (IoE) Grant.

---

### DESIGN SYSTEM

Use the following strictly. Do not deviate.

**Colors:**
- Primary (Deep Maroon): `#6B1D1D`
- Secondary (Warm Gold): `#C9972B`
- Background (Off White): `#FAF7F2`
- Text (Dark Charcoal): `#2C2C2C`
- Accent (Light Cream): `#F0E6D3`
- White: `#FFFFFF`

**Fonts (load from Google Fonts):**
- Headings: `Playfair Display` — serif, elegant, archival feel
- Body: `Inter` — clean, modern, readable
- Pull quotes and memory excerpts: Playfair Display italic

**Overall feel:** Prestigious, warm, institutional — like a university archive meets an alumni magazine. Not flashy. No neon colors. No heavy animations. Subtle, dignified, built to last.

---

### NAVIGATION BAR

- Sticky at top, stays visible on scroll
- Background: Maroon `#6B1D1D`
- Logo (left): Text-based — **"THE MALAVIYAN ARCHIVE"** in gold `#C9972B`, Playfair Display, followed by a small subtitle in white "MMM Hall · IIT Kharagpur"
- Nav links (center/right): Home | About | History | Mahamana | Warden's Corner | Contribute | Contact — all in white, hover in gold
- Coming Soon pages (Photo Essay, Voices, Hall of Honour) shown in nav but greyed out slightly with a small "Soon" badge
- CTA button (far right): `Share Your Memory` — gold background, maroon text, rounded, always visible
- Mobile: hamburger menu, all links in a dropdown

---

### PAGE ROUTING

Build a single HTML file with JavaScript-based routing. Each "page" is a `<section>` div that shows/hides based on navigation clicks. No page reload needed. Update the browser URL hash on navigation (e.g. `#about`, `#history`).

Pages to build:
1. `#home` — Home (fully built)
2. `#about` — About MMM Hall (fully built)
3. `#history` — History & Milestones (fully built)
4. `#photo-essay` — Same Ground, New Footsteps (Coming Soon)
5. `#voices` — Voices of Malaviya (Coming Soon)
6. `#hall-of-honour` — Hall of Honour (Coming Soon)
7. `#mahamana` — Mahamana's Legacy (fully built)
8. `#wardens-corner` — Warden's Corner (fully built)
9. `#contribute` — Contribute Your Memory (fully built)
10. `#contact` — Contact (fully built)

---

### PAGE 1: HOME (`#home`) — FULLY BUILT

#### Hero Banner
- Full viewport height (`100vh`)
- Background: Deep maroon-to-dark gradient (`#6B1D1D` to `#2C0A0A`) with a subtle diagonal texture pattern overlaid using CSS (crosshatch or linen texture via CSS background pattern — no external image needed)
- Centered content:
  - Small uppercase label in gold: `PANDIT MADAN MOHAN MALAVIYA HALL OF RESIDENCE · IIT KHARAGPUR`
  - Main headline in large Playfair Display white: `The Malaviyan Archive`
  - Subheadline in Inter light white: `Preserving the Story of the Largest Hall at IIT Kharagpur`
  - Small line in gold italic: `Founded 27th February 2005`
  - Two buttons side by side:
    - `Explore the Archive` — outlined white button, scrolls to next section on click
    - `Share Your Memory` — solid gold button with maroon text, links to `https://docs.google.com/forms/d/e/1FAIpQLScmDOUhw4Cs9gvpb3ga1W8KCAqIVbvqjS504aGHrEh3RI4Efw/viewform` (opens in new tab)
- Subtle scroll indicator arrow at bottom center, bouncing animation

#### About the Initiative
- Narrow centered container (max-width 700px), off-white background, generous padding
- Heading in Playfair Display maroon: `About This Initiative`
- Body text in Inter:
  *"As part of IIT Kharagpur's Platinum Jubilee celebrations, MMM Hall is building a permanent digital archive of its history, spaces, people, and stories. The Malaviyan Archive is that place — a home for every memory, every face, and every moment that has made this hall what it is over the past two decades."*
- Small italic line below in gold: `Funded under the Institute of Eminence (IoE) Grant | IIT Kharagpur Platinum Jubilee 2026`

#### Hall at a Glance — 4 Stat Cards
- 4 cards in a row (2×2 on mobile)
- Each card: white background, subtle shadow, 1px gold bottom border
- Large Playfair Display maroon number, gold underline divider, small Inter grey label
- Cards:
  - `2005` / Year of Founding
  - `2000+` / Residents Today
  - `20` / Years of Legacy
  - `#1` / Largest Hall at IIT KGP

#### What's Inside the Archive — 6 Section Cards
- 3×2 grid (2×3 on mobile)
- Each card: white background, subtle maroon top border on hover, shadow on hover, smooth transition
- Icon (use Unicode emoji or simple CSS shape), bold section name, one-line description, button
- Cards:
  - 🏛️ About MMM Hall / "The hall's story, facilities, and community" / `Explore →` (navigates to #about)
  - 📜 History & Milestones / "Twenty years of the hall's journey" / `Explore →` (navigates to #history)
  - 📷 Same Ground, New Footsteps / "Then and Now photo essay" / `Coming Soon` (disabled gold badge, no link)
  - 🎙️ Voices of Malaviya / "Oral history video series" / `Coming Soon` (disabled gold badge)
  - 🌟 Hall of Honour / "Distinguished alumni of MMM Hall" / `Coming Soon` (disabled gold badge)
  - 🕯️ Mahamana's Legacy / "The man behind the name" / `Explore →` (navigates to #mahamana)

#### Pull Quote — A Memory from the Archive
- Full-width section, cream background `#F0E6D3`
- Large opening quotation mark in maroon (decorative, CSS)
- Quote in large Playfair Display italic centered:
  *"The hall never really slept. No matter what time it was, there was always someone in the common room, always a conversation happening somewhere. That was Malaviya."*
- Attribution below in small Inter: `— Alumni, MMM Hall, IIT Kharagpur`
- Small note in grey italic: `(Placeholder — real alumni memories coming soon)`

#### Contribute CTA
- Full-width section, maroon background `#6B1D1D`
- Centered white text:
  - Heading Playfair Display: `Your memory belongs here.`
  - Body Inter: *"We are collecting photographs and stories from every batch of MMM Hall. It takes 5 minutes — and it becomes a permanent part of the hall's history."*
  - Gold button: `Share Your Memory →` linking to the Google Form (new tab)

#### Footer
- Dark maroon background `#2C0A0A`
- Three columns:
  - Left: Logo text `THE MALAVIYAN ARCHIVE` in gold + tagline in small white
  - Center: Quick navigation links in white, small
  - Right: `mmmhallchronicles@gmail.com` in gold + IIT KGP address in small white
- Bottom bar: `© 2026 Pandit Madan Mohan Malaviya Hall of Residence, IIT Kharagpur. Built under the IoE Grant, Platinum Jubilee Initiative.`

---

### PAGE 2: ABOUT MMM HALL (`#about`) — FULLY BUILT

#### Page Header Banner
- Full width, 300px height, maroon gradient background
- Page title centered: `About MMM Hall` in large Playfair Display white
- Breadcrumb below: `Home > About MMM Hall` in small gold

#### Introduction
Write 3–4 proper paragraphs (not placeholder text) covering:
- MMM Hall was founded on 27th February 2005 and named in honour of Mahamana Pandit Madan Mohan Malaviya
- It is the largest hall of residence at IIT Kharagpur with a capacity of over 2000 boarders
- Known for its exceptional sense of community, camaraderie, and collective pride
- The hall has grown steadily since its founding and today offers a full range of residential, academic, and recreational facilities

#### Facilities Grid
- Icon grid, 3 columns (2 on mobile)
- Each item: large emoji icon, facility name in bold maroon, 1-line description in grey
- Facilities:
  - 🛋️ Multiple Common Rooms / Spaces for recreation and community life
  - 🎵 Music Room / A dedicated space for performers and music enthusiasts
  - 📚 Library / Supporting the academic life of all residents
  - 💻 Technology Room / Equipped for technical learning and projects
  - ⚽ Sports Grounds / Home to inter-hall competitions and sporting traditions
  - 🍽️ Dining Hall / The heart of daily hall life

#### Community & Culture
2–3 paragraphs about what makes MMM Hall distinctive — its scale, the strong bonds formed within it, its identity across IIT KGP, and the spirit that alumni carry with them.

#### By the Numbers
Same 4-card stat design as homepage.

---

### PAGE 3: HISTORY & MILESTONES (`#history`) — FULLY BUILT

#### Page Header
Maroon banner, title: `Twenty Years of Malaviya`

#### Founding Story
2–3 paragraphs about the founding of MMM Hall on 27th February 2005, its naming after Mahamana Pandit Madan Mohan Malaviya, and its early growth into the largest hall at IIT Kharagpur.

#### Visual Timeline
- Vertical timeline design
- Central vertical gold line
- Each milestone: a maroon dot on the line, year label in bold maroon (left side), description in Inter grey (right side), alternating left-right on desktop
- Milestones to show:
  - `27 Feb 2005` — Pandit Madan Mohan Malaviya Hall of Residence officially founded at IIT Kharagpur
  - `2005–2010` — Hall grows rapidly, establishing its residential culture and community traditions
  - `2010–2015` — Expansion of facilities including music room, technology room, and sports infrastructure
  - `2015–2020` — MMM Hall becomes the largest hall at IIT KGP, crossing 2000 boarders
  - `2026` — Platinum Jubilee of IIT Kharagpur. MMM Hall Chronicles initiative launched to preserve the hall's two-decade legacy

#### Coming Soon Note
Cream background box with maroon left border:
*"We are actively researching and documenting the complete history of MMM Hall with contributions from alumni and former wardens. The full timeline with photographs and stories will be updated here as our archive grows. Contribute your memory to help us fill in the gaps."*
Button: `Share Your Memory →`

---

### PAGE 4: SAME GROUND, NEW FOOTSTEPS (`#photo-essay`) — COMING SOON

#### Page Header
Maroon banner, title: `Same Ground, New Footsteps`

#### Description
Centered text block:
*"A carefully composed series of paired photographs — archival images of MMM Hall from its early years placed side by side with modern recreations of the same spaces. The same gate. The same corridor. The same courtyard. Two moments in time, twenty years apart."*

#### Coming Soon Display
- Large centered gold badge: `COMING SOON`
- Below: `This section will be live by [Month] 2026`
- Placeholder grid: 4 blurred grey boxes in 2×2 grid, each with a subtle camera icon centered and a "Photo Essay" label — representing what the paired image display will look like
- Note: *"Our photography team is currently at work on the photo essay. Follow our progress or contribute archival photographs through the form below."*
- Button: `Share a Photograph →` linking to Google Form

---

### PAGE 5: VOICES OF MALAVIYA (`#voices`) — COMING SOON

#### Page Header
Maroon banner, title: `Voices of Malaviya`

#### Description
*"An oral history video series featuring former wardens, alumni from every decade, current residents, and long-serving staff — sharing the memories, stories, and moments that made MMM Hall what it is. Five short films. Twenty years of voices."*

#### Coming Soon Display
- Gold `COMING SOON` badge
- Placeholder video grid: 4 grey boxes in 2×2 grid, each with a ▶ play button centered in maroon circle — representing video thumbnails
- Note: *"We are currently recording interviews with alumni and former wardens of MMM Hall. The series will be live by [Month] 2026."*

---

### PAGE 6: HALL OF HONOUR (`#hall-of-honour`) — COMING SOON

#### Page Header
Maroon banner, title: `Hall of Honour`

#### Description
*"A permanent record of the distinguished alumni of Pandit Madan Mohan Malaviya Hall of Residence — those who have brought honour to the hall and to IIT Kharagpur through their achievements in science, engineering, public service, entrepreneurship, and beyond."*

#### Coming Soon Display
- Gold `COMING SOON` badge
- Placeholder profile card grid: 6 grey silhouette cards in 3×2 grid, each with a circular grey avatar and two grey text lines — representing what the alumni profile cards will look like
- Note: *"We are collecting profiles of distinguished MMM Hall alumni. To nominate someone, write to us at mmmhallchronicles@gmail.com"*
- Button: `Nominate an Alumnus →` (mailto link)

---

### PAGE 7: MAHAMANA'S LEGACY (`#mahamana`) — FULLY BUILT

#### Page Header
Maroon banner, title: `Mahamana Pandit Madan Mohan Malaviya`
Subtitle: `The Man Behind the Name`

#### Who Was Mahamana?
Write 3–4 proper paragraphs (not placeholder) covering:
- Born 25 December 1861 in Allahabad, Mahamana Pandit Madan Mohan Malaviya was one of the most remarkable figures in Indian history
- A scholar, educationist, journalist, and lawyer, he was a leader of the Indian National Congress and a prominent voice in India's independence movement
- His greatest legacy is the founding of Banaras Hindu University (BHU) in 1916, one of Asia's largest residential universities — a testament to his belief that education was the foundation of national greatness
- He was awarded the Bharat Ratna, India's highest civilian honour, posthumously in 2014
- Pandit Madan Mohan Malaviya Hall of Residence at IIT Kharagpur bears his name as an aspiration — to build not just engineers and scientists, but citizens of character, learning, and public purpose

#### His Words — Pull Quotes
Three separate pull quote blocks, each full width, cream background, large Playfair Display italic maroon text centered:
1. *"We must make our young men and women not only educated but enlightened."*
2. *"The future of India lies in its villages."*
3. *"Education is the greatest gift one can give to the nation."*
Each with attribution: `— Mahamana Pandit Madan Mohan Malaviya`

#### His Legacy at MMM Hall
1–2 paragraphs connecting Mahamana's values — education, community service, national pride — to the spirit of MMM Hall and what the hall aspires to be for its residents.

---

### PAGE 8: WARDEN'S CORNER (`#wardens-corner`) — FULLY BUILT

#### Page Header
Maroon banner, title: `Warden's Corner`

#### Message from the Warden
- Two-column layout: left is a placeholder avatar (circular grey silhouette with a subtle maroon border), right is text
- Name placeholder: `[Warden Name]`
- Designation: `Warden, Pandit Madan Mohan Malaviya Hall of Residence, IIT Kharagpur`
- Message (3 paragraphs):
  *"Welcome to The Malaviyan Archive — a project that is as meaningful to me as it is to every resident, past and present, of this remarkable hall. MMM Hall is not just a building. It is a community, a culture, and a story that has been building since 27th February 2005."*

  *"The MMM Hall Chronicles initiative, launched as part of IIT Kharagpur's Platinum Jubilee, is our effort to ensure that this story is never lost. We are collecting photographs, recording memories, and building a permanent digital archive that every future resident of Malaviya will be able to access and add to."*

  *"I invite every alumnus, every former warden, every staff member who has been part of this hall to contribute. Your memory belongs here. Together, we are writing the history of Malaviya."*

#### Announcements
Simple list with a maroon left border on each item:
- `[Ongoing]` — MMM Hall Chronicles: Legacy Preservation Initiative launched. Share your memory and photograph at the link above.

#### Coming Soon Note
*"This section will be regularly updated with messages, announcements, and reflections from the Warden's office."*

---

### PAGE 9: CONTRIBUTE YOUR MEMORY (`#contribute`) — FULLY BUILT

#### Page Header
Maroon banner, title: `Contribute Your Memory`
Subtitle: `Your story belongs here.`

#### Why Contribute
Warm centered paragraph:
*"The Malaviyan Archive is only as rich as the memories that go into it. Every photograph you share, every story you write, every name you remember — it all becomes part of a permanent record that will be seen and cherished by every future resident of MMM Hall. You lived this history. Help us preserve it."*

#### What We Are Looking For
4 icon cards in a row:
- 📷 Old Photographs / Any photo from your time at MMM Hall
- ✍️ Written Memories / A story, a moment, an anecdote
- 👤 People You Remember / Batchmates, wardens, or staff who made a difference
- 📄 Documents & Artefacts / Newsletters, event programmes, or any hall material

#### Embedded Google Form
Embed via iframe:
```html
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScmDOUhw4Cs9gvpb3ga1W8KCAqIVbvqjS504aGHrEh3RI4Efw/viewform?embedded=true" width="100%" height="1200" frameborder="0" marginheight="0" marginwidth="0">Loading form...</iframe>
```
Make the iframe responsive — full width, enough height to show the form without internal scroll where possible.

#### Other Ways to Contribute
Simple 3-item list with icons:
- 📧 Email: mmmhallchronicles@gmail.com
- 💬 WhatsApp: [number]
- 📬 Physical material (photos, documents): Contact us and we will arrange collection and return

---

### PAGE 10: CONTACT (`#contact`) — FULLY BUILT

#### Page Header
Maroon banner, title: `Contact Us`

#### Two-column layout:

Left column — Contact Details:
- 📧 mmmhallchronicles@gmail.com
- 📍 Pandit Madan Mohan Malaviya Hall of Residence, IIT Kharagpur, West Bengal — 721302
- 🕐 Responses within 2–3 working days

Right column — Contact Form:
Simple form with fields:
- Name (text input)
- Email (email input)
- Subject (text input)
- Message (textarea, 5 rows)
- `Send Message` button in gold with maroon text

Note below form in small grey italic:
*"This form currently sends to mmmhallchronicles@gmail.com. For urgent matters, please email directly."*

---

### GLOBAL DESIGN RULES

Apply these throughout every page:

1. **Section padding:** Generous — minimum 80px top and bottom on desktop, 48px on mobile
2. **Max content width:** 1100px centered with auto margins
3. **Transitions:** All hover effects use `transition: all 0.3s ease`
4. **Buttons:** Rounded corners (`border-radius: 6px`), padding `12px 28px`, never fully pill-shaped
5. **Coming Soon badge:** Gold background `#C9972B`, maroon text `#6B1D1D`, bold, uppercase, letter-spaced, padding `8px 20px`, border-radius `4px`
6. **Section alternation:** Alternate between off-white `#FAF7F2` and white `#FFFFFF` backgrounds for visual rhythm
7. **No stock photo dependencies:** Use CSS gradients, patterns, and Unicode characters/emoji as visual elements wherever images would normally go
8. **Mobile first:** Every layout must work cleanly on a 375px screen
9. **Active nav link:** Highlight the current page's nav link in gold
10. **Smooth scroll:** Enable smooth scrolling globally

---

### ADDITIONAL INSTRUCTIONS

- Output a single complete HTML file — all CSS in a `<style>` block in `<head>`, all JavaScript in a `<script>` block before `</body>`
- Load Google Fonts via `<link>` in the head: Playfair Display (400, 400 italic, 700) and Inter (300, 400, 500, 600)
- The Google Form iframe on the Contribute page must use the exact URL provided above
- All `Share Your Memory` buttons must link to: `https://docs.google.com/forms/d/e/1FAIpQLScmDOUhw4Cs9gvpb3ga1W8KCAqIVbvqjS504aGHrEh3RI4Efw/viewform` with `target="_blank"`
- Default landing page is `#home`
- Do not use any external CSS frameworks (no Bootstrap, no Tailwind) — pure CSS only
- Do not use any external JavaScript libraries — pure vanilla JS only
- Ensure the site passes a basic accessibility check — all images have alt text, buttons have labels, color contrast is sufficient
- Comments in the code are welcome for maintainability

---

*This prompt was generated from the official PRD for The Malaviyan Archive.*
*MMM Hall Chronicles Initiative | IoE Grant | IIT Kharagpur Platinum Jubilee 2026*
*Contact: mmmhallchronicles@gmail.com*
