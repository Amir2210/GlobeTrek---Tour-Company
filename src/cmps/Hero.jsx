import { TypeWriter } from './TypeWrtiter';
import mainImage from '../assets/imgs/main2.jpg';
export function Hero() {
  const linearGradientStyle = {
    background: `linear-gradient(rgb(44, 174, 210, 0.7), rgba(0, 0, 0, 0.7)), url(${mainImage}) no-repeat center center/cover`,
  };
  return (
    <div className="hero-image main-layout full" style={linearGradientStyle} id='home'>
      <div className="hero-text">
        <TypeWriter />
        <p>Your go-to app for effortless travel planning and discovering the perfect trek.</p>
        <a href="#tours"><button className='explore-btn'>explore tours</button></a>
      </div>
    </div>
  )
}