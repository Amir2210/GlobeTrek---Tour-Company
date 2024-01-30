import { TourPreview } from './TourPreview'


export function ToursList({ tours }) {
  return (
    <>
      <h1>FEATURED TOURS</h1>
      <ul className='tours-list'>
        {tours.map(tour =>
          <TourPreview tour={tour} key={tour.id} />
        )}
      </ul>
    </>
  )
}