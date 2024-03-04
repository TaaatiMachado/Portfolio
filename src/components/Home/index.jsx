import bats from '../../assets/bats.png'
import Glow from '../Shiny'
import resume from '../../assets/Tatiane Machado - Resume (2024).pdf'

const LandingHome = () => {
  return (
    <>
      <div className='body-bg h-screen flex relative'>
        <div className='flex justify-around px-8 pb-32 items-center max-w-[1440px] mx-auto'>
          <div>
            <p className='text-xl my-0 cursor-default'>Hi! My name is</p>
            <Glow className="text-5xl my-0 blink ">Tati Machado</Glow>
            <h3 className=' text-2xl my-0 cursor-default'>I'm a Front-end & App Developer</h3>
            <h5 className=' text-xl my-0 cursor-default'>I build things for the web :)</h5>
            <div className='py-10 flex gap-4'>
              <a className=" bg-purple rounded-full px-12 py-3 text-white font-semibold no-underline hover:bg-light-purple focus:outline-none transition duration-800 ease-in-out hover-glow" href='https://www.linkedin.com/in/taaatimachado/'>LinkedIn</a>
              <a className=" bg-purple rounded-full px-12 py-3 text-white font-semibold no-underline hover:bg-light-purple focus:outline-none transition duration-800 ease-in-out hover-glow" href='https://github.com/TaaatiMachado'>Github</a>
              <a className=" bg-purple rounded-full px-12 py-3 text-white font-semibold no-underline hover:bg-light-purple focus:outline-none transition duration-800 ease-in-out hover-glow" href={resume} target='blank'>Resume</a>
            </div>
          </div>
          <div>
            <img src={bats} className='w-96 hover:opacity-100 opacity-50 transition-opacity ease-in-out duration-500' />
          </div>
        </div>
      </div>
    </>
  )

}

export default LandingHome