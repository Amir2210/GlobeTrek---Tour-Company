import { Link } from "react-router-dom"
export function TourDetailContent({ tour }) {
  return (
    <section className='tour-detail-content'>
      <div className='tour-card'>
        <div className="img-date">
          <img src={tour.image} alt="" />
          <div className='date'>{tour.date}</div>
        </div>
        <div className="content">
          <h3>{tour.title}</h3>
          <p>{tour.info}</p>
          <div className="detail">
            <p><i className="fa-solid fa-map"></i> {tour.location}</p>
            <p>{tour.duration} day<span>{tour.duration > 1 ? 's' : ''}</span></p>
            <p>From ${tour.cost}</p>
          </div>
        </div>
      </div>
      <Link to={`/`}><button className='back-btn'>back</button></Link>
    </section>
  )
}