export const pageMetaData = {
  home: {
    title: "Home - Spiritual Network for Transformation",
    description: "K4M2A is a spiritual network building connections that transform lives. Join our community of seekers on a journey of growth, understanding, and spiritual awakening.",
    keywords: "spiritual network, spiritual community, personal transformation, consciousness, spiritual growth, meditation, mindfulness",
    url: "/",
  },
  manifesto: {
    title: "Manifesto - Our Vision for Spiritual Connection",
    description: "Discover K4M2A's manifesto and our vision for creating authentic spiritual connections. Learn about our mission to transform lives through community and shared wisdom.",
    keywords: "spiritual manifesto, vision, mission, spiritual community, transformation, consciousness",
    url: "/manifesto",
  },
  research: {
    title: "Research - Exploring Consciousness and Spirituality",
    description: "Explore K4M2A's research on consciousness, spirituality, and human transformation. Discover insights from leading spiritual teachers and consciousness researchers.",
    keywords: "spiritual research, consciousness research, spirituality studies, human transformation, spiritual science",
    url: "/research",
  },
  blog: {
    title: "Blog - Spiritual Insights and Wisdom",
    description: "Read inspiring articles on spirituality, personal growth, and transformation. Discover wisdom from spiritual teachers and insights from our community.",
    keywords: "spiritual blog, spiritual articles, personal growth, spiritual wisdom, consciousness, meditation",
    url: "/blog",
  },
  whatisk4m2a: {
    title: "What is K4M2A - Understanding Our Spiritual Platform",
    description: "Learn about K4M2A, our spiritual networking platform that connects seekers worldwide. Discover how we're building a community for spiritual growth and transformation.",
    keywords: "K4M2A platform, spiritual networking, spiritual community, what is K4M2A, spiritual connection",
    url: "/whatisk4m2a",
  },
  rules: {
    title: "Community Guidelines - Play by the Rules",
    description: "Learn about K4M2A's community guidelines and how to participate respectfully in our spiritual network. Understand our rules for creating a safe, transformative space.",
    keywords: "community guidelines, community rules, spiritual community guidelines, K4M2A rules",
    url: "/rules",
  },
  privacy: {
    title: "Privacy Policy - Your Data Protection",
    description: "Read K4M2A's privacy policy to understand how we protect your personal information and maintain your privacy in our spiritual community.",
    keywords: "privacy policy, data protection, privacy, personal information",
    url: "/privacy",
  },
  terms: {
    title: "Terms of Service - K4M2A Terms and Conditions",
    description: "Review K4M2A's terms of service and conditions for using our spiritual networking platform and community services.",
    keywords: "terms of service, terms and conditions, user agreement, K4M2A terms",
    url: "/terms",
  },
  support: {
    title: "Support - Get Help with K4M2A",
    description: "Need help with K4M2A? Contact our support team for assistance with your spiritual networking experience and technical questions.",
    keywords: "support, help, customer support, technical support, K4M2A help",
    url: "/support",
  },
  contactus: {
    title: "Contact Us - Connect with K4M2A Team",
    description: "Get in touch with the K4M2A team. Contact us for partnerships, inquiries, or to learn more about our spiritual networking platform.",
    keywords: "contact us, contact K4M2A, get in touch, inquiries, partnerships",
    url: "/contactus",
  },
  career: {
    title: "Careers - Join the K4M2A Team",
    description: "Explore career opportunities at K4M2A. Join our mission to build transformative spiritual connections and make a meaningful impact in the world.",
    keywords: "careers, jobs, K4M2A careers, spiritual technology jobs, meaningful work",
    url: "/career",
  },
  security: {
    title: "Security - Protecting Your Spiritual Journey",
    description: "Learn about K4M2A's security measures and how we protect your spiritual community experience with robust safety and privacy protections.",
    keywords: "security, safety, platform security, community safety, data security",
    url: "/security",
  },
  pricing: {
    title: "Pricing - K4M2A Membership Options",
    description: "Explore K4M2A's membership options and pricing plans. Choose the right plan for your spiritual journey and community engagement level.",
    keywords: "pricing, membership, plans, K4M2A pricing, subscription, spiritual community membership",
    url: "/pricing",
  },
  signin: {
    title: "Sign In - Access Your K4M2A Account",
    description: "Sign in to your K4M2A account to connect with your spiritual community, access exclusive content, and continue your transformation journey.",
    keywords: "sign in, login, account access, K4M2A login, spiritual community access",
    url: "/signin",
  },
  downloadapp: {
    title: "Download App - K4M2A Mobile Experience",
    description: "Download the K4M2A mobile app for iOS and Android. Stay connected with your spiritual community wherever you go and access features on the move.",
    keywords: "mobile app, download app, K4M2A app, iOS app, Android app, spiritual community mobile",
    url: "/downloadapp",
  },
  notfound: {
    title: "Page Not Found - K4M2A",
    description: "The page you're looking for doesn't exist. Return to K4M2A's spiritual community and continue your journey of transformation and connection.",
    keywords: "404, page not found, K4M2A",
    url: "/404",
  }
};

// Function to get blog post meta data
export const getBlogPostMeta = (blog) => {
  if (!blog) return pageMetaData.blog;
  
  return {
    title: blog.title,
    description: blog.description || "Read this insightful article on K4M2A's blog about spiritual growth, personal transformation, and consciousness exploration.",
    keywords: `${blog.category}, spiritual blog, ${blog.title.toLowerCase()}, personal growth, spiritual wisdom`,
    url: blog.link,
    image: blog.image,
    type: "article"
  };
};

// Function to get profile meta data
export const getProfileMeta = (userName) => {
  return {
    title: `${userName} - K4M2A Profile`,
    description: `Connect with ${userName} on K4M2A, our spiritual networking platform. Discover their spiritual journey and insights within our transformative community.`,
    keywords: `${userName}, K4M2A profile, spiritual profile, spiritual community member`,
    url: `/${userName}`,
    type: "profile"
  };
};
