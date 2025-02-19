'use client'
import { useState } from "react";
import Link from "next/link"; // Importando o Link para navegação entre páginas

export default function Login({ login, senha, nomedeusuario, Logar }) {
  
  const [ValorNomeDeUsuario, alteraValorNomeDeUsuario] = useState("");
  const [Valorsenha, alteraValorSenha] = useState("");
  const [erroNomeDeUsuario, setErroNomeDeUsuario] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  const [usuario, alteraUsuarios] = useState([{
    id: 0,
    nome: "Gabriel",
    dataNascimento: "07/12/2030",
    cpf: "156.662.640-44",
    rg: "445170426",
    email: "gabriel@gmail.com",
    tipoUsuario: "administrador",
    rua: "maria blanchard",
    numero: "323",
    bairro: "capão redondo",
    cidade: "São paulo",
    uf: "sp",
    telefone: "(11) 2712-6572",
    senha: "12345678",
    confirmarSenha: "12345678"
  },
  // outros usuários...
  ]);

  const Salvar = (e) => {
    e.preventDefault();
    setErroNomeDeUsuario("");
    setErroSenha("");
    
    if (ValorNomeDeUsuario.trim() === "") {
      setErroNomeDeUsuario("O nome de usuário é obrigatório.");
    }
    
    if (Valorsenha.trim() === "") {
      setErroSenha("A senha é obrigatória.");
    }
    
    if (ValorNomeDeUsuario.trim() !== "" && Valorsenha.trim() !== "") {
      console.log("Username:", ValorNomeDeUsuario);
      console.log("Senha:", Valorsenha);
      
    }

    usuario.map ( (i) => {
      if(i.nome === ValorNomeDeUsuario && i.senha === Valorsenha){
        console.log(`Usuário logado com sucesso!`);
      } else {
        console.log("Usuário ou senha inválidos.");
      }
    });
  };

  return (
    <div>
      <div className="mb-4">
        <input
          placeholder="Login"
          type="text"
          nome={nomedeusuario}
          valor={ValorNomeDeUsuario}
          onChange={(e) => alteraValorNomeDeUsuario(e.target.value)}
          className="w-full p-2 text-lg border border-gray-300 rounded-md placeholder-yellow-400"
        />
        {erroNomeDeUsuario && <p className="text-red-500 text-sm">{erroNomeDeUsuario}</p>}
      </div>

      <br/>

      <div className="mb-4">
        <input
          placeholder="Senha"
          type="password"
          nome={senha}
          valor={Valorsenha}
          onChange={(e) => alteraValorSenha(e.target.value)}
          className="w-full p-2 text-lg border border-gray-300 rounded-md placeholder-yellow-400"
        />
        {erroSenha && <p className="text-red-500 text-sm">{erroSenha}</p>}
      </div>

      <button
        type="submit"
        onClick={Salvar}
        className="w-full p-2 text-lg bg-yellow-400 text-white rounded-md"
      >
        {Logar}
      </button>

      
      <div className="mt-4 text-center">
        <p>Ainda não tem uma conta?</p>
        <Link href="/telacadastro">
          <button className="w-full p-2 text-lg bg-black text-white rounded-md">
            Cadastrar-se
          </button>
        </Link>
      </div>
    </div>
  );
}
