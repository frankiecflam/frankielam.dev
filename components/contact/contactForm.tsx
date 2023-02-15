"use client";
import useInput from "@/hooks/useInput";
import { BsExclamationCircle as InvalidIcon } from "react-icons/bs";
import { FormEvent, useState } from "react";
import { nameSchema, emailSchema, messageSchema } from "@/types";
import { sendForm } from "@emailjs/browser";
import { motion } from "framer-motion";

function nameValidate(value: string) {
  const result = nameSchema.safeParse(value);
  return result.success ? true : false;
}

function emailValidate(value: string) {
  const result = emailSchema.safeParse(value);
  return result.success ? true : false;
}

function messageValidate(value: String) {
  const result = messageSchema.safeParse(value);
  return result.success ? true : false;
}

async function sendFormToEmailJS(form: HTMLFormElement) {
  try {
    const result = await sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      form,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );
    return result;
  } catch (error) {
    console.log({ error });
    return { status: 400, message: error };
  }
}

export default function ContactForm() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formFeedback, setFormFeedback] = useState("");
  const nameInput = useInput({ validate: nameValidate });
  const emailInput = useInput({ validate: emailValidate });
  const messageInput = useInput({ validate: messageValidate });

  const hasInvalidInputs =
    ((nameInput.isTouched || isFormSubmitted) && !nameInput.isValid) ||
    ((emailInput.isTouched || isFormSubmitted) && !emailInput.isValid) ||
    ((messageInput.isTouched || isFormSubmitted) && !messageInput.isValid);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFormSubmitted(true);

    const formValidity =
      nameInput.isValid && emailInput.isValid && messageInput.isValid;

    if (!formValidity) return;

    const { status } = await sendFormToEmailJS(e.currentTarget);

    if (status === 400) {
      setFormFeedback(
        "Sorry! Something went wrong submitting the form. Please contact me on cfl.frankie@gmail.com."
      );
      return;
    }

    setFormFeedback("Thank you for your message. I will get back to you ASAP.");
    setTimeout(() => {
      setFormFeedback("");
    }, 5000);
    nameInput.onReset();
    emailInput.onReset();
    messageInput.onReset();
    setIsFormSubmitted(false);
  };

  return (
    <form
      aria-label="contact form"
      className="mx-auto mt-20 flex max-w-[500px] flex-col gap-y-12"
      onSubmit={handleFormSubmit}
      noValidate
    >
      <div className="relative flex flex-col gap-y-12">
        <motion.div
          className="contact-input-group"
          initial={{ x: "-100px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          <input
            name="name"
            type="text"
            id="name"
            className="w-full border-none bg-transparent py-[10px] px-[20px] outline-transparent"
            value={nameInput.value}
            onChange={nameInput.onChange}
            onBlur={nameInput.onBlur}
          />
          <label
            htmlFor="name"
            className="absolute -top-5 left-[20px] text-sm uppercase tracking-wide text-black-300 dark:text-white-300"
          >
            name
          </label>
          <InvalidIcon
            className={`absolute bottom-3 right-2 fill-red-500 transition-all duration-300 ${
              (nameInput.isTouched && !nameInput.isValid) ||
              (isFormSubmitted && !nameInput.isValid)
                ? "scale-100"
                : "scale-0"
            }`}
          />
        </motion.div>
        <motion.div
          className="contact-input-group"
          initial={{ x: "-100px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          <input
            name="email"
            type="email"
            id="email"
            className="w-full border-none bg-transparent py-[10px] px-[20px] outline-transparent"
            value={emailInput.value}
            onChange={emailInput.onChange}
            onBlur={emailInput.onBlur}
          />
          <label
            htmlFor="email"
            className="absolute -top-5 left-[20px] text-sm uppercase tracking-wide text-black-300 dark:text-white-300"
          >
            email
          </label>
          <InvalidIcon
            className={`absolute bottom-3 right-2 fill-red-500 transition-all duration-300 ${
              (emailInput.isTouched && !emailInput.isValid) ||
              (isFormSubmitted && !emailInput.isValid)
                ? "scale-100"
                : "scale-0"
            }`}
          />
        </motion.div>
        <motion.div
          className="contact-input-group"
          initial={{ x: "-100px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          <textarea
            name="message"
            id="message"
            rows={6}
            className="w-full border-none bg-transparent py-[10px] px-[20px] outline-transparent"
            value={messageInput.value}
            onChange={messageInput.onChange}
            onBlur={messageInput.onBlur}
          />
          <label
            htmlFor="message"
            className="absolute -top-5 left-[20px] text-sm uppercase tracking-wide text-black-300 dark:text-white-300"
          >
            message
          </label>
          <InvalidIcon
            className={`absolute top-3 right-2 fill-red-500 transition-all duration-300 ${
              (messageInput.isTouched && !messageInput.isValid) ||
              (isFormSubmitted && !messageInput.isValid)
                ? "scale-100"
                : "scale-0"
            }`}
          />
        </motion.div>
        <div
          className={`absolute right-2 -bottom-10 flex items-center gap-x-2 text-black-300 transition-all duration-300 dark:text-white-300 ${
            hasInvalidInputs ? "scale-100" : "scale-0"
          }`}
        >
          required
          <InvalidIcon className="fill-red-500" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-4">
        <button
          type="submit"
          className="rounded-md bg-white-200 py-4 px-8 text-lg capitalize ring-2 ring-white-100 drop-shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-white-100 active:translate-y-0 active:bg-white-200 dark:bg-black-200 dark:ring-black-100 hover:dark:bg-black-100 active:dark:bg-black-200"
        >
          send message
        </button>
        {formFeedback && (
          <p className="text-center text-lg font-medium text-black-300 dark:text-white-300">
            {formFeedback}
          </p>
        )}
      </div>
    </form>
  );
}
