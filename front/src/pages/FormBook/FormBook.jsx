import React from 'react';
import { useLocation } from 'react-router-dom';
import './FormBook.css';
import { motion } from 'framer-motion';
import ContactInfo from '../../components/FormBook/ContactInfo/ContactInfo';
import ContactForm from '../../components/FormBook/ContactForm/ContactForm';
import Reviews from '../../components/Reviews/Reviews';

function Contact() {
  const location = useLocation(); // Access location state
  const { cart = [], total = 0 } = location.state || {}; // Destructure cart and total

  return (
    <div className='contact-page' id='contact-page'>
      <header className='height-50 mt-5'>
        <motion.div 
          className="container h-100 d-flex align-items-center justify-content-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-light'>Reserver votre Table</h1>
        </motion.div>
      </header>

      <div className="container my-5">
        
        <h2>Revu de la commande</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.title} - {item.quantity} x ${item.price}
            </li>
          ))}
        </ul>
        <h3>Total: {total.toFixed(2)} MAD</h3>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <ContactInfo />
          </div>

          
          <div className="col-lg-6 d-flex justify-content-center mt-5 mt-lg-0">
            
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="bg-dark text-light py-5">
        <Reviews />
      </div>
    </div>
  );
}

export default Contact;
