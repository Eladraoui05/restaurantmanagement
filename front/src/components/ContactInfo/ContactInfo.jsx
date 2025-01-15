import React from 'react';
import { motion } from 'framer-motion';

function ContactInfo() {
  return (
    <motion.div 
      className='d-flex flex-column align-items-center'
      initial={{ opacity: 0, x: -300 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
        <h2 className='fs-1 mb-3 text-uppercase fw-bold'>Où nous trouver</h2>
        <p className='mb-5'>Sbata 04, Casablanca</p>
        <h3 className='text-capitalize'>Heures d'ouverture</h3>
        <p className="m-0">Lun - Ven: 09:00 - 22:00</p>
        <p>Sam - Dim: 10:00 - 00:00</p>
    </motion.div>
  )
}

export default ContactInfo;
