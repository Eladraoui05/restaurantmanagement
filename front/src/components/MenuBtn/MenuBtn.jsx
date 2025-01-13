import React from 'react';
import { Link } from 'react-router-dom';

function MenuBtn() {
  return (
    <Link to='/menu'>
      <button 
        type='button' 
        className='btn btn-lg rounded-0 text-capitalize mx-2 mb-3 mb-sm-0' 
        style={{ 
          backgroundColor: '#c19a2f', 
          color: '#fff', 
          border: 'none' 
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d4af37'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#c19a2f'}
      >
        Our full menu
      </button>
    </Link>
  );
}

export default MenuBtn;
