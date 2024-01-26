import React from 'react'
import suco_maracuja from '/src/imgs/bebidas/suco_maracuja.png'
import coca_zero from '/src/imgs/bebidas/coca_zero.png'
import coca from '/src/imgs/bebidas/coca.png'


const Bebidas = () => {
  return (
    <div className="menu">
      
        <div className="cardapio-card">

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src={suco_maracuja} alt="Chicken Duplo"/>
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Suco de maracujá</h3>
                  <h3>R$ 99,99</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src={coca_zero} alt="Chicken Duplo" />
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Coca-Cola zero 350ml</h3>
                  <h3>R$ 99,99</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src={coca} alt="Chicken Duplo" />
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Coca-Cola 350ml</h3>
                  <h3>R$ 99,99</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src="https://d3sn2rlrwxy0ce.cloudfront.net/chicken-duplo-thumb.png?mtime=20210916143308&amp;focal=none" alt="Chicken Duplo"/>
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Vinho Tinto</h3>
                  <h3>R$ 99,99</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src="https://d3sn2rlrwxy0ce.cloudfront.net/chicken-duplo-thumb.png?mtime=20210916143308&amp;focal=none" alt="Chicken Duplo" />
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Coquetel de Frutas</h3>
                  <h3>R$ 99,99</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src="https://d3sn2rlrwxy0ce.cloudfront.net/chicken-duplo-thumb.png?mtime=20210916143308&amp;focal=none" alt="Chicken Duplo" />
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Água 500ml</h3>
                  <h3>R$ 99,99</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Bebidas