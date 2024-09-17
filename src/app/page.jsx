import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import DownloadCV from "@/components/Download";

const Home = () => {
  return (
    <section className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        {/* text */}
        {/* order-2 xl:order-none */}
        <div className="text-center xl:text-left  ">
          <span className="text-xl">Fullstack Web Developer</span>
          <h1 className="h1">
            Hello I&apos;m <br />
            <span className="text-accent">Ayub Wanje</span>
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80">
            I excel at crafting elegant digital experiences and I am proficient
            in various programming languages and technologies
          </p>
          {/* btn and socials */}
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2"
            >
              {/* below placeholder replaced with a component */}
              {/* <span>Download CV</span> */}
              <DownloadCV />

              <FiDownload className="text-xl" />
            </Button>
            <div className="mb-8 xl:mb-0">
              <Socials
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9  border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>
        </div>
        {/* photo */}
        {/* <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div> */}
      </div>
      <Stats />
    </section>
  );
};

export default Home;
