import { useState } from "react";

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);  const sendEmail = (e) => {
      e.persist();
      e.preventDefault();
      setIsSubmitting(true);    emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          e.target,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            setStateMessage('Message sent!');
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 5000); // hide message after 5 seconds
          },
          (error) => {
            setStateMessage('Something went wrong, please try again later');
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 5000); // hide message after 5 seconds
          }
        );
      
      // Clears the form after sending the email
      e.target.reset();
    };  return (
      <form onSubmit={sendEmail} className="flex p-12 m-auto max-w-[960px] flex-col bg-purple bg-opacity-25 rounded-lg w-100">
        <label className="text-xl">Name</label>
        <input type="text" name="user_name" className=" text-lg rounded-full h-10 mb-6 bg-transparent text-white px-5 focus:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#ff00e1,0_0_15px_#ff00e1,0_0_30px_#ff00e1] focus:border-dashed border border-solid"/>
        <label className="text-xl" >Email</label>
        <input type="email" name="user_email" className="rounded-full h-10 mb-6 bg-transparent text-white px-5 focus:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#ff00e1,0_0_15px_#ff00e1,0_0_30px_#ff00e1] focus:border-dashed border border-solid"  />
        <label className="text-xl" >Message</label>
        <textarea name="message" className="rounded-xl h-36 mb-6 bg-transparent text-white px-5 py-3 focus:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#ff00e1,0_0_15px_#ff00e1,0_0_30px_#ff00e1] focus:border-dashed border border-solid" />
        <input type="submit" value="Send" disabled={isSubmitting} className="  rounded-full px-12 py-3 text-xl bg-pink text-white transition duration-400 ease-in-out max-w-[200px] w-100 border-none hover:bg-light-purple" />
        {stateMessage && <p>{stateMessage}</p>}
      </form>
    );
  };
  
  export default ContactForm;