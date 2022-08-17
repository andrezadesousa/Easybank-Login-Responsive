/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import {AiOutlineGoogle, AiFillApple, AiOutlineInstagram} from "react-icons/ai";

export class PlataformSocial extends Component {
  render() {
    return (
      <div class="plataform__social">
        <a href="#" className="icon__social">
          <AiOutlineGoogle></AiOutlineGoogle>
        </a>
        <a href="#" className="icon__social">
          <AiFillApple></AiFillApple>
        </a>
        <a href="#" className="icon__social">
          <AiOutlineInstagram></AiOutlineInstagram>
        </a>
      </div>
    );
  }
}
