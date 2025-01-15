import React from 'react';
import './MenuSection.css';
import { motion } from 'framer-motion';
import { menuItems } from '../../utils/food';
import MenuBtn from '../MenuBtn/MenuBtn';

function MenuSection() {
  // Filtrer les catégories
  const mains = menuItems.filter((item) => item.category === 'menu');
  const drinks = menuItems.filter((item) => item.category === 'limonade'); // Supposons que 'limonade' représente les boissons

  return (
    <div className="menu-section py-5 text-light shadow">
      <div className="container d-flex flex-column align-items-center">
        <div className="row mb-4 mb-lg-5 w-100">
          <motion.div
            className="col-lg-6 d-flex flex-column align-items-center mb-4 mb-lg-0"
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="fs-2 mb-4 fw-semibold text-uppercase">Plat de resistance</h3>
            <ul className="px-0">
              {mains.map((main) => (
                <li key={main.id} className="d-flex justify-content-between">
                  <p className="fs-4 me-5 text-capitalize fw-semibold">{main.title}</p>
                  <p className="fs-4 text-success">${main.price}</p>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="col-lg-6 d-flex flex-column align-items-center mb-4 mb-lg-0"
            initial={{ opacity: 0, x: 350 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="fs-2 mb-4 fw-semibold text-uppercase">Limonade</h3>
            <ul className="px-0">
              {drinks.map((drink) => (
                <li key={drink.id} className="d-flex justify-content-between">
                  <p className="fs-4 me-5 text-capitalize fw-semibold">{drink.title}</p>
                  <p className="fs-4 text-success">{drink.price} MAD</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <MenuBtn />
        </motion.div>
      </div>
    </div>
  );
}

export default MenuSection;
