/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "GPT-3 Landing Page",
    description:
      "A website where people can know what GPT-3 is and how it works. It is a landing page for OpenAI's GPT-3.",
    url: "https://yash-solanki6803.github.io/gpt-3/",
  },
  {
    title: "Crypto Verse",
    description:
      "A website where people can know about cryptocurrencies and their prices. It is a landing page for cryptocurrencies.",
    url: "https://crypto-verse-by-yash.netlify.app/",
  },
  {
    title: "Financial consultancy services",
    description:
      "A website where people can know about financial consultancy services and how they can help them in their business.",
    url: "https://yash-solanki6803.github.io/SolankiBrothers/",
  },
  {
    title: "Cybersecurity consultancy services",
    description:
      "A website where people can know about cybersecurity consultancy services and how they can help them in their business.",
    url: "https://cybershakha.com/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
