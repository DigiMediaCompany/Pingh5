// Mock data
export const MOCK_FEATURED_GAMES = [
  {
    id: 1,
    title: "FINAL FANTASY VII REMAKE INTERGRADE: Diagnosing the Stuttering Crisis on High-End PCs",
    description: "FFVII INTERGRADE stutters on high-end PCs—community BIOS fixes outperform official patches",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&auto=format",
    category: "NEWS",
    featured: true,
    size: "large",
    author: "Tech Expert",
    publishedAt: "2025-10-01T10:00:00Z",
    tags: ["Final Fantasy", "PC", "Performance"],
    readTime: "8 min"
  },
  {
    id: 2,
    title: "Hogwarts Legacy Tips & Guides: A Complete Walkthrough to Mastering Magic, Combat, and Exploration",
    description: "Master Hogwarts Legacy with tips on spells, gear, combat, puzzles, and 100% completion strategies.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop&auto=format",
    category: "TIPS & GUIDES",
    featured: true,
    size: "large",
    author: "Magic Master",
    publishedAt: "2025-09-30T14:30:00Z",
    tags: ["Hogwarts Legacy", "Guide", "Magic"],
    readTime: "25 min"
  },
  {
    id: 3,
    title: "How to Master Hogwarts Legacy: A Complete Guide to Magic Exploration and Combat",
    description: "Complete guide covering spells, combat mechanics, and exploration secrets in the magical world.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&auto=format",
    category: "HOW TO",
    featured: true,
    author: "Wizard Guide",
    publishedAt: "2025-09-29T09:15:00Z",
    tags: ["Hogwarts Legacy", "Combat", "Magic"],
    readTime: "15 min"
  },
  {
    id: 4,
    title: "Hogwarts Legacy's Frame Timing Crisis: Diagnosing and Fixing the GameMost Performance Issues",
    description: "Deep dive into frame timing issues and comprehensive solutions for optimal gameplay performance.",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&auto=format",
    category: "NEWS",
    featured: true,
    author: "Performance Analyst",
    publishedAt: "2025-09-28T16:45:00Z",
    tags: ["Performance", "Frame Rate", "Technical"],
    readTime: "12 min"
  },
  {
    id: 5,
    title: "Top Games That Hide Secrets for Years: Batman Arkham, Zelda & More Hidden Gems",
    description: "Discover long-hidden secrets in popular games that players are still uncovering years after release.",
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop&auto=format",
    category: "TOP GAMES",
    featured: true,
    author: "Secret Hunter",
    publishedAt: "2025-09-27T11:20:00Z",
    tags: ["Secrets", "Batman", "Zelda"],
    readTime: "20 min"
  },
  {
    id: 6,
    title: "The Legend of Zelda: Breath of the Wild - Complete Exploration Guide",
    description: "Master every aspect of Hyrule with this comprehensive exploration and combat guide.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop&auto=format",
    category: "TOP GAMES",
    featured: true,
    author: "Hyrule Explorer",
    publishedAt: "2025-09-26T13:30:00Z",
    tags: ["Zelda", "Exploration", "Nintendo"],
    readTime: "30 min"
  },
  {
    id: 7,
    title: "God of War Ragnarök: Combat Mastery & Boss Battle Strategies",
    description: "Master Kratos and Atreus combat mechanics with advanced tips for defeating challenging bosses.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=300&fit=crop&auto=format",
    category: "TIPS & GUIDES",
    featured: true,
    author: "Norse Warrior",
    publishedAt: "2025-09-25T08:45:00Z",
    tags: ["God of War", "Combat", "Boss Guide"],
    readTime: "22 min"
  },
  {
    id: 8,
    title: "Elden Ring DLC: Shadow of the Erdtree Complete Walkthrough",
    description: "Navigate the new areas, defeat challenging bosses, and uncover the mysteries of the Land of Shadow.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop&auto=format",
    category: "HOW TO",
    featured: true,
    author: "Tarnished Guide",
    publishedAt: "2025-09-24T15:20:00Z",
    tags: ["Elden Ring", "DLC", "Walkthrough"],
    readTime: "35 min"
  },
  {
    id: 9,
    title: "Cyberpunk 2077: Phantom Liberty DLC Review - A Masterclass in Storytelling",
    description: "An in-depth review of CD Projekt Red's ambitious expansion that redefines the Cyberpunk experience.",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&auto=format",
    category: "REVIEW",
    featured: true,
    author: "Cyber Critic",
    publishedAt: "2025-09-23T12:10:00Z",
    tags: ["Cyberpunk", "DLC", "Review"],
    readTime: "18 min"
  }
]

