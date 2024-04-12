import React from 'react'
import "./style.scss"
import { motion } from 'framer-motion'
export default function AboutOne() {
    return (
        <div className='aboutOne'>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className='title'>About</motion.p>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className='text'>
                <span></span>
                <p>I have experienced Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloremque odio unde nisi nesciunt quis neque ducimus cum, necessitatibus perspiciatis eveniet, rerum repellat nemo similique harum repudiandae itaque? Corporis, earum!</p>
            </motion.p>
        </div>
    )
}
