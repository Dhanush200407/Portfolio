import React from "react";
import { useNavigate,Link } from "react-router-dom";
import "../style.css";


import profile from "../assets/prof.jpg";
import linkedin from "../assets/li.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <div className="navigations" id="twen">
          <li>
            <a className="home" href="/">Home</a>
          </li>
          <li>
          <Link className="home" to="/education">Skills</Link>
          </li>
        </div>
      </header>

      <main>
        <div className="container">
          <div className="image1">
            <img src={profile} alt="profile" />
          </div>
        </div>
        <div className="content">
          <h1>Hi</h1>
          <h2>I Am Dhanush</h2>
          <h3>A Devoted Web Developer</h3>
          <h4>
            <a href="#aboutme">
              About Me <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#FFFFFF"
                >
                  <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
                </svg>
              </span>
            </a>
          </h4>
        </div>
        <section className="section1" id="aboutme">
          <div className="aboutme">
            <h1>ABOUT ME</h1>
            <hr className="custom-line" />
            <p>
              "As a dedicated web developer with 2 years of practical experience in
              ReactJS, I specialize in building dynamic and responsive web applications.
              My expertise spans full-stack development, bringing projects to fruition from
              front-end design to back-end architecture. Ensuring intuitive and user-friendly
              interfaces. Moreover, I possess strong leadership skills, having successfully
              led teams and made key decisions that contribute to the success of projects."
            </p>
          </div>
        </section>
      </main>

      <div className="button-container">
        <button className="rounded-button" onClick={() => navigate("/education")}>
          Skills
        </button>
      </div>

      <footer>
        <address>
          <p>
            <strong>Address:</strong> 21, Velan Street, Raja Nagar, Iravadanallur, Madurai-625009
          </p>
          <p>
            <strong>Phone:</strong>
            <a href="tel:+917550378890">(+91) 6383235908</a>
          </p>
          <p>
            <strong>Email:</strong>
            <a href="mailto:djstayin@gmail.com">sbrt1973@gmail.com</a>
          </p>
          <p>
            <strong>LinkedIn:</strong>
            <a
              href="https://www.linkedin.com/in/dhanush-p-97a725280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} id="linker" alt="linkedin" />
            </a>
          </p>
        </address>
      </footer>
    </>
  );
};

export default Home;
