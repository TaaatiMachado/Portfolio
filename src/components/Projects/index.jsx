import Shiny from "../Shiny"
import { Carousel } from '@trendyol-js/react-carousel';
import CarouselItem from "./carousel-item";
import pokedex from '../../assets/pokedex.jpg'
import ilovepxl from '../../assets/ilovepxl.jpg'
import portfolio from '../../assets/devportfolio.jpg'


const Projects = () => {
    return (
        <div id="projects" className=" pt-10 px-2 max-w-[1440px] mx-auto">
            <Shiny className="text-2xl my-0 pt-10 px-2 text-center">Projects</Shiny>
            <Carousel show={1} slide={1} transition={0.5} swiping={true} responsive className="m-auto">
                <CarouselItem img={pokedex} url={'https://github.com/Felipe-Streva/Pokedex_API'} title='Pokédex'/>
                <CarouselItem img={ilovepxl} url={'https://github.com/TaaatiMachado/ilovepixel'} title='I Love Pixel'/>
                <CarouselItem img={portfolio} url={'https://github.com/TaaatiMachado/Portfolio'} title='Portfolio'/>
            </Carousel>
        </div>
    )
}

export default Projects