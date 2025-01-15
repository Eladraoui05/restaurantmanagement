import React from 'react';
import './Header.css';
import Carousel from 'react-bootstrap/Carousel';
import MenuBtn from '../MenuBtn/MenuBtn';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        <Carousel className='carousel-fade mt-5 mt-sm-0'>
            <Carousel.Item className='carousel-item1 vh-100'>
                <Carousel.Caption className='h-100'>
                    <div className="row h-100">
                        <div className='col-xl-6 d-flex flex-column align-items-center align-items-md-start justify-content-center'>
                            <h2 className='text-capitalize fw-bold fs-1 text-center text-md-start'>Bienvenue</h2>
                            <h1 className='text-capitalize fw-bold text-center text-md-start'>Restaurant La Casa</h1>
                            <p className='mb-4 text-center text-md-start'>La cuisine marocaine est une symphonie de saveurs, une mélodie d’épices<br/> et un enchantement pour les sens.</p>
                            <div className='d-flex flex-column flex-sm-row'>
                                <MenuBtn />
                                <Link to='/contact'>
                                    <button type='button' className='btn btn-outline-light btn-lg rounded-0 text-capitalize mx-2 shadow'>Contactez-nous</button>
                                </Link>
                            </div>
                        </div>
                        <div className='col-xl-6 d-none d-xl-block'></div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-item2 vh-100'>
                <Carousel.Caption className='h-100'>
                    <div className="row h-100">
                        <div className='col-xl-6 d-flex flex-column align-items-center align-items-md-start justify-content-center'>
                            <h2 className='text-capitalize fw-bold fs-1 text-center text-md-start'>Bienvenue</h2>
                            <h1 className='text-capitalize fw-bold text-center text-md-start'>Restaurant La Casa</h1>
                            <p className='mb-4 text-center text-md-start'>La cuisine marocaine est une symphonie de saveurs, une mélodie d’épices<br/> et un enchantement pour les sens.</p>
                            <div className='d-flex flex-column flex-sm-row'>
                                <MenuBtn />
                                <Link to='/contact'>
                                    <button type='button' className='btn btn-outline-light btn-lg rounded-0 text-capitalize mx-2 shadow'>Contactez-nous</button>
                                </Link>
                            </div>
                        </div>
                        <div className='col-xl-6 d-none d-xl-block'></div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-item3 vh-100'>
                <Carousel.Caption className='h-100'>
                    <div className="row h-100">
                        <div className='col-xl-6 d-flex flex-column align-items-center align-items-md-start justify-content-center'>
                            <h2 className='text-capitalize fw-bold fs-1 text-center text-md-start'>Bienvenue</h2>
                            <h1 className='text-capitalize fw-bold text-center text-md-start'>Restaurant La Casa</h1>
                            <p className='mb-4 text-center text-md-start'>La cuisine marocaine est une symphonie de saveurs, une mélodie d’épices<br/> et un enchantement pour les sens.</p>
                            <div className='d-flex flex-column flex-sm-row'>
                                <MenuBtn />
                                <Link to='/contact'>
                                    <button type='button' className='btn btn-outline-light btn-lg rounded-0 text-capitalize mx-2 shadow'>Contactez-nous</button>
                                </Link>
                            </div>
                        </div>
                        <div className='col-xl-6 d-none d-xl-block'></div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </header>
  )
}

export default Header;
