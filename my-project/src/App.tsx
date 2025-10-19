// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css'
// import Header from './Header'
// import HomePage from './homepage/HomePage'
// import FeaturedProduct from './homepage/FeaturedProduct'
// import Footer from './Footer'
// import Latest from './Latest';
// import Contact from './Contact';
// import Cart from './Cart';

// function App() {

//   return (
//     <Router>
//       <div>
//        <Header/>
//        <Routes>
//         <Route path="/" element={
//           <>
//         <HomePage />
//         <FeaturedProduct/>
//         </>} 
//         />

//         {/* <Route path='/latest' element={<Latest/>} /> */}
//         <Route path='/latest' element={<Latest cart={cart} setCart={setCart} />} />
//         <Route path='/contact' element={<Contact/>} />
//         <Route path='/cart' element={<Cart/>} />
        
//         </Routes>
    
      
//       <Footer/>
      
//     </div>
//     </Router>
//   )
// }

// export default App


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'; // ✅ import useState
import './App.css';
import Header from './Header';
import HomePage from './homepage/HomePage';
import FeaturedProduct from './homepage/FeaturedProduct';
import Footer from './Footer';
import Latest from './Latest';
import Contact from './Contact';
import Cart from './Cart';

function App() {
  // ✅ Define the cart state here
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage />
                <FeaturedProduct />
              </>
            }
          />

          {/* ✅ Pass cart and setCart to Latest */}
          <Route path="/latest" element={<Latest cart={cart} setCart={setCart} />} />

          {/* ✅ Also pass them to Cart so it can display items */}
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
