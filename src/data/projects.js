export const projects = [
  {
    id: "aetheria",
    name: "Aetheria",
    tagline: "Agentic AI Travel & Itinerary Workspace.",
    description: "Discover global adventure packages, auto-generate detailed day-by-day itineraries, and receive profile-matched travel recommendations using Aetheria Agentic AI.",
    image: "/projects/aetheria.png",
    tech: ["React", "Next.js", "Node.js", "Gemini AI", "Tailwind CSS"],
    liveLink: "https://ai-project-client-side.vercel.app",
    githubLink: "https://github.com/Salmakhandoker/aetheria-client",
    challenges: "Handling structured JSON output schemas reliably from LLMs for multi-day itineraries and caching generations to minimize API latency and token usage.",
    futurePlans: "Introduce real-time collaborative planning features, map routing animations for daily itineraries, and integration with live booking channels."
  },
  {
    id: "luxehaven",
    name: "LuxeHaven",
    tagline: "Exclusive Luxury Real Estate & Properties Portal.",
    description: "A premium real estate application showcasing high-end luxury properties, featuring advanced search filters, interactive maps, and streamlined broker inquiry routing.",
    image: "/projects/luxehaven.png",
    tech: ["TypeScript", "React", "Tailwind CSS", "React Router"],
    liveLink: "https://ts-client-side.vercel.app",
    githubLink: "https://github.com/Salmakhandoker/luxehaven-client",
    challenges: "Enforcing strict type definitions for complex property search states and delivering high-performance image gallery carousels on low-end devices.",
    futurePlans: "Integrate 3D virtual tour walk-throughs, custom payment calculators, and instant chat connectivity with real estate managers."
  },
  {
    id: "recipehub",
    name: "RecipeHub",
    tagline: "Dynamic Recipe Sharing & Premium Culinary Community Platform.",
    description: "A comprehensive recipe-sharing application where food enthusiasts browse thousands of curated dishes, publish culinary creations, write reviews, and upgrade to Premium using Stripe checkout.",
    image: "/projects/recipehub.png",
    tech: ["React", "Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    liveLink: "https://client-side-ochre.vercel.app",
    githubLink: "https://github.com/Salmakhandoker/recipehub-client",
    challenges: "Securing webhook transaction handling with Stripe for premium subscription status and managing dynamic search filter queries across large recipe datasets.",
    futurePlans: "Introduce custom nutrition API integrations, automated grocery shopping list generation, and cooking step-by-step narration via speech synthesis."
  },
  {
    id: "qurbanir-hat",
    name: "Qurbani Haat",
    tagline: "Online livestock booking and hat management platform.",
    description: "A comprehensive digital marketplace for booking and purchasing livestock for Qurbani. Built with seamless booking options, vendor management, and secure transactions to simplify seasonal livestock commerce.",
    image: "/projects/qurbani-hat.png",
    tech: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    liveLink: "https://qurbanir-hat.example.com",
    githubLink: "https://github.com/Salmakhandoker/qurbanir-hat-client",
    challenges: "Handling real-time availability of livestock bookings and ensuring transactional safety during high-traffic peak hours before the festival. Resolving state synchronization across concurrent booking requests.",
    futurePlans: "Introduce dynamic live-stream video channels from the hats to view livestock in real-time, integrate automated weight-estimation via AI models, and include multi-currency support."
  },
  {
    id: "cofund",
    name: "CoFund",
    tagline: "MERN-Stack Crowdfunding Platform.",
    description: "A modern, responsive crowdfunding platform enabling supporters to back innovative campaigns and creators to bring ideas to life. Features campaign creation, pledge processing, user dashboard, and category filters.",
    image: "/projects/cofund.png",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveLink: "https://asignme-11-client-side.vercel.app",
    githubLink: "https://github.com/Salmakhandoker/cofund-client",
    challenges: "Handling state updates for backing campaigns concurrently, ensuring data consistency when updating accumulated campaign funds, and configuring complex database queries for filtering active versus expired campaigns.",
    futurePlans: "Implement Stripe payment gateway integration for real-time secure pledge processing, add automated email receipt confirmations, and develop social sharing integration to boost campaign outreach."
  },
  {
    id: "studynook",
    name: "StudyNook",
    tagline: "Premium Library Study Room Booking Platform.",
    description: "A quiet, comfortable, and productive space reservation system designed for students, researchers, and professionals. Users can browse available rooms, book spaces with automatic conflict prevention, and manage reservations.",
    image: "/projects/studynook.png",
    tech: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    liveLink: "https://studynook-tau.vercel.app",
    githubLink: "https://github.com/Salmakhandoker/studynook-client",
    challenges: "Preventing overlapping room reservations during peak hours with strict date-time validation on the backend and keeping dynamic room availability synchronized in real-time.",
    futurePlans: "Integrate real-time push notifications using WebSockets for booking updates, add calendar synchronization (Google Calendar / iCal), and support multiple library branch locations with administrative overrides."
  }
];
