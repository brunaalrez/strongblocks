import React from 'react';
import './Login.css';  // Importando o arquivo de estilos

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-panel">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">Usuário</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;