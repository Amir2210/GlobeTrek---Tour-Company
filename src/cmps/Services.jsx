export function Services() {
  return (
    <section className='services main-layout full' id='services'>
      <h1>our <span className='colored'>services</span> </h1>
      <div className='boxes'>
        <div className="box box1">
          <div className='icon'>
            <i className="fa-solid fa-wallet fa-2xl"></i>
          </div>
          <div className="content">
            <h3>Saving Money</h3>
            <p>Experience cost-effective adventures with our services. We prioritize saving your money while providing quality travel experiences.</p>
          </div>
        </div>
        <div className="box box1">
          <div className='icon'>
            <i className="fa-solid fa-tree fa-2xl"></i>
          </div>
          <div className="content">
            <h3>Endless Hiking</h3>
            <p>Embark on unforgettable hiking journeys with our expertly crafted packages. Explore scenic trails and connect with nature like never before.</p>
          </div>
        </div>
        <div className="box box1">
          <div className='icon'>
            <i className="fa-solid fa-socks fa-2xl"></i>
          </div>
          <div className="content">
            <h3>Amazing Comfort</h3>
            <p>Indulge in unparalleled comfort during your travels. Our services ensure a seamless and enjoyable experience, offering the utmost in convenience and relaxation.</p>
          </div>
        </div>
      </div>
    </section>
  )
}