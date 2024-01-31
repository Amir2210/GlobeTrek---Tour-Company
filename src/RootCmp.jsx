import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobeTrekIndex } from './pages/GlobeTrekIndex';
import { TourDetail } from './pages/TourDetail';

export function RootCmp() {
  return (
    <Router>
      <main className='main-layout'>
        <Routes>
          <Route path='/' element={<GlobeTrekIndex />} />
          <Route path='/tour/:tourId' element={<TourDetail />} />
        </Routes>
      </main>
    </Router>
  );
}
