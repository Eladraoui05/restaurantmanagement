import React, { useState, useEffect } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from '../../components/Cards/Card.js';
import image1 from '../../utils/images/dinner-img.jpg'

const menuItems = [
  {
    id: 1,
    category: "menu",
    image: "https://imgs.search.brave.com/YVnIpT061KkZJZVbS16q4e_fTPYHQpPS0s2hj3pjzrI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzkzLzgwLzM4/LzM2MF9GXzI5Mzgw/Mzg1OV84bWJ1bVJz/b2FNdEszcVA1andD/dnNxUTdwdU8zamNq/aS5qcGc",
    title: "Couscous Royal",
    description: "Un plat traditionnel avec de la semoule cuite à la vapeur, des légumes et un mélange de viandes.",
    price: 18,
    buttonText: "Commander",
  },
  {
    id: 2,
    category: "menu",
    image: "https://imgs.search.brave.com/VKDhtTC0UK2v-tFnw3py0xRsDNfjTT7L6xxHmdcphsY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuNzUwZy5jb20v/aW1hZ2VzLzY0MC00/NDAvNGJkMDM1ODc3/MDZmOWZhZGNjYzFi/Yzc2YzYyYTg0NzEv/dGFqaW5lLWQtYWdu/ZWF1LmpwZw",
    title: "Tagine d'Agneau",
    description: "Agneau mijoté dans une sauce savoureuse avec des fruits secs et des épices.",
    price: 20,
    buttonText: "Commander",
  },
  {
    id: 3,
    category: "menu",
    image: "https://imgs.search.brave.com/O9dPMi-jAUMbdFHHbPKb4p_uFRC_MolqEC1bieRY1MQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wYXRp/c3NlcmllZ2F0by5t/YS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/My8wOC9yZmlzc2Et/bWFyb2NhaW5lLndl/YnA",
    title: "refissa",
    description: "Un plat de riz parfumé avec du poulet mariné, des épices et du safran.",
    price: 16,
    buttonText: "Commander",
  },
  {
    id: 4,
    category: "menu",
    image: "https://imgs.search.brave.com/n7qqP9AA551f7T53bkekT4DpgFpgsnctxUwD_YuTr-Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWct/My5qb3VybmFsZGVz/ZmVtbWVzLmZyL1pH/MHZCTnhKX1pWNlR4/RDdxQ05oREFuZmFv/bz0vNzUweDUwMC9i/MmQyMzdjYWJlZGM0/ODk5ODc4ZDhjMDMy/N2QyYmYzMS9jY21j/bXMtamRmLzM5ODA4/NjY3LmpwZw",
    title: "Poulet Grillé",
    description: "Un poulet grillé succulent servi avec des légumes vapeur.",
    price: 14,
    buttonText: "Commander",
  },
  {
    id: 5,
    category: "menu",
    image: "https://imgs.search.brave.com/zUG4SeLrRijxW32ONLMXPTaIU1NEuJNM_lWcaGTTztc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/aGVsbG9mcmVzaC5j/b20vZl9hdXRvLGZs/X2xvc3N5LHFfYXV0/byx3XzEyMDAvaGVs/bG9mcmVzaF9zMy9p/bWFnZS9IRjIwMDcw/Ml9SMDNfVzMyX05M/X1IyNjAwLTFfTUJf/TWFpbl9sb3ctMGZi/ZmM5ZmIuanBn",
    title: "Paella aux Légumes",
    description: "Un plat espagnol à base de riz avec une variété de légumes frais.",
    price: 15,
    buttonText: "Commander",
  },
  {
    id: 6,
    category: "pizza",
    image: "https://imgs.search.brave.com/APAz5n_MKX6MdOLMVDB26Rw8VoqeQFZn43-1yTYQzdM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjA0/ODI5MjI0L3Bob3Rv/L21hcmdoZXJpdGEt/cGl6emEuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUFMRF9o/ZEJwX2xubEZRZnpP/cC1feWpQdGc1U2Jx/NVAxaEhHbTMwdDNI/WWM9",
    title: "Pizza Margherita",
    description: "Pizza italienne classique avec sauce tomate, mozzarella et basilic frais.",
    price: 10,
    buttonText: "Commander",
  },
  {
    id: 7,
    category: "pizza",
    image: "https://imgs.search.brave.com/n08kRTb4RmswWPtWHSHEYuPvDRHEqFry2sG4RgUv2os/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzE2LzgyLzU0/LzM2MF9GXzkxNjgy/NTQzNl9ScE5xc0VG/YnV5MlpsMW9lZGFX/UlRxTk9Pd29zYjgz/eC5qcGc",
    title: "Pizza Pepperoni",
    description: "Pizza garnie de pepperoni et de fromage mozzarella fondant.",
    price: 12,
    buttonText: "Commander",
  },
  {
    id: 8,
    category: "pizza",
    image: "https://imgs.search.brave.com/pSaVEtlhnCabrKH3cVw_bmaiau9NNW9kc6g4PTm0tvo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ndWFy/ZGluaS5jb20vbWVk/aWEvem9vL2ltYWdl/cy9waXp6YV9zZXRf/MjAyMV9mdWxsX2Ix/OTBkYTUyMTU4MGQy/NDcyNmYzMzkyMGEz/MmI5YzEyLmpwZw",
    title: "Pizza Végétarienne",
    description: "Un mélange délicieux de légumes de saison, mozzarella et sauce tomate.",
    price: 11,
    buttonText: "Commander",
  },
  {
    id: 9,
    category: "pizza",
    image: "https://imgs.search.brave.com/kVpdcrhm1qlnnYcRz-fEe4OLbIgEj4GEeHbSlWDa9pU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJhdGljby1wcmF0/aXF1ZXMuY29tL2Fw/cC91cGxvYWRzL3Np/dGVzLzIvMjAyMy8w/OC8yMTEyMTYyNi9Q/aXp6YS1wYXRlLWF1/LXBvdWxldC0xLTU1/MHg1NTAuanBn",
    title: "Pizza Poulet BBQ",
    description: "Poulet grillé avec sauce barbecue, oignons rouges et mozzarella.",
    price: 13,
    buttonText: "Commander",
  },
  {
    id: 10,
    category: "pizza",
    image: "https://imgs.search.brave.com/SCeNE9ypvapR0h1A_3tfyqlNiVCpZ5Trpsa1lS1M_eI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jaGVm/Y3Vpc3RvLmNvbS9m/aWxlcy8yMDI0LzA5/L3BpenphLWhhd2Fp/ZW5uZS0xMTQweDc1/Ni5qcGc",
    title: "Pizza Hawaïenne",
    description: "Pizza sucrée et salée avec ananas, jambon et mozzarella.",
    price: 12,
    buttonText: "Commander",
  },
  {
    id: 11,
    category: "burger",
    image: "https://imgs.search.brave.com/Co_RPPq6W-kyUohvq6r9SAAi2x28U0zwey7ZCpj8yZU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE1/OTU0ODcxNy9waG90/by9jaGVlc2VidXJn/ZXIuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXVyUzhPSHFK/TG9FWFVuWTlQUElH/eUVsZ3o2YTZITzc3/VjdLUUdsN3Zra3c9",
    title: "Cheeseburger",
    description: "Un steak juteux garni de fromage fondu, laitue et tomate.",
    price: 12,
    buttonText: "Commander",
  },
  {
    id: 12,
    category: "burger",
    image: "https://imgs.search.brave.com/w1ty01OaODCVm27Nscug6CM1Vt-4_9zSxOwkAo9lq2Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2VyaW91c2VhdHMu/Y29tL3RobWIvTUJK/WlhUUk9JaGlOY241/cHlsY01zd3FncnZv/PS8xNTAweDAvZmls/dGVyczpub191cHNj/YWxlKCk6bWF4X2J5/dGVzKDE1MDAwMCk6/c3RyaXBfaWNjKCkv/X19vcHRfX2Fib3V0/Y29tX19jb2V1c19f/cmVzb3VyY2VzX19j/b250ZW50X21pZ3Jh/dGlvbl9fc2VyaW91/c19lYXRzX19zZXJp/b3VzZWF0cy5jb21f/X3JlY2lwZXNfX2lt/YWdlc19fMjAxM19f/MDdfXzIwMTMwNzIz/LWJhY29uLXdlYXZl/LWZvb2QtbGFiLWJ1/cmdlci1zdGVwLWJ5/LXN0ZXAtMjctNGY0/M2E4MzJhY2IyNDI3/ODlkYmM0MTMzODEw/YTI4MWYuanBn ",
    title: "Burger Bacon",
    description: "Un burger avec bacon croustillant, fromage cheddar et laitue fraîche.",
    price: 14,
    buttonText: "Commander",
  },
  {
    id: 13,
    category: "burger",
    image: "https://imgs.search.brave.com/nm_4x1Zknc8D81OhKyYrMpu3C_TW7o1y7UclPFGxgqc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXNp/emUtZWxsZS5sYWRt/ZWRpYS5mci9yY3Jv/cC82MzgsLGZvcmNl/eC9pbWcvdmFyL3Bs/YWluX3NpdGUvc3Rv/cmFnZS9pbWFnZXMv/ZWxsZS1hLXRhYmxl/L2xlcy1kb3NzaWVy/cy1kZS1sYS1yZWRh/Y3Rpb24vZG9zc2ll/ci1kZS1sYS1yZWRh/Yy9idXJnZXItdmVn/Z2llLzkyODIxNDE1/LTMtZnJlLUZSLzEw/LWJ1cmdlcnMtdmVn/ZXRhcmllbnMtcXVp/LXJlZHVpc2VudC1s/LWVtcHJlaW50ZS1j/YXJib25lLmpwZw",
    title: "Burger Végétarien",
    description: "Un steak végétarien délicieux avec laitue, tomate et avocat.",
    price: 11,
    buttonText: "Commander",
  },
  {
    id: 14,
    category: "burger",
    image: "https://imgs.search.brave.com/tG2wR5nOQNmUoHdm8rsCciLMQo-yUym_XbHgfw7YXoE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50Lmluc3RydWN0/YWJsZXMuY29tL0ZS/MC9XVkNGL0o1OEZU/T0w1L0ZSMFdWQ0ZK/NThGVE9MNS5qcGc_/YXV0bz13ZWJwJmZp/dD1ib3VuZHMmZnJh/bWU9MSZoZWlnaHQ9/MTAyNCZ3aWR0aD0x/MDI0YXV0bz13ZWJw/JmZyYW1lPTEmaGVp/Z2h0PTMwMA",
    title: "Double Cheeseburger",
    description: "Deux steaks, deux couches de fromage, laitue et cornichons.",
    price: 16,
    buttonText: "Commander",
  },
  {
    id: 15,
    category: "burger",
    image: "https://imgs.search.brave.com/WpnzjsgvSNuPEDqx17BJS_y2x0HCpxOiFTFlGXpjcHw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGFzdGVvZmhvbWUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE3LzA5L2V4cHMy/ODgwMF9VRzE0MzM3/N0QxMl8xOF8xYl9S/TVMuanBn",
    title: "Burger BBQ",
    description: "Un burger avec sauce BBQ, rondelles d'oignons croustillantes et fromage cheddar.",
    price: 15,
    buttonText: "Commander",
  },
  {
    id: 16,
    category: "limonade",
    image: "https://imgs.search.brave.com/EnVCm8BQw6Ez84M4FM27K8dNAhfpaT_vqiLfzph65K0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90ZnBq/LXMzLnRyb2lzZm9p/c3BhcmpvdXIuY29t/L2FwcC91cGxvYWRz/LzIwMTgvMDgvMTky/MjExNDIvTGltb25h/ZGVfZXJhYmxlX21l/bnRoZV9MLTcxOHgx/MDI0LmpwZw",
    title: "Limonade Fraîche",
    description: "Boisson rafraîchissante faite avec des citrons pressés frais.",
    price: 5,
    buttonText: "Commander",
  },
  {
    id: 17,
    category: "limonade",
    image: "https://imgs.search.brave.com/nliZhT6ymzWzJosozJbNe0NJbZU2GKP0Zjb8WguhW-U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/Y3Vpc2luZWF6LmNv/bS82NjB4NjYwLzIw/MTkvMDcvMDQvaTE0/Nzg4Ny1saW1vbmFk/ZS1hLWxhLWZyYWlz/ZS5qcGVn",
    title: "Limonade à la Fraise",
    description: "Une limonade classique avec une touche de fraises fraîches.",
    price: 6,
    buttonText: "Commander",
  },
  {
    id: 18,
    category: "limonade",
    image: "https://imgs.search.brave.com/qqeTX6-b_h3SjMdkwg-Sz0N8q67AiE0sVvJ0RRMQbIk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9iZHZj/ZG4uYi1jZG4ubmV0/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzA3L3ZlcnJlLWRl/LWxpbW9uYWRlLW1h/aXNvbi1hLWxhLW1l/bnRoZS03Njh4MTAy/NC5qcGc",
    title: "Limonade à la Menthe",
    description: "Un mélange rafraîchissant de menthe et de citrons pressés.",
    price: 6,
    buttonText: "Commander",
  },
  {
    id: 19,
    category: "limonade",
    image: "https://imgs.search.brave.com/gJ8Is62aPPh0NYjG-bhVMHoA2Q45s_cfYVD4UySWdV4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vZGFzaG9m/aG9uZXkuY2Evd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDYv/TGVtb25hZGUzLmpw/Zz9yZXNpemU9NzAz/LDEwMjQmc3NsPTE",
    title: "Limonade à la Pêche",
    description: "Une limonade fruitée à base de pêches fraîches.",
    price: 6,
    buttonText: "Commander",
  },
  {
    id: 20,
    category: "limonade",
    image: "https://imgs.search.brave.com/21vWmfNFzZWhb-DwvJeZ8AkYq3jDxEyTVBXseEAXrL0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmVjZXR0ZTM2MC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDYvQm9pc3Nv/bi1kZXNhbHRlcmFu/dGUtbG9ycy1kZS1s/YS1jYW5pY3VsZS02/OTZ4NDY0LmpwZy53/ZWJw",
    title: "Limonade au Concombre",
    description: "Une limonade rafraîchissante avec une touche de concombre.",
    price: 6,
    buttonText: "Commander",
  },
  {
    id: 21,
    category: "glace",
    image: "https://imgs.search.brave.com/yEGoGo1pbi537OmoTvOAYJfHwZDTXA-KNvDo0L0BKvY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWNvbGVtZXp6YWx1/bmEuY2Evd3AtY29u/dGVudC91cGxvYWRz/LzIwMTgvMDMvZ2xh/Y2UtY2hvY29sYXQu/anBn",
    title: "Glace au Chocolat",
    description: "Une glace riche et crémeuse au chocolat pour les gourmands.",
    price: 6,
    buttonText: "Commander",
  },
  {
    id: 22,
    category: "glace",
    image: "https://imgs.search.brave.com/YrzJBzb4KZgv4rXV52kx2lIMJ8KJMgMHMs5QGST5HGA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/Z2VyLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9pbWcvYi9SMjl2/WjJ4bC9BVnZYc0Vp/VHJVNGlBQ2VodU4y/MGpXaEtqSlYtWERa/Wlhxa0xYNmRQM1RF/anZiakZsYmRqaWlD/bFR3NGV4anZXNjNV/djdtY1N1YWJZVndq/UnhvUWs4WlM0eXlk/aHR6M25OM0ZiV3Ba/amtEcTg1MURObVVn/MXFIZUZOa3czc0Y5/UnFWbktqc3VFOG5a/R0h0X1FyWVIxMEpu/Tm9LZlBQVmNEODd1/d1pSOWJrbEJSTm1f/S1p6ZFQtTzBaX0ZE/TTFFQmZqQVEvczE2/MDAwLXJ3L2dsYWNl/LXZhbmlsbGUtcmVj/ZXR0ZS5qcGc",
    title: "Glace à la Vanille",
    description: "Une glace classique à la vanille faite avec de véritables gousses de vanille.",
    price: 5,
    buttonText: "Commander",
  },
  {
    id: 23,
    category: "glace",
    image: "https://imgs.search.brave.com/pBtAfeXZn2DLLx0UI_gEmW_oG8gKXE7tm0YGEC-ugbQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuNzUwZy5jb20v/aW1hZ2VzLzY0MC00/NDAvYjM5ZmYwNWNl/YjQ3MTRmMDU1MzBk/YzViMjIzMmRlMmMv/Z2xhY2UtYS1sYS1m/cmFpc2UtbWFpc29u/LmpwZw",
    title: "Glace à la Fraise",
    description: "Une glace douce et crémeuse à la fraise avec de vrais fruits.",
    price: 6,
    buttonText: "Commander",
  },
  {
    id: 24,
    category: "glace",
    image: "https://imgs.search.brave.com/JSi_7WdltIa27R5hBvQRXBaxrcRR_7lO351FoyhFCwI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jYWNo/ZS5tYXJpZWNsYWly/ZS5mci9kYXRhL3Bo/b3RvL3cxMDAwX2Np/LzZjL3JlY2V0dGUt/Z2xhY2UtbWVudGhl/LWNob2NvbGF0LW1h/aXNvbi5qcGc",
    title: "Glace Menthe-Choco",
    description: "Une glace rafraîchissante à la menthe avec des pépites de chocolat croquantes.",
    price: 7,
    buttonText: "Commander",
  },
  {
    id: 25,
    category: "glace",
    image: "https://imgs.search.brave.com/IG4PfK_x0ZwbN_FdxApLjmgabnOsqH_uMsof4ifeLxY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vaHY5c3NtenJ6/L2ltYWdlL2ZldGNo/L2NfZmlsbCxmX2F1/dG8saF80ODgscV9h/dXRvLHdfNjUwL2h0/dHBzOi8vczMtZXUt/d2VzdC0xLmFtYXpv/bmF3cy5jb20vaW1h/Z2VzLWNhLTEtMC0x/LWV1L3JlY2lwZV9w/aG90b3Mvb3JpZ2lu/YWwvMTI5ODU2LzIw/MTYtMDctMDI4Xzgw/MHB4X1BpcmF0YWdl/Q3VsaW5haXJlLmpw/Zw",
    title: "Glace Cookies & Cream",
    description: "Une glace crémeuse à la vanille avec des morceaux de biscuits croustillants.",
    price: 7,
    buttonText: "Commander",
  },
];


