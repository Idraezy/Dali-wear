import { Instagram, } from "lucide-react"
import { Link } from "react-router-dom"

function Footer () {

  return (
    <div>
        <div className="bg-[#001F23] text-gray-400 text-lg mt-5 flex justify-between h-8 p-8 items-center">
          <p className="text-gray-500 text-sm mt-4">
            © 2024 Dali Wears. All rights reserved.
          </p>
          {/* <Link to="https://instagram.com/dali_wears"><Instagram size={20}/></Link> */}
          <a href="https://instagram.com/dali_wears" target="_blank" rel="noopener noreferrer" ><Instagram size={20}/></a>
            {/* <p > Copyright &copy; 2025 . All rights reserved. <span className="text-2xl">DALI WEARS</span> </p> */}
            <Link to="/cart">
            <button className="bg-[#00DA6B] p-2 px-5 rounded-xl text-black font-bold text-lg hover:bg-[#1d9948] transition">
            Checkout
          </button></Link>
            
        </div>
    </div>
  )
}

export default Footer