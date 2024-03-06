import bats from '../../assets/bats.png'
import Glow from '../Shiny'
import resume from '../../assets/Tatiane Machado - Resume (2024).pdf'

const LandingHome = () => {
  return (
    <>
      <div className='bg-stripped h-screen flex relative box-border body-bg lg:h-screen md:h-[100%]'>
        <div className='flex flex-col px-8 pt-12 pb-32 items-center max-w-[1440px] mx-auto w-[100%] box-border md:flex-row lg:justify-around lg:w-auto lg:items-start'>
          <div className=' w-[100%] pt-12'>
            <p className='text-xl my-0 cursor-default'>Hi! My name is</p>
            <Glow className="text-4xl my-0 blink lg:text-5xl leading-none">Tati Machado</Glow>
            <h3 className=' text-2xl my-0 cursor-default'>I'm a Front-end & App Developer</h3>
            <h5 className=' text-xl my-0 cursor-default'>I build things for the web :)</h5>
            <div className='py-10 flex flex-col gap-4 lg:flex-row' >
              <a className=" text-center bg-purple rounded-full px-12 py-3 text-white font-semibold no-underline hover:bg-light-purple focus:outline-none transition duration-800 ease-in-out hover-glow" href='https://www.linkedin.com/in/taaatimachado/'>LinkedIn</a>
              <a className="text-center bg-purple rounded-full px-12 py-3 text-white font-semibold no-underline hover:bg-light-purple focus:outline-none transition duration-800 ease-in-out hover-glow" href='https://github.com/TaaatiMachado'>Github</a>
              <a className="text-center bg-purple rounded-full px-12 py-3 text-white font-semibold no-underline hover:bg-light-purple focus:outline-none transition duration-800 ease-in-out hover-glow" href={resume} target='blank'>Resume</a>
            </div>
          </div>
          <div>
            <img src={bats} className='w-96 hover:opacity-100 opacity-50 transition-opacity ease-in-out duration-500 hidden md:block ' />
          </div>
        </div>
      </div>
    </>
  )

}

export default LandingHome