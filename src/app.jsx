import {useEffect} from 'preact/hooks';
import Tilt from 'react-parallax-tilt';
import Section from "./components/Section.jsx";
import useWindowSize from "./hooks/useWindowSize.jsx";
import Typewriter from "./components/Typewriter.jsx";
import {IconBrandGithub, IconBrandLinkedin} from "@tabler/icons-react";

function App() {
  const {width} = useWindowSize();

  useEffect(() => {
    if (width < 768) {
      document.body.style.setProperty("--x", "50%");
      document.body.style.setProperty("--y", "50%");
    } else {
      const updateMousePosition = (ev) => {
        const {clientX, clientY} = ev;
        document.body.style.setProperty("--x", `${clientX}px`);
        document.body.style.setProperty("--y", `${clientY}px`);
      };

      window.addEventListener("mousemove", updateMousePosition);

      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
      };
    }
  }, [width]);

  const words = ["Full-Stack Developer.", "Javascript Fan.", "Frontend-Engineer.", "Pixel-Perfect Coder."];

  return (
    <>
      <header>
        <Tilt tiltMaxAngleX={16} tiltMaxAngleY={16}>
          <div id='logo-header'>
            <div id='logo'>BF</div>
            <div id='name'><span id='first-name'>Benjamin</span><span id='last-name'>Franz</span></div>
          </div>
        </Tilt>

        <div id='header-right'>
          <a href='https://www.linkedin.com/in/benjamin-franz/'>
            <IconBrandLinkedin/>
          </a>
          <a href='https://www.github.com/BennyAlex/'>
            <IconBrandGithub/>
          </a>

          <button>Contact me</button>
        </div>

      </header>

      {/*<Section id='portfolio' title='portfolio'>

      </Section>*/}

      <Section tag='about' component='main' title={
        <Typewriter words={words}>
          Hi, I am Benjamin, <br/> a
        </Typewriter>
      }>
        <p>
          I'm a software engineer with a passion for building web
          applications. I'm currently working at{" "}
          <a href="https://www.eye-able.com/">Eye-Able</a> as a
          full-stack engineer.
        </p>

        <button>CV</button>

      </Section>


      <Section tag='contact' title='Get In Touch'>
        Feel free to reach out to me at if you have any questions or if you are interested in working with me.
      </Section>
    </>
  );
}

export default App;
