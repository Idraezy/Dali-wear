import { Link } from "react-router-dom"

function HomePage() {

  return (

    <div className='bg-[#001D23]  px-5 mx-5 rounded-2xl'>
    <div className='flex justify-between '>
        <div className='text-4xl font-bold text-[#1ED760] sm:text-4xl md:text-5xl lg:text-8xl'>
            DALI <br />
            <span className='ml-20'>WEARS</span>
             <br />
        </div>
        <div>
            imagess
        </div>
    </div>
    <Link to="/latest">
    <button className='ml-40 m-10 px-8 py-3 bg-transparent border border-[#00DA6B] text-[#00DA6B] rounded-full font-semibold hover:bg-[#00DA6B] hover:text-white transition-all duration-300'>SHOP NOW</button> </Link>
    </div>
  )
}

export default HomePage