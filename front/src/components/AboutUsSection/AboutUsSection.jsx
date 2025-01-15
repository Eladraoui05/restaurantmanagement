import React from 'react';
import './AboutUsSection.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AboutSectionImg from '../../utils/images/about-section-img.jpg';

function AboutUsSection() {
  return (
    <div className="container my-5">
        <div className="flex-column-reverse flex-lg-row row">
            <motion.div 
                className="col-lg-6 d-flex justify-content-center"
                initial={{ opacity: 0, x: -300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <img src={AboutSectionImg} className='about-section-img img-fluid mt-5 mt-lg-0 shadow' alt="about us" />
            </motion.div>
            <motion.div 
                className="col-lg-6 d-flex flex-column justify-content-center"
                initial={{ opacity: 0, x: 350 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <h2 className='text-uppercase fw-bold fs-1 mb-4 mb-lg-5'>À propos de nous</h2>
                <p>Nous sommes une équipe passionnée, dédiée à offrir une expérience exceptionnelle à nos clients. Depuis notre création, nous avons toujours mis un accent particulier sur l'innovation, la qualité et la satisfaction client. Nous croyons que chaque détail compte, et c'est pourquoi nous nous engageons à fournir des services et produits qui répondent aux plus hautes attentes.</p>
                <p className='mb-4 mb-lg-5'>Notre équipe est composée d'experts dans leur domaine, chacun apportant son savoir-faire et son expérience pour garantir que chaque projet ou service que nous offrons soit un véritable succès. Nous travaillons avec des partenaires de confiance pour assurer la qualité et la durabilité de nos produits. Nous cherchons constamment à nous améliorer et à innover pour mieux servir nos clients.</p>
                <Link to='/about'>
                    <button type='button' className='btn btn-dark btn-lg rounded-0 text-capitalize shadow'>En savoir plus sur nous</button>
                </Link>
            </motion.div>
        </div>
    </div>
  )
}

export default AboutUsSection;
