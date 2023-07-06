import { Fragment, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Changuito from './components/Changuito';
import Articulo from './components/Articulo';
import BotonesCat from './components/BotonesCat';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  // Creo la lista donde se van a guardar todos los articulos y otra para las categorias que me devuelve la peticion a la api
  const[todosLosProductos, cambiarLista] = useState([]);
  const[todasLasCategorias, ModificarLista] = useState([]);
  const[noMostrar, setActivo] = useState(false)
  // consulta por todos los productos y otra por las categorias
  const consultarAPITodosLosProductos = async(state) => {
    try{
      const api = await fetch ("https://fakestoreapi.com/products")
      const resultado = await api.json();
      cambiarLista(resultado);
      state(resultado);
      
      
    }catch(error)
    {
      console.log(error)
    }
    console.log(todosLosProductos)
  }
  const consultarAPITodasLasCategorias = async(state) => {
    try{
      const api = await fetch ("https://fakestoreapi.com/products/categories")
      const resultado = await api.json();
      state(resultado);
      
    }catch(error)
    {
      console.log(error)
    }

  }
  const consultarAPIproductosDeUnaCategoria = async(categoria) => {
    try{
      const api = await fetch (`https://fakestoreapi.com/products/category/${categoria}`)
      const resultado = await api.json();
      cambiarLista(resultado)
      
    }catch(error)
    {
      console.log(error)
    }

  }

  // Utilizo el useEffect para que los articulos se muestren desde un principio y otro para obtener las categorias
  useEffect(() => {
    consultarAPITodosLosProductos(cambiarLista);
  },[]);
  
  useEffect(() => {
    consultarAPITodasLasCategorias(ModificarLista);
  },[]);

  






  const [changuito, agregarProducto] = useState([]);

  
  return (
    <Fragment>
        <Header
          titulo = "Mercado Free"
          setActivo={setActivo}
          noMostrar={noMostrar}
        />
        <h1>Categorias </h1>
        <div className='botones'>
          
          <Button
            variant='dark'
            onClick = {consultarAPITodosLosProductos}
            >Todos
          </Button>
          {
            todasLasCategorias.map(c => (
              <BotonesCat
                nombre = {c}
                key={c}
                consultarAPIproductosDeUnaCategoria={consultarAPIproductosDeUnaCategoria}
              /> 
            ))
          }
        </div>
        <div className='todosLosArticulos'>
          {
            todosLosProductos.map(p =>(
            <Articulo 
            todosLosProductos={todosLosProductos}
            key={p.id}
            producto={p}
            cambiarLista={cambiarLista}
            changuito={changuito}
            agregarProducto={agregarProducto}
            />
          ))
          }
        </div>
        <Changuito 
          changuito={changuito}
          agregarProducto = {agregarProducto}
          noMostrar={noMostrar}
          setActivo={setActivo}        />
        <Footer titulo={"Mercado Free"}/>
</Fragment>
  );
}

export default App;