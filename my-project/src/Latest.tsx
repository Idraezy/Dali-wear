import { useState } from "react";
import {Search } from "lucide-react";
import sales1 from "./assets/sales1.jpg";
import sales2 from "./assets/sales2.jpg";
import sales3 from "./assets/sales3.jpg";
import sales4 from "./assets/sales4.jpg";
import sales5 from "./assets/sales5.jpg";
import sales6 from "./assets/sales6.jpg";
import sales7 from "./assets/sales7.jpg";
import sales8 from "./assets/sales8.jpg";
import sales9 from "./assets/sales9.jpg";
import sales10 from "./assets/sales10.jpg";
import sales11 from "./assets/sales11.jpg";
import sales12 from "./assets/sales12.jpg";
import sales13 from "./assets/sales13.jpg";
import sales14 from "./assets/sales14.jpg";
import sales15 from "./assets/sales15.jpg";
import sales16 from "./assets/sales16.jpg";
import pin1 from "./assets/pin1.jpg";
import pin2 from "./assets/pin2.jpg";
import pin3 from "./assets/pin3.jpg";
import pin4 from "./assets/pin4.jpg";
import pin5 from "./assets/pin5.jpg";
import pin6 from "./assets/pin6.jpg";
import pin7 from "./assets/pin7.jpg";
import pin8 from "./assets/pin8.jpg";
import pin9 from "./assets/pin9.jpg";
import pin10 from "./assets/pin10.jpg";
import pin11 from "./assets/pin11.jpg";
import pin12 from "./assets/pin12.jpg";
import pin13 from "./assets/pin13.jpg";
import pin14 from "./assets/pin14.jpg";
import pin15 from "./assets/pin15.jpg";
import pin16 from "./assets/pin16.jpg";
import pin17 from "./assets/pin17.jpg";
import pin18 from "./assets/pin18.jpg";
import pin19 from "./assets/pin19.jpg";
import pin20 from "./assets/pin20.jpg";

interface Product {
  id: number;
  image: string;
  name: string;
  price: string;
  category: string;
}

