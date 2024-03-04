import React from 'react';
import { Link } from 'react-router-dom';

import './login.css';

export default function Login() {
  const handleLogin = (e) => {
    e.preventDefault();

    // Lógica de autenticação (substitua pelo que for necessário)
    const isAuthenticated = true; // Substitua pela lógica de autenticação real

    if (isAuthenticated) {
      // Redirecionar para a página de dashboard
      window.location.href = '/dashboard'; // Usando window.location.href para redirecionar
    } else {
      // Exibir uma mensagem de erro ou lógica de tratamento adequada
      console.log('Credenciais inválidas');
    }
  };

  return (
    <div className="login">
      <header className="login-header">
        <div className='login-form-wrap'>
          <div className='center'>
            <img src="/logo.png" alt="Logo" />
          </div>
          <h2 className='login-titulo' >Olá, bem-vindo</h2>
          <h4 className='login-subtitulo'>Bem-vindo de volta! Por favor coloque seus dados.</h4>
          <form className='login-form' onSubmit={handleLogin}>
            <label htmlFor="email" className="input-label">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
            ></input>
            <label htmlFor="password" className="input-label">Senha</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            ></input>
            <Link to="/" className="label-text">Esqueci minha senha</Link>
            <div className='center'>
              <button type="submit" className="btn-login">
                Entrar
              </button>
            </div>
            <div className="label-cadastro">
              <label className="label-text" >Usuário sem conta?</label>
              <Link to="/" className="label-click"> Cadastre aqui.</Link>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}
