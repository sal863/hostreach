# Airbnb Host Email Reactivation Service - Initial Plan

## Project Name: HostReach

## Core Value Proposition
Automated email reactivation campaigns for Airbnb hosts to convert past guests into repeat bookings.

## Key Components

### 1. Prospecting Engine
- Scrape Airbnb listings (target: established hosts with 10+ reviews)
- Extract: host contact, property details, location, review count
- Filter: High-value markets (CDMX, SF Bay, Tahoe, Austin, Miami)
- Output: 100-500 qualified leads

### 2. Content Generator
- Research local attractions, events, seasonal hooks per property
- Generate personalized email campaigns (3-5 local content hooks)
- Create preview screenshots (look like real campaigns)
- Personalization: property name, location-specific content, seasonal timing

### 3. Outreach System
- Email hosts from sal@wedistill.com
- Subject: "I created a guest reactivation campaign for [Property]"
- Show preview, explain ROI (repeat bookings = highest margin)
- Offer: $297 one-time OR $97/month recurring

### 4. Delivery Pipeline
- Collect guest email lists from accepting hosts
- Send reactivation emails via bulk email service
- Track: opens, clicks, bookings
- Report results back to host

## Technical Stack (Draft)

- **Scraping:** Bright Data (already set up) or Apify
- **Content Gen:** Claude API (Opus for quality)
- **Email Sending:** Mailgun or SendGrid (TBD)
- **Payment:** Stripe
- **Hosting:** Vercel
- **Database:** JSON files initially, scale to PostgreSQL if needed

## Revenue Model

**V1:** $297 one-time (prove concept)
**V2:** $97/month quarterly campaigns (recurring)
**V3:** $197 setup + 10% of bookings (performance-based)

## Success Metrics

- **Week 1:** 100 scraped listings, 20 outreach emails sent
- **Week 2:** 3-5 hosts signed ($891-1,485 revenue)
- **Week 3:** First campaigns delivered, testimonials collected
- **Month 1:** 10-15 hosts, $3-5K revenue

## Next Steps

1. Deepen this plan with technical research
2. Review plan for gaps/risks
3. Create GitHub repo with detailed specs
4. Build MVP

---
*Created: 2026-02-12 09:58 CST*
