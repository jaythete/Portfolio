import "./App.css";
import React from "react";
import Typed from "typed.js";
import main from "./assets/header.png";
import J from "./assets/juven.png";
import instgm from "./assets/instpng.png";
import linkedin from "./assets/lnkdpng.png";
import ytb from "./assets/ytbpng.png";
import github from "./assets/gtbpng.png";
import slfimg from "./assets/img2.png";
import Appbg from "./Components/Particles";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Appbg />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          textAlign: "center",
        }}
      >
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <ContactForm />
        <Social />
        <Footer />
      </div>
    </>
  );
}

function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src={J} alt="" />
        <div className="navcontainer">
          <ul>
            <li>
              <a href="#Homepage">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

function Hero() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["a Web Developer.", "a Tech Enthusiast"],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div id="Homepage"></div>
      <div className="hero">
        <div className="heroimg">
          <img src={main} />
        </div>
        <div className="heroabout">
          <p>
            <span id="hi">Hello</span>
            <br />
            <span id="abt">
              I am Jay <span ref={el} id="typedtxt" />
            </span>
            <br />
            Welcome to my portfolio! I'm a passionate software developer skilled
            in Frontend & Backend. I love building innovative, efficient, and
            user-friendly solutions. Explore my work and let's connect!
          </p>
        </div>
      </div>
    </>
  );
}

function About() {
  return (
    <>
      <div id="About">About</div>
      <div className="about">
        <div className="abttxt">
          <p>
            A skilled IT Engineer with expertise in frontend development using
            React and CSS. Proficient in building dynamic and responsive user
            interfaces. Strong knowledge of Java, Python, and C, enabling
            efficient problem-solving and backend integration. Passionate about
            creating seamless digital experiences with a keen eye for design and
            performance optimization.
          </p>
        </div>
        <div className="abtimg">
          <img src={slfimg} />
        </div>
      </div>
    </>
  );
}

function Projects() {
  return (
    <>
      <div id="Projects">Projects</div>
      <div className="Projects">
      <a href="https://hotelradhakrishna.in/" target="_blank">
          {" "}
          <div id="card">Hotel Website</div>
        </a>
        <a href="https://narayangiri.netlify.app/" target="_blank">
          <div id="card">Shop Website</div>
        </a>
        <a href="https://netflix-clone-f2057.web.app/" target="_blank">
          <div id="card">Netflix Clone</div>
        </a>
       
        <a href="https://amazon-cone.netlify.app/" target="_blank">
          <div id="card">
            Amazon Clone<br></br>(Frontend Only)
          </div>
        </a>
      
      </div>
    </>
  );
}

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wtoytyb", "template_mud7a82", form.current, {
        publicKey: "7EINN1T-pUNR_tFlv",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Mail Sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to sent");
        }
      );
  };

  return (
    <div className="form-container">
      <Toaster />
      <div id="Contact"></div>
      <form ref={form} onSubmit={sendEmail} className="custom-form">
        <h2>Contact Me</h2>
        <input type="text" name="from_name" placeholder="Your Name" required />
        <input type="email" name="from_email" placeholder="Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

function Social() {
  return (
    <>
      <div className="social">
        <a href="https://github.com/jaythete" target="_blank">
          {" "}
          <img src={github} />
        </a>
        <a href="https://www.linkedin.com/in/jayesh-thete" target="_blank">
          <img src={linkedin} />
        </a>
        <a
          href="https://youtube.com/@ihomelander1?si=JG2elp5Sq5UJcnII"
          target="_blank"
        >
          {" "}
          <img src={ytb} />
        </a>
        <a href="https://www.instagram.com/jayesh.thete" target="_blank">
          <img src={instgm} />
        </a>
      </div>
    </>
  );
}

function Footer() {
  return (
    <>
      <div className="footer">© Jayesh Thete</div>
    </>
  );
}

export default App;
