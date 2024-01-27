import React from 'react'
import mousse from '/src/imgs/Sobremesas/mousse.png'
import brigadeiro from '/src/imgs/Sobremesas/brigadeiro.png'
import frutas from '/src/imgs/Sobremesas/salada_de_frutas.png'
import sorvete from '/src/imgs/Sobremesas/sorvete.png'
import pudim from '/src/imgs/Sobremesas/pudim.png'
import pave from '/src/imgs/Sobremesas/pave.png'

const Sobremesas = () => {
  return (
    <div className="menu">
      
        <div className="cardapio-card">

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src={mousse} />
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Mousse</h3>
                  <h3>R$ 5,99</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src={pudim} />
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Pudim</h3>
                  <h3>R$ 5,99</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src={brigadeiro} />
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Brigadeiro</h3>
                  <h3>R$ 4,99</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src={pave} />
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Pavê</h3>
                  <h3>R$ 9,99</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src={frutas} />
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Salada de Frutas</h3>
                  <h3>R$ 4,99</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src={sorvete} />
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Sorvete</h3>
                  <h3>R$ 5,99</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Sobremesas