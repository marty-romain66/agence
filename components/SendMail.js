import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Head from 'next/head';

export default function SendMail() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_edsvu5m', 'template_9h4m9t1', form.current, 'mfgTE9qT16rjS6y-3')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
  return (
    <><Head>
      <title>Contactez moi</title>
      <meta name="description" content="Romain Marty développeur web à Perpignan" />
      <link rel="icon" href="/favicon.ico" />
    </Head><div className="boxContact services projet" id='contact'>
        <form ref={form} onSubmit={sendEmail}>
          <label>Votre nom</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Votre demande en quelques mots</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div></>
  )
}
