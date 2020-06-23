import React from 'react';
import tweetme from '../projects_images/tweetme.PNG'
import chatapp from '../projects_images/chatapp.JPG'
import hardware_store from '../projects_images/hardware_store.JPG'
import suprateem_portfolio from '../projects_images/suprateem_portfolio.JPG'
import new_year from '../projects_images/new_year.JPG'
import color_classification from '../projects_images/color_classification.JPG'


import { motion } from 'framer-motion'

const ProjectCard = ({ image, name, url }) => {
    // return (
    //     <a href="/">
    //         <div className="project_image_div">
    //             <img src={image} alt="" className='project_image' />
    //         </div>
    //         <div className="project_name">{name}</div>
    //     </a>
    // );
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 mt-2">
            <figure className="project_wrapper">
                <a href={url}>
                    <img src={image} alt="html email paypal" className='project_image' />
                </a>
                <div className="project_name mt-2">{name}</div>
            </figure>
        </div>
    )
}




const Projects = () => {
    const projectsVariants = {
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

        <motion.div className="container projects_section"
            variants={projectsVariants}
            initial='initial'
            animate='visible'
            exit='exit'

        >
            <div className="projects_section_header d-flex">
                <div className='project_header_child'>All</div>
                <div className='project_header_child'>Django</div>
                <div className='project_header_child'>React js</div>
                <div className='project_header_child'>Processing</div>
            </div>
            <div className="row">
                <ProjectCard image={tweetme} name="coding" />
                <ProjectCard image={chatapp} name="coding" />
                <ProjectCard image={hardware_store} name="color" />
                <ProjectCard image={suprateem_portfolio} name="color" />
                <ProjectCard image={new_year} name="Bengali New Year" url='https://dey-sumit.github.io/NewYear/' />
                <ProjectCard image={color_classification} name="color_classification" />
            </div>
        </motion.div>
    );
}

export default Projects;