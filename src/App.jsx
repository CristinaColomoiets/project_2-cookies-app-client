import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navbar/Navbar'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='App'>

      <Navigation/>
      <AppRoutes/>
     <Footer></Footer>
    </div>
  )
}

export default App