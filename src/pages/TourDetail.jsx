import { useParams } from 'react-router-dom'
import { tours } from '../data/data.js'
import { MainHeader } from '../cmps/MainHeader.jsx'
import { TourDetailContent } from '../cmps/TourDetailContent.jsx'
import { Footer } from '../cmps/Footer.jsx'
export function TourDetail() {
  const { tourId } = useParams()
  const tour = tours.find((tour) => tour.id === +tourId)
  return (
    <>
      <MainHeader />
      <TourDetailContent tour={tour} />
      <Footer />
    </>
  )
}