import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarked, faHome } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainNavbar: React.FC = () => (
  <nav className="navbar navbar-light bg-light static-top">
    <div className="container">
      <Link to="/" className="text-secondary font-weight-bold navbar-brand"> <FontAwesomeIcon icon={faMapMarked} /> MAPPER </Link>
    <Nav className="ml-auto">
        <Link to="/" className="text-secondary nav-link">
          <FontAwesomeIcon icon={faHome} /> HOME
        </Link>
      </Nav>
    </div>
  </nav>
)


export default MainNavbar