/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import FormSignUp from "./FormSignUp";
import Panel from "./Panel";
import Logo from "../assets/img/logo.svg"
import { PlataformSocial } from "./PlataformSocial";
import { BiEnvelope, BiLock } from "react-icons/bi";

const FormSignIn = () => {
  return (
    <body>
      <div class="container">
        <div class="container__form">
          <div class="signin__signup">
            <form action="#" className="form__signin">
              <img src={Logo} alt="" className="logo__social"></img>

              <p className="text__social">Banco digital de última geração</p>
              <div className="field__input">
                <i>
                  <BiEnvelope></BiEnvelope>
                </i>
                <input type="text" placeholder="Digite seu e-mail" />
              </div>
              <div className="field__input">
                <i>
                  <BiLock></BiLock>
                </i>
                <input type="password" placeholder="Digite sua senha" />
              </div>
              <input type="submit" value="Login" className="btn solid" />
              <a href="#" className="password__text">
                <p>Esqueceu a senha?</p>
              </a>

              <p className="text__social">
                Faça login com as plataformas sociais
              </p>

              <PlataformSocial></PlataformSocial>
            </form>
            <FormSignUp></FormSignUp>
          </div>
        </div>
        <Panel></Panel>
      </div>
    </body>
  );
};

export default FormSignIn;
