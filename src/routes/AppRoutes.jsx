import { Routes, Route } from 'react-router-dom'

import HomePage from './../pages/HomePage/HomePage'
import CookiesDetailsPage from './../pages/CookiesDetailsPage/CookiesDetails'
import CookiesFormPage from '../pages/CookiesFormPage/CookiesFormPage'
import ReviewsPage from './../pages/ReviewsPage/ReviewsPage'
import CookiesEdit from './../pages/CookiesEditPage/CookiesEdit'

const AppRoutes = () => {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/cookie/add-cookie' element={<CookiesFormPage />} />
      <Route path='/reviews/all-reviews' element={<ReviewsPage />} />
      <Route path='/cookie/:cookieId' element={<CookiesDetailsPage />} />
      <Route path='/cookie/edit/:cookieId' element={<CookiesEdit/>}/>
    </Routes>
  )
}

export default AppRoutes