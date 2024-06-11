import './style.css';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import { slide, scale } from '../../anim';
import Magnetic from '../../Magnetic/Magnetic'

export default function Index({data, isActive, setSelectedIndicator}) {
    const { title, href, index} = data;
  
    return (
      <motion.div className="link" onMouseEnter={() => {setSelectedIndicator(href)}} custom={index}  variants={slide} initial="initial" animate="enter" exit="exit">
        <motion.div variants={scale} animate={isActive ? "open" : "closed"}  className="indicator"></motion.div>
        <Magnetic>
        <Link className='text-[50px]' to={href}>{title}</Link>
        </Magnetic>
      </motion.div>
    )
  }