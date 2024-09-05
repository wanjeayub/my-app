"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

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

const Contact = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    selectItem: "",
    textArea: "",
  });

  const handleChange = (e) => {
    e.target.preventDefault();
    setForm({ ...form });
  };
  const handleSubmit = () => {};
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
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">Let&#39;s work together</h3>
              <p className="text-white/60">
                I am currently open for both short term and long term projects.
                For Web based solutions from conceptualising to development of
                both front and backend projects kindly drop a message and we
                work magic.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  placeholder="First Name"
                  name="firstname"
                  value="value"
                  onChange={handleChange}
                />
                <Input
                  type="lastname"
                  placeholder="Last Name"
                  id="lastname"
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  id="email"
                  onChange={handleChange}
                />
                <Input
                  type="phone"
                  placeholder="Phone Number"
                  id="firstname"
                  onChange={handleChange}
                />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* text area */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here"
                id="textarea"
              />
              <Button className="max-w-40">Send Message</Button>
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
