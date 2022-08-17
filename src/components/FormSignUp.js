import React from 'react'
import { PlataformSocial } from './PlataformSocial'
import {BiEnvelope, BiLock} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import Logo from '../assets/img/logo.svg'

const FormSignUp = () => {
  return (
    <form action="#" class="form__signup">
        <img src={Logo} alt="" className="logo__social-register"></img>
        <h2 class="form__title">Inscreva-se</h2>
        <div class="field__input">
            <i><AiOutlineUser></AiOutlineUser></i>
            <input type="text" placeholder="Seu nome" />
        </div>
        <div class="field__input">
            <i><BiEnvelope></BiEnvelope></i>
            <input type="email" placeholder="Digite seu e-mail" />
        </div>
        <div class="field__input">
            <i><BiLock></BiLock></i>
            <input type="password" placeholder="Digite sua senha" />
        </div>
            <input type="submit" class="btn" value="Criar conta" />
            <p class="text__social">Inscreva-se com as plataformas sociais</p>
        
        <PlataformSocial></PlataformSocial>
    </form>
  )
}

export default FormSignUp