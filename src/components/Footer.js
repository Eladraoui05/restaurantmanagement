    import React from "react";
    import logo from '../assets/logo.jpeg'
    import "./Footer.css";

    function Footer() {
    return (
        <footer>
        <div className="footer-content">
            <div className="footer-logo">
            <img src={logo} alt="Nature & Chasse Logo" />
            <p>Nature & chasse</p>
            <p>
                Nous proposons des expériences de chasse uniques et responsables,
                guidées par le respect.
            </p>
            </div>
            <div className="footer-links">
            <div>
                <h4>RUBRIQUE</h4>
                <ul>
                <li>Accueil</li>
                <li>Groupes</li>
                <li>Conditions</li>
                <li>Médiathèque</li>
                </ul>
            </div>
            <div>
                <h4>Resources</h4>
                <ul>
                <li>User guides</li>
                <li>Help Center</li>
                <li>Partners</li>
                <li>Taxes</li>
                </ul>
            </div>
            <div>
                <h4>Company</h4>
                <ul>
                <li>About</li>
                <li>Join us</li>
                </ul>
            </div>
            <div>
                <h4>Stay in the loop</h4>
                <p>For product announcements and exclusive insights</p>
                <div className="email-subscription">
                <input type="email" placeholder="Input your email" />
                <button>Subscribe</button>
                </div>
            </div>
            </div>
        </div>
        </footer>
    );
    }

    export default Footer;
