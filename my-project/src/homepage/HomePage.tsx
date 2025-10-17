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
    <Link to="/latest"><button className='bg-[#1ED760] p-3 rounded-3xl m-10 ml-40 text-white w-40 text-xl hover:bg-[#1d9948]'>SHOP NOW</button> </Link>
    </div>
  )
}

export default HomePage