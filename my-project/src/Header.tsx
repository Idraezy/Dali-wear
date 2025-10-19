import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import profileImage from "./assets/profileImage.jpg"; // Update this path to your image

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  // const [isActive, setIsActive] = useState(true);
  const [dotColor, setDotColor] = useState("bg-green-500");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update current time and determine dot color
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const displayHours = hours % 12 || 12;
      const formattedTime = `${displayHours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
      
      setCurrentTime(formattedTime);

      // Change dot color based on time (red: 12am-3:59am, green: 4am-11:59pm)
      if (hours >= 0 && hours < 4) {
        setDotColor("bg-red-500");
      } else {
        setDotColor("bg-green-500");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // function to check active route
  const isActiveRoute = (path: string) => location.pathname === path;

  return (
    <>
      {/* Header */}
      <div
        className={`text-white text-xl p-2 fixed top-0 left-0 z-50 transition-all duration-500 w-full px-4 ${
          isScrolled
            ? "bg-[#001D23]/70 backdrop-blur-md shadow-md"
            : "bg-[#001D23]"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Active Status Indicator */}
          <div className="flex flex-col items-center gap-2">
            <div className="relative w-16 h-16 sm:w-14 sm:h-14 md:w-10 md:h-10">
              {/* Profile Image Circle */}
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-2 border-[#00DA6B]"
              />

              {/* Blinking Dot */}
              <div
                className={`absolute top-0 right-0 w-3 h-3 rounded-full ${dotColor} animate-pulse border-2 border-white shadow-lg`}
              ></div>
            </div>

            {/* Current Time */}
            <p className="text-xs sm:text-sm font-semibold text-gray-300">
              {currentTime}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-4 sm:space-x-6 md:space-x-8">
            <Link to="/">
              <p
                className={`cursor-pointer pb-1 hover:text-[#00DA6B] transition text-sm sm:text-base md:text-xl ${
                  isActiveRoute("/") ? "border-b-2 border-[#00DA6B]" : ""
                }`}
              >
                Home
              </p>
            </Link>

            <Link to="/latest">
              <p
                className={`cursor-pointer pb-1 hover:text-[#00DA6B] transition text-sm sm:text-base md:text-xl ${
                  isActiveRoute("/latest") ? "border-b-2 border-[#00DA6B]" : ""
                }`}
              >
                Shop
              </p>
            </Link>

            <Link to="/review">
              <p
                className={`cursor-pointer pb-1 hover:text-[#00DA6B] transition text-sm sm:text-base md:text-xl ${
                  isActiveRoute("/review") ? "border-b-2 border-[#00DA6B]" : ""
                }`}
              >
                Review
              </p>
            </Link>

            <Link to="/contact">
              <p
                className={`cursor-pointer pb-1 hover:text-[#00DA6B] transition text-sm sm:text-base md:text-xl ${
                  isActiveRoute("/contact") ? "border-b-2 border-[#00DA6B]" : ""
                }`}
              >
                Contact
              </p>
            </Link>
          </div>

          {/* Shopping Cart */}
          <Link to="/cart"><ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-[#00DA6B] transition" /></Link>
        </div>
      </div>

      {/* Push UI down */}
      <div className="pt-24 sm:pt-20 md:pt-24"></div>
    </>
  );
}