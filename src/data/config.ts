const config = {
  title: "Aniket Chavan | Software Developer",
  description: {
    long: "Explore the portfolio of Aniket Chavan, an AI & Data Science graduate and software developer specializing in backend development, Generative AI, and full-stack web solutions. Skilled in Java, Python, Flask, Spring Boot, LangChain, and React. Discover my projects, experience, and let's build something amazing together!",
    short:
      "Portfolio of Aniket Chavan — Software Developer specializing in backend systems, Generative AI, and full-stack web development.",
  },
  keywords: [
    "Aniket Chavan",
    "portfolio",
    "software developer",
    "backend developer",
    "Java",
    "Python",
    "Flask",
    "Spring Boot",
    "React",
    "LangChain",
    "Generative AI",
    "Data Structures",
    "Algorithms",
    "REST APIs",
    "AI & Data Science",
  ],
  author: "Aniket Chavan",
  email: "caniket975@gmail.com",
  site: "https://aniketchavan7.github.io/portfolio",

  // for github stars button
  githubUsername: "Aniketchavan7",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/aniket-chavan",
    github: "https://github.com/Aniketchavan7",
    codolio: "https://codolio.com/profile/Aniket_chavan7",
  },
};
export { config };
