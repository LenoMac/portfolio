import React from 'react'
import "./style.scss"
import { motion } from "framer-motion"

import htmlAndCss from "../../assets/html&css.png"
import JavaScript from '../../assets/js.png'
import ReactJS from "../../assets/react_js.png"
import typesscript from "../../assets/typescript.png"
import git from "../../assets/git.png"
import linux from "../../assets/ubuntu.png"
import expo from "../../assets/expo.png"
import figma from "../../assets/figma.png"
import flutter from "../../assets/flutter.png"
import tailwind from "../../assets/tailwind-css.png"
import materialUI from "../../assets/material.png"
import chartJS from "../../assets/chartJs.png"
import sass from "../../assets/sass.png"
import redux from '../../assets/redux.webp'

const listOfSkills = [
    { img: htmlAndCss, name: 'HTML & CSS', url: 'https://www.google.com' },
    { img: JavaScript, name: 'JavaScript', url: 'https://www.google.com' },
    { img: ReactJS, name: 'React JS', url: 'https://www.google.com' },
    { img: typesscript, name: 'TypeScript', url: 'https://www.google.com' },
    { img: git, name: 'Git Source Control', url: 'https://www.google.com' },
    { img: linux, name: 'Linux OS/Ubuntu', url: 'https://www.google.com' },
    { img: ReactJS, name: 'React Native', url: 'https://www.google.com' },
    { img: expo, name: 'Expo Go', url: 'https://www.google.com' },
    { img: figma, name: 'Figma', url: 'https://www.google.com' },
    { img: tailwind, name: 'Tailwind CSS', url: 'https://www.google.com' },
    { img: flutter, name: 'Flutter', url: 'https://www.google.com' },
    { img: materialUI, name: 'Material UI', url: 'https://www.google.com' },
    { img: chartJS, name: 'Chart JS', url: 'https://www.google.com' },
    { img: sass, name: 'Sass/Scss', url: 'https://www.google.com' },
    { img: redux, name: 'Redux', url: 'https://www.google.com' },
]


export default function Skills() {
    return (
        <div className='skills'>
            <p className='title'>My Skills</p>
            <div className='blocks'>
                {listOfSkills.map((item, index) => {
                    return (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: 'linear' }}
                            className='block'>
                            <img src={item.img} alt="" />
                            <p>{item.name}</p>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}
