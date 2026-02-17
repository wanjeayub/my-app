"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+254) 707 979 411",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ayub.wanje@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "P. O. Box 220, Mombasa, Kenya ",
  },
];

const Contact = () => {
  const formRef = useRef(null);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  // handle changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  // handlesubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    // Get environment variables
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Debug: Check if variables are loaded
    console.log("Service ID:", serviceID);
    console.log("Template ID:", templateID);
    console.log("Public Key:", publicKey);

    // Validate environment variables
    if (!serviceID || !templateID || !publicKey) {
      alert(
        "Email service not properly configured. Please check your environment variables.",
      );
      setIsSending(false);
      return;
    }

    // Prepare template parameters - match these with your EmailJS template
    const templateParams = {
      from_name: userInput.name,
      from_email: userInput.email,
      to_name: "Ayub",
      reply_to: userInput.email,
      message: userInput.message,
    };

    try {
      const res = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey,
      );

      if (res.status === 200) {
        alert("Message sent successfully! I'll get back to you soon.");
        setUserInput({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert(
        "Failed to send message. Please email me directly at ayub.wanje@gmail.com",
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-4">
          {/* form */}
          <div className="flex gap-4 py-10">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 justify-center"
            >
              <div className="flex flex-col">
                <label className="mb-2">Your Name:</label>
                <input
                  className="bg-[#27272c] p-2 md:w-[500px] w-[450px] rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  type="text"
                  name="name"
                  value={userInput.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Your Email:</label>
                <input
                  className="bg-[#27272c] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  type="email"
                  name="email"
                  value={userInput.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Your Message:</label>
                <textarea
                  className="bg-[#27272c] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent min-h-[150px]"
                  name="message"
                  value={userInput.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className={`bg-accent p-2 rounded-md w-[200px] hover:bg-accent/80 transition-all duration-300 ${
                  isSending ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
