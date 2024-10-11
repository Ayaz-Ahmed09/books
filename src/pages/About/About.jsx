import React from "react";
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About Library</h2>
            <p className="fs-17">
              Welcome to Library, your ultimate online destination for all
              things books! Whether you're a casual reader or a dedicated
              bibliophile, we offer a vast collection of titles across genres,
              ensuring there's something for everyone. Explore our curated
              selections, discover hidden gems, and find your next great read
              with ease.
            </p>
            <p className="fs-17">
              At Library, we believe in the power of stories and the joy of
              sharing them. Our platform features user reviews, recommendations,
              and personalized reading lists to enhance your literary journey.
              Join our community of book lovers and immerse yourself in a world
              of imagination and knowledge!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
