
const CarouselItem = ({img, url, title}) => {
    return (
        <div className="flex items-center flex-col relative bg-lightest-purple bg-opacity-20 mx-5 my-10 rounded-lg shadow-lg w-[90%] cursor-default border-dashed border border-white" >
            <img className="max-w-[100%] rounded-t-lg" src={img} alt="Img" />
            <p className="m-3 text-white text-center font-semibold text-xl">{title}</p>
            <a href={url} target='_blank' className="m-4 bg-pink rounded-full px-12 py-3 text-gray-100 font-semibold hover:bg-light-purple focus:outline-none transition duration-400 ease-in-out">Repository</a>
        </div>
    )
}

export default CarouselItem