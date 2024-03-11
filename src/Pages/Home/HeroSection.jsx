export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Sunny Likhith</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Frontend</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
           Nice to meet you, I produce great & elegant works.
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/pic1.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
