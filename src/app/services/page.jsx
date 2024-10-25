"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I am a web developer with expertise in creating dynamic, responsive websites and applications. I specialize in building user-friendly interfaces and efficient backend systems using modern technologies like React, Vite, Tailwind CSS, and Node.js",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I offer UI/UX design services focused on creating intuitive, visually appealing, and user-centered experiences. With a keen eye for detail, I design interfaces that are both functional and aesthetically pleasing, ensuring seamless interaction and user satisfaction",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "I provide logo design services that create unique, memorable brand identities. By blending creativity with strategy, I craft logos that effectively represent your brand’s values and resonate with your target audience.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "I offer SEO services to help improve your website's visibility and search engine ranking. Through strategic optimization, I enhance your site’s content, structure, and performance to drive organic traffic and boost online presence.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {services.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 flex-col justify-center group gap-9"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {item.num}
                  </div>
                  <Link
                    href={item.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {item.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{item.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
