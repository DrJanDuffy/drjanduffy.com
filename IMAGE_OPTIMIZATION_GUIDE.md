# Image Optimization Guide for GBP SEO

This guide outlines best practices for optimizing images to support Google Business Profile (GBP) and local SEO.

## Image Naming Conventions

### Format
`[location]-[service]-[business-name]-[descriptor].jpg`

### Examples
- `summerlin-luxury-real-estate-dr-jan-duffy-office.jpg`
- `las-vegas-real-estate-agent-dr-janet-duffy-headshot.jpg`
- `summerlin-west-home-staging-dr-jan-duffy-example.jpg`
- `the-ridges-luxury-property-dr-jan-duffy-listing.jpg`
- `las-vegas-failed-listing-specialist-dr-jan-duffy-team.jpg`

### Best Practices
- Use lowercase letters
- Separate words with hyphens (not underscores)
- Include location (Las Vegas, Summerlin, The Ridges, etc.)
- Include service type (real estate, luxury homes, etc.)
- Include business name or agent name
- Keep file names descriptive but concise (50-75 characters max)

## Alt Text Guidelines

### Format
`[Description] - [Location] - [Business Name]`

### Examples

**Office/Team Images:**
```html
<img 
  src="/summerlin-real-estate-office-dr-jan-duffy.jpg" 
  alt="Dr. Janet Duffy Real Estate office in Summerlin, Las Vegas, Nevada"
/>
```

**Property Images:**
```html
<img 
  src="/summerlin-luxury-home-listing-dr-jan-duffy.jpg" 
  alt="Luxury home for sale in Summerlin, Las Vegas - Dr. Janet Duffy Real Estate"
/>
```

**Agent Headshots:**
```html
<img 
  src="/las-vegas-real-estate-agent-dr-janet-duffy.jpg" 
  alt="Dr. Janet Duffy, Las Vegas real estate agent specializing in homes that didn't sell"
/>
```

**Service Images:**
```html
<img 
  src="/las-vegas-home-staging-dr-jan-duffy.jpg" 
  alt="Professional home staging service in Las Vegas by Dr. Janet Duffy Real Estate"
/>
```

### Alt Text Best Practices
1. **Be Descriptive:** Describe what's in the image
2. **Include Location:** Always mention city/neighborhood when relevant
3. **Include Business Name:** Reference "Dr. Janet Duffy" or "Dr. Janet Duffy Real Estate"
4. **Keep It Natural:** Write for humans, not just search engines
5. **Be Specific:** "Luxury home in Summerlin" not just "house"
6. **Limit Length:** 125 characters or less
7. **No Keyword Stuffing:** Natural language only

## Image File Structure

### Recommended Organization
```
public/
├── images/
│   ├── office/
│   │   ├── summerlin-office-dr-jan-duffy-exterior.jpg
│   │   ├── summerlin-office-dr-jan-duffy-interior.jpg
│   │   └── las-vegas-office-dr-jan-duffy-reception.jpg
│   ├── team/
│   │   ├── las-vegas-real-estate-agent-dr-janet-duffy-headshot.jpg
│   │   └── dr-jan-duffy-team-las-vegas.jpg
│   ├── properties/
│   │   ├── summerlin-luxury-home-dr-jan-duffy-listing-1.jpg
│   │   ├── the-ridges-estate-dr-jan-duffy-sold.jpg
│   │   └── red-rock-country-club-home-dr-jan-duffy.jpg
│   ├── services/
│   │   ├── las-vegas-home-staging-dr-jan-duffy.jpg
│   │   ├── summerlin-professional-photography-dr-jan-duffy.jpg
│   │   └── las-vegas-mls-listing-dr-jan-duffy.jpg
│   └── neighborhoods/
│       ├── summerlin-west-luxury-homes-dr-jan-duffy.jpg
│       ├── the-ridges-las-vegas-dr-jan-duffy.jpg
│       └── red-rock-country-club-las-vegas-dr-jan-duffy.jpg
```

## Image Optimization Checklist

### Technical Optimization
- [ ] **File Size:** Compress images (aim for <200KB for web)
- [ ] **Format:** Use WebP when possible, JPG for photos, PNG for graphics
- [ ] **Dimensions:** Resize to appropriate dimensions (max 1920px width)
- [ ] **Lazy Loading:** Implement lazy loading for below-fold images
- [ ] **Responsive Images:** Use `srcset` for different screen sizes

