import React, { useState, useEffect, useCallback } from "react";
import "./BannerCarousel.css";
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpeg';
import banner4 from '../assets/banner4.jpg';
import banner5 from '../assets/banner5.jpg';

const BannerCarousel = () => {
    // Images du banner
    const banners = [
        banner1,
        banner2,
        banner3,
        banner4,
        banner5,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Fonction pour passer à l'image suivante, mémorisée avec useCallback
    const nextBanner = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === banners.length - 1 ? 0 : prevIndex + 1
        );
    }, [banners.length]); // Dépendance uniquement sur la longueur du tableau

    // Fonction pour revenir à l'image précédente, mémorisée avec useCallback
    const prevBanner = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? banners.length - 1 : prevIndex - 1
        );
    }, [banners.length]); // Dépendance uniquement sur la longueur du tableau

    // Défilement automatique
    useEffect(() => {
        const interval = setInterval(() => {
            nextBanner();
        }, 5000); // Change d'image toutes les 5 secondes

        return () => clearInterval(interval);
    }, [nextBanner]); // Ajoutez nextBanner comme dépendance

    return (
        <div className="carousel">
            <button className="carousel-btn prev" onClick={prevBanner}>
                &#8249;
            </button>
            <div
                className="carousel-images"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {banners.map((banner, index) => (
                    <div key={index} className="carousel-image">
                        <img src={banner} alt={`Banner ${index + 1}`} />
                    </div>
                ))}
            </div>
            <button className="carousel-btn next" onClick={nextBanner}>
                &#8250;
            </button>

            {/* Texte ajouté sur le carrousel */}
            <div className="carousel-text">
                Discover Unforgettable Experience at Spectacular Events
            </div>

            <div className="carousel-dots">
                {banners.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default BannerCarousel;
