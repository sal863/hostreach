# HostReach Architecture

## System Overview

```
[Scraping] → [Content Gen] → [Outreach] → [Delivery] → [Reporting]
```

### Phase 1: Prospecting
- Scrape Airbnb listings (Bright Data / Apify)
- Filter: 10+ reviews, high-value markets
- Extract: host contact, property details, location
- Store: leads database (JSON → PostgreSQL)

### Phase 2: Content Generation
- Research local attractions (Google Places, event APIs)
- Generate personalized email (Claude Opus)
- Create preview screenshot (Puppeteer)
- Store: campaign templates

### Phase 3: Outreach
- Email hosts from sal@wedistill.com
- Show preview + value prop
- Collect payments (Stripe)
- Store: accepted hosts

### Phase 4: Delivery
- Host provides guest email list
- Send reactivation emails (Mailgun/SendGrid)
- Track: opens, clicks, bookings
- Report results

## Tech Stack (To Be Finalized)

- **Backend:** Node.js / TypeScript
- **Scraping:** TBD (Bright Data vs Apify research in progress)
- **AI:** Claude API (Opus for quality content)
- **Email:** TBD (Mailgun vs SendGrid research in progress)
- **Payment:** Stripe
- **Storage:** JSON → PostgreSQL
- **Hosting:** Vercel / Railway

## Data Flow

```
Airbnb Listing → Lead Record → Campaign Content → Host Outreach → Delivery
```

---
*Updated: 2026-02-12*
