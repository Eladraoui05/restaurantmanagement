import React, { useEffect, useState } from 'react';
import './footer.css';

function Footer() {
  const [year, setYear] = useState('');

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>VISITEZ-NOUS</h3>
          <p>
            La Casa Restaurant<br />
            Sbata – Casablanca<br />
            Tél: +212 5 22 20 23 84<br />
            reservation@lacasa.ma
          </p>
        </div>

        <div className="footer-section">
          <h3>HORAIRES</h3>
          <p>
            Lundi – Dimanche<br />
            09:00 am – 11:00 pm
          </p>
        </div>

        <div className="footer-section newsletter">
          <h3>NEWSLETTER</h3>
          <p>
            Restez au courant de nos dernières nouvelles, recevez des offres exclusives, et plus encore.
          </p>
          <input type="email" placeholder="Entrez votre adresse e-mail" />
          <button>S'ABONNER →</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} La Casa Restaurant. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
