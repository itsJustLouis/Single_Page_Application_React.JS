"use client";

import React from 'react'
import { motion } from 'framer-motion'
// import { slideInFromTop } from '../../utils/motion';
import { slideInFromTop } from '../../utils/motion.ts'
import { SparklesIcon } from '@heroicons/react/16/solid';


function HomeContent() {
  return (
    <motion.section
    initial="Hidden"
    animate="visible"
    className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >
        <article className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start' >
            <motion.section
            variants={slideInFromTop}
            className='Welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-[0.9]'
            >
                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
                <h1 className='Welcome-text text-[13px]' >Louis Monawe HomePage</h1> 
            </motion.section>
        </article>

    </motion.section>
  )
}

export default HomeContent