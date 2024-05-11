import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage'
import CookiesDetailsPage from './pages/CookiesDetailsPage/CookiesDetails'
import CookiesFormPage from './pages/CookiesFormPage/CookiesForm'
import ReviewsPage from './pages/ReviewsPage/ReviewsPage'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/Home' element={<HomePage />} />
        <Route path='/cookies/:cookieId' element={<CookiesDetailsPage />} />
        <Route path='/cookies/add-cookie' element={<CookiesFormPage />} />
        <Route path='/reviews/all-reviews' element={<ReviewsPage />} />
      </Routes>
    </div>
  )
}

export default App
