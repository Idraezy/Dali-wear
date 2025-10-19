import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import dali1 from "../assets/dali1.png";
import dali2 from "../assets/dali2.png";
import dali3 from "../assets/dali3.png";
import dali4 from "../assets/dali4.png";
import dali5 from "../assets/dali5.png";
import dali6 from "../assets/dali6.png";
import dali7 from "../assets/dali7.png";
import dali8 from "../assets/dali8.png";
import dali9 from "../assets/dali9.png";
import dali10 from "../assets/dali10.png";
import dali11 from "../assets/dali11.png";
import dali12 from "../assets/dali12.png";
import dali13 from "../assets/dali13.png";
import dali14 from "../assets/dali14.png";
import dali15 from "../assets/dali15.png";
import dali16 from "../assets/dali16.png";
import dali17 from "../assets/dali17.png";
import dali18 from "../assets/dali18.png";
import dali19 from "../assets/dali19.png";
import dali20 from "../assets/dali20.png";
import dali21 from "../assets/dali21.png";
import dali23 from "../assets/dali23.jpg";
import dali24 from "../assets/dali24.jpg";

const images = [
  { src: dali1, name: "Urban Satin Vest", price: "$25.99" },
  { src: dali2, name: "New Nature", price: "$26.99" },
  { src: dali3, name: "Sleek Beauty", price: "$29.99" },
  { src: dali4, name: "Bold Streetwear", price: "$31.99" },
  { src: dali5, name: "Soft Glam", price: "$22.99" },
  { src: dali6, name: "Classic Fit", price: "$28.99" },
  { src: dali7, name: "White Dream", price: "$24.99" },
  { src: dali8, name: "Midnight Cool", price: "$27.99" },
  { src: dali9, name: "Luxury Mode", price: "$33.99" },
  { src: dali10, name: "Urban Chill", price: "$29.99" },
  { src: dali11, name: "Soft Vintage", price: "$35.99" },
  { src: dali12, name: "Nature Flow", price: "$30.99" },
  { src: dali13, name: "Glam Mood", price: "$25.99" },
  { src: dali14, name: "Tender Flow", price: "$31.99" },
  { src: dali15, name: "Bright Dawn", price: "$29.99" },
  { src: dali16, name: "Aesthetic Mood", price: "$32.99" },
  { src: dali17, name: "Royal Chill", price: "$38.99" },
  { src: dali18, name: "Street Edge", price: "$27.99" },
  { src: dali19, name: "Pastel Charm", price: "$23.99" },
  { src: dali20, name: "Cozy Mode", price: "$26.99" },
  { src: dali21, name: "Soft Classic", price: "$34.99" },
  { src: dali23, name: "Soft Classic", price: "$34.99" },
  { src: dali24, name: "Soft Classic", price: "$34.99" },
];

function FeaturedProduct() {
  const [position, setPosition] = useState(0);
  // const itemsPerView = 4;

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setPosition((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setPosition((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-[#001E23] text-white relative overflow-hidden mt-10 p-5 rounded-lg w-full">
      <h2 className="text-3xl font-bold text-center mb-12">
        FEATURED PRODUCTS
      </h2>

      {/* Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full z-10"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full z-10"
      >
        <ChevronRight size={28} />
      </button>

      {/* Slider */}
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex gap-6"
          animate={{ x: `-${position * 25}%` }} // 4 items at once = 25%
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {[...images, ...images].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-[#001A20] rounded-xl shadow-md flex-shrink-0 w-[25%] sm:w-[50%] md:w-[33.3%] lg:w-[25%] overflow-hidden"
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-full h-64 object-cover transition-transform duration-300"
              />
              <div className="p-3 text-center">
                <p className="font-semibold text-[#00DA6B]">{item.name}</p>
                <p className="text-sm text-[#00DA6B]/80">From Daliwear</p>
                <p className="font-bold mt-1 text-[#001E23]">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default FeaturedProduct;