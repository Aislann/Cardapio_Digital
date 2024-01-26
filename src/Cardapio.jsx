import React from 'react';
import './Cardapio.css'
import image from '../public/logoQuentinha.png'
import Almoço from './assets/components/Almoço';
import Jantar from './assets/components/Jantar';
import Bebidas from './assets/components/Bebidas';
import Sobremesas from './assets/components/Sobremesas';

const Cardapio = () => {
  return (
    <div className='container'>
      <img src={image} alt="" />
      {/* <span>Quentinhas</span>
      <span>Do Grau</span> */}
      <h2 className=''>ALMOÇO</h2>
      <Almoço />

      <h2 className=''>JANTAR</h2>
      <Jantar />

      <h2 className=''>BEBIDAS</h2>
      <Bebidas />

      <h2 className=''>SOBREMESAS</h2>
      <Sobremesas />






    </div>



  );
};

export default Cardapio;