function Latest() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const products: Product[] = [
    { id: 1, image: sales1, name: "Royal Oud", price: "₦11,000", category: "Men" },
    { id: 2, image: sales2, name: "Velvet Rose", price: "₦11,000", category: "Women" },
    { id: 3, image: sales3, name: "Deal", price: "₦6,000", category: "Unisex" },
    { id: 4, image: sales4, name: "Luxury Blend", price: "₦9,500", category: "Men" },
    { id: 5, image: sales5, name: "Fresh Essence", price: "₦8,000", category: "Women" },
    { id: 6, image: sales6, name: "Classic Gold", price: "₦7,500", category: "Unisex" },
    { id: 7, image: sales7, name: "Midnight Dream", price: "₦10,000", category: "Men" },
    { id: 8, image: sales8, name: "Floral Mist", price: "₦8,500", category: "Women" },
    { id: 9, image: sales9, name: "Premium Mix", price: "₦9,000", category: "Unisex" },
    { id: 10, image: sales10, name: "Bold Statement", price: "₦12,000", category: "Men" },
    { id: 11, image: sales11, name: "Gentle Touch", price: "₦7,000", category: "Women" },
    { id: 12, image: sales12, name: "Trendy Vibe", price: "₦8,500", category: "Unisex" },
    { id: 13, image: sales13, name: "Trendy Vibe", price: "₦8,500", category: "Unisex" },
    { id: 14, image: sales14, name: "Trendy Vibe", price: "₦8,500", category: "Unisex" },
    { id: 15, image: sales15, name: "Trendy Vibe", price: "₦8,500", category: "Unisex" },
    { id: 16, image: sales16, name: "Trendy Vibe", price: "₦8,500", category: "Unisex" },
    { id: 17, image: pin1, name: "Elegant Charm", price: "₦10,500", category: "Women" },
    { id: 18, image: pin2, name: "Sophisticated", price: "₦11,500", category: "Men" },
    { id: 19, image: pin3, name: "Nature's Touch", price: "₦6,500", category: "Unisex" },
    { id: 20, image: pin4, name: "Royal Experience", price: "₦13,000", category: "Men" },
    { id: 21, image: pin5, name: "Sweet Harmony", price: "₦8,000", category: "Women" },
    { id: 22, image: pin6, name: "Pure Magic", price: "₦9,500", category: "Unisex" },
    { id: 23, image: pin7, name: "Exclusive Line", price: "₦12,500", category: "Women" },
    { id: 24, image: pin8, name: "Heritage Collection", price: "₦14,000", category: "Men" },
    { id: 25, image: pin9, name: "Heritage Collection", price: "₦14,000", category: "Men" },
    { id: 26, image: pin10, name: "Heritage Collection", price: "₦14,000", category: "Men" },
    { id: 27, image: pin11, name: "Heritage Collection", price: "₦14,000", category: "Men" },
    { id: 28, image: pin12, name: "Heritage Collection", price: "₦14,000", category: "Men" },
    { id: 29, image: pin13, name: "Heritage Collection", price: "₦14,000", category: "Men" },
    { id: 30, image: pin14, name: "Heritage Collection", price: "₦14,000", category: "Men" },
    { id: 31, image: pin15, name: "Heritage Collection", price: "₦14,000", category: "Men" },
    { id: 32, image: pin16, name: "Heritage Collection", price: "₦14,000", category: "Men" },
    { id: 33, image: pin17, name: "Heritage Collection", price: "₦14,000", category: "Men" },
    { id: 34, image: pin18, name: "Heritage Collection", price: "₦14,000", category: "Men" },
    { id: 35, image: pin19, name: "Heritage Collection", price: "₦14,000", category: "Men" },
    { id: 36, image: pin20, name: "Heritage Collection", price: "₦14,000", category: "Men" },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === "All" || product.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="mx-5 py-5  min-h-screen text-white">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-4 mb-5">
        <p className="text-3xl font-bold">Dali Wears</p>

        {/* Search Bar */}
        <div className="flex items-center bg-[#001D23] rounded-full px-4 py-2 w-96">
          <Search size={20} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search for tops or frames..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent outline-none w-full text-white placeholder-gray-500"
          />
        </div>

        <div className="flex items-center gap-4">
          {/* <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-[#00DA6B] transition" /> */}
          <button className="bg-[#00DA6B] p-2 px-5 rounded-xl text-white text-xl hover:bg-[#1d9948] transition">
            Checkout
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex justify-between items-center mt-5 bg-[#001D23] p-8 rounded-xl gap-8 mb-10">
        <div className="w-1/2">
          <p className="text-6xl font-bold mb-4">New Arrivals</p>
          <p className="text-gray-300 mb-6">
            Numquam adipisci voluptates provident minus, animi ipsum eligendi, velit tempore
            neque error sapiente optio perspiciatis. Error necessitatibus qui dolor consequatur fugiat recusandae.
          </p>
          <button className="bg-[#00DA6B] p-2 px-5 rounded-xl text-white text-xl hover:bg-[#1d9948] transition">
            Learn More
          </button>
        </div>
        <div className="w-1/2">
          <img
            src={sales1}
            alt="New Arrival"
            className="w-full h-60 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {["All", "Men", "Women", "Unisex"].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeFilter === filter
                ? "bg-[#00DA6B] text-black"
                : "bg-[#001D23] text-white hover:bg-[#002a35]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-[#001D23] rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-[#00DA6B] text-lg font-bold mb-1">{product.price}</p>
              <p className="text-gray-400 text-sm mb-4">Category: {product.category}</p>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 bg-[#00DA6B] text-black font-bold py-2 rounded-lg hover:bg-[#1d9948] transition">
                  WhatsApp
                </button>
                <button className="flex-1 bg-[#001a1f] text-white font-bold py-2 rounded-lg hover:bg-[#002a35] transition border border-gray-600">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-2xl text-gray-400">No products found. Try a different search!</p>
        </div>
      )}
    </div>
  );
}

export default Latest;