### SEO Optimization
- [ ] **File Name:** Includes location and service keywords
- [ ] **Alt Text:** Descriptive, includes location and business name
- [ ] **Title Attribute:** Optional, can match alt text
- [ ] **Caption:** When appropriate, include location context
- [ ] **Schema:** Images referenced in LocalBusiness schema

### Content Optimization
- [ ] **Relevance:** Image matches page content
- [ ] **Quality:** High-quality, professional images
- [ ] **Uniqueness:** Original images preferred over stock photos
- [ ] **Context:** Images show local area/neighborhood when relevant

## Implementation Examples

### Next.js Image Component
```tsx
import Image from 'next/image'

<Image
  src="/images/office/summerlin-office-dr-jan-duffy-exterior.jpg"
  alt="Dr. Janet Duffy Real Estate office in Summerlin, Las Vegas, Nevada"
  width={800}
  height={600}
  loading="lazy"
  className="rounded-lg"
/>
```

### With Schema Reference
```tsx
// In LocalBusiness schema
{
  "@type": "LocalBusiness",
  "image": [
    "https://www.drjanduffy.com/images/office/summerlin-office-dr-jan-duffy-exterior.jpg",
    "https://www.drjanduffy.com/images/team/las-vegas-real-estate-agent-dr-janet-duffy-headshot.jpg"
  ]
}
```

## Image Optimization Tools

### Compression
- [TinyPNG](https://tinypng.com/) - PNG/JPG compression
- [Squoosh](https://squoosh.app/) - Google's image compression tool
- [ImageOptim](https://imageoptim.com/) - Mac app for batch optimization

### Format Conversion
- [CloudConvert](https://cloudconvert.com/) - Convert to WebP
- [Squoosh](https://squoosh.app/) - WebP conversion

### Alt Text Generation
- Write descriptive alt text manually (recommended)
- Use AI tools for suggestions, but always review and customize

## Common Mistakes to Avoid

1. **Generic File Names:**
   - ❌ `image1.jpg`, `photo.png`, `img_123.jpg`
   - ✅ `summerlin-luxury-home-dr-jan-duffy.jpg`

2. **Missing Alt Text:**
   - ❌ `<img src="..." />`
   - ✅ `<img src="..." alt="Dr. Janet Duffy Real Estate office in Summerlin, Las Vegas" />`

3. **Generic Alt Text:**
   - ❌ `alt="office"`, `alt="house"`, `alt="person"`
   - ✅ `alt="Dr. Janet Duffy Real Estate office in Summerlin, Las Vegas, Nevada"`

4. **Missing Location:**
   - ❌ `alt="Real estate office"`
   - ✅ `alt="Dr. Janet Duffy Real Estate office in Summerlin, Las Vegas"`

5. **Keyword Stuffing:**
   - ❌ `alt="Las Vegas real estate agent Summerlin luxury homes The Ridges Dr. Janet Duffy"`
   - ✅ `alt="Dr. Janet Duffy, Las Vegas real estate agent specializing in Summerlin luxury homes"`

## Image Schema Markup

### LocalBusiness Image
```json
{
  "@type": "LocalBusiness",
  "image": [
    "https://www.drjanduffy.com/images/office/summerlin-office-dr-jan-duffy-exterior.jpg",
    "https://www.drjanduffy.com/images/team/las-vegas-real-estate-agent-dr-janet-duffy-headshot.jpg"
  ]
}
```

### Person Image
```json
{
  "@type": "Person",
  "image": "https://www.drjanduffy.com/images/team/las-vegas-real-estate-agent-dr-janet-duffy-headshot.jpg"
}
```

## Checklist for New Images

Before adding a new image to the website:

- [ ] File name includes location and service keywords
- [ ] File name includes business/agent name
- [ ] Image is compressed (<200KB)
- [ ] Image is properly sized (max 1920px width)
- [ ] Alt text is descriptive and includes location
- [ ] Alt text includes business name
- [ ] Image is relevant to page content
- [ ] Image quality is professional
- [ ] Image is added to appropriate folder structure
- [ ] Image is referenced in schema if relevant

## Maintenance

### Monthly Review
- Check for images with missing alt text
- Verify all images have location context
- Update alt text if business information changes
- Compress any large images
- Remove unused images

### When Business Changes
- Update image file names if location changes
- Update alt text if business name changes
- Update schema image references
- Replace outdated images

---

**Last Updated:** January 2026
**Maintained By:** Development Team

