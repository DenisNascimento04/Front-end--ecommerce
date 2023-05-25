import React, { useState } from 'react';
import 'react-multi-carousel/lib/styles.css';

import logo from './assets/logo.svg';
import iconCart from './assets/icon-cart.svg';
import fotoPerfil from './assets/image-avatar.png';
import iconMenos from './assets/icon-minus.svg';
import iconMais from './assets/icon-plus.svg';
import iconDeletar from './assets/icon-delete.svg';
import iconMenu from './assets/icon-menu.svg';
import iconProximo from './assets/icon-next.svg';
import iconClose from './assets/icon-close.svg';
import iconAnterior from './assets/icon-previous.svg';
import imgProduto1 from './assets/image-product-1.jpg';
import imgProduto2 from './assets/image-product-2.jpg';
import imgProduto3 from './assets/image-product-3.jpg';
import imgProduto4 from './assets/image-product-4.jpg';
import './App.css';
import { Carinho, Container, Conteudo, DadosProduto, NavPerfil, Navegacao, Slide } from './styles';

type PropsProduto = {
  nome: string,
  valor: string,
  num: number,
  imagem: string
}

function App() {

  const [Index, setIndex] = useState(0);
  const [numProduto, setNumProduto] = useState(0);
  const [showcarinho, setShowCarinho] = useState(false);
  const [carinho, setCarinho] = useState<PropsProduto[]>([]);
  const [prodsNum, setProdsNum] = useState(0);
  const [mobileMenu, setMobileMenu] = useState("");

  function SetProduto(
    nome: string,
    valor: string,
    num: number,
    imagem: string
  ){
    if (num > 0) {
      setCarinho([...carinho, {
        nome,
        valor, 
        num, 
        imagem
      }])
      setProdsNum(prodsNum + num);
    }
  }

  function Delete(id: number) {
    const cart = carinho.filter((item,index) => {
      if (index === id) {
        setProdsNum(prodsNum - item.num);
      }
      if (index !== id) {
        return {...item};
      }
    })
    setCarinho(cart)
  }


  return (
    <Container>
      <header>
        <Navegacao>
          <img onClick={()=> setMobileMenu('active')} src={iconMenu} alt='icon-menu' className='mobile-menu' />
          <img src={logo} alt='icon cart' style={{  }} />
          <nav className={mobileMenu}>
            <img onClick={() => setMobileMenu('')} src={iconClose} alt="icon-close" className='close' />
            <p>Collections</p>
            <p>Men</p>
            <p>Women</p>
            <p>About</p>
            <p>Contact</p>
          </nav>
        </Navegacao>

        <NavPerfil>
          <div>
            <button onClick={() => setShowCarinho(!showcarinho)}>
              {carinho.length !== 0 ? 
                <div className='notifi-carinho'>
                  <p>{prodsNum}</p>
                </div>
              :null}
              <img src={iconCart} alt='icon cart' />
            </button>
            <button>
              <img src={fotoPerfil} alt='perfil' />
            </button>
          </div>
        </NavPerfil>
      </header>

      <Conteudo>
        <Slide>
            <button 
              onClick={() => Index === 3 ? null : setIndex(Index + 1)} 
              className='proximo'
            >
              <img src={iconProximo} alt="icon anterior" />
            </button>
            <button 
              onClick={() => Index === 0 ? null : setIndex(Index - 1)} 
              className='anterior'
            >
              <img src={iconAnterior} alt="icon proximo" />
            </button>
            {Index === 0 ? 
              <img src={imgProduto1} />
            :null}
            {Index === 1 ? 
              <img src={imgProduto2} />
            :null}
            {Index === 2 ? 
              <img src={imgProduto3} />
            :null}
            {Index === 3 ? 
              <img src={imgProduto4} />
            :null}
            <ul className='selecao'>
              <li onClick={() => setIndex(0)}>
                <img src={imgProduto1} className={Index === 0 ? "select" :""} />
              </li>
              <li onClick={() => setIndex(1)}>
                <img src={imgProduto2} className={Index === 1 ? "select" :""} />
              </li>
              <li onClick={() => setIndex(2)}>
                <img src={imgProduto3} className={Index === 2 ? "select" :""} />
              </li>
              <li onClick={() => setIndex(3)}>
                <img src={imgProduto4} className={Index === 3 ? "select" :""} />
              </li>
            </ul>
        </Slide>

        <DadosProduto>
          <div className='titulos-produto'>
            <h1>SNEAKER COMPANY</h1>
            <h1>Fall Limited Edition Sneakers</h1>
          </div>

          <p className='desc'>
            These low-profile senakers are your prefect casual
            companion. Featuring a durable rubber outer sole, 
            they'll withstand everything the weather can offer.
          </p>

          <div className='dados-preco'>
            <div className='conatiner-preco'>
              <p>$125.00</p>
              <p>50%</p>
            </div>
            <p className='preco-ant'>$250.00</p>
          </div>

          <div className='interacao'>
            <div className='menos-mais'>
              <a onClick={() => setNumProduto(numProduto-1)}>
                <img src={iconMenos} />
              </a>
              <p>{numProduto}</p>
              <a onClick={() => setNumProduto(numProduto+1)}>
                <img src={iconMais} />
              </a>
            </div>

            <button onClick={() => SetProduto(
                "Fall Limited Edition Sneakers",
                "125",
                numProduto,
                imgProduto1
              )}>
              {/* <img src={iconCart} alt='icon cart' /> */}
              Add to cart
            </button>
          </div>
        </DadosProduto>
      </Conteudo>
      {showcarinho ? 
        <Carinho>
          <div className='cabeca'>
            <h1>Cart</h1>
          </div>
            {carinho.length === 0 ? 
              <div className="vazio">
                <p>Your cart is empty.</p>
              </div>
            :
              <div className='lista'>
                {carinho.map((item, index) => (
                  <div key={index} className='produto'>
                    <img src={imgProduto1} alt='img produto' />
                    <div>
                      <p>{item.nome}</p>
                      <div className='dados-preco'>
                        <p>${item.valor}.00</p>
                        <p>x{item.num}</p>
                        <p>${parseInt(item.valor) * item.num}.00</p>
                      </div>
                    </div>
                    <img onClick={() => Delete(index)} src={iconDeletar} alt='icon deletar' className='delete' />
                  </div>
                ))}
                  <button>Checkout</button>
              </div>
            }
        </Carinho>
      :null}
    </Container>
  );
}

export default App;
