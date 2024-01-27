import React from 'react'
import alasanhado from '/src/imgs/jantar/alasanhado.png'
import espaguete from '/src/imgs/jantar/espaguete.png'
import escondidinho from '/src/imgs/jantar/escondidinho.png'
import Caldo_Verde from '/src/imgs/jantar/Caldo-Verde.png'
import hamburguer from '/src/imgs/jantar/hamburguer.png'
import sopa from '/src/imgs/jantar/sopa.png'


const Jantar = () => {
  return (
    <div className="menu">
      
        <div className="cardapio-card">

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src={alasanhado}/>
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Alasanhado</h3>
                  <h3>R$ 25,99</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src={espaguete} />
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Espaguete à Bolonhesa</h3>
                  <h3>R$ 29,99</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src={escondidinho} style={{width:'300px'}}  />
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Escondidinho</h3>
                  <h3>R$ 35,99</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src={Caldo_Verde} style={{width: '300px'}} />
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Caldo Verde</h3>
                  <h3>R$ 10,99</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src={sopa} />
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Sopa</h3>
                  <h3>R$ 14,99</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src={hamburguer} style={{width:'300px'}}/>
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Hamburguer</h3>
                  <h3>R$ 19,99</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Jantar