import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const BotonesCat = ({nombre,consultarAPIproductosDeUnaCategoria}) => {
    return ( 
        <Button variant="dark" onClick={() => consultarAPIproductosDeUnaCategoria(nombre)} >{nombre}</Button>
     );
}
 
export default BotonesCat;