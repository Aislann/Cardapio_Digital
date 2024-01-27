import React from 'react'
import parmegiana from '/src/imgs/almoco/parmegiana.png'
import file_fritas from '/src/imgs/almoco/file_fritas.png'
import moqueca from '/src/imgs/almoco/moqueca.png'
import churrasco from '/src/imgs/almoco/churrasco.png'
import file_peixe from '/src/imgs/almoco/file_peixe.png'
import strogonoff from '/src/imgs/almoco/strogonoff.png'

const Almoço = () => {
  return (
    
    <div className="menu">
      
        <div className="cardapio-card">

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src={parmegiana} />
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Frango a Parmegiana</h3>
                  <h3>R$ 39,99</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img className='imgAlimento' style={{ width:'300px'}} src={file_fritas} />
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Filé com Fritas</h3>
                  <h3>R$ 29,99</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src={moqueca} />
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Moqueca de Peixe</h3>
                  <h3>R$ 35,99</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src={churrasco} />
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Churrasco</h3>
                  <h3>R$ 15,99</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src={file_peixe} style={{width:'300px'}} />
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Filé de Tilapia</h3>
                  <h3>R$ 29,99</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="wrapperGrid">
            <div className="wrapper-thumbnail">
              <figure className="thumbnail" style={{ backgroundColor: 'rgb(242, 229, 212)' }}>
                <img src={strogonoff}/>
              </figure>
            </div>

            <div className="img-info">
              <div className="inner">
                <div className="desc">
                  <h3>Strogonoff</h3>
                  <h3>R$ 12,99</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Almoço