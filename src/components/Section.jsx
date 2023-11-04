import Tilt from "react-parallax-tilt";
import './Section.css'

export default function ({component: Component = 'div', tag = 'tag', title, children, ...props}) {
  return (
    <Component {...props} className='section' id='tag'>
      <Tilt className='section-tilt' tiltMaxAngleX={9} tiltMaxAngleY={9}>
        <div className='section-tag'>&lt;{tag}&gt;</div>
        <div className='section-content'>
          {title ? <h2 className='mono-headline'>{title}</h2> : null}
          {children}
        </div>
        <div className='section-tag'>&lt;/{tag}&gt;</div>
      </Tilt>
    </Component>
  );
};
