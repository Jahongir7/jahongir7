import React from 'react';
import Card from './card'
import repair from '../images/repair.svg'
import algorithm from '../images/algorithm.svg'
import computer from '../images/computer.svg'
import ux from '../images/ux.svg'
import { motion } from 'framer-motion'

const About = () => {
    const aboutVariants = {
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
        <motion.div className='content_section'
            variants={aboutVariants}
            initial='initial'
            animate='visible'
            exit='exit'

        >
            <div className='description'>
                I describe my self as someone who's persistant, a quick learner and loves problem solving by using simple and scalable solutions.
                </div>
            <div className="data_section">
                <div className="container">
                    <p className='sub_heading'>
                        What I offer
                        </p>
                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <Card icon={computer} title="Frontend Development" body="Some quick example text to build on the card title and make up" />
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <Card icon={repair} title="Backend Development" body="Some quick example text to build on the card title and make up" />
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <Card icon={algorithm} title="Algo and DS" body="uild on the card title and make up Some quick example text to b" />
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <Card icon={ux} title="UI/UX developer" body="Some quick example text to build on the card title and make up" />
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <Card icon={ux} title="Graphics Designer" body="Some quick example text to build on the card title and make up" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default About;