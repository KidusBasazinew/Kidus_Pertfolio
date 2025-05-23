"use client";
import Button from "@/components/Button";
import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_w5u5aww",
        "template_77wlprr",
        formRef.current,
        "4uVeQbFE6imC7QfzE"
      )
      .then(
        () => {
          alert("Message sent");
          window.location.reload();
        },
        () => {
          alert("Message failed");
        }
      );
  };

  return (
    <section id="contact" className="flex flex-col text-center mt-24">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className="px-4 md:px-0 flex flex-col gap-6 mx-auto w-full max-w-lg"
      >
        <div className="formGroup">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            className="h-12 px-4 w-full border border-gray-400 rounded-lg text-gray-700 placeholder-gray-500"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            className="h-12 px-4 w-full border border-gray-400 rounded-lg text-gray-700 placeholder-gray-500"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
            className="h-64 px-4 py-3 w-full border border-gray-400 rounded-lg text-gray-700 placeholder-gray-500 resize-none"
          ></textarea>
        </div>
        <button type="submit">
          <Button>Submit</Button>
        </button>
      </form>
    </section>
  );
}

export default Contact;
