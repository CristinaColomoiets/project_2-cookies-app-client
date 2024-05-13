import { Routes, Route } from 'react-router-dom'

import HomePage from './../pages/HomePage/HomePage'
import CookiesDetailsPage from './../pages/CookiesDetailsPage/CookiesDetails'
import CookiesFormPage from '../pages/CookiesFormPage/CookiesFormPage'
import ReviewsPage from './../pages/ReviewsPage/ReviewsPage'

const AppRoutes = () => {

    return (
        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cookies/:cookieId' element={<CookiesDetailsPage />} />
        <Route path='/cookies/add-cookie' element={<CookiesFormPage />} />
        <Route path='/reviews/all-reviews' element={<ReviewsPage />} />
      </Routes>
    )
}

export default AppRoutes