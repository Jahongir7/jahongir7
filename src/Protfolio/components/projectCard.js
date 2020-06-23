import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'

const ProjectCard = ({ image, name, url }) => {

    const projectCardVariants = {
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

        <AnimatePresence exitBeforeEnter>
            <motion.div className="col-sm-12 col-md-6 col-lg-4 mt-2"
                variants={projectCardVariants}
                initial='initial'
                animate='visible'
                exit='exit'>
                <figure className="project_wrapper">
                    <a href={url}>
                        <img src={image} alt="project_image" className='project_image' />
                    </a>
                    <div className="project_name mt-2">{name}</div>
                </figure>
            </motion.div>
        </AnimatePresence>

    )
}
export default ProjectCard;