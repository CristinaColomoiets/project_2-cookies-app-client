import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage/HomePage'
import { Routes, Route } from 'react-router-dom'
import CookiesDetailsPage from './pages/CookiesDetailsPage/CookiesDetails'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cookies/:cookieId' element={<CookiesDetailsPage />} />
      </Routes>
    </div>
  )
}

export default App
