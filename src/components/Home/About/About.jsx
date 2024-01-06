import "./index.css";

const Home = () => {
  return (
    <article id="about" className="container about-container mb">
      <section>
        <h3>Frontend React Developer</h3>
        <h1>Hello, my name is Venkatesh Athyam</h1>
        <p className="mb">
          Passionate Frontend React Developer with 1 year of experience.
          Expertise in HTML, CSS, JavaScript, React, Redux, Ant Design,
          Bootstrap, Git, NodeJs and SQLite. Committed to delivering exceptional user
          interfaces.
        </p>
        <section className="buttons-container">
          <a href="#projects" className="btn">
            Projects
          </a>
          <a
            href="https://www.linkedin.com/in/venkatesh-athyam/"
            className="btn-outline"
            rel="noreferrer"
            target="_blank"
          >
            Linkedin
          </a>
        </section>
      </section>
    </article>
  );
};

export default Home;
