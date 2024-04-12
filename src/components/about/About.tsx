import React from 'react'
import "./about.scss"
import { TypeAnimation } from 'react-type-animation'
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function About() {
    return (
        <div className='about'>
            <div className="info">
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='name'>Hey! It's <span>Abdulhafiz J.</span></motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className='me'>
                    <p>I'M A</p>
                    <TypeAnimation
                        sequence={[
                            'React JS Developer',
                            1000,
                            'React Native Developer',
                            1000,
                            'UX/UI designer',
                            1000
                        ]}
                        wrapper="p"
                        speed={50}
                        className='myself'
                        repeat={Infinity}
                    />
                </motion.div>
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }} className='subname'>Frontend Developer & <br /> UX/UI designer</motion.p>
                <motion.button
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, ease: "easeOut" }}
                    className='secondary_button'>Contact Me</motion.button>
            </div>
            <div className="portrait">
                <motion.div
                    initial={{ opacity: 0, x: 100, mixBlendMode: 'color' }}
                    animate={{ opacity: 1, x: 0, mixBlendMode: 'screen' }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="photo"></motion.div>
                <div className='social-contact'>
                    <motion.span
                        initial={{ opacity: 0, y: 40, height: 10 }}
                        animate={{ opacity: 1, y: 0, height: 100 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    ></motion.span>
                    <motion.a
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        href="https://github.com/LenoMac">
                        <FaGithub color='white' size={30} />
                    </motion.a>
                    <motion.a
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4, ease: 'easeOut' }}
                        href="https://www.instagram.com/hafizbey_official?igsh=MWRybWZ3ZzByc3IxNg==">
                        <FaInstagram color='white' size={30} className='social-icon' />
                    </motion.a>
                    <motion.a
                        target='_blank'
                        href='https://wa.me/+996779079279'
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.6, ease: 'easeOut' }}
                    >
                        <FaWhatsapp color='white' size={30} className='social-icon' />
                    </motion.a>
                </div>
            </div>
        </div>
    )
}
