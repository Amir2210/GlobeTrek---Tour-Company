import { AboutUs } from '../cmps/AboutUs';
import { Footer } from '../cmps/Footer.jsx';
import { Hero } from '../cmps/Hero';
import { MainHeader } from '../cmps/MainHeader';
import { Services } from '../cmps/Services';
import { ToursList } from '../cmps/ToursList';
import { tours } from '../data/data.js'
export function GlobeTrekIndex() {
  return (
    <>
      <MainHeader />
      <Hero />
      <AboutUs />
      <Services />
      <ToursList tours={tours} />
      <Footer />
    </>
  )
}