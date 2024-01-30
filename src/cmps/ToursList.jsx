import { TourPreview } from './TourPreview'


export function ToursList({ tours }) {
  return (
    <section className='tours-list-section' id='tours'>
      <h1>Featured <span className='colored'>tours</span> </h1>
      <ul className='tours-list'>
        {tours.map(tour =>
          <TourPreview tour={tour} key={tour.id} />
        )}
      </ul>
    </section>
  )
}