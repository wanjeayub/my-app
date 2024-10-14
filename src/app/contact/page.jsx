"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
// import { toast } from "react-toastify";

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

import { motion } from "framer-motion";
import { useState } from "react";
// import { Button } from "@/components/ui/button";

const Contact = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  // const [formData, setFormData] = useState({});

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

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      const emailParams = {
        from_name: userInput.name,
        to_name: "ayub",
        reply_to: userInput.email,
        message: userInput.message,
      };

      const res = await emailjs.send(
        serviceID,
        templateID,
        emailParams,
        userID
      );

      if (res.status === 200) {
        alert("Email sent successfully!");
        setUserInput({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
      alert("Failed to send email, use direct email instead. Thank you");
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
        <div className="flex flex-col xl:flex-row gap-4 ">
          {/* form */}

          <div className="flex gap-4">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 justify-center"
            >
              <div className="flex flex-col">
                <label>Your Name:</label>
                <input
                  className="bg-[#27272c] p-2 md:w-[500px] w-[450px]"
                  type="text"
                  name="name"
                  value={userInput.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label>Your Email:</label>
                <input
                  className="bg-[#27272c] p-2"
                  type="email"
                  name="email"
                  value={userInput.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label>Your Message:</label>
                <textarea
                  className="bg-[#27272c] p-2"
                  name="message"
                  value={userInput.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-accent p-2 rounded-md w-[200px]"
              >
                Send Message
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
