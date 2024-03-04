import Shiny from "../Shiny"
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div id="contact" className="px-12 pt-10">
            <Shiny className="text-2xl my-0 p-10 text-center">Contact Me</Shiny>
            <ContactForm />
        </div>
    )
}

export default Contact