import React from 'react';
import { Button } from 'react-bootstrap';

export default () => {
  return (
    <main>
        <div className="home-page-content">
          <h1 className="display-3">
            <strong>Lambda Psi Rho</strong>
          </h1>
          <p>
            <strong>Founding Chapter at The University of Nevada</strong>
          </p>
          <div className="button-wrapper">
            <Button id="about-us-button" href={'about'}>
              About Us
            </Button>
          </div>
        </div>
    </main>
  );
};
