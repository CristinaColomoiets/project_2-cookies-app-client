import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage/HomePage'
import { Routes, Route } from 'react-router-dom'
import CookiesDetailsPage from './pages/CookiesDetailsPage/CookiesDetails'
import ReviewsPage from './pages/ReviewsPage/ReviewsPage';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/Home' element={<HomePage />} />
        <Route path='/cookies/:cookieId' element={<CookiesDetailsPage />} />
        <Route path='/reviews/add-review' element={<ReviewsPage />} />
      </Routes>
    </div>
  )
}

export default App