export const MOCK_ALL_GAMES = [
  ...MOCK_FEATURED_GAMES,
  {
    id: 6,
    title: "Cyberpunk 2077 Complete Review",
    description: "An in-depth review of the most anticipated game with all DLCs and updates.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=300&fit=crop",
    category: "REVIEW",
    author: "Game Critic",
    publishedAt: "2025-09-24T13:00:00Z",
    tags: ["Cyberpunk", "RPG", "Review"],
    readTime: "25 min"
  },
  {
    id: 7,
    title: "Mobile Gaming Trends 2025",
    description: "Explore the latest trends in mobile gaming and what to expect in the coming year.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
    category: "NEWS",
    author: "Mobile Expert",
    publishedAt: "2025-09-23T10:30:00Z",
    tags: ["Mobile", "Trends", "2025"],
    readTime: "10 min"
  }
]

export const MOCK_LATEST_GAMES = [
  {
    id: 101,
    title: "Super Bear Adventure",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop&auto=format",
    rating: 4.5,
    publishedAt: "2025-10-05T10:00:00Z"
  },
  {
    id: 102,
    title: "Zenless Zone Zero",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop&auto=format",
    rating: 4.5,
    publishedAt: "2025-10-04T14:30:00Z"
  },
  {
    id: 103,
    title: "Roblox: Plants Vs Brainrots",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&auto=format",
    rating: 4.5,
    publishedAt: "2025-10-03T09:15:00Z"
  },
  {
    id: 104,
    title: "Delta Force",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=300&fit=crop&auto=format",
    rating: 4.0,
    publishedAt: "2025-10-02T16:45:00Z"
  },
  {
    id: 105,
    title: "UFL™",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&auto=format",
    rating: 4.5,
    publishedAt: "2025-10-01T11:20:00Z"
  },
  {
    id: 106,
    title: "LEGO® Voyagers",
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop&auto=format",
    rating: 4.5,
    publishedAt: "2025-09-30T13:30:00Z"
  },
  {
    id: 107,
    title: "Blood Strike",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&auto=format",
    rating: 4.5,
    publishedAt: "2025-09-29T08:45:00Z"
  },
  {
    id: 108,
    title: "Borderlands 4",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop&auto=format",
    rating: 4.5,
    publishedAt: "2025-09-28T15:20:00Z"
  }
]

