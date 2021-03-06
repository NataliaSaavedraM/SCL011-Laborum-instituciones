import React from 'react';
import Register from './Register';
import './style.css'
import Select from '../Login&register/Select';


export default function RegisterScreen() {
  
    return (
      <div className="login-screen">
          <div className="login-box-left">
          <img src={require('../../assets/Logo.png')} alt='' className="login-logo" />
          <h1 className="login-h1">Conecta con tus postulantes con las mejores ofertas</h1>
          <Register />
          <div className="section-7">
              <h6 className="h6">¿Ya tienes cuenta? <a className="link-login">Inicia Sesión</a></h6>
          </div>
          </div>

          <div className="login-box-right">
          <Select/>
          </div>
      </div>
    );
  }  