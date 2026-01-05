'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectScreenshotsProps {
  screenshots: string[];
}

export default function ProjectScreenshots({ screenshots }: ProjectScreenshotsProps) {
  return (
    <section className="relative" style={{marginTop: '120px', marginBottom: '120px', paddingTop: '100px', paddingBottom: '100px'}}>
        <div className="absolute inset-0 bg-violet-500/10 blur-[120px] rounded-full -z-10" />
        <div className="flex justify-center items-center gap-8 md:gap-16 perspective-1000">
            {/* Left Phone */}
            <motion.div 
                initial={{ opacity: 0, x: -100, rotateY: 12, y: 12 }}
                whileInView={{ opacity: 0.8, x: 0, rotateY: 12, y: 12 }}
                whileHover={{ opacity: 1, scale: 1.02, rotateY: 0, y: 0, zIndex: 20 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-48 h-[24rem] md:w-64 md:h-[34rem]"
            >
                 <div className="absolute inset-0 bg-black rounded-[2.5rem] border-[3px] border-gray-800 overflow-hidden shadow-2xl">
                    <Image src={screenshots[0]} alt="Screen 1" fill className="object-cover" unoptimized quality={100} style={{imageRendering: 'crisp-edges'}} />
                 </div>
            </motion.div>
            
            {/* Center Phone */}
            <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="relative w-56 h-[28rem] md:w-72 md:h-[38rem] z-10 shadow-2xl"
            >
                <div className="absolute inset-0 bg-black rounded-[3rem] border-[4px] border-gray-700 overflow-hidden shadow-violet-500/20 shadow-2xl">
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20 border border-gray-800" />
                    <Image src={screenshots[1]} alt="Screen 2" fill className="object-cover" unoptimized priority quality={100} style={{imageRendering: 'crisp-edges'}} />
                </div>
            </motion.div>

            {/* Right Phone */}
            <motion.div 
                initial={{ opacity: 0, x: 100, rotateY: -12, y: 12 }}
                whileInView={{ opacity: 0.8, x: 0, rotateY: -12, y: 12 }}
                whileHover={{ opacity: 1, scale: 1.02, rotateY: 0, y: 0, zIndex: 20 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-48 h-[24rem] md:w-64 md:h-[34rem]"
            >
                 <div className="absolute inset-0 bg-black rounded-[2.5rem] border-[3px] border-gray-800 overflow-hidden shadow-2xl">
                    <Image src={screenshots[2]} alt="Screen 3" fill className="object-cover" unoptimized quality={100} style={{imageRendering: 'crisp-edges'}} />
                 </div>
            </motion.div>
        </div>
    </section>
  );
}
