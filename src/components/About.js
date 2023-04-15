import React from "react";
// countup
import Countup from "react-countup";
// intersection observer
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
         {/* image */}
         <motion.div
         variants={fadeIn('right', 0.3)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false, amount: 0.3}}

            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px]
          mix-blend-lighten bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
           variants={fadeIn('left', 0.5)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.5}}
           className="flex-1">
            <h2 className="h2 text-accent">About me</h2>
            <h3 className="h3 mb-4">I'm a Full Stack Developer with over 1 years of experience</h3>
            <p className="mb-6">
              I finished the program full stack development at{" "}
              <a href="https://clarusway.com/" className="text-lime-500">Clarusway IT School</a>. I
              studied electronic & communication engineering before. I've been working on Frontend Development since
              July 2022 and Backend Development since January 2023.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {
                    inView ? <Countup start={0} end={1} /> : null
                  }
                </div>
                <div className="font-primary text-sm tracting-[2px]">
                  Years of <br /> Experience
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {
                    inView ? <Countup start={0} end={7} duration={2}/> : null
                  }
                </div>
                <div className="font-primary text-sm tracting-[2px]">
                  Backend Projects <br /> Completed
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {
                    inView ? <Countup start={0} end={20} duration={2}/> : null
                  }
                </div>
                <div className="font-primary text-sm tracting-[2px]">
                  Frontend Projects <br /> Completed
                </div>
              </div>

              
            </div>
            <div className="flex  gap-x-8 items-center">
                <button className="btn btn-lg">Contact Me</button>
                <a href="#" className="text-gradient btn-link">My Portfolio</a>
              </div>
          </motion.div>
          
          
        </div>
      </div>
    </section>
  );
};

export default About;
