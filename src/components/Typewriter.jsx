import './Typewriter.css';
import {useEffect, useRef} from "preact/hooks"; // Ensure you have this CSS file

const Typewriter = ({words, children}) => {
  const typingRef = useRef(null);

  useEffect(() => {
    // Handler for the animationend event
    const handleAnimationEnd = (event) => {
      // You can check for the animation name if there are multiple animations
      if (event.animationName === 'typing-erase') {
        console.log('Typing-erase animation ended');
        // Your code to handle the end of the animation
      }
    };

    // Adding the event listener
    const node = typingRef.current;
    node.addEventListener('animationend', handleAnimationEnd);

    // Clean up the event listener
    return () => {
      node.removeEventListener('animationend', handleAnimationEnd);
    };
  }, []);

  /*  const [textIndex, setTextIndex] = useState(0);
    const [visibleText, setVisibleText] = useState('');
    const [erasing, setErasing] = useState(false);

    const typeWord = (word) => {
      setVisibleText('');
      let i = 0;
      const interval = setInterval(() => {
        if (i < word.length) {
          setVisibleText((vt) => vt + word[i]);
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => setErasing(true), pauseDelay);
        }
      }, typingDelay);
    };*/

  /*  const erase = () => {
      setTimeout(() => {
        setErasing(false);
        setTextIndex((ti) => (ti + 1) % words.length);
      }, eraseDelay);
    };*/

  /*  useEffect(() => {
      typeWord(words[textIndex]);
    }, [textIndex]);*/

  /*  useEffect(() => {
      if (erasing) {
        erase();
      }
    }, [erasing]);*/

  return (
    <span className='typewriter'>
      {children}{children ? ' ' : ''}
      <span className='typing-erase' ref={typingRef}>{words[0]}</span>
    </span>
  );
};

export default Typewriter;
