// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
// import './App.css';
// import Header from './Header';
// import HomePage from './homepage/HomePage';
// import FeaturedProduct from './homepage/FeaturedProduct';
// import Footer from './Footer';
// import Latest from './Latest';
// import Contact from './Contact';
// import Cart from './Cart';
// import { CartItem } from './Header';
// import About from './About';
// import ScrollToTop from "./ScrollToTop";


// function App() {
//   const [cart, setCart] = useState([]);

//   return (
//     <Router>
//       <div>
//         {/* ✅ Pass the cart to Header */}
//         <ScrollToTop />
//         <Header cart={cart} />

//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <HomePage />
//                 <FeaturedProduct />
//               </>
//             }
//           />

//           {/* ✅ Pass cart and setCart to Latest */}
//           <Route path="/latest" element={<Latest cart={cart} setCart={setCart} />} />

//           {/* ✅ Pass them to Cart */}
//           <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />


//           <Route path="/contact" element={<Contact />} />
//           <Route path="/about" element={<About />} />
//         </Routes>

//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;




import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './Header';
import HomePage from './homepage/HomePage';
import FeaturedProduct from './homepage/FeaturedProduct';
import Footer from './Footer';
import Latest from './Latest';
import Contact from './Contact';
import Cart  from './Cart'; // ✅ import CartItem here
import type { CartItem } from "./Cart";
import About from './About';
import ScrollToTop from "./ScrollToTop";

function App() {
  const [cart, setCart] = useState<CartItem[]>([]); // ✅ fixed line

  return (
    <Router>
      <div>
        <ScrollToTop />
        <Header cart={cart} />

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
          <Route path="/latest" element={<Latest cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;