import React from 'react';
import '../changuito.css'
import Articulo from './Articulo';
import Button from 'react-bootstrap/Button';
const Changuito = ({changuito, agregarProducto, noMostrar, setActivo}) => {
    return ( 
        <>
            {console.log(noMostrar)}
            <div className={`changuito  ${noMostrar?'': 'invisible'}`}>
                <h3>Carrito De Compras</h3>
                {
                    changuito.map(p => (
                        <Articulo
                        
                        key={p.id}
                        producto={p}
                        changuito={changuito}
                        agregarProducto={agregarProducto}

                        />
                    ))
                    
                }
                <Button className='botonChanguito' variant="dark" onClick={() => setActivo(!noMostrar)}>salir</Button>
            </div>
        </>
     );
}
 
export default Changuito;