import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Header'
import HomePage from './homepage/HomePage'
import FeaturedProduct from './homepage/FeaturedProduct'
import Footer from './Footer'
import Latest from './Latest';
import Contact from './Contact';

function App() {

  return (
    <Router>
      <div className='m-5 '>
       <Header/>
       <Routes>
        <Route path="/" element={
          <>
        <HomePage />
        <FeaturedProduct/>
        </>} 
        />

        <Route path='/latest' element={<Latest/>} />
        <Route path='/contact' element={<Contact/>} />
        
        </Routes>
    
      
      <Footer/>
      
    </div>
    </Router>
  )
}

export default App
