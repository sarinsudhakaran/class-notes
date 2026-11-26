// ===== EDIT THIS FILE TO ADD NOTES =====

const CONFIG = {
  title: "Class Notes",
  start: "2026-11-23",      // first day of class (YYYY-MM-DD)
  weeks: 9,
  classDays: [0, 1, 2, 3, 4, 5, 6] // 0=Sun 1=Mon ... 6=Sat
};

// Days that have a transcript file at transcripts/<date>.txt
const TRANSCRIPTS = [];

// One entry per day. Key = date, value = Markdown.
// The first "# Heading" becomes the day's title.
// Inside the text, write a backtick as \` (backslash first).
//
// CONVENTION: every note starts with the objective/deliverable blockquotes,
// then a "## Key learnings" section (numbered, 5-7 items) before anything else.
// Keep it for every new day.
const NOTES = {
  "2026-11-23": `
# Kickoff: Reading the Problem Before Solving It

> **Key objective:** Treat India's apartment ecosystem as a *complex economic and social system* and find unmet needs from first principles — explicitly **not** "make MyGate better".

> **Deliverable:** Align on common definitions, read the case-study keywords individually, and split into teams of three to research motivation, scope and constraints.

## Key learnings

1. **Dissect the problem statement word by word before touching a solution.** Most of the room jumped to app ideas; the session was spent going backwards into what the words actually mean.
2. **Existing apps already solve the visible layer.** MyGate and NoBrokerhood cover most resident-facing friction. Anything still unmet sits *underneath* — in workers, economics and relationships, not in gate passes.
3. **The underserved actor is usually the one with no voice.** Security guards absorb 24-hour shifts, all weather, and unpaid informal duties, and nobody is building for them.
4. **"Why" is the deepest layer; "what" and "how" fall out of it.** The 5-layer framework below is a tool for getting down to why.
5. **Never remove a friction before you know why it is there** (Chesterton's Fence). The late-night delivery ban looks like pointless friction until you see whose risk it is managing.
6. **A PM challenges the requirement; a BA drills into it.** Finding the gap nobody handed you is the actual job.

## Case study framing

- **Focus:** India's growing apartment ecosystem as a complex economic and social system
- **Goal:** discover unmet needs and emerging opportunities — *not* incremental improvements to existing apps
- **Approach:** understand the ecosystem from first principles before deciding what to build

## Stakeholder mapping (first pass)

| Group | Who is in it |
|---|---|
| **Residents** | Renters, homeowners, landlords, bachelors, families, dog owners |
| **Workers** | Security guards (some on 24-hour shifts), maids, cooks, drivers |
| **Delivery partners** | Zepto, Blinkit, Swiggy and similar |
| **Local business** | Kirana shops being disrupted by quick commerce |
| **Governance** | Society management, admin, RWA |

**Guards came out as the most underserved group:** exposed to every weather, and unpaid for informal duties such as carrying orders up after 11 PM.

## Problem space: what surfaced

- **Isolation at scale.** In complexes of 1,000+ families, most residents know fewer than **5–7** neighbours.
- **Behaviour has already shifted** on delivery coordination — that friction is largely smoothed. The remaining friction is hidden, which is exactly why it needs fieldwork.
- **Security asymmetry** (Vikas): entry control for visitors is strict, but internal theft or loss goes unresolved. The system is built to watch the boundary, not the inside.
- **Sohan's angle:** improve sub-workflows *inside* existing behaviour rather than inventing a new category.
- **Sonam's angle:** procurement is distributed across hundreds of flats and could be aggregated into collective purchasing.

## First principles thinking

**What it is:** break a concept down into the basic truths that cannot be reduced further, then rebuild upward. You stop reasoning by analogy ("it's like X, so do what X did") and start reasoning from the mechanism.

**Worked example — the apple tree.** The same tree in different soil and climate produces a different outcome. Asking *why* repeatedly leads to: the tree does not need soil, it needs what soil delivers — nutrients, water, anchorage. Strip the soil, deliver those directly, and you have **hydroponics**. The solution only appears once the problem is restated at the level of the mechanism.

### Deepak's 5-layer analysis

A ladder for going from what you can see down to why it happens:

| Layer | What it asks | Example in a society |
|---|---|---|
| 1. **Events** | What is observable? | A resident complains about the guard |
| 2. **Patterns** | What repeats over time? | The same complaint every month, always after a delivery |
| 3. **Behavioural psychology** | What behaviour do those patterns produce? | Residents route complaints to WhatsApp, not the app |
| 4. **Human psychology / neuroscience** | What drives that — ego, desire, attention? | Being seen to act matters more than the issue being fixed |
| 5. **Consciousness** | What is the root driver of the movement? | The need for status and control in a shared space |

Most teams stop at layer 1 or 2 and build a feature. The insight lives at 3–5.

> **BA vs PM:** a business analyst drills into the requirement they were given. A PM **challenges** the requirement and finds the gap independently.

## Product thinking: the 7 sins framework

A blunt but useful lens: **every great consumer product maps to one or more of pride, greed, lust, envy, gluttony, wrath, sloth.** Not a moral claim — a claim about which human drive the product is plugged into.

- **Instagram** touches all seven.
- **Duolingo** invests heavily in psychologists to build the attention loop (streaks, guilt, the owl).
- The **discovery feed** exists to trigger curiosity — a layer-5 driver, not a layer-1 feature.
- **FOMO is a form of lust:** desire for something you fear missing, amplified by social comparison.

> **Funnel design is not UI design.** The funnel is how the product moves a user from one interaction to the next and keeps them there. You can have beautiful UI and a dead funnel.

## Mental models introduced

1. **First principles** — break the concept into basic truths, layer by layer, until you can rebuild it.
2. **Chesterton's Fence** — never remove or change a friction until you understand why it exists. *Example:* the late-night delivery ban looks like arbitrary friction, but it manages risk for high-net-worth residents. Remove it and you import a new risk the society never agreed to.
3. **Detective mindset** — observe every actor's perspective without bias and without reaching a verdict. Surface all the facts of the system first; judgement comes later, if at all.

## Discovery process: the reverse pyramid

Start wide and cut down iteratively:

**Abstract case study → one user type → one core problem → one primary solution.**

- **Secondary research first.** Scope cities, building types, average rents, society sizes.
  - **Tier 1** (Pune, Hyderabad, Gurgaon, Mumbai): mature apartment behaviour
  - **Tier 2**: emerging behaviour, different signals, harder to reach for primary data
- **Primary research only after scoping.** 10–12 people each across the group gets the cohort to roughly **100 interviews**.
- **Questionnaire built together on the call.** Google Forms discouraged — open conversation preferred, because a form can only return answers to questions you already knew to ask.

## Session structure and roles

- **Weekly format:** a new case study each week, rotating focus — discovery, design, prototype, analytics.
- **Builders of the Week:** two rotating leaders.
  - *Leader 1* owns the discovery doc
  - *Leader 2* leads the group presentation
  - **Sarin volunteered as the first discovery-doc leader**
- **Leader responsibilities:** keep team energy high, ensure the doc is complete, and lead without formal authority.
- **Teams of three** assigned to research sub-questions (motivation, scope, constraints) from the case study.

## Next steps

- [ ] **Align on common definitions before the next session**
- [ ] Prepare individually by reading the case-study keywords
- [ ] Finalise the definitions doc and add secondary-research pointers (Osho, Abhinav)
- [ ] Teams to research the motivation, scope and constraints sub-questions
`,

  "2026-11-24": `
# Housing Societies Case Study: Unrealized Collective Value

> **Key objective:** Identify the potential for **unrealized collective value** in residential societies, meaning the gap between what *collective infrastructure* makes possible and what *individual behaviour* currently captures.
>
> **Next deliverable:** Every person interviews **10–15 ecosystem stakeholders on Thursday** and submits their own notes.

## Key learnings

1. **Converge on a one-line objective before going deep.** Start vague, explore every angle, then cut to a single sentence — otherwise the research never ends.
2. **The gap is the product.** Collective infrastructure makes a lot possible; individual behaviour captures very little of it. That delta — economic, psychological or systemic — is the thing worth investigating.
3. **Indian apartment societies are becoming micro-economies** while the systems for consumption, information, relationships and resource access have not evolved with them.
4. **Treat AI-sourced numbers as leads, not facts.** Much of today's data was AI-extrapolated from the 2011 census. Cross-check against a second source before building an argument on it.
5. **Passive participation gets you ~20% of the learning.** Ask hard questions politely, and let people ask you hard ones.
6. **Three questions frame any ecosystem:** what has fundamentally changed, why does that change matter, and why is this ecosystem worth investigating?

## What we did

The class split into three groups to do secondary research (using AI) on the **apartment / gated-society ecosystem**:

| Group | Lens | Core questions |
|---|---|---|
| 1 | **Economic shift** (value & incentives) | How has residential density changed the economics? How does money flow within apartments? What became possible economically once people lived together? Is this ecosystem worth exploring? |
| 2 | **Human / behavioural shift** | How has apartment living changed behaviour? What new habits, relationships, constraints and dependencies have emerged? How do trust, privacy, belonging and convenience differ from independent houses? What behaviours will emerge in 5 years? |
| 3 | **Structural / systems shift** (infra) | What makes an apartment ecosystem a *system*? What infra is shared? What dependencies exist between participants? Who controls access, decisions and resources? What became collectively possible that was impossible individually? |

Each group had about a minute to pitch its findings, followed by Q&A.

## Data points surfaced

- **16M households** lived in gated communities in the top 50 Indian cities (2021), a number **expected to double by 2031**
- These households are **~32% of the population** in those cities but account for **~45% of consumer spending**
- Bangalore rental pool estimated at **₹36,000 Cr/year** in rent, with **₹24,000 Cr** locked in deposits *(AI-extrapolated guesstimate)*
- **90–95%** of gated-community households shop online, versus far fewer non-gated ones; **5× higher** premium-product penetration
- MyGate: **7B+ gate entries**, ~550M of them food deliveries; a 400-flat complex sees about 1,000 entries per day
- **~57%** of gated-community residents report loneliness, often by choice (privacy)
- A ₹63 lakh RWA fund-misuse case in one Gurgaon society shows that **maintenance money leaks**
- Low-skill jobs created: guards, housekeeping, domestic help, gig delivery

> ⚠️ **Data hygiene:** much of this came from AI, with 2011 census figures extrapolated. Cross-check numbers against a second source before relying on them.

## Deepak's three questions (the important part)

### 1. What has fundamentally changed?

"Change" means comparing **point A (independent household)** with **point B (large society)** along defined **dimensions of comparison**:

| Dimension | Independent house | Society |
|---|---|---|
| Demand | Geographically fragmented | **Concentrated** |
| Infra | Individually owned (own inverter) | **Partially shared** (one generator) |
| Resources | Individually used | **Pooled** (water across 100 homes) |
| Consumption | Independent | **Potentially coordinated** |
| Information | Fragmented | Shared via community groups |
| Trust | Personal relationships | Community / platform-based |
| Governance | None | **RWA / association** |
| Identity | Individual household | **Household + community membership** |
| Labour | Hired individually | Shared across households |

**Takeaway (write this down):** *We are no longer a single economic unit. The residential community itself is emerging as an economic unit.*

Lifestyle and purchasing power are **not** fundamental to the society itself. They come from moving to the *city* (higher cost of living), not from living in an apartment.

### 2. Why does this change matter?

Because **physical proximity changes three things**, which map onto the three groups:

1. **Economics** (Group 1)
2. **Human psychology** (Group 2)
3. **Coordination cost of everyday life**, which is what infra reduces (Group 3)

First-principles mechanisms:

- **Economics of density:** serve more customers in a smaller area at lower cost (dark stores within about 2 km)
- **Economics of scale:** aggregated demand raises purchasing power (you'd never pay for a lift alone)
- **Transaction cost:** shared maintenance is cheaper, but the ground-floor resident still pays for the lift
- **Social proof / FOMO:** neighbours' purchases influence yours
- **Network effects:** some services become more valuable as community participation grows (e.g. the gym)
- **Social norms:** peer behaviour shapes individual decisions (e.g. festivals celebrated across religions)
- **Collective action:** creates opportunity *and* conflict

### 3. Why is this ecosystem worth investigating?

"It's growing" is only the **event layer** (observations and numbers). The fundamental layer is **collectiveness**:

- Infra has become **collective**...
- ...but consumption, commerce and behaviour are still mostly **individual** (individual rent, maintenance, house help, electricity)

> 💡 **Wherever you see a mismatch, that is the most compelling place to do discovery.** This applies to everything.

Mismatches found:

1. **People live together but consume independently**, so there is uncaptured collective economic value (compare a hostel, where food and cleaning are bundled)
2. **People live closer but are socially disconnected**, so psychological and social needs go unmet
3. **House help serves many households but operates independently** (pay disparity, no accountability), which leaves room for labour productivity and livelihood plays (e.g. one agency serving the whole society)
4. **Demand is concentrated, but fulfilment is fragmented**
5. **Shared spaces serve differing interests** (the builder's lawn turned kids' football ground), which causes governance and coordination problems
6. **Information exists but is fragmented**: residents miss events, power cuts and water issues
7. **Businesses can reach concentrated demand but lack community-level distribution** inside societies

## Core hypothesis

> Investigate the gap between **what collective infra makes possible** and **what individual behaviour currently captures**. The value can be economic, psychological, systemic or other.

This closes the first, most abstract phase of the case study. **Method:** start vague and explore every angle, but **converge on a one-line objective before going deep.**

Side insight: Indian apartment societies are becoming **micro-economies**, yet the systems for consumption, information, relationships and resource access haven't evolved.

## Mental models mentioned

- **Second-order effects:** don't think one way only. There is also city-to-village migration (e.g. retirement communities near Mumbai / Lonavala)
- **Active vs passive participation:** passive participation gets you about 20% of the learning. Ask tough questions (politely), and let people ask you tough ones
- **Think as an operator:** use a product or systems perspective, and always a *scalable* one

## Next steps

- [ ] **Thursday:** interview 10–15 stakeholders individually (owners, tenants, guards, help, RWA...), then document and submit notes
- [ ] Next session: finalise interview questions and the **ecosystem map**
- [ ] Re-read the last three topics discussed
- [ ] Spend 30 minutes revising the previous session before each call, and keep personal notes
- [ ] Share written notes in the group and post content daily
`,

  "2026-11-25": `
# Ecosystem Mapping: Scoping Down Before Talking to People

> **Objective carried over:** find the **potential for unrealized collective value** — value you can clearly see in a residential society but which is badly under-utilised.
>
> **Deliverable:** everyone talks to **at least 10 stakeholders** (15 is better) before the next session, documents it raw, and brings their own insights. **No AI-generated interview notes.**

## Key learnings

1. **Mental models are the actual skill.** Deepak reached the collective-vs-individual gap when most of the room did not, and his answer for how was: mental models, used until they are a habit — first principles, second-order effects, Chesterton's Fence, zoom in/zoom out, feedback loops.
2. **Scope down *before* mapping the ecosystem.** A map of everyone is a map of no one.
3. **Use AI to think, not to answer.** Ask *"help me zoom out"*, *"how do I get to first principles here"*, *"what is the second-order effect of this?"* — never *"what's the answer?"*
4. **Interview for stories, not opinions.** Ask what happened last time, not whether they would use something. "Would you pay for..." tells you nothing.
5. **Examples are easy to grasp and hard to apply.** The only way through is to apply them and get feedback fast.
6. **In a society, roughly 50% of your decisions are made for you** — that reframing is what surfaced the gap in the first place.

## Format change

From today, the **Builders of the Week** own the first 15 minutes: a short recap of where the case study has reached. Their job is to **curate and nurture** the discussion, *not* to direct it. Deepak deliberately went off-plan for the first 20 minutes — warm-up first, structure after.

## 1. Recap: what we concluded yesterday

| Dimension | Independent household | Society |
|---|---|---|
| Demand | Fragmented | **Concentrated** |
| Infra | Individually owned | **Partially shared** |
| Consumption | Independent | Potentially coordinated |
| Trust | Personal | Community / platform |
| Labour | Hired individually | Shared |
| Governance | Own decisions | **RWA / manager / collective** |
| Information | Fragmented | Must be shared (app, WhatsApp) |

**Why it matters:** density means serving more customers in a smaller area at lower cost. That is exactly why quick-commerce dark stores (Zepto, Blinkit) are sited next to dense residential pockets.

**Where it lands:** individual behaviour becomes **collective behaviour**, which creates **collective unmet needs**. Societies are turning into **micro-economies**.

### The gap, made concrete

- **Power backup** — every flat buys its own inverter; the society genset only serves common areas. Extend the genset to the flats and both cost and maintenance drop.
- **Water quality** — every flat buys its own RO/filter off Amazon; one community-level treatment would be cheaper and better.
- **Mismatches that survive inside a shared system** — maids hired individually, rent paid individually.
- **Sinking fund** — roughly half of monthly maintenance accumulates for big-ticket replacement (a lift is about 20 lakh after 10 years). One member's society is raising maintenance because the fund ran low.
- **Parking** — an actual fight broke out near one member's home. MyGate already lists slots by day or month, and Park Plus plus FASTag handles enforcement in some societies. The unsolved parts: giving a renter **access**, RWA consent, outsiders as a security risk, guest parking running out at Diwali, and the human tendency *"if my slot is empty I would rather keep it empty than risk someone parking there."*
- **Deepak's crazy idea** — societies are becoming self-regulated micro-nations, so why not a **society-level sovereign fund**? Instead of 200–300 households each running their own SIP, pool it; at 200–300x volume you reach instruments an individual cannot access. Pushback: trust, fraud, litigation, registration, and not everyone shares a risk appetite. **Parked for Thursday or Friday** — today is not about solutions.

## 2. Mental models (the real lesson of the day)

Asked how he reached the collective-vs-individual gap when seven or eight people in the room did not, Deepak's answer was: mental models, used until they become a habit.

1. **First principles** — keep asking "what is this really?" until you hit the mechanism. His worked example: someone studying *autophagy*. What is it? What triggers a cell to eat itself? How does the cell know *which* cell? Gut or brain? What mechanism? Inflammation. Then why does inflammation happen at all if the brain knows it is bad? Why did evolution keep it? The posture that unlocks this is **"I am an idiot from another field, explain it to me."**
2. **Second-order effects** — before a CXO demo you cut the deck and prep the five questions they might ask. You have answers to three. Prepare the other two.
3. **Chesterton's Fence** — before removing anything, ask why it exists. You do not pull the seal off a gas cylinder, because you know what it is for. Someone who does not know might. **Never touch anything before knowing its purpose.**
4. **Zoom in / Zoom out** — when something feels missing, pause two minutes, breathe, and ask: *apart from society, what else exists? what connects to this? what am I really missing?* That is literally how the gap surfaced — "what decisions did I take myself living alone, versus in a society?" In a society roughly **50% of things are done for you**.
5. **Feedback loop** — do something, fail fast, get feedback immediately. *"Examples are easy to grasp, not easy to apply. The only way is to apply it."*

> **Using AI correctly:** do not ask for the answer. Ask *"this is what I am thinking, help me zoom out"*, or *"how do I get to first principles here"*, or *"what is the second-order effect of this?"*
>
> Deepak blocks **15 minutes before every call** to read random things, so he has enough in his head to navigate in real time.

## 3. Scope down before you map the ecosystem

Seven simple questions, split two per breakout room (three teams of three, shuffled from yesterday, 25 minutes):

1. Which city has the highest apartment density? How many societies exist there?
2. What is the typical society size? What residential categories exist, and what is the income variance?
3. Which cities are seeing residential growth right now?
4. How mature is digital infrastructure there (internet penetration, MyGate/NoBroker usage, digital payments)?
5. Which societies can we **realistically access** to go and talk to people?

**Method:** run a guesstimate *in parallel* with AI deep research. Pull from several sources — ANAROCK, JLL, CBRE, property portals, Reddit, Google reviews, public forums, government reports, census — because that is how you get cleaned-up data. On skew (reporting differs by state policy): *"fine — this task is not very data-oriented right now, we can still make sense of it."* **Keep every link: it goes into the discovery document.**

### What came back

- **Growth:** Hyderabad vs Bangalore is the standing debate, both fuelled by IT and GCCs. Mumbai cannot grow outward (the sea) — only redevelopment in Thane and Mumbai. Delhi is saturated; Noida and Gurgaon are growing; Ahmedabad is growing. Hyderabad 4BHKs are at about 8 crore.
- **The counter-example that mattered:** Vizag and Vijayawada residential growth outpaces Hyderabad's **with no IT link at all**. India is a service economy — growth follows service pockets, not only tech parks.
- **Data:** 3 of the top 7 cities grew sales in Q3 2026 — Bangalore, Hyderabad and MMR up; Chennai down after leading 2025. Hyderabad sales up 15%. Tier 2: Mohali, Lucknow, Ahmedabad (**51,000 units sold** in Ahmedabad); Jaipur declining; Kochi shrinking. Two trackers disagreed on direction — Deepak flagged that as **a warning sign**, not a detail.
- **Digital infra:** internet, UPI and 5G are near-universal in urban apartments. What actually differs is **fibre depth**. Karnataka: 102 internet subscriptions per 100 people. Kerala: 81% household internet penetration, the highest of any state. About 15 UPI transactions per person per month (Tamil Nadu and Kerala nearer 10). MyGate: **27,000 communities, 5.7M homes**, raised 225 crore from Dharana Capital in June 2026.

### Scoping decisions taken

- **Walkthrough city:** Mumbai — highest density, about **33,200 societies**, typical size **180–200 flats**.
- **Six residential categories:** affordable / government-sponsored; government employee housing; open apartments and builder floors; **mid-segment gated (80 lakh to 2 crore)**; mega townships and high-rises; row houses and plotted estates; luxury villas and penthouses.
- **What is growing:** affordable, and mid-segment gated societies in tier-2 cities.
- **Accessible for interviews:** **mid-to-premium gated societies, 150–500 homes**, plus societies converted from SRA or chawl to buildings — "very accessible in nature to speak to."
- Societies are categorised by **flat value**, not size (a 10-flat building is ultra-premium). Government schemes instead classify by income: EWS / LIG / HIG.
- **Final call:** do not fixate on Bombay. **Target tier 1 for now**, because everyone in the class lives in tier 1 and can actually run interviews.

## 4. Ecosystem map (stakeholders)

Method Deepak gave: **walk the user journey**. Stand in front of a society. You enter the gate — what happens? Go further in — what happens? Map the actors as you go.

| Zone | Actors |
|---|---|
| **At the gate** | Residents, visitors and guests, **gig workers** (delivery, cab drivers, UrbanClap, newspaper vendor, milkman), security guards, household help |
| **Common areas / amenities** | Housekeeping and garbage collection, maintenance and support staff (gardeners, plumbers, electricians), committee members and admin, **small businesses** (gym trainers, karate, yoga, swimming, tutors, in-society supermarkets and pharmacies), external vendors running classes |
| **Inside the flat** | Owners, tenants, **non-residing owners** (investment flats) and their caretakers, kids, women, elder care, pets, interior contractors in partly-occupied buildings |
| **Invisible but inside the system** | Vendors and suppliers (lift installation and servicing, water tankers, supplies) — not a direct contact for the resident, but part of the ecosystem |
| **Before you even live there** | Brokers (rental brokers, not real-estate brokers), agents, builders and developers |
| **Platforms** | MyGate, NoBroker, Park Plus and similar apps |

Two corrections Deepak made:

- **"Actors" is the wrong word — the right word is ecosystem mapping.** Ecosystem means end-to-end everything connected to this one thing, so apps, EV charging services, tankers and cleaning services all count.
- Talk to the **broker**: *"even if you go and talk to a broker, the broker would know more about societies than the resident."*

**Pets** stayed on the list, and not as a joke: pet owner vs non-pet-owner conflict over common spaces is a genuinely hot topic in most communities.

**Coverage plan the group agreed:** residents are easy for everyone, so deliberately cover the hard categories, or the case study collapses into a resident-only problem. Hard ones named: **rental brokers**, small businesses and in-society classes. Committee member is covered (one member's father is one). House help, gig workers, housekeeping, guards and maintenance are spread across the group.

## 5. Field-work rules

- **Talk to at least 10 people each. 15 gets you more.** Document the whole journey, take photos, send them to the group.
- **Do not use AI to write it.** Deepak's checker caught someone who AI-generated the answers, retyped them by hand and stripped the em dashes — flagged as 90% AI within seconds. *"You spent so much time on this. Better that you had spoken to people."*
- **Submit raw.** Actor name, what they do, where you found them, how you know them, what you asked, what they said. A transcript if it was a call. Condense only in the 15-page discovery document.
- **Be resourceful.** A constraint is not a stop sign — find someone who can connect you, message the friend you have not spoken to in years.
- **Interviewing across a gender or class gap** (raised by Sonam: male guards give curt answers to a woman): take a male friend along, or go through the authority; be **nice but firm and a little authoritative**; **lead** the conversation; and talk to **one guard at a time**, never a group of two or three.
- **Also talk to people who will not move into a society** and find out what stops them. The question is not only about people already inside.
- **Overseas members (Ireland, Canada):** societies also mean **hostels and condos**. Map how the system is layered — is the first layer an app? A digital lock, a passcode, a fingerprint? What does the camera capture at entry? There is no house help, so how does cleaning work and where does garbage go? Himanshi's early insight: in Canada delivery parking is a serious problem with no temporary parking for delivery workers — a non-issue in India. That contrast is where a fundamentally new solution can come from.

## 6. What the next session does with it

Everyone brings their insights, the group picks **one or two personas whose problem is most relevant**, and then has to name the **top 10 burning pain points** of that persona. Only then does the solution space open.

## Questions to ask each stakeholder

Persona-agnostic — swap "here" for society / building / hostel / your round. **Mom Test rules: past behaviour, specifics, no idea-pitching.** Pick 6–8 per conversation.

| # | Purpose | Question | Listen for |
|---|---|---|---|
| 1 | Warm-up | Walk me through a normal day for you here, start to finish. | Routines, touchpoints, where time goes |
| 2 | Context | How long have you been here, and how did you end up here? | Why they chose or landed this place; alternatives considered |
| 3 | Ecosystem | Who do you deal with most in a day? Who is hardest to deal with, and why? | Dependencies, conflict points, power dynamics |
| 4 | Information flow | How do you find out about things here — rules, changes, notices? Tell me about the last time something important reached you late or not at all. | Channels (WhatsApp, guard, notice board, app), gaps |
| 5 | Pain (anchored) | Tell me about the last time something went wrong here. What happened, and what did you do? | Specific incident, who they turned to, how it resolved |
| 6 | Frequency | What is the most irritating part of your day here? How often does it happen? | Recurring vs one-off; intensity |
| 7 | Friction | What takes longer than it should? Walk me through the last time. | Steps, waiting, hand-offs |
| 8 | Current solution | When you need something done — get in, fix something, pay, complain — what do you actually do? Which person, which app? | Existing tools and workarounds, and how well they work |
| 9 | Failed fixes | What have you tried to fix or get around that did not work? | Evidence the pain is real enough to act on |
| 10 | Cost | What do you spend time or money on here that feels like a waste? | Willingness to pay, without asking about it |
| 11 | Aspiration | If you could change one thing about how this place runs, what would it be — and what has stopped that from changing? | Priority pain plus blockers (committee, cost, apathy) |
| 12 | Snowball | Who else should I talk to about this? | Next interviews |

### Follow-up probes (use relentlessly)

| Probe | Use when |
|---|---|
| Tell me more. / What happened next? | Any short answer |
| Why does that matter to you? | A complaint stated flatly |
| How often? When was the last time? | A vague "sometimes / always" |
| How did you handle it last time? | They drift into hypotheticals |
| Who else was involved? What did it cost you — time, money, hassle? | Sizing the pain |

> **Avoid:** "Would you use...", "Do you think X is a problem?", "Would you pay for...", explaining your idea, or asking two questions at once.

## Side session: the PM role (pre-class AMA)

- **"PM" is the wrong word.** *"In my life I have always been a PM. I have never managed a product. My role is to build."* The new name is **Builder** — and a builder can be an engineer, a marketer or a salesperson. The **PO role is dead**: grooming, tickets and navigating architecture is execution, and execution is what AI does.
- **Three focus areas for the rest of your career:** **Discovery** (closer to the user, first principles, reading between the lines), **Building** (judgment applied to creating software; needs software plus AI fundamentals; safe about 3–4 years), **Distribution** (the real moat).
- **Distribution is not a channel.** LinkedIn and YouTube are channels. Distribution is human psychology, neuroscience, behavioural economics, attention and persuasion — understanding what the user wants, building an experience, and getting the outcome. Example loop: content, then a free group, then a free live session, then deeper trust.
- **Why distribution resists automation:** there is no provable mechanism to train on. The data that exists is the *output*; the data you need is the *input*, and an artist cannot tell you how the idea arrived. **Anything provable gets automated.** Coding is defined, so it goes.
- **Where that leaves you:** if you are not genuinely very good at your work, it is 100% automated. AI in the hands of someone extremely good is dangerous — which is why the **polymath** wins. A polymath is not good at many things; a polymath is *extremely* good at many things.
- **Interfaces:** UI is dead, chat is the stopgap (banks on WhatsApp), voice is next, then **phygital**. Each shift still needs someone who knows what the user really wants.
- **Add-on skill he recommends: copywriting.** His lineage: Brian Tracy (his 2017 mentor), Michael Masterson, David Ogilvy. Ogilvy's Rolls-Royce headline — *"At 60 mph the loudest noise is the electric clock"* — about 25,000 dollars of ad spend against 2.8 million dollars of sales in the 1960s, 116 cars. *"That is what AI cannot copy."*
- **Personal brand:** post for depth, not views — long form over short form unless you already have natural camera presence. Record voice and let AI build the visuals if the camera is a blocker. LinkedIn's shelf life is short, so bad early posts cost nothing; just start. Use **counter-intuitive** angles: find the consensus and argue the other side, because people hate that they had not realised it.

## Housekeeping

- **Homework:** post **three interesting things** you saw that were always in front of your eyes but you never noticed. Question everything — that is how intuition gets built.
- The group agreed to try moving the call about an hour earlier (around 8:15–8:30 IST) for a week; on Monday and Friday some people join 20–30 minutes late.
- Keep posting on LinkedIn: *"a lot of people don't get jobs, they get noticed — because most people don't do this."*
`,

  "2026-11-26": `
# Field Findings and Opportunity Scoring

> **Objective:** bring ~23 real interviews back into the room, triangulate them against secondary data, and score the opportunity spaces — while staying in the **observatory phase**, not the solution phase.

> **Deliverable:** fill the shareability homework sheet, consolidate every transcript and note into one folder, and write problem statements for 1–2 shareability segments by Friday.

## Key learnings

1. **Where primary and secondary research *disagree* is the finding.** Reddit surfaced guest/pet/tenant rules; interviews surfaced worker welfare and neighbour isolation. Neither source saw the other's themes — because workers don't post on Reddit, and residents who post online skew young and conflict-prone.
2. **Score opportunities on more than one axis.** Reach, user impact, frequency and economic value pull in different directions, and the ones that score high on human impact often score lowest on money.
3. **The gate problem is a trust problem, not a technology problem.** The same person writing in a paper register versus tapping an app is the same person. Digitising distrust does not remove it.
4. **Exploitation persists because the status quo pays everyone except the victim.** Vendors save on labour, residents get cheap service, and the worker's cost of raising their voice is too high. No single actor has an incentive to fix it, so nothing moves.
5. **Systems thinking: every improvement is a trade somewhere else.** Tighter security means harder visitor access. A bigger society means more amenities and more walking.
6. **Zoom out, not in.** Locking onto a persona or a solution this early is the failure mode; the problem statement is not yet clear.
7. **Keep raw data word for word.** AI loses context and hallucinates when it paraphrases a conversation. Paraphrase in the analysis layer, never in the evidence layer.

## Field research recap

- **~23 interviews** across Tier 1 cities: Gurgaon, Pune, Bangalore
- **Stakeholders covered:** security guards, maids, cooks, car cleaners, dog walkers, gig workers, residents, small vendors
- **Methods varied:** in person, phone, WhatsApp, and overheard lunch conversations (Sonam used WhisperFlow)
- **Access is a real constraint:** Anil was turned away at Trishul by a supervisor and told to get head-office permission first

## Key field findings

### Workers

- Gig workers commonly hold **double shifts or multiple jobs** to supplement wages of roughly **₹15–20k/month**
- **Guards are made to stand through entire shifts** — residents object to them sitting down
- Workers lack basic amenities: water, rest space, shelter from extreme weather
- **Security handovers leave a ~30-minute window with no guard at the gate** — the control everyone trusts has a daily hole in it

### Female domestic workers

- Wages often go into the **husband's account**; women have limited direct access to their own earnings
- One maid's gold savings, built through a Tanishq scheme, were **sold by her husband**
- The financial product existed and worked. The control over it did not.

### Residents and vendors

- **Small vendors** (often women running home enterprises) face intense competition and repeat-visit fatigue inside societies
- Residents are **largely transactional** with neighbours; social ties form mainly through **kids** or **long tenure**

## Triangulating primary against secondary

Combined **21 primary interviews** with Reddit, Google Maps and news scraping.

| | Themes |
|---|---|
| **Both sources** | Gate friction for delivery and service workers · worker insecurity and poor conditions · committee workload and trust deficit · maintenance and water-repair costs (large, lumpy, disputed) |
| **Reddit only** | Rules on guests, pets, tenant access |
| **Interviews only** | Worker welfare, neighbour isolation |

> **Why the gap exists:** workers don't post on Reddit, and the residents who complain online skew young and conflict-prone. Each channel has a **selection bias**, so a theme missing from one is evidence about *the channel*, not about reality.

## Deepak's analytical framework (the AI prompt)

A structured prompt for unbiased analysis, worth reusing:

- Act as an **independent research analyst**
- Extract **evidence-backed** stakeholder motivations, unmet needs, workarounds, conflicts and incentive misalignments
- **Distinguish evidence from interpretation**, and quantify how often each theme recurs
- Actively challenge **confirmation bias**, **sampling bias**, and **overrepresentation of vocal stakeholders**
- Hold the line: *"absence of evidence is not evidence of absence"*
- **Output:** a structured evidence table with counterintuitive insights and explicit research gaps

Run on Claude Sonnet; **Opus 5.5 recommended** for better output when the guardrails are strict.

### The three biases, briefly

- **Confirmation bias** — you notice the quotes that support the idea you already like
- **Sampling bias** — your 23 people are not a random sample of the population; they are the people who agreed to talk
- **Vocal-stakeholder overrepresentation** — the loudest actor looks like the most affected one, and usually isn't

## Opportunity space scoring

The group voted each space on four dimensions: **Reach · User Impact · Frequency · Economic Value**.

| Opportunity | Reach | Impact | Frequency | Economic value |
|---|---|---|---|---|
| Gate as shared checkpoint for repeat visitors | High | — | High | **Low** |
| Accountability gap (complaints move to WhatsApp, never actioned in-app) | Moderate | Moderate | Moderate | Moderate |
| Society running costs (water, repairs, unpaid arrears) | High | High | **Low** | — |
| Worker welfare and site conditions | High | High | — | **Low** |
| **Internal labour market for household help** (one-way ratings, churn) | High | High | High | **High** |

- The gate is **already partly solved** by MyGate's pre-approval and ID-based entry
- **Deepak's challenge on worker welfare:** the demand-supply imbalance means there is no clear business ROI for vendors or societies. A real problem with no payer is still not a product.

## Opportunity spaces identified

- **Hyperlocal distribution** — a dark store inside a large society for groceries and essentials
- **Mobility / carpooling** — a middle layer for residents commuting to the same office hubs
  - *Caveat:* Uber Pool failed in India, and once riders know each other they drift off-app. Any platform whose value is introducing people must answer **why they stay after the introduction** (disintermediation).
- **Childcare and elderly care** — subscription-based collective care within the society
- **Household management** — a managed-services model. Co-working analogy: pay per seat, a third party handles everything behind it.
- **Specialised service marketplace** — STP/WTP operators, fire safety, pool maintenance
- **Sustainability** — solar, rainwater harvesting, energy efficiency on shared infrastructure
- **Shareability marketplace — highest votes:** residents share or rent items and services inside the society
  - Equipment and gadgets (cameras, PS5, baby gear)
  - Cars and parking spaces
  - Food (home-cooked, on demand)
  - Coaches, mentors, tutors, babysitters, sports trainers
  - Jobs and referrals (e.g. an office nearby, walk-to-work leads)
  - Hobby groups and workshops

## Deepak's guidance

- **Do not jump to solutions.** Still observatory phase; the problem statement is not clear yet.
- **Zoom out, not in.** Do not lock onto a persona or a solution prematurely.
- **Systems thinking:** every node is connected, so solving for one stakeholder creates friction for another.
  - Better security → harder visitor access
  - Larger society → more amenities, more walking
- **Why exploitation persists:** everyone benefits from the status quo except the worker. Vendors save on labour cost, residents get cheap services, and the worker's cost of raising their voice is too high. This is a **collective action problem**, not a missing feature.
- **Root cause of gate friction is distrust, not technology.** The same person writes in a register or taps an app; behaviour follows trust, not interface.
- **Open question:** is that distrust **information asymmetry** (nobody knows who is at the gate) or **conflict of interest** (someone benefits from the ambiguity)? The answer changes what gets built.
- **AI guardrail:** always keep raw data word for word. AI loses context and hallucinates when paraphrasing user conversations.

## Next steps

- [ ] **Fill the shareability homework sheet before tomorrow's session**
- [ ] Consolidate all primary transcripts, notes and secondary data into one folder
- [ ] Finalise 1–2 shareability segments and write problem statements (Friday session)
`,
};
