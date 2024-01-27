import React, { useState, useEffect } from 'react';
import './Cardapio.css';
import image from '../public/logoQuentinha.png';
import Almoço from './assets/components/Almoço';
import Jantar from './assets/components/Jantar';
import Bebidas from './assets/components/Bebidas';
import Sobremesas from './assets/components/Sobremesas';

const Cardapio = () => {
  const sections = [
    { name: 'ALMOÇO', component: <Almoço /> },
    { name: 'JANTAR', component: <Jantar /> },
    { name: 'BEBIDAS', component: <Bebidas /> },
    { name: 'SOBREMESAS', component: <Sobremesas /> },
  ];

  const [selectedSection, setSelectedSection] = useState(0);

  const handleSectionClick = (index) => {
    setSelectedSection(index === selectedSection ? null : index);
  };

  useEffect(() => {
    setSelectedSection(0);
  }, []);

  return (
    <div className='container'>
      <img src={image} alt="" style={{width: '400px'}}/>
      <div className='sticky-header'>
        {sections.map((section, index) => (
          <h2
            key={index}
            className={selectedSection === index ? 'active' : ''} 
            onClick={() => handleSectionClick(index)}
          >
            {section.name}
          </h2>
        ))}
      </div>

      <div className='content'>
        {sections.map((section, index) => (
          <div key={index}>
            {selectedSection === index && section.component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cardapio;
