import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../styles';

const Header = () => {
  const [showHeader, setHeader] = useState(false);
  return (
    <PageHeader>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <img src='' alt='Logo' decoding='async' loading='lazy' />
          </Link>

          <span role='button' className='navbar-burger' 
          aria-label='menu' aria-expanded='false' data-target='main-navbar'>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </span>
        </div>

        <div id='main-navbar' className='navbar-menu'>
          <div className='navbar-start'>
            <Link to='/' className='navbar-item'>
              Home
            </Link>
          </div>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons'>
                <Link to='/signup' className='button is-primary'>
                  <strong>Sign up</strong>
                </Link>
                <Link to='/login' className='button is-primary is-light'>
                  Login
                </Link>
                <button className='button is-danger is-light'>
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>  
    </PageHeader>
  )
}

export default Header;
