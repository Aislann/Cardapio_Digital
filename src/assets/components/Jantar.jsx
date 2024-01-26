import React from 'react'
import alasanhado from '/src/imgs/jantar/alasanhado.png'
import espaguete from '/src/imgs/jantar/espaguete.png'
import escondidinho from '/src/imgs/jantar/escondidinho.png'


const Jantar = () => {
  return (
    <div className="menu">
      
        <div className="cardapio-card">

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src={alasanhado} alt="Chicken Duplo"/>
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Alasanhado</h3>
                  <h3>R$ 99,99</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src={espaguete} alt="Chicken Duplo" title="Chicken Duplo" />
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Espaguete à Bolonhesa</h3>
                  <h3>R$ 99,99</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src={escondidinho} alt="Chicken Duplo" title="Chicken Duplo" />
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Escondidinho</h3>
                  <h3>R$ 99,99</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src="https://d3sn2rlrwxy0ce.cloudfront.net/chicken-duplo-thumb.png?mtime=20210916143308&amp;focal=none" alt="Chicken Duplo" title="Chicken Duplo" />
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Caldo Verde</h3>
                  <h3>R$ 99,99</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src="https://d3sn2rlrwxy0ce.cloudfront.net/chicken-duplo-thumb.png?mtime=20210916143308&amp;focal=none" alt="Chicken Duplo" title="Chicken Duplo" />
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Inhame com carne de sol</h3>
                  <h3>R$ 99,99</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src="https://d3sn2rlrwxy0ce.cloudfront.net/chicken-duplo-thumb.png?mtime=20210916143308&amp;focal=none" alt="Chicken Duplo" title="Chicken Duplo" />
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Sopa de lentilha</h3>
                  <h3>R$ 99,99</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Jantar