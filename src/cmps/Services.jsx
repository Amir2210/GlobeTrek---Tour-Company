export function Services() {
  return (
    <section className='services main-layout full'>
      <h1>our <span className='colored'>services</span> </h1>
      <div className='boxes'>
        <div className="box box1">
          <div className='icon'>
            <i className="fa-solid fa-wallet fa-2xl"></i>
          </div>
          <div className="content">
            <h3>Saving Money</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.</p>
          </div>
        </div>
        <div className="box box1">
          <div className='icon'>
            <i className="fa-solid fa-tree fa-2xl"></i>
          </div>
          <div className="content">
            <h3>Endless Hiking</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.</p>
          </div>
        </div>
        <div className="box box1">
          <div className='icon'>
            <i className="fa-solid fa-socks fa-2xl"></i>
          </div>
          <div className="content">
            <h3>Amazing Comfort</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.</p>
          </div>
        </div>
      </div>
    </section>
  )
}