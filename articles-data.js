// Articles Data - Modern Digital Magazine
// Categories: Human Performance, Environment, Technology, Science, Innovation, Future

const articlesData = [
    // FEATURED ARTICLE
    {
        id: 1,
        title: "The New Science of Sleep Hacking",
        subtitle: "How elite performers are using circadian biology and wearable tech to optimize recovery and unlock superhuman energy levels",
        image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=1200&h=800&fit=crop",
        category: "Human Performance",
        featured: true,
        readTime: "8 min"
    },

    // HUMAN PERFORMANCE
    {
        id: 2,
        title: "Wearable Biosensors Are Reading Your Body in Real Time",
        subtitle: "The latest generation of smart devices can track everything from glucose to cortisol—without drawing blood",
        image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=800&h=600&fit=crop",
        category: "Human Performance",
        readTime: "6 min"
    },
    {
        id: 3,
        title: "The Metabolic Flexibility Revolution",
        subtitle: "Why switching between fuel sources could be the key to sustained energy and longevity",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
        category: "Human Performance",
        readTime: "7 min"
    },
    {
        id: 4,
        title: "Cold Exposure: The Science Behind the Ice Bath Trend",
        subtitle: "Research reveals how controlled cold stress activates recovery systems and boosts resilience",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop",
        category: "Human Performance",
        readTime: "5 min"
    },
    {
        id: 5,
        title: "Cognitive Load Management for the Digital Age",
        subtitle: "Neuroscience-backed strategies to maintain focus in an era of infinite distractions",
        image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&h=600&fit=crop",
        category: "Human Performance",
        readTime: "6 min"
    },
    {
        id: 6,
        title: "The Fitness Energy Paradox",
        subtitle: "How exercise depletes and creates energy—and what that means for your training",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
        category: "Human Performance",
        readTime: "7 min"
    },

    // ENVIRONMENT
    {
        id: 7,
        title: "Micro Solar Is Finally Ready for Prime Time",
        subtitle: "New perovskite cells are making rooftop solar cheaper, more efficient, and accessible to renters",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
        category: "Environment",
        readTime: "8 min"
    },
    {
        id: 8,
        title: "The Carbon Capture Startups Betting on Direct Air Extraction",
        subtitle: "Can pulling CO2 from the atmosphere scale fast enough to matter?",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
        category: "Environment",
        readTime: "9 min"
    },
    {
        id: 9,
        title: "Community Microgrids Are Reshaping Energy Distribution",
        subtitle: "Neighborhoods are building resilient, renewable power systems that work when the main grid fails",
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop",
        category: "Environment",
        readTime: "7 min"
    },
    {
        id: 10,
        title: "Vertical Farms Are Growing Up—Literally",
        subtitle: "Indoor agriculture is getting taller, smarter, and more sustainable with AI-powered growing systems",
        image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=600&fit=crop",
        category: "Environment",
        readTime: "6 min"
    },
    {
        id: 11,
        title: "The Circular Economy Isn't Just Recycling Anymore",
        subtitle: "How product-as-a-service models are eliminating waste before it's created",
        image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop",
        category: "Environment",
        readTime: "8 min"
    },

    // TECHNOLOGY
    {
        id: 12,
        title: "Smart Homes That Actually Make You Smarter",
        subtitle: "AI-powered environments are optimizing everything from air quality to lighting for peak cognitive performance",
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
        category: "Technology",
        readTime: "7 min"
    },
    {
        id: 13,
        title: "The Kinetic Energy Harvesters in Your Shoes",
        subtitle: "Piezoelectric materials are turning every step into electricity for wearable devices",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop",
        category: "Technology",
        readTime: "5 min"
    },
    {
        id: 14,
        title: "Brain-Computer Interfaces Go Mainstream",
        subtitle: "Non-invasive neural tech is moving from labs to consumer devices for focus and meditation",
        image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&h=600&fit=crop",
        category: "Technology",
        readTime: "9 min"
    },
    {
        id: 15,
        title: "The Battery Breakthrough That Changes Everything",
        subtitle: "Solid-state batteries promise longer life, faster charging, and safer energy storage",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        category: "Technology",
        readTime: "8 min"
    },
    {
        id: 16,
        title: "Quantum Sensors Are Measuring the Unmeasurable",
        subtitle: "Ultra-precise quantum tech is revolutionizing everything from brain imaging to mineral detection",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop",
        category: "Technology",
        readTime: "10 min"
    },

    // SCIENCE
    {
        id: 21,
        title: "The Gut-Brain Axis Is More Powerful Than We Thought",
        subtitle: "New research shows your microbiome directly influences mood, cognition, and decision-making",
        image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&h=600&fit=crop",
        category: "Science",
        readTime: "8 min"
    },
    {
        id: 22,
        title: "Mitochondria: The Energy Crisis Inside Your Cells",
        subtitle: "Understanding cellular powerhouses could unlock treatments for fatigue, aging, and disease",
        image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800&h=600&fit=crop",
        category: "Science",
        readTime: "9 min"
    },
    {
        id: 23,
        title: "Chronobiology: Why Timing Is Everything",
        subtitle: "Your body's internal clocks control more than sleep—they determine when you should eat, exercise, and think",
        image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&h=600&fit=crop",
        category: "Science",
        readTime: "7 min"
    },
    {
        id: 24,
        title: "The Placebo Effect Is Getting Stronger",
        subtitle: "Mind-body connections are so powerful, they're complicating drug trials and redefining medicine",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
        category: "Science",
        readTime: "8 min"
    },

    // INNOVATION
    {
        id: 25,
        title: "Biomimicry: Nature's 3.8 Billion Years of R&D",
        subtitle: "Engineers are copying evolution's best designs to solve modern sustainability challenges",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
        category: "Innovation",
        readTime: "7 min"
    },
    {
        id: 26,
        title: "The Hydrogen Economy Is Finally Happening",
        subtitle: "Green hydrogen production is scaling up to power everything from trucks to steel mills",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
        category: "Innovation",
        readTime: "9 min"
    },
    {
        id: 27,
        title: "Lab-Grown Everything: The Future of Materials",
        subtitle: "From leather to diamonds, we're learning to grow products without mining or farming",
        image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=800&h=600&fit=crop",
        category: "Innovation",
        readTime: "8 min"
    },
    {
        id: 28,
        title: "The Passive House Standard Goes Mainstream",
        subtitle: "Ultra-efficient buildings that barely need heating or cooling are no longer just for enthusiasts",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
        category: "Innovation",
        readTime: "6 min"
    },

    // FUTURE
    {
        id: 17,
        title: "Space Habitats Are Teaching Us How to Live on Earth",
        subtitle: "Closed-loop life support systems designed for Mars are solving sustainability challenges here at home",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
        category: "Future",
        readTime: "9 min"
    },
    {
        id: 18,
        title: "The Longevity Startups Hacking Human Lifespan",
        subtitle: "From senolytics to NAD+ boosters, the science of aging is becoming the science of not aging",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
        category: "Future",
        readTime: "11 min"
    },
    {
        id: 19,
        title: "Synthetic Biology Is Rewriting the Code of Life",
        subtitle: "Engineered organisms are producing everything from spider silk to sustainable jet fuel",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop",
        category: "Future",
        readTime: "10 min"
    },
    {
        id: 20,
        title: "The Metaverse Meets Physical Fitness",
        subtitle: "VR workouts are getting so good, they're replacing traditional gyms for some athletes",
        image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&h=600&fit=crop",
        category: "Future",
        readTime: "6 min"
    }
];

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { articlesData };
}

