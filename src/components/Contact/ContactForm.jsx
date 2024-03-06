import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_d0wz7fk', 'template_yqb2uvq', form.current, {
          publicKey: 'xgq-GM2LR6_9FzW6E',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            alert('Thank you!')
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert('Something failed, please try again.', error.text)
          },
        );
    };
  
    return (
      <form ref={form} onSubmit={sendEmail} className="flex p-12 m-auto max-w-[960px] flex-col bg-purple bg-opacity-25 rounded-lg w-100 focus:ring-0">
        <label>Name</label>
        <input type="text" name="user_name" className=" text-lg rounded-full h-10 mb-6 bg-transparent text-white px-5 focus:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#ff00e1,0_0_15px_#ff00e1,0_0_30px_#ff00e1] focus:border-dashed border border-solid"/>
        <label>Email</label>
        <input type="email" name="user_email" className="rounded-full h-10 mb-6 bg-transparent text-white px-5 focus:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#ff00e1,0_0_15px_#ff00e1,0_0_30px_#ff00e1] focus:border-dashed border border-solid"  />
        <label>Message</label>
        <textarea name="message" className="rounded-xl h-36 mb-6 bg-transparent text-white px-5 py-3 focus:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#ff00e1,0_0_15px_#ff00e1,0_0_30px_#ff00e1] focus:border-dashed border border-solid" />
        <input type="submit" value="Send" className="rounded-full px-12 py-3 text-xl bg-pink text-white transition duration-400 ease-in-out max-w-[200px] w-100 border-none hover:bg-light-purple hover:cursor-pointer" />
      </form>
    );
  };
  
  export default ContactForm;

