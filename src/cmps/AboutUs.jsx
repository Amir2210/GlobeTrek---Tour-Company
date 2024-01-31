import aboutImage from '../assets/imgs/about.jpeg';
export function AboutUs() {
  return (
    <section className='about-us' id='about'>
      <h1>About <span className='colored'>Us</span> </h1>
      <div className='img-content'>
        <div className='img'>
          <img src={aboutImage} alt="" />
        </div>
        <div className='content'>
          <h2>Explore The Difference</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?</p>
          <a href="#home"><button className='content-btn'>read more</button></a>
        </div>
      </div>
    </section>
  )
}