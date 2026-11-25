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
const NOTES = {
  "2026-11-24": `
# Housing Societies Case Study: Unrealized Collective Value

> **Key objective:** Identify the potential for **unrealized collective value** in residential societies, meaning the gap between what *collective infrastructure* makes possible and what *individual behaviour* currently captures.
>
> **Next deliverable:** Every person interviews **10–15 ecosystem stakeholders on Thursday** and submits their own notes.

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
};
