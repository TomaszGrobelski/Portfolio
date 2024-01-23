import emailjs from '@emailjs/browser';
import { FormEvent, useRef, useState } from 'react';

import '../../styles/Contact/contactForm.scss';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [isNameValid, setIsNameValid] = useState<boolean>(true);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [isTextValid, setIsTextValid] = useState<boolean>(true);

  const validateName = (name: string) => name.length >= 3;
  const validateEmail = (email: string) => email.includes('@');
  const validateText = (text: string) => text.length >= 3;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (form.current && isNameValid && isEmailValid && isTextValid) {
      emailjs.sendForm(serviceID, templateID, form.current, publicKey);
      setName('');
      setEmail('');
      setText('');
    }
  };
  return (
    <form ref={form} onSubmit={handleSubmit} className='form'>
      <div className='input-box'>
        <input
          name='name'
          type='text'
          required
          placeholder='Name'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setIsNameValid(validateName(e.target.value));
          }}
          className={`input-field ${isNameValid ? '' : 'invalid'}`}
        />
        <input
          name='email'
          type='email'
          required
          placeholder='Email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setIsEmailValid(validateEmail(e.target.value));
          }}
          className={`input-field ${isEmailValid ? '' : 'invalid'}`}
        />
      </div>
      <textarea
        name='message'
        id='message'
        placeholder='Your message'
        cols={30}
        rows={8}
        required
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setIsTextValid(validateText(e.target.value));
        }}
        className={`textarea-field ${isTextValid ? '' : 'invalid'}`}></textarea>
      <button className='submit-button' type='submit'>
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
