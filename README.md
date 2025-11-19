# Expired Listing Conversion Website

High-conversion expired listing website for Dr. Janet Duffy. This is a conversion-focused weapon designed to turn angry, frustrated expired sellers into listings through aggressive messaging, interactive tools, and automated lead nurturing.

## Features

- **Aggressive Messaging**: "Your Agent Failed" positioning designed to trigger action
- **Interactive Conversion Tools**: 
  - Cost Calculator - Shows real financial loss from expired listings
  - Blame Analyzer Quiz - 60-second assessment of agent performance
  - Home Value Reality Check - Data-driven home valuation
- **Social Proof**: 47 expired listings sold, detailed case studies, testimonials
- **Multiple Lead Capture Points**: Forms, exit intent popups, chat widget, sticky header
- **Automation Ready**: Email/SMS sequences for lead nurturing (Resend/Twilio integration)
- **Facebook Integration**: Pixel tracking, retargeting audiences, custom events
- **SEO Optimized**: Target keywords, schema markup, sitemap, robots.txt
- **Performance**: Optimized for Core Web Vitals, fast loading, mobile-first

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Runtime**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Analytics**: Google Analytics 4, Facebook Pixel, Hotjar, CallRail
- **Deployment**: Vercel

## Environment Variables

Create a `.env.local` file:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://www.drjanduffy.com

# Analytics
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=your_pixel_id
NEXT_PUBLIC_HOTJAR_ID=your_hotjar_id
NEXT_PUBLIC_CALLRAIL_ID=your_callrail_id

# Email Automation (Resend)
RESEND_API_KEY=your_resend_key

# SMS Automation (Twilio)
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_PHONE_NUMBER=your_twilio_number

# Database (Optional - for lead storage)
DATABASE_URL=your_database_url
```

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Pages

- `/` - Homepage with hero, why expired section, proof, calculator
- `/success-stories` - Case studies of expired listings sold
- `/why-expire` - Data-driven analysis of why listings expire
- `/comparison` - Side-by-side comparison: Your Agent vs Me
- `/30-day-plan` - Week-by-week breakdown of selling strategy
- `/tools/cost-calculator` - Interactive cost calculator
- `/tools/blame-analyzer` - Agent performance quiz
- `/tools/value-check` - Home value reality check

## API Routes

- `POST /api/leads` - Capture and store leads
- `POST /api/calculate-cost` - Calculate expired listing costs
- `POST /api/value-check` - Calculate home value
- `POST /api/send-report` - Trigger email automation

## Key Metrics

- **47 Expired Listings Sold** - Social proof number
- **19 Day Average** - Average time to sell expired listings
- **98.7% of Asking** - Average sale price percentage
- **30-Day Guarantee** - Sold in 30 days or work free

## Conversion Strategy

1. **Anger Trigger**: "Your Agent Failed" messaging
2. **Financial Pain**: Cost calculator shows real losses
3. **Social Proof**: Success stories and testimonials
4. **Urgency**: Live counters, time-sensitive messaging
5. **Multiple Touchpoints**: Forms, popups, chat, phone CTAs
6. **Automation**: Email/SMS sequences for lead nurturing

## Performance Targets

- PageSpeed Score: 95+
- First Paint: <1 second
- Interactive: <2 seconds
- Mobile Score: 98+

## License

Private - Dr. Janet Duffy Real Estate
