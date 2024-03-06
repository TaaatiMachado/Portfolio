import html from '../../assets/icons/icone-html.png'
import css from '../../assets/icons/css-logo.png'
import js from '../../assets/icons/js.png'
import react from '../../assets/icons/react.png'
import native from '../../assets/icons/native.png'
import tailwind from '../../assets/icons/tailwind.png'
import flutter from '../../assets/icons/flutter.png'
import git from '../../assets/icons/git.png'
import graph from '../../assets/icons/graph.png'
import jinja from '../../assets/icons/jinja.png'
import sass from '../../assets/icons/sass.png'
import sql from '../../assets/icons/sql.png'
import styled from '../../assets/icons/styled.png'
import figma from '../../assets/icons/figma.png'
import wordpress from '../../assets/icons/wordpress.png'
import bootstrap from '../../assets/icons/bootstrap.png'
import agile from '../../assets/icons/agile.png'
import tp from '../../assets/icons/Typescript.png'

import { Glow, GlowCapture } from '@codaworks/react-glow'


const Skills = () => {
    return (
        <GlowCapture>
            <Glow>
                <div className='max-w-[1440px] mx-auto pt-10 lg:glow:bg-pink/50' id='skills'>
                    <h2 className="text-2xl my-0 pt-10 px-10 hover-glow transition-all ease-in-out duration-500 text-center">Skills</h2>

                    <div className=' lg:glow:text-glow/50 flex justify-evenly items-center flex-wrap gap-12 p-12 w-[60%] m-auto'>
                        <Glow>
                            <div className="flex flex-col justify-center items-center w-36 rounded-lg p-3 bg-lightest-purple/50 border-white/100 border-dashed lg:bg-transparent lg:border-transparent lg:glow:bg-lightest-purple/50 lg:glow:border-white/100 border lg:glow:border-dashed">
                                <img src={html} className='min-h-[120px] w-20 h-full object-contain' />
                                <p className='m-0 font-bold text-wrap text-center text-white lg:text-transparent lg:glow:text-white text-transparent'>HTML 5</p>
                            </div>
                        </Glow>
                        <Glow>
                            <div className="flex flex-col justify-center items-center w-36 rounded-lg p-3 bg-lightest-purple/50 border-white/100 border-dashed lg:bg-transparent lg:border-transparent lg:glow:bg-lightest-purple/50 lg:glow:border-white/100 border lg:glow:border-dashed">
                                <img src={css} className='min-h-[120px] w-20 h-full object-contain' />
                                <p className='m-0 font-bold text-wrap text-center text-white lg:text-transparent lg:glow:text-white text-transparent'>CSS 3</p>
                            </div>
                        </Glow>
                        <Glow>
                            <div className="flex flex-col justify-center items-center w-36 rounded-lg p-3 bg-lightest-purple/50 border-white/100 border-dashed lg:bg-transparent lg:border-transparent lg:glow:bg-lightest-purple/50 lg:glow:border-white/100 border lg:glow:border-dashed">
                                <img src={js} className='min-h-[120px] w-20 h-full object-contain' />
                                <p className='m-0 font-bold text-wrap text-center text-white lg:text-transparent lg:glow:text-white text-transparent'>JavaScript</p>
                            </div>
                        </Glow>
                        <Glow>
                            <div className="flex flex-col justify-center items-center w-36 rounded-lg p-3 bg-lightest-purple/50 border-white/100 border-dashed lg:bg-transparent lg:border-transparent lg:glow:bg-lightest-purple/50 lg:glow:border-white/100 border lg:glow:border-dashed">
                                <img src={react} className='min-h-[120px] w-20 h-full object-contain' />
                                <p className='m-0 font-bold text-wrap text-center text-white lg:text-transparent lg:glow:text-white text-transparent'>React.JS</p>
                            </div>
                        </Glow>
                        <Glow>
                            <div className="flex flex-col justify-center items-center w-36 rounded-lg p-3 bg-lightest-purple/50 border-white/100 border-dashed lg:bg-transparent lg:border-transparent lg:glow:bg-lightest-purple/50 lg:glow:border-white/100 border lg:glow:border-dashed">
                                <img src={tp} className='min-h-[120px] w-20 h-full object-contain' />
                                <p className='m-0 font-bold text-wrap text-center text-white lg:text-transparent lg:glow:text-white text-transparent'>TypeScript</p>
                            </div>
                        </Glow>
                        <Glow>
                            <div className="flex flex-col justify-center items-center w-36 rounded-lg p-3 bg-lightest-purple/50 border-white/100 border-dashed lg:bg-transparent lg:border-transparent lg:glow:bg-lightest-purple/50 lg:glow:border-white/100 border lg:glow:border-dashed">
                                <img src={tailwind} className='min-h-[120px] w-20 h-full object-contain' />
                                <p className='m-0 font-bold text-wrap text-center text-white lg:text-transparent lg:glow:text-white text-transparent'>Tailwind</p>
                            </div>
                        </Glow>
                        <Glow>
                            <div className="flex flex-col justify-center items-center w-36 rounded-lg p-3 bg-lightest-purple/50 border-white/100 border-dashed lg:bg-transparent lg:border-transparent lg:glow:bg-lightest-purple/50 lg:glow:border-white/100 border lg:glow:border-dashed">
                                <img src={sass} className='min-h-[120px] w-20 h-full object-contain' />
                                <p className='m-0 font-bold text-wrap text-center text-white lg:text-transparent lg:glow:text-white text-transparent'>SASS</p>
                            </div>
                        </Glow>
                        <Glow>
                            <div className="flex flex-col justify-center items-center w-36 rounded-lg p-3 bg-lightest-purple/50 border-white/100 border-dashed lg:bg-transparent lg:border-transparent lg:glow:bg-lightest-purple/50 lg:glow:border-white/100 border lg:glow:border-dashed">
                                <img src={bootstrap} className='min-h-[120px] w-20 h-full object-contain' />
                                <p className='m-0 font-bold text-wrap text-center text-white lg:text-transparent lg:glow:text-white text-transparent'>Bootstrap</p>
                            </div>
                        </Glow>
                        <Glow>
                            <div className="flex flex-col justify-center items-center w-36 rounded-lg p-3 bg-lightest-purple/50 border-white/100 border-dashed lg:bg-transparent lg:border-transparent lg:glow:bg-lightest-purple/50 lg:glow:border-white/100 border lg:glow:border-dashed">
                                <img src={styled} className='min-h-[120px] w-20 h-full object-contain' />
                                <p className='m-0 font-bold text-wrap text-center text-white lg:text-transparent lg:glow:text-white text-transparent'>Styled Components</p>
                            </div>
                        </Glow>
                        <Glow>
                            <div className="flex flex-col justify-center items-center w-36 rounded-lg p-3 bg-lightest-purple/50 border-white/100 border-dashed lg:bg-transparent lg:border-transparent lg:glow:bg-lightest-purple/50 lg:glow:border-white/100 border lg:glow:border-dashed">
                                <img src={flutter} className='min-h-[120px] w-20 h-full object-contain' />
                                <p className='m-0 font-bold text-wrap text-center text-white lg:text-transparent lg:glow:text-white text-transparent'>Flutter</p>
                            </div>
                        </Glow>
                        <Glow>
                            <div className="flex flex-col justify-center items-center w-36 rounded-lg p-3 bg-lightest-purple/50 border-white/100 border-dashed lg:bg-transparent lg:border-transparent lg:glow:bg-lightest-purple/50 lg:glow:border-white/100 border lg:glow:border-dashed">
                                <img src={native} className='min-h-[120px] w-20 h-full object-contain' />
                                <p className='m-0 font-bold text-wrap text-center text-white lg:text-transparent lg:glow:text-white text-transparent'>React Native</p>
                            </div>
                        </Glow>
                        <Glow>
                            <div className="flex flex-col justify-center items-center w-36 rounded-lg p-3 bg-lightest-purple/50 border-white/100 border-dashed lg:bg-transparent lg:border-transparent lg:glow:bg-lightest-purple/50 lg:glow:border-white/100 border lg:glow:border-dashed">
                                <img src={wordpress} className='min-h-[120px] w-20 h-full object-contain' />
                                <p className='m-0 font-bold text-wrap text-center text-white lg:text-transparent lg:glow:text-white text-transparent'>Wordpress</p>
                            </div>
                        </Glow>
                        <Glow>
                            <div className="flex flex-col justify-center items-center w-36 rounded-lg p-3 bg-lightest-purple/50 border-white/100 border-dashed lg:bg-transparent lg:border-transparent lg:glow:bg-lightest-purple/50 lg:glow:border-white/100 border lg:glow:border-dashed">
                                <img src={sql} className='min-h-[120px] w-20 h-full object-contain' />
                                <p className='m-0 font-bold text-wrap text-center text-white lg:text-transparent lg:glow:text-white text-transparent'>SQL</p>
                            </div>
                        </Glow>
                        <Glow>
                            <div className="flex flex-col justify-center items-center w-36 rounded-lg p-3 bg-lightest-purple/50 border-white/100 border-dashed lg:bg-transparent lg:border-transparent lg:glow:bg-lightest-purple/50 lg:glow:border-white/100 border lg:glow:border-dashed">
                                <img src={jinja} className='min-h-[120px] w-20 h-full object-contain' />
                                <p className='m-0 font-bold text-wrap text-center text-white lg:text-transparent lg:glow:text-white text-transparent'>Jinja</p>
                            </div>
                        </Glow>
                        <Glow>
                            <div className="flex flex-col justify-center items-center w-36 rounded-lg p-3 bg-lightest-purple/50 border-white/100 border-dashed lg:bg-transparent lg:border-transparent lg:glow:bg-lightest-purple/50 lg:glow:border-white/100 border lg:glow:border-dashed">
                                <img src={git} className='min-h-[120px] w-20 h-full object-contain' />
                                <p className='m-0 font-bold text-wrap text-center text-white lg:text-transparent lg:glow:text-white text-transparent'>Git & Github</p>
                            </div>
                        </Glow>
                        <Glow>
                            <div className="flex flex-col justify-center items-center w-36 rounded-lg p-3 bg-lightest-purple/50 border-white/100 border-dashed lg:bg-transparent lg:border-transparent lg:glow:bg-lightest-purple/50 lg:glow:border-white/100 border lg:glow:border-dashed">
                                <img src={html} className='min-h-[120px] w-20 h-full object-contain' />
                                <p className='m-0 font-bold text-wrap text-center text-white lg:text-transparent lg:glow:text-white text-transparent'>HTML 5</p>
                            </div>
                        </Glow>
                        <Glow>
                            <div className="flex flex-col justify-center items-center w-36 rounded-lg p-3 bg-lightest-purple/50 border-white/100 border-dashed lg:bg-transparent lg:border-transparent lg:glow:bg-lightest-purple/50 lg:glow:border-white/100 border lg:glow:border-dashed">
                                <img src={figma} className='min-h-[120px] w-20 h-full object-contain' />
                                <p className='m-0 font-bold text-wrap text-center text-white lg:text-transparent lg:glow:text-white text-transparent'>Figma</p>
                            </div>
                        </Glow>
                        <Glow>
                            <div className="flex flex-col justify-center items-center w-36 rounded-lg p-3 bg-lightest-purple/50 border-white/100 border-dashed lg:bg-transparent lg:border-transparent lg:glow:bg-lightest-purple/50 lg:glow:border-white/100 border lg:glow:border-dashed">
                                <img src={agile} className='min-h-[120px] w-20 h-full object-contain' />
                                <p className='m-0 font-bold text-wrap text-center text-white lg:text-transparent lg:glow:text-white text-transparent'>Agile Development</p>
                            </div>
                        </Glow>
                    </div>

                </div>
            </Glow>
        </GlowCapture>
    )

}

export default Skills