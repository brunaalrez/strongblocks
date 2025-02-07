'use client'
import { useState } from "react";

export default function Login({ login, senha, nomedeusuario, Logar }) {
  
  const [ValorNomeDeUsuario, alteraValorNomeDeUsuario] = useState("");
  const [Valorsenha, alteraValorSenha] = useState("");

  
  const Salvar = (e) => {
    console.log("Username:", ValorNomeDeUsuario);
    console.log("Senha:", Valorsenha);
  };

  return (
    <div>
      <div className="mb-4">
        <label htmlFor={nomedeusuario} className="block text-sm mb-2">{login}</label>
        <input
          type="text"
          nome={nomedeusuario}
          valor={ValorNomeDeUsuario}
          onChange={(e) => alteraValorNomeDeUsuario(e.target.value)}
          className="w-full p-2 text-lg border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor={senha} className="block text-sm mb-2">{senha}</label>
        <input
          type="password"
          nome={senha}
          valor={Valorsenha}
          onChange={(e) => alteraValorSenha(e.target.value)}
          className="w-full p-2 text-lg border border-gray-300 rounded-md"
        />
      </div>

      <button
        type="submit"
        onClick={Salvar}
        className="w-full p-2 text-lg bg-[#4facfe] text-white rounded-md hover:bg-[#00f2fe]"
      >
        {Logar}
      </button>
    </div>
  );
}
