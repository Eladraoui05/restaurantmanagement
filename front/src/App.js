import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import SignUpForm from './components/Authentification/SignUpForm';
import SignInForm from './components/Authentification/SignInForm';
import Dashboard from './components/Dashboard/Dashboard';
import FormBook from './pages/FormBook/FormBook';

function App() {
  return (
    <div id='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/booktable' element={<FormBook/>}/>
        <Route path='/signup' element={<SignUpForm />} />
        <Route path='/signin' element={<SignInForm />} />
        <Route path='/dashboard' element={<Dashboard />} /> {/* Route vers le Dashboard */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
