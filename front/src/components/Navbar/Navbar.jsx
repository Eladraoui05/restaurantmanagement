// import React from 'react';
// import { Navbar, Container, NavDropdown } from 'react-bootstrap'; // Nav,Badge
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUtensils } from '@fortawesome/free-solid-svg-icons';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import WidgetsIcon from '@mui/icons-material/Widgets';
// import HomeIcon from '@mui/icons-material/Home';
// import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
// import TocIcon from '@mui/icons-material/Toc';
// import BookOnlineIcon from '@mui/icons-material/BookOnline';
// import './Navbar.css';

// export default function NavBar() {
//   return (
//     <Navbar expand="lg" className="fixed-top bg-light shadow">
//       <Container>
//         {/* Logo et nom du site */}
//         <Navbar.Brand>
//           <Link to="/" className="navbar-brand text-success d-flex align-items-center">
//             <FontAwesomeIcon icon={faUtensils} size="xl" className="logo-icon" />
//             <span className="ms-3 lh-1 fw-semibold">
//               React
//               <br />
//               Restaurant
//             </span>
//           </Link>
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           {/* Icônes et menu déroulant */}
//           <div className="d-flex align-items-center ms-auto">
//             {/* Icône pour les commandes */}
//             <Link to="/orders" className="icon-link">
//               <ShoppingCartIcon
//                 className="black-icon icon-hover"
//                 style={{ backgroundColor: 'transparent', color: 'black' }}
//               />
//             </Link>

//             {/* Menu déroulant Widgets */}
//             <NavDropdown
//               title={<WidgetsIcon className="black-icon icon-hover" />}
//               id="basic-nav-dropdown"
//               align="end"
//               menuVariant="light"
//             >
//               <NavDropdown.Item as={Link} to="/">
//                 <HomeIcon className="me-2 black-icon" /> Home
//               </NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/menu">
//                 <RestaurantMenuIcon className="me-2 black-icon" /> Menu
//               </NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/about">
//                 <TocIcon className="me-2 black-icon" /> About
//               </NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/contact">
//                 <BookOnlineIcon className="me-2 black-icon" /> Contact
//               </NavDropdown.Item>
//             </NavDropdown>
            
//           </div>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Navbarr() {
  return (
    <Navbar expand='lg' className='fixed-top bg-body-tertiary shadow'>
      <Container>
        <Navbar.Brand>
          <Link to='/' className='navbar-brand text-dark d-flex align-items-center'>
            <img 
              src='https://cdn.dribbble.com/users/2837068/screenshots/18272901/media/2628be14a7f547d5987ebbacb940b3c2.jpg' 
              alt='Restaurant Logo' 
              style={{ width: '40px', height: '40px', borderRadius: '50%' }} 
            />
            <span className='ms-3 lh-1 fw-semibold' style={{ color: '#d4af37' }}>
              La Casa
              <br />
              Restaurant
            </span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto justify-content-center w-100'>
            <Link to='/' className='nav-link text-uppercase text-dark text-center' style={{ color: '#d4af37' }}>Home</Link>
            <Link to='/menu' className='nav-link text-uppercase text-dark text-center' style={{ color: '#d4af37' }}>Menu</Link>
            <Link to='/about' className='nav-link text-uppercase text-dark text-center' style={{ color: '#d4af37' }}>About</Link>
            <Link to='/contact' className='nav-link text-uppercase text-dark text-center' style={{ color: '#d4af37' }}>Contact</Link>
          </Nav>
          <div className="d-flex gap-2">
            <Link to='/signup'>
              <Button variant="outline-dark" className="text-uppercase" style={{ borderColor: '#d4af37', color: '#d4af37' }}>
                Signup
              </Button>
            </Link>
            <Link to='/signin'>
              <Button variant="dark" className="text-uppercase" style={{ backgroundColor: '#d4af37', borderColor: '#d4af37' }}>
                Signin
              </Button>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;


