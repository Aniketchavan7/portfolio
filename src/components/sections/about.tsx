export default function AboutSection() {
  return (
    <section id="about" className="home-about home-content" aria-labelledby="about-title">
      <h2 id="about-title">About me</h2>
      <div className="home-about-content">
        <p>I’m Aniket, an AI &amp; Data Science graduate and software developer. I work across backend systems, generative AI, and web applications.</p>
        <p>My work includes multi-agent workflows at Spring Money, websites for businesses, and personal apps. I enjoy connecting the engineering behind a product with the experience of using it.</p>
      </div>
      <ul className="home-specialties" aria-label="Areas of focus">
        <li>Backend systems</li><li>Applied AI</li><li>Web applications</li>
      </ul>
    </section>
  );
}
