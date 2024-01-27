import React from 'react'
import suco_maracuja from '/src/imgs/bebidas/suco_maracuja.png'
import coca_zero from '/src/imgs/bebidas/coca_zero.png'
import coca from '/src/imgs/bebidas/coca.png'
import vinho from '/src/imgs/bebidas/vinho.png'
import agua from '/src/imgs/bebidas/agua.png'
import coquetel from '/src/imgs/bebidas/coquetel.png'


const Bebidas = () => {
  return (
    <div className="menu">
      
        <div className="cardapio-card">

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src={suco_maracuja}/>
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Suco de maracujá</h3>
                  <h3>R$ 5,99</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src={coca_zero} />
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Coca-Cola zero 350ml</h3>
                  <h3>R$ 5,99</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src={coca} />
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Coca-Cola 350ml</h3>
                  <h3>R$ 5,99</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src={vinho}/>
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Vinho Tinto</h3>
                  <h3>R$ 30,99</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src={coquetel} />
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Coquetel de Frutas</h3>
                  <h3>R$ 19,99</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src={agua} />
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Água 500ml</h3>
                  <h3>R$ 3,99</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Bebidas