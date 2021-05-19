import React from 'react';
import Images from '../Images'
import { motion } from 'framer-motion';
import './ImageGrid.css';

const ImageGrid = ({ setSelectedImg }) => {
  

  return (
    <div className="img-grid">
      {Images.map(Img => (
        <motion.div className="img-wrap" 
          layout
          whileHover={{ opacity: 1 }}s
          onClick={() => setSelectedImg(Img.img)}
        >
          <motion.img className='image-grid-img' src={Img.img} alt="uploaded pic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default ImageGrid;