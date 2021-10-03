import React from 'react';
import Maps from '../View/components/Maps';
// import { Container, Row, Col } from 'react-bootstrap';
import './index.css'

const Landing = () => (
  <React.Fragment>
  <header className="masthead text-white text-center">
    <div className="overlay"></div>
    <div className="container">
      <div className="row">
        <div className="col-xl-9 mx-auto">
          <h1 className="mb-5">With Mapper, Find Your Rental Vehicle Easier!</h1>
        </div>
      </div>
    </div>
  </header>
  <Maps />
  </React.Fragment>
);


export default Landing;