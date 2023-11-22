import './Typewriter.css';
import {useState, useRef} from 'preact/hooks';

const Typewriter = ({words, children}) => {
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const isFirstCycle = useRef(true);

  const handleAnimationEnd = event => {
    if (event.animationName === 'typing') {
      // Typing animation finished, start erasing
      setIsTyping(false);

      // If it's the first cycle, remove the initial delay for subsequent cycles
      if (isFirstCycle.current) {
        event.target.style.animationDelay = '0s';
        isFirstCycle.current = false;
      }
    } else if (event.animationName === 'erasing') {
      // Erasing animation finished
      setIsTyping(true);
      setWordIndex((wordIndex + 1) % words.length)
    }
  };

  return (
    <div className='typewriter'>
      {children}{children ? ' ' : ''}
      <span className={`${isTyping ? 'typing' : 'erasing'}`} onAnimationEnd={handleAnimationEnd}>{words[wordIndex]}</span>
    </div>
  );
};

export default Typewriter;
