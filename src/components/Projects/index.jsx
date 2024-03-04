import Shiny from "../Shiny"
import { Carousel } from '@trendyol-js/react-carousel';
import CarouselItem from "./carousel-item";

const Projects = () => {
    return (
        <div id="projects" className="px-12 pt-10">
            <Shiny className="text-2xl my-0 pt-10 px-10 text-center">Projects</Shiny>
            <Carousel show={2.5} slide={2} transition={0.5} swiping={true}>
                <CarouselItem img={'https://assets-prd.ignimgs.com/2021/08/26/sale-301208-article-image-1629997914931.jpeg'} url={1} title='Project 1'/>
                <CarouselItem img={'https://assets-prd.ignimgs.com/2021/08/26/sale-301208-article-image-1629997914931.jpeg'} url={2} title='Project 2'/>
                <CarouselItem img={'https://assets-prd.ignimgs.com/2021/08/26/sale-301208-article-image-1629997914931.jpeg'} url={3} title='Project 3'/>
                <CarouselItem img={'https://assets-prd.ignimgs.com/2021/08/26/sale-301208-article-image-1629997914931.jpeg'} url={3} title='Project 4'/>
                <CarouselItem img={'https://assets-prd.ignimgs.com/2021/08/26/sale-301208-article-image-1629997914931.jpeg'} url={3} title='Project 5'/>
            </Carousel>
        </div>
    )
}

export default Projects