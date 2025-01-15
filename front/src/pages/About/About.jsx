import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import AboutChef1Img from '../../utils/images/about-chef1-img.jpg';
import AboutChef2Img from '../../utils/images/about-chef2-img.jpg';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import Reviews from '../../components/Reviews/Reviews';

function About() {
  return (
    <div className='about-page'>
      <header className='height-50 mt-5'>
        <motion.div 
          className="container h-100 d-flex align-items-center justify-content-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-light'>À propos</h1>
        </motion.div>
      </header>

      <div className="container my-5">
        <p>Notre établissement est dédié à offrir une expérience culinaire exceptionnelle, en mettant l'accent sur des plats authentiques et une présentation soignée. Depuis sa création, nous nous efforçons de ravir les papilles de nos clients tout en maintenant un service de qualité. Nos chefs sont passionnés par leur art et utilisent des ingrédients frais pour créer des plats qui allient tradition et innovation.</p>
        <p>Nous croyons fermement que chaque repas doit être une expérience unique, et c'est pourquoi nous mettons un point d'honneur à personnaliser notre offre en fonction des préférences et des besoins de chaque client. Que vous soyez un amateur de cuisine raffinée ou un passionné de saveurs locales, nous avons quelque chose pour satisfaire toutes les envies.</p>

        <div className="row">
          <motion.div 
            className="col-lg-6"
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={AboutChef1Img} className='img-fluid my-4' alt="Chef 1" />
          </motion.div>
          <motion.div 
            className="col-lg-6"
            initial={{ opacity: 0, x: 350 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={AboutChef2Img} className='img-fluid my-4' alt="Chef 2" />
          </motion.div>
        </div>

        <p>Nos chefs sont formés dans les meilleures écoles culinaires et ont une vaste expérience dans la préparation de plats gastronomiques. Leur objectif est de toujours repousser les limites de la créativité tout en respectant les traditions culinaires qui font la richesse de notre cuisine. Nous sélectionnons soigneusement nos fournisseurs pour garantir des produits frais et de qualité, provenant des meilleurs producteurs locaux.</p>
      </div>

      <div className="bg-dark text-light py-1">
        <ImageGallery />
      </div>

      <div className="my-5">
        <Reviews />
      </div>
    </div>
  )
}

export default About;
