
const Shiny = ({children, className})=> {
    return (
        <p className={ `light-glow hover-glow transition-all ease-in-out duration-500 cursor-default ${className}` } >{children}</p>
    )
}

export default Shiny