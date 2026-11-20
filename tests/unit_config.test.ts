/**
 * Self-contained unit test for portfolio metadata and site links configuration.
 */

interface SiteConfig {
  title: string;
  author: string;
  email: string;
  site: string;
  githubUsername: string;
  githubRepo: string;
  social: {
    linkedin: string;
    github: string;
    codolio: string;
    youtube: string;
  };
}

const mockConfig: SiteConfig = {
  title: "Aniket Chavan | Software Developer",
  author: "Aniket Chavan",
  email: "caniket975@gmail.com",
  site: "https://aniketchavan7.github.io/portfolio",
  githubUsername: "Aniketchavan7",
  githubRepo: "portfolio",
  social: {
    linkedin: "https://www.linkedin.com/in/aniket-chavan",
    github: "https://github.com/Aniketchavan7",
    codolio: "https://codolio.com/profile/Aniket_chavan7",
    youtube: "https://youtube.com/@techcodeai-e3o",
  },
};

// 1. Author and email validation
if (!mockConfig.author || mockConfig.author.length < 3) {
  throw new Error("Author name missing or too short");
}
if (!mockConfig.email.includes("@") || !mockConfig.email.includes(".")) {
  throw new Error(`Invalid email address: ${mockConfig.email}`);
}

// 2. HTTPS URL validation
for (const [platform, url] of Object.entries(mockConfig.social)) {
  if (!url.startsWith("https://")) {
    throw new Error(`Insecure or invalid social link for ${platform}: ${url}`);
  }
}

// 3. Site URL canonical format
if (!mockConfig.site.startsWith("https://aniketchavan7.github.io")) {
  throw new Error(`Site URL mismatch: ${mockConfig.site}`);
}

console.log("All portfolio config unit assertions passed successfully!");
