export const PLATFORMS = [
  {
    name: "Facebook",
    icon: "fa-facebook-f",
    bgColor: "bg-blue-600",
  },
  {
    name: "Instagram",
    icon: "fa-instagram",
    bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
  {
    name: "Pinterest",
    icon: "fa-pinterest-p",
    bgColor: "bg-red-600",
  },
  {
    name: "Google",
    icon: "fa-google",
    bgColor: "bg-blue-500",
  },
  {
    name: "Bing",
    icon: "fa-microsoft",
    bgColor: "bg-blue-400",
  },
];

export const VALUE_PROPS = [
  {
    icon: "fa-bolt",
    title: "Instant Ads",
    description: "Turn product images into polished ads in under 30 seconds.",
  },
  {
    icon: "fa-brain",
    title: "Smart Copy",
    description: "AI-generated ad text tailored to your product and audience.",
  },
  {
    icon: "fa-object-group",
    title: "Platform Perfect",
    description: "Auto-resizes for Facebook, Instagram, Pinterest, Google, and Bing.",
  },
  {
    icon: "fa-language",
    title: "Global Reach",
    description: "Create ads in over 30 languages to reach customers worldwide.",
  },
];

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Select Product",
    description: "Choose any product from your Shopify store.",
  },
  {
    step: 2,
    title: "Choose Platform",
    description: "Select where you want to advertise your product.",
  },
  {
    step: 3,
    title: "Customize",
    description: "Adjust styling, tone, and messaging as needed.",
  },
  {
    step: 4,
    title: "Export & Launch",
    description: "Download or directly publish to ad platforms.",
  },
];

export const FEATURES = [
  {
    icon: "fa-magic",
    title: "AI-Powered Ad Generation",
    description: "Generate compelling ad copy and creatives for Facebook, Google, and more using advanced AI.",
  },
  {
    icon: "fa-globe",
    title: "Multilingual Support",
    description: "Create ads in over 30 languages to reach global customers and expand your market.",
  },
  {
    icon: "fa-comments",
    title: "Smart Tone Customization",
    description: "Match your brand voice with tones like Casual, Professional, Inspirational, and more.",
  },
  {
    icon: "fa-chart-line",
    title: "Campaign Planning",
    description: "Set objectives and get tailored strategies to boost your advertising performance.",
  },
  {
    icon: "fa-shopping-cart",
    title: "One-Click Shopify Integration",
    description: "Seamlessly sync your products and launch ads without leaving your Shopify admin.",
  },
  {
    icon: "fa-paint-brush",
    title: "Customizable Templates",
    description: "Choose from a variety of professionally designed templates to match your brand.",
  },
];

export const TESTIMONIALS = [
  {
    rating: 5,
    quote: "I made my Black Friday ad in under 1 minute—and it outperformed my Canva designs. The AI really understands how to sell products!",
    author: "Sarah J.",
    role: "Apparel Store Owner",
    initials: "SJ",
  },
  {
    rating: 5,
    quote: "The multilingual feature is a game-changer. We're now running ads in Spanish and French with zero translation costs or headaches.",
    author: "Mike T.",
    role: "Beauty Products Store",
    initials: "MT",
  },
  {
    rating: 4.5,
    quote: "My ad costs went down 30% after switching to AdGenie. The AI creates copy that actually converts without me having to hire a copywriter.",
    author: "Alex L.",
    role: "Home Goods Store",
    initials: "AL",
  },
];

export const PRICING_PLANS = [
  {
    name: "Free Plan",
    price: 0,
    description: "Perfect for getting started with basic ad creation.",
    features: [
      "Facebook & Pinterest ads",
      "Generate 3 ads/month",
      "Basic templates",
      "AI-generated copy",
    ],
    cta: "Get Started Free",
    popular: false,
    border: "border-gray-400",
  },
  {
    name: "Growth Plan",
    price: 9.99,
    description: "Ideal for growing stores with regular ad needs.",
    features: [
      "Everything in Free Plan",
      "+ Google & Bing Ads",
      "Generate 20 ads/month",
      "Premium templates",
      "Tone customization",
    ],
    cta: "Upgrade to Growth",
    popular: true,
    border: "border-adgenie-primary",
  },
  {
    name: "Pro Plan",
    price: 29.99,
    description: "Advanced features for power users and agencies.",
    features: [
      "Everything in Growth Plan",
      "+ Instagram Ads",
      "Unlimited ad generation",
      "Advanced customization",
      "Campaign performance tracking",
      "Priority support",
    ],
    cta: "Upgrade to Pro",
    popular: false,
    border: "border-gray-400",
  },
];

export const FAQ_ITEMS = [
  {
    question: "How much can I do with the Free Plan?",
    answer: "You can generate up to 3 Facebook Ads each month absolutely free — including AI-powered copy and image generation. No credit card required.",
  },
  {
    question: "What happens when I use all 3 free ads?",
    answer: "You'll be prompted to upgrade to a paid plan. Our Growth Plan gives you up to 20 ad generations monthly, and our Pro Plan offers unlimited ad creation.",
  },
  {
    question: "Can I generate ads in different languages?",
    answer: "Yes! You can create ad copy in over 30 languages — from English to Spanish, Hindi to Arabic — making it easy to reach international customers.",
  },
  {
    question: "Can I customize the tone and style of my ads?",
    answer: "Yes! You can select tones like Casual, Professional, Inspirational, and more — so your ads always reflect your brand voice.",
  },
  {
    question: "How do I cancel or downgrade my plan?",
    answer: "You can cancel anytime directly from the app or through your Shopify billing. We also offer a 7-day money-back guarantee.",
  },
  {
    question: "Do you support Google or Instagram Ads?",
    answer: "Yes! Our Growth Plan includes support for Google and Bing Ads, while our Pro Plan adds Instagram and Pinterest Ads — with platform-optimized copy and visuals.",
  },
  {
    question: "Is this tool suitable for beginners?",
    answer: "Absolutely. No marketing experience needed. Just select your product, audience, and tone — and we handle the rest.",
  },
];

export const FOOTER_LINKS = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Roadmap", href: "#" },
    { label: "Release Notes", href: "#" },
  ],
  support: [
    { label: "FAQ", href: "#faq" },
    { label: "Help Center", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Community", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "GDPR", href: "#" },
  ],
};

export const NAV_LINKS = [
  { key: "features", label: "Features", href: "#features" },
  { key: "howItWorks", label: "How It Works", href: "#how-it-works" },
  { key: "pricing", label: "Pricing", href: "#pricing" },
  { key: "faq", label: "FAQ", href: "#faq" },
];
