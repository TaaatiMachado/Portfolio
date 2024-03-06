import { NavLink } from 'react-router-dom';
import Shiny from '../Shiny';
import { useState } from 'react';


const NavBar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }

    return (
        <nav className='sticky top-0 bg-darkest-purple bg-stripped z-50'>
            <div className='max-w-[1440px] flex items-center gap-10 justify-between px-7 m-auto nav-bg'>
                <div className='flex items-center gap-5'>
                    <Shiny className="blink text-2xl p-2 font-kode tracking-widest m-0 transition-all ease-in-out duration-500 hover-glow light-glow cursor-default">{`</>`}</Shiny>
                </div>
                <div className='menu-mobile lg:hidden' onClick={handleShowNavbar}>
                    <svg width="50px" height="50px" viewBox="0 0 24 24" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" className='svg-shiny align-middle'>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="#FFFFFF" />
                    </svg>


                </div>
                <div className={`menu absolute top-[70px] right-0 bg-darkest-purple bg-stripped lg:relative lg:top-0 lg:bg-transparent lg:bg-none ${showNavbar && 'active'}`}>
                    <ul className='flex flex-col gap-10 text-md list-none items-end lg:flex-row lg:gap-5'>
                        <li className='px-2 text-center mr-5'><NavLink to='/#home' smooth className='no-underline text-white hover:shadow-btn transition-all duration-800 ease-in-out min-w-24 inline-block' >Home</NavLink></li>
                        <li className='px-2 text-center mr-5'><NavLink to='/#profile' smooth className='no-underline text-white hover:shadow-btn transition-all duration-800 ease-in-out min-w-24 inline-block'>Profile</NavLink></li>
                        <li className='px-2 text-center mr-5'><NavLink to='/#skills' smooth end className='no-underline text-white hover:shadow-btn transition-all duration-800 ease-in-out min-w-24 inline-block'>Skills</NavLink></li>
                        <li className='px-2 text-center mr-5'><NavLink to='/#projects' smooth end className='no-underline text-white hover:shadow-btn transition-all duration-800 ease-in-out min-w-24 inline-block'>Projects</NavLink></li>
                        <li className='px-2 text-center mr-5'><NavLink to='/#contact' smooth end className='no-underline text-white hover:shadow-btn transition-all duration-800 ease-in-out min-w-24 inline-block'>Contact Me</NavLink></li>


                    </ul>
                </div>

            </div>

        </nav>
    )
}

export default NavBar