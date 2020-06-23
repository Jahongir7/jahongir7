import React from 'react';
import { motion } from 'framer-motion'
//import { Link } from 'react-router-dom'

//sfc: stateless functional comp (shortcut)
import tie from '../images/tie.svg'
import instagram from '../images/instagram.svg'
import facebook from '../images/facebook.svg'
import max from '../images/max.jpg'
import pin from '../images/pin.svg'
import github from '../images/github.svg'
import resume from '../resume.pdf'
const SideBar = () => {
    var sidebarVariants = {
        initial: {
            x: '-10vw',
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: { delay: 0.3, duration: 0.5, type: 'spring' }
        }
    }
    const handleSentEmail = () => window.open('mailto:code.sumax@gmail.com');
    // const changeMode = () => {
    //     document.querySelector('.')
    // }

    return (

        <motion.div className="sideBar_custom"
            variants={sidebarVariants}
            initial='initial'
            animate='visible'
        >
            <img src={max} alt="avatar" className="rounded-circle image_custom" />
            <h3 className='name'><span>Sumit</span> Dey</h3>
            <div className="title bg-gray side_item">web developer</div>
            <a href={resume} download="resume.pdf">
                <div className="cv side_item"><img src={tie} alt="resume" className='icon_small' /> download resume</div></a>
            <figure className='social_icons'>
                <a href="https://www.facebook.com/profile.php?id=100015327075818"><img src={facebook} alt="facebook" className='icon_small social_icon' /></a>
                <a href="https://www.instagram.com/_sumax__/"><img src={instagram} alt="instagram" className='icon_small social_icon' /></a>
            </figure>
            <div className="contact">
                <div className="location side_item"><img src={pin} alt="pin" className='icon_small  mr-1' />  Kolkata</div>
                <a href="https://github.com/Dey-Sumit/"><div className="github side_item"> <img src={github} alt="git" className='icon_small social_icon mr-1' />  github </div></a>
                <div className="email_id side_item"> code.sumax@gmail.com </div>
                <div className="phone side_item"> 8514961767 / 8640960371 </div>

            </div>

            <div className="email side_item mt-6" onClick={handleSentEmail}> email me </div>
            {/* <div className="mode"><button className='btn' onClick={changeMode}>mode</button></div> */}
        </motion.div >


    )
}

export default SideBar;