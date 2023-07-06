import React, { Fragment, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import {FcShop} from "react-icons/fc";
const Header = ({titulo, noMostrar, setActivo}) => {

    
    return ( 
    <>
       <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            {titulo}
          </Navbar.Brand>
          <Button variant="dark" onClick={() => setActivo(!noMostrar)}>Ver Carrito</Button>
        </Container>
      </Navbar>
      
    </>
    
  );
}
 
export default Header;