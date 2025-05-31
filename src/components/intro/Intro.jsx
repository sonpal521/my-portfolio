import "./intro.css";

import img from "../../assets/ssp.png";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="sonpal_img" />
          </div>
        </div>
        <div className="about__content">
          <p>
            Aspiring Full Stack Developer with a solid foundation in both
            front-end and back-end technologies. Proficient in building
            responsive, user-friendly web interfaces using React. js,
            JavaScript, HTML, CSS, and Tailwind CSS. Experienced in developing
            robust server-side applications with Node. js, Express.js, and
            working with databases such as MongoDB and MySQL. Skilled in
            creating RESTful APIs, handling authentication, and managing state
            across modern web applications. Passionate about building seamless
            end-to-end web solutions, optimizing performance, and continuously
            learning new tools and frameworks. Eager to contribute to dynamic
            teams and grow as a full stack developer in a professional
            environment.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
