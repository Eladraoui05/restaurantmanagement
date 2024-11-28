    import React from "react";
    import "./Newsletter.css";

    function Newsletter() {
    return (
        <div className="newsletter-section">
        <h2>Abonnez-vous à la newsletter</h2>
        <div className="newsletter-form">
            <input type="email" placeholder="Votre E-mail" />
            <label>
            <input type="checkbox" />
            J’accepte aussi les offres promotionnelles
            </label>
            <button>S'inscrire</button>
        </div>
        </div>
    );
    }

    export default Newsletter;
