import React from 'react'
import Login from '../assets/img/login.svg'
import Register from '../assets/img/register.svg'

const Panel = () => {

  const Animation = () => {
    const sign_in_btn = document.querySelector("#btn__signin");
    const sign_up_btn = document.querySelector("#btn__signup");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("mode__signup");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("mode__signup");
    });
  }

  return (
    <div class="container__panel">
      <div class="panel panel__left">
        <div class="content">
          <h3>Novo por aqui ?</h3>
          <p>
            Crie uma conta e faça parte do Easybank!
          </p>
          <button onClick={Animation} class="btn transparent" id="btn__signup">
            Inscreva-se
          </button>
        </div>
        <img src={Login} class="panel__image" alt=""/>
      </div>
      <div class="panel panel__right">
        <div class="content">
          <h3>Já faz parte?</h3>
          <p>
            Faça login e aproveite o Easybank.
          </p>
          <button class="btn transparent" id="btn__signin">
            Login
          </button>
        </div>
        <img src={Register} class="panel__image" alt="" />
      </div>
    </div>
  )
}

export default Panel