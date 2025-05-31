import "./portfolio.css";

import IMG1 from "../../assets/tasty-cloud.jpg";
import IMG2 from "../../assets/shop.jpeg";
import IMG3 from "../../assets/crm.jpeg";

import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Tasty Cloud Restaurant Website",
      img: IMG1,
      description:
       `  Backend Api and Database Integration for Authentication and supporting App functionality
          Add to cart functionality , Integration Stripe Payment , checkout page and admin page .`,
      technologies: "Html | CSS | Javascript | React Js | Strip ",
      link: "https://tasty-cloud.netlify.app/",
      github: "https://github.com/sonpal521/tasty-cloud-frontend",
    },
    {
      id: 2,
      title: "Ecommerce Website",
      img: IMG2,
      description:
        "Secure user login and registration processes, implementing JWT tokens to ensure data integrity and privacy.Integrated the FakeStore API to access sample product data, enabling the product listings, cart functionalities, within the ecommerce project",
      technologies: "HTML | CSS | JavaScript | React Js",
      link: "https://eco-shop-two.vercel.app/",
      github: "https://github.com/sonpal521/eco-shop",
    },
    {
      id: 3,
      title: "Ticket Booking App (CRM) ",
      img: IMG3,
      description: "Backend Api and Database Integration for AuthN, AuthZ and supporting App functionality. Three user roles: Customer (reporting and tracking bugs). Engineers (updating bugs status) and Admin (system oversight)",
      technologies: "HTML | CSS | JavaScript | Tailwind CSS | React Js",
      link: "https://crm-app-nu.vercel.app/",
      github: "https://github.com/sonpal521/crm-app",
    },
   
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} className="img" />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
