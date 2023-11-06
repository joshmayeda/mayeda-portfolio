import React, { useRef, FormEvent } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_g5drc45', 'template_bidcrzq', form.current, 'cbm1BpJK1lTND3e9Z')
        .then(
          (result: EmailJSResponseStatus) => {
            console.log(result.text);
          },
          (error: EmailJSResponseStatus) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="flex w-1/3 mt-10 bg-accent bg-opacity-40 rounded-xl">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col m-6 w-full h-full">
        <label className="text-neutral">Name</label>
        <input type="text" name="user_name" className="input input-bordered input-accent bg-secondary w-full" />
        <label className="mt-5 text-neutral">Email</label>
        <input type="text" name="user_email" className="input input-bordered input-accent bg-secondary w-full" />
        <label className="mt-5 text-neutral">Message</label>
        <textarea className="textarea textarea-accent bg-secondary h-48" name="message"></textarea>
        <button className="btn btn-primary text-neutral mt-5">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;