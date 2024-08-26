"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaJava,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobexd,
} from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "I am a very hardworking self proclaimed web developer that is currently running away from responsibilities",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ayub Wanje",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+254) 707 979 411",
    },
    {
      fieldName: "Experience",
      fieldValue: "8+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "wanje.01",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Kenyan",
    },
    {
      fieldName: "Email",
      fieldValue: "ayub.wanje@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
  ],
};

// experience data
const experience = {
  icon: "",
  title: "My Experience",
  description: "This is a sample project for the experience required",
  items: [
    {
      company: "First Company",
      position: "Fullstack Web Developer",
      duration: "2023 - Present",
    },
    {
      company: "Second Company",
      position: "Front End web Developer",
      duration: "2022 - 2023",
    },
    {
      company: "Third Company",
      position: "Backend Developer",
      duration: "2023 - Present",
    },
    {
      company: "Third Company",
      position: "Fullstack Web Developer",
      duration: "2023 - Present",
    },
    {
      company: "Third Company",
      position: "Fullstack Web Developer",
      duration: "2023 - Present",
    },
    {
      company: "Third Company",
      position: "Fullstack Web Developer",
      duration: "2023 - Present",
    },
    {
      company: "Third Company",
      position: "Fullstack Web Developer",
      duration: "2023 - Present",
    },
    {
      company: "Third Company",
      position: "Fullstack Web Developer",
      duration: "2023 - Present",
    },
  ],
};

// education
const education = {
  icon: "put education icon/svg",
  title: "My Education",
  description:
    "This is a show of prowess on my educational qualifications, you can never go wrong with an engineer",
  items: [
    {
      institution: "Technical University of Mombasa",
      degree: "Bsc Electrical and Electrical Engineering",
      duration: "2016",
    },
    {
      institution: "Technical University of Mombasa",
      degree: "Bsc Electrical and Electrical Engineering",
      duration: "2016",
    },
  ],
};
// skills
const skills = {
  title: "My Skills",
  description: "am as good as they come",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <FaNodeJs />,
      name: "node js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <SiAdobeillustrator />,
      name: "illustrator",
    },
    {
      icon: <SiAdobephotoshop />,
      name: "photoshop",
    },
    {
      icon: <SiAdobexd />,
      name: "XD",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                {/* the scroll areas component does not respond */}
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232339] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          {/* dot */}
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                {/* the scroll areas component does not respond */}
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232339] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.institution}
                          </h3>
                          {/* dot */}
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.degree}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col text-center xl:text-left gap-[30px]">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index} className="capitalize">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul
                  className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0
                "
                >
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">
                          {item.fieldName}:{" "}
                        </span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