// Blog posts data (sử dụng chung với featured games)
export const MOCK_BLOG_POSTS = [
  // Copy from MOCK_FEATURED_GAMES
  {
    id: 1,
    title: "FINAL FANTASY VII REMAKE INTERGRADE: Diagnosing the Stuttering Crisis on High-End PCs",
    description: "FFVII INTERGRADE stutters on high-end PCs—community BIOS fixes outperform official patches",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&auto=format",
    category: "NEWS",
    featured: true,
    size: "large",
    author: "Tech Expert",
    publishedAt: "2025-10-01T10:00:00Z",
    tags: ["Final Fantasy", "PC", "Performance"],
    readTime: "8 min"
  },
  {
    id: 2,
    title: "Hogwarts Legacy Tips & Guides: A Complete Walkthrough to Mastering Magic, Combat, and Exploration",
    description: "Master Hogwarts Legacy with tips on spells, gear, combat, puzzles, and 100% completion strategies.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop&auto=format",
    category: "TIPS & GUIDES",
    featured: true,
    size: "large",
    author: "Magic Master",
    publishedAt: "2025-09-30T14:30:00Z",
    tags: ["Hogwarts Legacy", "Guide", "Magic"],
    readTime: "25 min"
  },
  {
    id: 3,
    title: "How to Master Hogwarts Legacy: A Complete Guide to Magic Exploration and Combat",
    description: "Complete guide covering spells, combat mechanics, and exploration secrets in the magical world.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&auto=format",
    category: "HOW TO",
    featured: true,
    author: "Wizard Guide",
    publishedAt: "2025-09-29T09:15:00Z",
    tags: ["Hogwarts Legacy", "Combat", "Magic"],
    readTime: "15 min"
  },
  {
    id: 4,
    title: "Hogwarts Legacy's Frame Timing Crisis: Diagnosing and Fixing the GameMost Performance Issues",
    description: "Deep dive into frame timing issues and comprehensive solutions for optimal gameplay performance.",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&auto=format",
    category: "NEWS",
    featured: true,
    author: "Performance Analyst",
    publishedAt: "2025-09-28T16:45:00Z",
    tags: ["Performance", "Frame Rate", "Technical"],
    readTime: "12 min"
  },
  {
    id: 5,
    title: "Top Games That Hide Secrets for Years: Batman Arkham, Zelda & More Hidden Gems",
    description: "Discover long-hidden secrets in popular games that players are still uncovering years after release.",
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop&auto=format",
    category: "TOP GAMES",
    featured: true,
    author: "Secret Hunter",
    publishedAt: "2025-09-27T11:20:00Z",
    tags: ["Secrets", "Batman", "Zelda"],
    readTime: "20 min"
  },
  {
    id: 6,
    title: "The Legend of Zelda: Breath of the Wild - Complete Exploration Guide",
    description: "Master every aspect of Hyrule with this comprehensive exploration and combat guide.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop&auto=format",
    category: "TOP GAMES",
    featured: true,
    author: "Hyrule Explorer",
    publishedAt: "2025-09-26T13:30:00Z",
    tags: ["Zelda", "Exploration", "Nintendo"],
    readTime: "30 min"
  },
  {
    id: 7,
    title: "God of War Ragnarök: Combat Mastery & Boss Battle Strategies",
    description: "Master Kratos and Atreus combat mechanics with advanced tips for defeating challenging bosses.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=300&fit=crop&auto=format",
    category: "TIPS & GUIDES",
    featured: true,
    author: "Norse Warrior",
    publishedAt: "2025-09-25T08:45:00Z",
    tags: ["God of War", "Combat", "Boss Guide"],
    readTime: "22 min"
  },
  {
    id: 8,
    title: "Elden Ring DLC: Shadow of the Erdtree Complete Walkthrough",
    description: "Navigate the new areas, defeat challenging bosses, and uncover the mysteries of the Land of Shadow.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop&auto=format",
    category: "HOW TO",
    featured: true,
    author: "Tarnished Guide",
    publishedAt: "2025-09-24T15:20:00Z",
    tags: ["Elden Ring", "DLC", "Walkthrough"],
    readTime: "35 min"
  },
  {
    id: 9,
    title: "Cyberpunk 2077: Phantom Liberty DLC Review - A Masterclass in Storytelling",
    description: "An in-depth review of CD Projekt Red's ambitious expansion that redefines the Cyberpunk experience.",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&auto=format",
    category: "REVIEW",
    featured: true,
    author: "Cyber Critic",
    publishedAt: "2025-09-23T12:10:00Z",
    tags: ["Cyberpunk", "DLC", "Review"],
    readTime: "18 min"
  },
  {
    id: 10,
    title: "The Ultimate Guide to Building Gaming PCs in 2025",
    description: "Everything you need to know about building a powerful gaming rig, from components to assembly.",
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&h=600&fit=crop&auto=format",
    category: "TIPS & GUIDES",
    author: "PC Builder Pro",
    publishedAt: "2025-10-04T10:00:00Z",
    tags: ["PC Building", "Hardware", "Gaming"],
    readTime: "20 min",
    content: "Detailed guide content here..."
  },
  {
    id: 11,
    title: "Top 10 Indie Games You Should Play This Month",
    description: "Discover amazing indie games that offer unique experiences and innovative gameplay mechanics.",
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=800&h=600&fit=crop&auto=format",
    category: "REVIEW",
    author: "Indie Gamer",
    publishedAt: "2025-10-03T15:30:00Z",
    tags: ["Indie Games", "Review", "Gaming"],
    readTime: "12 min",
    content: "Review content here..."
  },
  {
    id: 12,
    title: "How to Optimize Game Settings for Better Performance",
    description: "Learn how to balance visual quality and performance across different gaming scenarios.",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&h=600&fit=crop&auto=format",
    category: "HOW TO",
    author: "Performance Expert",
    publishedAt: "2025-10-02T12:00:00Z",
    tags: ["Performance", "Settings", "Optimization"],
    readTime: "15 min",
    content: "Optimization guide content here..."
  },
  {
    id: 13,
    title: "Gaming Industry News: Major Updates This Week",
    description: "Stay updated with the latest gaming industry developments, releases, and announcements.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&auto=format",
    category: "NEWS",
    author: "News Reporter",
    publishedAt: "2025-10-01T08:00:00Z",
    tags: ["News", "Industry", "Updates"],
    readTime: "8 min",
    content: "News content here..."
  },
  {
    id: 14,
    title: "Mastering Competitive Gaming: Strategies and Tips",
    description: "Improve your competitive gaming skills with proven strategies from professional esports players.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop&auto=format",
    category: "TIPS & GUIDES",
    author: "Esports Pro",
    publishedAt: "2025-09-30T16:45:00Z",
    tags: ["Esports", "Competitive", "Strategy"],
    readTime: "18 min",
    content: "Competitive gaming guide content here..."
  },
  {
    id: 15,
    title: "Game Development Tools Every Developer Should Know",
    description: "Essential tools and software for modern game development, from engines to asset creation.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&auto=format",
    category: "HOW TO",
    author: "Game Developer",
    publishedAt: "2025-09-29T11:20:00Z",
    tags: ["Game Development", "Tools", "Programming"],
    readTime: "22 min",
    content: "Development tools guide content here..."
  }
]

