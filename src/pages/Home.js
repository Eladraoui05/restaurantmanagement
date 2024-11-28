import BannerCarousel from '../components/BannerCarousel';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Territoires from '../components/Territoires';

function Home() { 
    return(
        <>
        <Navbar/>
        <BannerCarousel/>
        <Territoires/>
        <Newsletter/>
        <Footer/>
        </>
    )
    }
export default Home;