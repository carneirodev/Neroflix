import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assests/LogoNeroFlix.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={logo} alt="NeroFlix Logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo video
      </Button>
    </nav>
  );
}

export default Menu;
