import { NavLink } from 'react-router-dom';
import Shiny from '../Shiny';


const NavBar = () => {
    return (
        <nav className='sticky top-0 bg-darkest-purple nav-bg z-50'>
            <div className='max-w-[1440px] flex items-center gap-10 justify-between px-7 m-auto nav-bg'>
                <div className='flex items-center gap-5'>
                    <Shiny className="blink text-2xl p-2 font-kode tracking-widest m-0 transition-all ease-in-out duration-500 hover-glow light-glow cursor-default">{`</>`}</Shiny>
                </div>
                <div className='menu'>
                    <ul className='flex gap-10 text-md list-none'>
                        <li className='px-2 text-center '><NavLink to='/#home' smooth className='no-underline text-white hover:shadow-btn transition-all duration-800 ease-in-out min-w-24 inline-block' >Home</NavLink></li>
                        <li className='px-2 text-center'><NavLink to='/#profile' smooth className='no-underline text-white hover:shadow-btn transition-all duration-800 ease-in-out min-w-24 inline-block'>Profile</NavLink></li>
                        <li className='px-2 text-center'><NavLink to='/#skills' smooth end className='no-underline text-white hover:shadow-btn transition-all duration-800 ease-in-out min-w-24 inline-block'>Skills</NavLink></li>
                        <li className='px-2 text-center'><NavLink to='/#projects' smooth end className='no-underline text-white hover:shadow-btn transition-all duration-800 ease-in-out min-w-24 inline-block'>Projects</NavLink></li>
                        <li className='px-2 text-center'><NavLink to='/#contact' smooth end className='no-underline text-white hover:shadow-btn transition-all duration-800 ease-in-out min-w-24 inline-block'>Contact Me</NavLink></li>


                    </ul>
                </div>

            </div>

        </nav>
    )
}

export default NavBar