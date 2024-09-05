import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/wanjeayub" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/ayubwanje-dev01" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@wanjecodes" },
  { icon: <FaTwitter />, path: "https://x.com/wanjecodes" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.path} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
