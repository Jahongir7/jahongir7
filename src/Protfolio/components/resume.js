import React from 'react';
import python from '../images/python.svg'
import { motion } from 'framer-motion'

const SkillWrapper = ({ name, level }) => {
    var className = 'skill'
    if (level === 'average')
        className = `${className} skill_avg`
    else if (level === 'beginner')
        className = `${className} skill_beg`
    else
        className = `${className} skill_exp`

    return (
        <div className="skill_wrapper">
            <div className={className}>
                <span className="skill_name"><img src={python} alt="python" className='icon_tiny' />   {name}</span>
                <span className='skill_level'>{level}</span>
            </div>
        </div>
    )
}
const Resume = () => {
    const resumeVariants = {
        initial: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.1, duration: 0.7
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }



    return (

        <motion.div className="container resume_section"
            variants={resumeVariants}
            initial='initial'
            animate='visible'
            exit='exit'>

            <div className="row">
                <div className="col-12 col-lg-6 resume_card">
                    <div className="sub_heading">
                        Education
                    </div>
                    <div className="resume_card_body">
                        <div className='resume_card_title'><h5>Academy of Technology</h5></div>
                        <div className='resume_card_year'>2017-2021</div>
                        <p className='resume_card_description'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, asperiores.
                        </p>

                    </div>
                </div>
                <div className="col-12 col-lg-6 resume_card">
                    <div className="sub_heading">
                        Experience
                    </div>
                    <div className="resume_card_body">
                        <div className='resume_card_title'><h5>Freelancer</h5></div>
                        <div className='resume_card_year'>ongoing</div>
                        <p className='resume_card_description'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, asperiores.
                        </p>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-6 skill_div">
                    <div className="sub_heading">
                        Language & Framework
                    </div>
                    <div className="resume_card_body">
                        <SkillWrapper name="Python" level="expert" />
                        <SkillWrapper name="Django" level="average" />
                        <SkillWrapper name="Java Script" level="expert" />
                        <SkillWrapper name="React" level="beginner" />
                        <SkillWrapper name="HTML & CSS" level="average" />
                        <SkillWrapper name="bootstrap 4 " level="average" />
                        <SkillWrapper name="SQL" level="beginner" />

                    </div>


                </div>
                <div className="col-12 col-lg-6">
                    <div className="sub_heading">
                        Software
                    </div>
                    <div className="resume_card_body">
                        <SkillWrapper name="Figma" level="average" />
                        <SkillWrapper name="Photoshop" level="average" />
                        <SkillWrapper name="Illustrator" level="expert" />

                    </div>
                </div>
            </div>
        </motion.div>

    );
}

export default Resume;