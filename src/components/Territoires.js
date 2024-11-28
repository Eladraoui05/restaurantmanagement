import './Territoires.css';
import parc1 from '../assets/parc1.jpg';
import parc2 from '../assets/parc2.jpg';
import parc3 from '../assets/parc3.jpg';
const Territoires = () => {
    return (
        <div className="container">
            <div className='contactUs'>
            <div className='titleContact'>
            <h1>Qui nous sommes</h1>
            <div className='rightContent'>
                <h5>
                Nous proposons des expériences de chasse uniques<br/> et responsables, 
                guidées par le respect, l’éthique et la sécurité, <br/>
                grâce à une équipe experte et passionnée.
                </h5>
                <button className='contactButton'>Contactez-nous</button>
            </div>
            </div>


                
                    <br/><br/><br/>
                
            </div>
        <h2 className="title">Nos territoires</h2>
        <p className="subtitle">Des espaces de qualité... Pour côtoyer la nature</p>
        <div className="images">
            <img src={parc1} alt="Parc 1" className="image-left" />
            <img src={parc2} alt="Parc 2" className="image-center" />
            <img src={parc3} alt="Parc 3" className="image-right" />
        </div>
        </div>
    );
    };

export default Territoires;
