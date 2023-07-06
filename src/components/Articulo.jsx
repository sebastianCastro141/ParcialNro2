import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../articulo.css' ;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
 const Articulo = ({todosLosProductos, producto, cambiarLista, changuito, agregarProducto}) => {
    
    // Extraer los valores de producto
    const {id, title, price,description, image} = producto;
    // Seleccionar Articulo
    const seleccionarArticulo = (id) => {
        
        //console.log("seleccionado")
        const producto = todosLosProductos.filter(
            p => p.id === id 
        )[0];
        agregarProducto([...changuito, producto]);
        console.log(changuito);
    }
    const eliminarProducto = (id) => {
        const productos = changuito.filter(producto => producto.id !== id);
        agregarProducto(productos)
    }
    
    return ( 
        <>
            {todosLosProductos
            ?
            <div>
                <Card className='articuloMostrador' style={{ width: '18rem' }}>
                    <Card.Img className='imagenes' src = {image} />
                    
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            ${price}
                        </Card.Text>
                        {

                            <Button variant="primary" onClick={() => seleccionarArticulo(id)} >Comprar</Button>
                        }
                        
                    </Card.Body>
                </Card>
            </div>    

                
            :
            <div className='articuloEnChanguito'>
                <Card.Title>{title}</Card.Title>
                <Card.Text>${price} </Card.Text>
                <div ><Button variant="danger" onClick={() => eliminarProducto(id)} >Eliminar</Button></div>
            </div>
                
           
 }
        </>
     );
 }
  
 export default Articulo;