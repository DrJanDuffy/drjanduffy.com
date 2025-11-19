# Google Business Profile (GBP) Testing Checklist

Use this checklist to verify all GBP optimizations are working correctly.

## Pre-Deployment Testing

### 1. Schema Markup Validation ✅
- [ ] Test homepage schema with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Verify LocalBusiness schema appears correctly
- [ ] Check that Review schema is detected
- [ ] Validate all NAP data in schema matches GBP exactly
- [ ] Confirm `sameAs` field includes Google Business Profile URL
- [ ] Test schema on contact page
- [ ] Test schema on about page
- [ ] Test schema on services page

### 2. NAP Consistency Check ✅
- [ ] Verify business name matches GBP exactly on:
  - [ ] Homepage
  - [ ] Contact page
  - [ ] About page
  - [ ] Services page
  - [ ] Footer
  - [ ] Schema markup
- [ ] Verify address matches GBP exactly:
  - [ ] Street address: 1180 North Town Center Drive
  - [ ] City: Las Vegas
  - [ ] State: NV
  - [ ] ZIP: 89144
- [ ] Verify phone number matches GBP exactly:
  - [ ] Format: (702) 500-1064
  - [ ] Clickable tel: links work
  - [ ] Appears in schema markup
- [ ] Verify business hours match GBP:
  - [ ] Monday-Sunday: 8:00 AM - 8:00 PM
  - [ ] Displayed on homepage
  - [ ] Displayed on contact page
  - [ ] In schema markup

### 3. Google Map Integration ✅
- [ ] Map embed loads correctly on homepage
- [ ] Map embed loads correctly on contact page
- [ ] "Get Directions" button works
- [ ] "View on Google Maps" button works
- [ ] Map shows correct location (1180 North Town Center Drive)
- [ ] Map is responsive on mobile devices

### 4. Google Reviews Integration ✅
- [ ] Reviews section displays on homepage
- [ ] Star ratings show correctly (5.0/5.0)
- [ ] Review count displays (47 reviews)
- [ ] Individual reviews display correctly
- [ ] "View on Google" button links to GBP
- [ ] Review schema markup is valid

### 5. Call-to-Action Buttons ✅
- [ ] "Call Now" button appears on homepage
- [ ] "Call Now" button has correct phone number
- [ ] "Get Directions" button appears on homepage
- [ ] "Get Directions" button works correctly
- [ ] "View Google Reviews" button appears
- [ ] All CTAs are mobile-friendly

### 6. Metadata Optimization ✅
- [ ] Homepage title includes: Business Name | Service | Location | Phone
- [ ] Homepage description includes location and services
- [ ] About page title optimized for local SEO
- [ ] Services page title optimized for local SEO
- [ ] All meta descriptions include location context
- [ ] OpenGraph tags include local information
- [ ] Twitter cards include local information

### 7. Internal Linking ✅
- [ ] Anchor text includes location/service context
- [ ] Links to neighborhood pages include location
- [ ] Service links include location context
- [ ] All internal links are descriptive

### 8. Mobile Responsiveness ✅
- [ ] Test homepage on mobile device
- [ ] Test contact page on mobile device
- [ ] NAP section displays correctly on mobile
- [ ] Map embed is responsive
- [ ] CTAs are touch-friendly
- [ ] Use [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### 9. Performance Testing ✅
- [ ] Test with [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Verify Core Web Vitals are good
- [ ] Check image optimization
- [ ] Verify schema doesn't slow page load
- [ ] Test map embed loading performance

## Post-Deployment Testing

### 10. Google Search Console ✅
- [ ] Submit updated sitemap
- [ ] Request indexing for updated pages
- [ ] Monitor for schema errors
- [ ] Check for mobile usability issues
- [ ] Review search performance

### 11. Google Business Profile Verification ✅
- [ ] Verify website URL is correct in GBP
- [ ] Confirm NAP matches exactly between website and GBP
- [ ] Check that business hours match
- [ ] Verify service categories align
- [ ] Ensure GBP Posts are being created
- [ ] Confirm reviews are being received

### 12. Local SEO Verification ✅
- [ ] Search for "Dr. Janet Duffy Real Estate Las Vegas"
- [ ] Search for "real estate agent Summerlin"
- [ ] Search for "homes that didn't sell Las Vegas"
- [ ] Check local pack appearance
- [ ] Verify business appears in Google Maps
- [ ] Test "near me" searches

## Environment Variables Setup

### Required Variables:
```env
NEXT_PUBLIC_SITE_URL=https://www.drjanduffy.com
NEXT_PUBLIC_GOOGLE_BUSINESS_URL=[Your GBP URL - e.g., https://g.page/r/YOUR_PROFILE]
NEXT_PUBLIC_GOOGLE_MAP_EMBED_URL=[Your Google Maps Embed URL]
```

### How to Get GBP URL:
1. Go to your Google Business Profile
2. Click "Share" or "Get link"
3. Copy the URL (format: `https://g.page/r/YOUR_PROFILE` or similar)

### How to Get Google Maps Embed URL:
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your business address
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL

## Monthly Maintenance Checklist

### NAP Consistency Audit
- [ ] Verify NAP matches GBP on all pages
- [ ] Check for any NAP discrepancies
- [ ] Update if GBP changes

### Schema Health Check
- [ ] Test schema with Rich Results Test
- [ ] Fix any schema errors
- [ ] Update schema if business changes

### Content Freshness
- [ ] Update Google Reviews section with latest reviews
- [ ] Refresh GBP Posts widget
- [ ] Update business hours if changed
- [ ] Review and update service descriptions

### Link Health
- [ ] Verify all GBP links work
- [ ] Check Google Maps embed still works
- [ ] Test all CTA buttons
- [ ] Verify internal links

### Performance Monitoring
- [ ] Check PageSpeed Insights monthly
- [ ] Monitor Core Web Vitals
- [ ] Review mobile usability
- [ ] Optimize images as needed

## Common Issues & Solutions

### Schema Not Showing in Rich Results Test
- **Solution:** Verify JSON-LD syntax is correct
- **Solution:** Check that schema is in `<head>` or before `</body>`
- **Solution:** Ensure all required fields are present

### Map Not Loading
- **Solution:** Verify embed URL is correct
- **Solution:** Check if URL requires API key
- **Solution:** Test embed URL directly in browser

### NAP Mismatch
- **Solution:** Update all instances to match GBP exactly
- **Solution:** Check schema markup
- **Solution:** Verify footer and header

### Reviews Not Displaying
- **Solution:** Verify component is imported correctly
- **Solution:** Check that reviews data is provided
- **Solution:** Verify schema markup includes reviews

## Success Metrics

Track these metrics to measure GBP optimization success:

1. **Local Search Rankings**
   - Position for "real estate agent Las Vegas"
   - Position for "Dr. Janet Duffy"
   - Position for service + location queries

2. **Google Business Profile Insights**
   - Website clicks
   - Direction requests
   - Phone calls
   - Review count growth

3. **Schema Rich Results**
   - Number of pages with rich results
   - Review stars in search results
   - Business information in Knowledge Graph

4. **User Engagement**
   - Time on site
   - Bounce rate
   - Form submissions
   - Phone call clicks

## Next Steps After Testing

1. **Fix any issues** found during testing
2. **Submit sitemap** to Google Search Console
3. **Request indexing** for updated pages
4. **Monitor performance** for 2-4 weeks
5. **Make adjustments** based on data
6. **Schedule monthly audits** using this checklist

---

**Last Updated:** January 2026
**Maintained By:** Development Team

