import {useEffect} from 'preact/hooks';
import Tilt from 'react-parallax-tilt';
import Section from "./components/Section.jsx";
import useWindowSize from "./hooks/useWindowSize.jsx";
import Typewriter from "./components/Typewriter.jsx";
import {IconBrandGithub, IconBrandLinkedin, IconHeart} from "@tabler/icons-react";

const updateMousePosition = (ev) => {
  const {clientX, clientY} = ev;
  document.documentElement.style.setProperty("--x", `${clientX}px`);
  document.documentElement.style.setProperty("--y", `${clientY}px`);
};

function App() {
  const {width} = useWindowSize();

  useEffect(() => {
    if (width < 768) {
      document.documentElement.style.setProperty("--x", "50%");
      document.documentElement.style.setProperty("--y", "50%");
    } else {
      window.addEventListener("mousemove", updateMousePosition);
    }

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [width]);

  useEffect(() => {
    const header = document.querySelector("header");
    // get the height of the header including padding
    const headerHeight = header.offsetHeight;

    document.documentElement.style.setProperty("--current-header-height", `${headerHeight}px`);

    const updateHeader = () => {
      const toggleClass = "is-sticky";
      const currentScroll = window.scrollY;
      if (currentScroll > 146) {
        header.classList.add(toggleClass);
      } else {
        header.classList.remove(toggleClass);
      }
    }
    window.addEventListener("scroll", updateHeader);

    return () => {
      window.removeEventListener("scroll", updateHeader);
    };
  }, []);

  const words = ["Full-Stack Developer.", "Javascript Fan.", "Frontend-Engineer.", "Pixel-Perfect Coder."];

  return (
    <>
      <header>
        <div id='header-inner'>
          <Tilt tiltMaxAngleX={16} tiltMaxAngleY={16}>
            <div id='logo-header'>
              <div id='logo'>BF</div>
              <div id='name'><span id='first-name'>Benjamin</span><span id='last-name'>Franz</span></div>
            </div>
          </Tilt>

          <div id='header-right'>
            <a href='https://www.linkedin.com/in/benjamin-franz/' title='Visit my linkedin profile' target='_blank'>
              <IconBrandLinkedin size={34}/>
            </a>
            <a href='https://www.github.com/BennyAlex/' title='Visit my github profile' target='_blank'>
              <IconBrandGithub size={34}/>
            </a>
            <a href='mailto:benjamin.alexander.franz@gmail.com' title='Send me an email' target='_blank'>
              <button>Contact me</button>
            </a>
          </div>
        </div>
      </header>

      <Section tag='about' component='main' h1 title={
        <Typewriter words={words}>
          <span id='intro-headline'>Hi, I'm Benjamin, </span><br/> a
        </Typewriter>
      }>
        <p>
          I have a passion for building web
          applications. Currently I am working at{" "}
          <a href="https://www.eye-able.com/">Eye-Able</a> as a
          full-stack engineer.
        </p>
        <button title='Look at my CV / Resume'>CV / Resume</button>
      </Section>

      <Section tag='experience' title='My Work Experience'>
        <div className='experience'>
          <div className='experience-item'>
            <h3>WebInclusion GmbH</h3>
            <h4>09.2022 - Present</h4>
            <p>
              As the lead responsible for the dashboard, I developed a comprehensive and interactive
              single-page-application using React and Material UI, featuring detailed graphs, clear tables, an
              integrated PDF viewer, and a function to display screenshots with marked bounding boxes. I also programmed
              a broken-link checker and created a web component to simplify input text into easier language using the
              OpenAI API, aiding in making content more accessible. Furthermore, I created an automated Lighthouse
              crawler and a corresponding results page, to give our customers a complete overview of their website’s
              performance and SEO.
            </p>
          </div>
          <div className='experience-item'>
            <h3>Eye-Able</h3>
            <p>Full-Stack Developer</p>
            <p>2020 - Present</p>
          </div>
          <div className='experience-item'>
            <h3>Eye-Able</h3>
            <p>Full-Stack Developer</p>
            <p>2020 - Present</p>
          </div>
        </div>
      </Section>

      <Section tag='contact' title='Get In Touch'>
        <p>
          Feel free to reach out to me at if you have any questions or if you are interested in working with me.
        </p>
        <a href='mailto:benjamin.alexander.franz@gmail.com' title='Send me an email'>
          <button>Contact me</button>
        </a>
      </Section>

      <footer>
        Coded & Designed with <IconHeart size={23} stroke={2.5}/> by Benjamin Franz
      </footer>
    </>
  );
}

export default App;
