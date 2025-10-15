import Backround from '../assets/Background.png'
function Hero()
{
  return(
    <div className='relative w-full h-screen'>
       <img src={Backround} alt="" srcset="" className='w-full h-full object-cover' />
    </div>
  )
}

export default Hero;