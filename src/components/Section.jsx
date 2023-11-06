import Tilt from "react-parallax-tilt";
import './Section.css'

export default function ({component: Component = 'div', tag = 'tag', title, h1 = false, children, ...props}) {
  const HeadLineTag = h1 ? 'h1' : 'h2';

  return (
    <Component {...props} className='section' id={tag}>
      <Tilt className='section-tilt' tiltMaxAngleX={9} tiltMaxAngleY={9}>
        <div className='section-tag'>&lt;{tag}&gt;</div>
        <div className='section-content'>
          <HeadLineTag className='mono-headline'>{title}</HeadLineTag>
          {children}
        </div>
        <div className='section-tag'>&lt;/{tag}&gt;</div>
      </Tilt>
    </Component>
  );
};
