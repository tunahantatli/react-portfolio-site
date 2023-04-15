import React from 'react';
// motion
import { motion} from 'framer-motion';
// variants
import {fadeIn} from '../variants';
// images
import IMG1 from '../assets/portfolio-img1.png';
import IMG2 from '../assets/portfolio-img2.png';
import IMG3 from '../assets/portfolio-img3.png';


const Work = () => {
  return (
    <section className='section' id='work'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row gap-x-10 lg:mt-40'>
          <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
           className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br /> Work.
              </h2>
              <p className="max-w-sm mb-16">Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Perspiciatis pariatur quis sed dicta. Distinctio dignissimos dolorem, 
               cumque fugit ipsa atque.
              </p>
              <button className='btn btn-sm'>View All Projects</button>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2
             border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <div>
                <img className='group-hover:scale-125 transition-all duration-500' src={IMG1} alt="IMG1" />
                {/* pretitle */}
                <div className='absolute -bottom-full left-12 
                group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>Frontend Development</span>
                </div>
                {/* title */}
                <div className='absolute -bottom-full left-12 
                group-hover:bottom-14 transition-all duration-500 z-50'>
                  <span className='text-3xl text-white'>Project Title</span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
           variants={fadeIn("left", 0.5)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.5 }}
           className='flex-1 flex flex-col gap-y-10'>
            {/* images */}
            <div className='group relative overflow-hidden border-2
             border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <div>
                <img className='group-hover:scale-125 transition-all duration-500' src={IMG3} alt="IMG1" />
                {/* pretitle */}
                <div className='absolute -bottom-full left-12 
                group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>Frontend Development</span>
                </div>
                {/* title */}
                <div className='absolute -bottom-full left-12 
                group-hover:bottom-14 transition-all duration-500 z-50'>
                  <span className='text-3xl text-white'>Project Title</span>
                </div>
              </div>
            </div>

            <div className='group relative overflow-hidden border-2
             border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <div>
                <img className='group-hover:scale-125 transition-all duration-500' src={IMG2} alt="IMG1" />
                {/* pretitle */}
                <div className='absolute -bottom-full left-12 
                group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>Frontend Development</span>
                </div>
                {/* title */}
                <div className='absolute -bottom-full left-12 
                group-hover:bottom-14 transition-all duration-500 z-50'>
                  <span className='text-3xl text-white'>Project Title</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