export const MOCK_APP_REVIEWS = [
  {
    id: 1,
    title: "Super Bear Adventure",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&auto=format",
    description: "Super Bear Adventure delivers a delightful 3D platformer with its vibrant worlds and heroic quest, celebrating a family-friendly adventure.",
    rating: 4.5,
    category: "Adventure",
    publishedAt: "2025-10-01T10:00:00Z",
    author: "Game Reviewer",
    platforms: ["PC", "Mobile", "Console"],
    downloadLink: "#",
    featured: true
  },
  {
    id: 2,
    title: "Zenless Zone Zero",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=200&fit=crop&auto=format",
    description: "Zenless Zone Zero delivers a stylish action RPG with its exhilarating combat and cyberpunk world, celebrating a unique urban fantasy.",
    rating: 4.2,
    category: "Action RPG",
    publishedAt: "2025-09-30T14:30:00Z",
    author: "RPG Expert",
    platforms: ["PC", "Mobile"],
    downloadLink: "#",
    featured: true
  },
  {
    id: 3,
    title: "Roblox: Plants Vs Brainrots",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop&auto=format",
    description: "Roblox: Plants Vs Brainrots delivers a whimsical tower defense adventure with its meme-inspired combat and garden growth, celebrating a unique Roblox twist.",
    rating: 4.0,
    category: "Tower Defense",
    publishedAt: "2025-09-29T09:15:00Z",
    author: "Strategy Gamer",
    platforms: ["PC", "Mobile", "Console"],
    downloadLink: "#",
    featured: false
  },
  {
    id: 4,
    title: "Delta Force",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=300&h=200&fit=crop&auto=format",
    description: "Delta Force remains a significant title in the history of first-person shooters, setting the stage for tactical gameplay in a genre often dominated by fast-paced action.",
    rating: 4.3,
    category: "FPS",
    publishedAt: "2025-09-28T16:45:00Z",
    author: "FPS Specialist",
    platforms: ["PC"],
    downloadLink: "#",
    featured: false
  },
  {
    id: 5,
    title: "Cyberpunk 2077",
    image: "https://images.unsplash.com/photo-1564225232384-f991be1fdb98?w=300&h=200&fit=crop&auto=format",
    description: "An open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification.",
    rating: 4.1,
    category: "RPG",
    publishedAt: "2025-09-27T11:20:00Z",
    author: "Open World Fan",
    platforms: ["PC", "Console"],
    downloadLink: "#",
    featured: false
  },
  {
    id: 6,
    title: "The Witcher 3",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop&auto=format",
    description: "A story-driven open world RPG set in a visually stunning fantasy universe full of meaningful choices and impactful consequences.",
    rating: 4.8,
    category: "RPG",
    publishedAt: "2025-09-26T08:30:00Z",
    author: "Fantasy Expert",
    platforms: ["PC", "Console", "Mobile"],
    downloadLink: "#",
    featured: true
  },
  {
    id: 7,
    title: "Among Us",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=300&h=200&fit=crop&auto=format",
    description: "Play with 4-15 players online or via local WiFi as you attempt to prepare your spaceship for departure.",
    rating: 4.0,
    category: "Social",
    publishedAt: "2025-09-25T15:10:00Z",
    author: "Multiplayer Pro",
    platforms: ["PC", "Mobile", "Console"],
    downloadLink: "#",
    featured: false
  },
  {
    id: 8,
    title: "Minecraft",
    image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=300&h=200&fit=crop&auto=format",
    description: "A game about placing blocks and going on adventures. Explore randomly generated worlds and build amazing things.",
    rating: 4.7,
    category: "Sandbox",
    publishedAt: "2025-09-24T12:45:00Z",
    author: "Sandbox Creator",
    platforms: ["PC", "Mobile", "Console"],
    downloadLink: "#",
    featured: true
  },
  {
    id: 9,
    title: "Grand Theft Auto V",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=200&fit=crop&auto=format",
    description: "An action-adventure game played from either a third-person or first-person perspective in an open world environment.",
    rating: 4.6,
    category: "Action",
    publishedAt: "2025-09-23T10:15:00Z",
    author: "Action Expert",
    platforms: ["PC", "Console"],
    downloadLink: "#",
    featured: false
  },
  {
    id: 10,
    title: "Fall Guys",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=300&h=200&fit=crop&auto=format",
    description: "A massively multiplayer party game with up to 60 players online in a free-for-all struggle through round after round.",
    rating: 4.2,
    category: "Party Game",
    publishedAt: "2025-09-22T14:20:00Z",
    author: "Party Gamer",
    platforms: ["PC", "Mobile", "Console"],
    downloadLink: "#",
    featured: true
  },
  {
    id: 11,
    title: "Valorant",
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=300&h=200&fit=crop&auto=format",
    description: "A tactical first-person shooter featuring precise gunplay and unique agent abilities in competitive matches.",
    rating: 4.4,
    category: "FPS",
    publishedAt: "2025-09-21T09:30:00Z",
    author: "Tactical Shooter Pro",
    platforms: ["PC"],
    downloadLink: "#",
    featured: false
  },
  {
    id: 12,
    title: "League of Legends",
    image: "https://images.unsplash.com/photo-1538481199464-7160b8f4d90a?w=300&h=200&fit=crop&auto=format",
    description: "A multiplayer online battle arena game where teams of players battle to destroy the opposing team's base.",
    rating: 4.5,
    category: "MOBA",
    publishedAt: "2025-09-20T16:45:00Z",
    author: "MOBA Master",
    platforms: ["PC"],
    downloadLink: "#",
    featured: true
  },
  {
    id: 13,
    title: "Genshin Impact",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=300&h=200&fit=crop&auto=format",
    description: "An action role-playing game with gacha game mechanics set in the fantasy world of Teyvat.",
    rating: 4.3,
    category: "RPG",
    publishedAt: "2025-09-19T11:10:00Z",
    author: "Gacha Expert",
    platforms: ["PC", "Mobile", "Console"],
    downloadLink: "#",
    featured: false
  },
  {
    id: 14,
    title: "Fortnite",
    image: "https://images.unsplash.com/photo-1552820728-244448e25329?w=300&h=200&fit=crop&auto=format",
    description: "A battle royale game where 100 players fight to be the last one standing in an ever-shrinking map.",
    rating: 4.1,
    category: "Battle Royale",
    publishedAt: "2025-09-18T13:25:00Z",
    author: "BR Specialist",
    platforms: ["PC", "Mobile", "Console"],
    downloadLink: "#",
    featured: false
  },
  {
    id: 15,
    title: "Apex Legends",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=300&h=200&fit=crop&auto=format",
    description: "A battle royale game featuring unique legends with special abilities in fast-paced combat scenarios.",
    rating: 4.4,
    category: "Battle Royale",
    publishedAt: "2025-09-17T08:40:00Z",
    author: "Legend Hunter",
    platforms: ["PC", "Console"],
    downloadLink: "#",
    featured: true
  },
  {
    id: 16,
    title: "Call of Duty: Warzone",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=200&fit=crop&auto=format",
    description: "A free-to-play battle royale video game with up to 150 players in tactical combat situations.",
    rating: 4.2,
    category: "FPS",
    publishedAt: "2025-09-16T15:55:00Z",
    author: "Warzone Veteran",
    platforms: ["PC", "Console"],
    downloadLink: "#",
    featured: false
  },
  {
    id: 17,
    title: "Rocket League",
    image: "https://images.unsplash.com/photo-1538481199464-7160b8f4d90a?w=300&h=200&fit=crop&auto=format",
    description: "A vehicular soccer video game combining soccer with rocket-powered cars in high-speed matches.",
    rating: 4.6,
    category: "Sports",
    publishedAt: "2025-09-15T12:30:00Z",
    author: "Sports Gamer",
    platforms: ["PC", "Console"],
    downloadLink: "#",
    featured: true
  },
  {
    id: 18,
    title: "Overwatch 2",
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=300&h=200&fit=crop&auto=format",
    description: "A team-based multiplayer first-person shooter featuring diverse heroes with unique abilities.",
    rating: 4.0,
    category: "FPS",
    publishedAt: "2025-09-14T10:15:00Z",
    author: "Hero Shooter Fan",
    platforms: ["PC", "Console"],
    downloadLink: "#",
    featured: false
  }
]

export const APP_REVIEW_CATEGORIES = [
  { id: 'ALL', name: 'All' },
  { id: 'Adventure', name: 'Adventure' },
  { id: 'Action RPG', name: 'Action RPG' },
  { id: 'Action', name: 'Action' },
  { id: 'Tower Defense', name: 'Tower Defense' },
  { id: 'FPS', name: 'FPS' },
  { id: 'RPG', name: 'RPG' },
  { id: 'Social', name: 'Social' },
  { id: 'Sandbox', name: 'Sandbox' },
  { id: 'Party Game', name: 'Party Game' },
  { id: 'MOBA', name: 'MOBA' },
  { id: 'Battle Royale', name: 'Battle Royale' },
  { id: 'Sports', name: 'Sports' }
]

export const CATEGORIES = [
  { id: 'ALL', name: 'All' },
  { id: 'TIPS & GUIDES', name: 'Tips & Guides' },
  { id: 'HOW TO', name: 'How To' },
  { id: 'NEWS', name: 'News' },
  { id: 'REVIEW', name: 'Review' },
  { id: 'GAMEPLAY', name: 'Gameplay' }
]