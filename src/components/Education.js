import React from 'react'
import { Link } from "react-router-dom";
import "../education.css";

import java from "../assets/Java_logo_icon.png";
import linkedin from "../assets/li.png";
import python from "../assets/Python-Logo.png";
import cpr from "../assets/c-programming-1.png";
import js from "../assets/javascript.jpeg";
import ht from "../assets/htmli.jpg";
import cs from "../assets/cssi.jfif";
import rea from "../assets/reactJS.jfif";
import node from "../assets/Node-js.jpg";
import exp from "../assets/express.png";
import boot from "../assets/bootstrap.jpg";
import fig from "../assets/figma.jfif";
import can from  "../assets/Canva-New-Logo.png";
import sql from "../assets/mysql_PNG22.png";
import mon from "../assets/mongo.jfif";
import and from "../assets/and.jpeg";
import np from "../assets/nptel.png"
import ja from "../assets/java.jpg";
import inter from "../assets/intern.jpg";
import mer from "../assets/mern.jpg";
import git from "../assets/git.png";
import skill from "../assets/skill.png";
import leet from "../assets/leet.png";


const Education = () => {

  return (
    <>
      <header>
        <div className="navigations" id="twen">
          <li>
            <Link className="home" to="/home">Home</Link>
          </li>
          <li>
            <a className="home" href="/education">Skills</a>
          </li>
        </div>
      </header>
    <main>
        <div className="container1">
            <div className="timeline">
                <h1>Education</h1>
                <div className="timeline-item">
                    
                    <div className="timeline-content">
                        <h2>Bachelor of Computer Science and Engineering</h2>
                        <p>Kamaraj college of Engg & Tech</p>
                        <span className="date">Graduated: 2026</span>
                        <span className="percentage">CGPA: 8.48</span>
                    </div>
                </div>
                <div className="timeline-item">
                    
                    <div className="timeline-content">
                        <h2>ISC</h2>
                        <p>Idhayam Rajenderan School</p>
                        <span className="date">Graduated: 2022</span>
                        <span className="percentage">Percentage: 84.8%</span>
                    </div>
                </div>
                <div className="timeline-item">
                    
                    <div className="timeline-content">
                        <h2>ICSE</h2>
                        <p>Idhayam Rajenderan School</p>
                        <span className="date">Graduated: 2020</span>
                        <span className="percentage">Percentage: 82.2%</span>
                    </div>
                </div>
            </div>

            <div className="experience-section">
                <h1>Experience</h1>
                <div className="experience-item">
                    <h2>Full Stack Developer</h2>
                    <p>I have practical experience in full-stack development, particularly in creating a real-time restaurant website using ReactJS. This platform enables users to order food online and features a daily calorie calculator that monitors both macronutrients and micronutrients in the selected meals. The website is fully functional and live, offering a smooth user experience and an efficient food ordering system.</p>
                    <span className="date">June 2024 – November 2024</span>
                </div>
                <div className="experience-item">
                    <h2>Full-Stack Intern</h2>
                    <p>During my internship as a Full-Stack Developer at Priga Solutions,Kamaraj College, Madurai, (May 2024 – June 2024), I focused on designing and implementing website layouts using ReactJS. My primary goal was to enhance user experience by developing responsive and visually engaging designs. I collaborated closely with the team, gaining valuable insights into modern web design principles and advanced responsive techniques. Approximately 30–40% of my work involved crafting innovative layout ideas and delivering unique solutions for various projects. This hands-on experience significantly improved my technical expertise in ReactJS, usability, and version control systems, while also boosting my confidence and practical knowledge in web development.</p>
                </div>
            </div>
        </div>
    </main>
    <div>
        <h1>My Skills</h1>
    <div className="category">
        <div className="skills-container">
            <div className="skill">
                <img src={java} alt="java" />
                <h3>Java</h3>
            </div>
            <div className="skill">
                <img src={python} alt="Python" />
                <h3>Python</h3>
            </div>
            <div className="skill">
                <img src={cpr} alt="C"/>
                <h3>C</h3>
            </div>
            <div className="skill">
                <img src={js} alt="JavaScript"/>
                <h3>JavaScript</h3>
            </div>
            <div className="skill">
                <img src={ht} alt="HTML"/>
                <h3>HTML</h3>
            </div>
            <div className="skill">
                <img src={cs} alt="CSS"/>
                <h3>CSS</h3>
            </div>
            <div className="skill">
                <img src={rea} alt="ReactJS"/>
                <h3>ReactJS</h3>
            </div>
            <div className="skill">
                <img src={node} alt="NodeJS"/>
                <h3>NodeJS</h3>
            </div>
            <div className="skill">
                <img src={exp} alt="ExpressJS"/>
                <h3>ExpressJS</h3>
            </div>
            <div className="skill">
                <img src={boot} alt="Bootstrap"/>
                <h3>Bootstrap</h3>
            </div>
            <div className="skill">
                <img src={fig} alt="Figma"/>
                <h3>Figma</h3>
            </div>
            <div className="skill">
                <img src={can} alt="Canva"/>
                <h3>Canva</h3>
            </div>
            <div className="skill">
                <img src={sql} alt="MySQL"/>
                <h3>MySQL</h3>
            </div>
            <div className="skill">
                <img src={mon} alt="MongoDB"/>
                <h3>MongoDB</h3>
            </div>
            <div className="skill">
                <img src={and} alt="Android Studio"/>
                <h3>Android Studio</h3>
            </div>
            <div className="skill">
                <img src={git} alt="git hub"/>
                <h3><a href="https://github.com/Dhanush200407" className="ank">Git hub</a></h3>
            </div>
        </div>
        <h1>Problem Solving platform</h1>
        <div className="skills-container">
            <div className="skill">
                <img src={skill} alt="Skillrack"/>
                <h3><a href="https://www.skillrack.com/faces/resume.xhtml?id=410729&key=6f0b3117f8d7507db5b9582f736fe8f401aec7d6" className="ank">Skill rack</a></h3>
            </div>
            <div className="skill">
                <img src={leet} alt="Leetcode"/>
                <h3><a href="https://leetcode.com/u/Dhanush200407/" className="ank">leetCode</a></h3>
            </div>            
        </div>
    </div>
    </div>
    <h1 id="pro">Projects</h1>
    <div id="ma">
    <section className="project">
        <h2>BANK CHALAN AUTOMATION</h2>
        <p>The Bank Chalan Automation project simplifies the withdrawal process by generating a QR code that users can scan to initiate transactions. Upon scanning the QR code, users are prompted to enter the amount they wish to withdraw. The application then processes this information and automatically generates a chalan (receipt) for the transaction. Built with HTML, CSS, and JavaScript for the front end, the project provides a user-friendly interface. On the backend, Node.js with Express is used to handle requests and facilitate communication between users and the admin. This system enhances transaction efficiency and accuracy, making banking operations smoother for both users and administrators.</p>
    </section>
    <section className="project">
        <h2>FITNESS SHOP</h2>
        <p>The Fitness Shop project is a comprehensive web application that includes multiple features to enhance user experience. It features an admin page that allows administrators to modify website content and manage products effectively. Users can browse and purchase fitness-related products through a dedicated shop page. Additionally, a login page enables secure user access, allowing for personalized experiences. The application also includes simple calculators to help users assess their health levels, promoting a holistic approach to fitness and wellness</p>
    </section>
    <section className="project">
        <h2>BOOKSKY</h2>
        <p>BookSky is a web application that allows users to add and manage book details, which are stored in a MySQL database. The user interface is built using HTML and styled with CSS, while JavaScript is used for dynamic interactions. Users can easily view the added book information displayed on the screen. This project combines front-end and back-end technologies to create a seamless experience for managing a book collection.</p>
    </section>
    <section className="project">
        <h2>FULL STACK</h2>
        <p>This simple full-stack project features a login page that allows users to securely access their accounts. Built with React.js for the front end, users can track and compare their weight over time through an intuitive interface. The data is stored in a MySQL database, ensuring persistence and easy retrieval of user information. This project combines user authentication with data visualization to help users monitor their weight management journey effectively.</p>
    </section>
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

export default Education;