function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("menu");
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  // Function to add item to cart
  const addToCart = (item) => {
    console.log("Adding to cart", item); // Debug log to check if the function is called
    const existingItem = cart.find(cartItem => cartItem.id === item.id);

    let updatedCart;
    if (existingItem) {
      updatedCart = cart.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
    } else {
      updatedCart = [...cart, { ...item, quantity: 1 }];
    }

    setCart(updatedCart);
    console.log("Updated Cart:", updatedCart); // Debug log to check the updated cart
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save updated cart to localStorage
  };

  // Filter menu items by selected category
  const filteredItems = menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className='menu-page'>
      <header className='height-50 mt-5'>
        <motion.div
          className='container h-100 d-flex align-items-center justify-content-center'
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-light'>Menu</h1>
        </motion.div>
      </header>

      {/* Category Selector */}
      <div className="category-buttons container my-4 d-flex justify-content-center">
        {["menu", "limonade", "glace", "burger", "pizza"].map((category) => (
          <button
            key={category}
            className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'} mx-2`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Display Filtered Items */}
      <div className="menu-cards container d-flex flex-wrap justify-content-center">
        {filteredItems.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
            buttonText={item.buttonText}
            onClick={() => addToCart(item)} // Add item to cart when clicked
          />
        ))}
      </div>

      {/* Display Cart Link */}
      <motion.div
        className="container my-5 pt-5 d-flex justify-content-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Link to='/cart'>
          <button type='button' className='btn btn-primary btn-lg rounded-0 text-capitalize mx-2 shadow'>
            voir mes achats ({cart.reduce((acc, item) => acc + item.quantity, 0)})
          </button>
        </Link>
      </motion.div>
    </div>
  );
}

export default Menu;
