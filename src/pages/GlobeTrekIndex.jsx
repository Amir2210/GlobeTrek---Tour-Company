import { AboutUs } from '../cmps/AboutUs';
import { Hero } from '../cmps/Hero';
import { MainHeader } from '../cmps/MainHeader';
import { Services } from '../cmps/Services';

export function GlobeTrekIndex() {
  return (
    <>
      <MainHeader />
      <Hero />
      <AboutUs />
      <Services />
    </>
  )
}