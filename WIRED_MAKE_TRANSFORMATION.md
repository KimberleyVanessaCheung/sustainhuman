# Wired/Make Magazine Style Transformation

## 🎨 What Changed

Your SustainHuman website has been completely redesigned in the style of **Wired** and **Make** magazines with bold, editorial typography and modern layouts.

## ✨ New Design Features

### 1. **Featured Hero Article**
- Large, prominent featured article at the top
- 2-column layout (image + content)
- Massive bold headline (3rem, 900 weight)
- Category tag overlay on image
- Read time indicator
- Hover effects with image zoom

### 2. **Category Organization**
Articles are now organized into 6 categories:
- **Human Performance** (6 articles)
- **Environment** (5 articles)
- **Technology** (5 articles)
- **Future** (4 articles)
- **Science** (4 articles)
- **Innovation** (4 articles)

### 3. **Bold Typography** (Wired/Make Style)
- **Section titles**: 3rem, 900 weight, uppercase
- **Featured title**: 3rem, 900 weight, tight letter-spacing
- **Category titles**: 1.8rem, 900 weight, uppercase with blue underline
- **Article titles**: 1.3rem, 800 weight
- All using modern, editorial font weights

### 4. **Category Tags**
- Bright blue tags on every article image
- Uppercase, bold, small caps style
- Positioned top-left on images
- Helps readers quickly identify content type

### 5. **Read Time Indicators**
- Every article shows estimated read time
- Small, uppercase, gray text
- Professional magazine feel

### 6. **Modern Grid Layouts**
- Featured article: 1.5fr 1fr grid
- Category grids: Auto-fill, 320px minimum
- Clean spacing and alignment
- Responsive breakpoints

### 7. **Refined Color Scheme**
- Kept your blue/silver theme
- White background for clean, editorial look
- Blue (#00d4ff) for accents and tags
- Dark blue (#0a1628) for text
- Subtle shadows and hover effects

## 📊 Article Expansion

**Before**: 12 articles
**After**: 28 articles

### New Articles Added:
1. The New Science of Sleep Hacking (Featured)
2. Wearable Biosensors Are Reading Your Body in Real Time
3. The Metabolic Flexibility Revolution
4. Cold Exposure: The Science Behind the Ice Bath Trend
5. Cognitive Load Management for the Digital Age
6. The Fitness Energy Paradox
7. Micro Solar Is Finally Ready for Prime Time
8. The Carbon Capture Startups Betting on Direct Air Extraction
9. Community Microgrids Are Reshaping Energy Distribution
10. Vertical Farms Are Growing Up—Literally
11. The Circular Economy Isn't Just Recycling Anymore
12. Smart Homes That Actually Make You Smarter
13. The Kinetic Energy Harvesters in Your Shoes
14. Brain-Computer Interfaces Go Mainstream
15. The Battery Breakthrough That Changes Everything
16. Quantum Sensors Are Measuring the Unmeasurable
17. Space Habitats Are Teaching Us How to Live on Earth
18. The Longevity Startups Hacking Human Lifespan
19. Synthetic Biology Is Rewriting the Code of Life
20. The Metaverse Meets Physical Fitness
21. The Gut-Brain Axis Is More Powerful Than We Thought
22. Mitochondria: The Energy Crisis Inside Your Cells
23. Chronobiology: Why Timing Is Everything
24. The Placebo Effect Is Getting Stronger
25. Biomimicry: Nature's 3.8 Billion Years of R&D
26. The Hydrogen Economy Is Finally Happening
27. Lab-Grown Everything: The Future of Materials
28. The Passive House Standard Goes Mainstream

## 🎯 Wired/Make Design Elements

### Typography Hierarchy
```
Hero Title: 4.5rem, 900 weight
Featured Title: 3rem, 900 weight
Section Title: 3rem, 900 weight, uppercase
Category Title: 1.8rem, 900 weight, uppercase
Article Title: 1.3rem, 800 weight
Body Text: 0.95-1.3rem, 400 weight
```

### Layout Patterns
- **Featured**: Full-width hero with image + content split
- **Categories**: Sectioned by topic with bold headers
- **Grid**: Responsive 3-column → 2-column → 1-column
- **Cards**: Minimal shadows, clean edges, hover animations

### Interactive Elements
- Image zoom on hover
- Card lift on hover
- Category tag overlays
- Smooth transitions (0.3-0.5s)

## 📱 Responsive Design

### Desktop (>768px)
- Featured: 2-column layout
- Category grids: 3 columns
- Large, bold typography

### Tablet (768px)
- Featured: Stacked layout
- Category grids: 2 columns
- Adjusted font sizes

### Mobile (<480px)
- Featured: Single column
- Category grids: 1 column
- Optimized touch targets

## 🔧 Technical Implementation

### Files Modified:
1. **articles-data.js** - Added 16 new articles with categories, read times, featured flag
2. **script.js** - New rendering logic for featured article and category sections
3. **styles.css** - Complete redesign with Wired/Make typography and layouts
4. **index.html** - Updated section title to "Stories"

### New Data Structure:
```javascript
{
    id: 1,
    title: "Article Title",
    subtitle: "Article description",
    image: "image-url",
    category: "Human Performance",
    featured: true,  // NEW
    readTime: "8 min"  // NEW
}
```

## 🎨 Color Palette (Unchanged)

- Primary Blue: #00d4ff
- Dark Blue: #0a1628
- Medium Blue: #1e3a5f
- Silver: #c0c0c0
- White: #ffffff
- Light Gray: #f8f9fa

## ✅ What Works

- ✅ 28 articles across 6 categories
- ✅ Featured article hero section
- ✅ Category-based organization
- ✅ Bold, editorial typography
- ✅ Category tags on all articles
- ✅ Read time indicators
- ✅ Responsive design
- ✅ Hover animations
- ✅ Clean, modern aesthetic
- ✅ Wired/Make magazine feel

## 🚀 Next Steps (Optional)

1. **Add filtering** - Let users filter by category
2. **Add search** - Search articles by keyword
3. **Add pagination** - Show 10-15 articles per page
4. **Add author bios** - If you want to add author info
5. **Add social sharing** - Share buttons for articles
6. **Add comments** - Disqus or similar

## 📝 Maintaining the Style

When adding new articles:
1. Choose a category
2. Add a compelling, bold title (Wired-style)
3. Write an intriguing subtitle
4. Include read time estimate
5. Use high-quality images
6. Keep titles punchy and editorial

Your website now has the bold, modern, editorial feel of Wired and Make magazines while maintaining your unique sustainability focus! 🎉

