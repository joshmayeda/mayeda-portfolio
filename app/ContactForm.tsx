import React, { useRef, FormEvent, useState } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { allowedNodeEnvironmentFlags } from 'process';

const ContactForm: React.FC = () => {

  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 3000);
      }, 1500);
    }
  };

  return (
    <div className="flex flex-col w-1/3 mt-10 gap-10 rounded-xl">
      <div className="flex w-full mt-10 bg-accent bg-opacity-40 rounded-xl">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col m-6 w-full h-full">
          <label className="text-neutral">Name</label>
          <input type="text" name="user_name" className="input input-bordered input-accent bg-secondary w-full" />
          <label className="mt-5 text-neutral">Email</label>
          <input type="text" name="user_email" className="input input-bordered input-accent bg-secondary w-full" />
          <label className="mt-5 text-neutral">Message</label>
          <textarea className="textarea textarea-accent bg-secondary h-48" name="message"></textarea>
          {loading ? (<div className="loading loading-dots loading-lg self-center"></div>) : <button className="btn btn-primary text-neutral mt-5">Send</button>}
        </form>
      </div>
      {alert && (
        <div className="alert alert-success w-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>Your message has been sent!</span>
        </div>
      )}
    </div>
  );
};

export default ContactForm;