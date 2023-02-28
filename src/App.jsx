import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import ProductListing from './pages/ProductListing'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

const App = () => {
  return (
    <>
      <Navigation />
      <Signup />
      <Footer />
    </>
  )
}

export default App
