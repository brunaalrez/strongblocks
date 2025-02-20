'use client'
import { useState } from "react";
import Link from "next/link";

export default function Login({ login, senha, email, Logar }) {

  const [ValorEmail, alteraValorEmail] = useState("");
  const [Valorsenha, alteraValorSenha] = useState("");
  const [erroEmail, setErroEmail] = useState("");
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
  { 
    id: 1, 
    nome: "Maria", 
    dataNascimento: "12/10/1985", 
    cpf: "987.654.321-00", 
    rg: "123456789", 
    email: "maria@gmail.com", 
    tipoUsuario: "funcionario", 
    rua: "rua das flores", 
    numero: "150", 
    bairro: "centro", 
    cidade: "Rio de Janeiro", 
    uf: "rj", 
    telefone: "(21) 98888-7777", 
    senha: "12345678", 
    confirmarSenha: "12345678" 
  },
  { 
    id: 2, 
    nome: "João", 
    dataNascimento: "10/03/1990", 
    cpf: "102.305.467-89", 
    rg: "987654321", 
    email: "joao@gmail.com", 
    tipoUsuario: "prestador", 
    rua: "avenida brasil", 
    numero: "600", 
    bairro: "zona norte", 
    cidade: "São Paulo", 
    uf: "sp", 
    telefone: "(11) 99777-5555", 
    senha: "12345678", 
    confirmarSenha: "12345678" 
  },
  { 
    id: 3, 
    nome: "Ana", 
    dataNascimento: "20/04/1995", 
    cpf: "153.702.469-12", 
    rg: "456789123", 
    email: "ana@gmail.com", 
    tipoUsuario: "prestador", 
    rua: "rua das Palmeiras", 
    numero: "45", 
    bairro: "jardim paulista", 
    cidade: "Campinas", 
    uf: "sp", 
    telefone: "(19) 98333-8888", 
    senha: "12345678", 
    confirmarSenha: "12345678" 
  },
  { 
    id: 4, 
    nome: "Carlos", 
    dataNascimento: "05/06/1980", 
    cpf: "159.453.678-99", 
    rg: "789456123", 
    email: "carlos@gmail.com", 
    tipoUsuario: "funcionario", 
    rua: "rua do sol", 
    numero: "999", 
    bairro: "boqueirão", 
    cidade: "Curitiba", 
    uf: "pr", 
    telefone: "(41) 97321-4567", 
    senha: "12345678", 
    confirmarSenha: "12345678" 
  },
  { 
    id: 5, 
    nome: "Fernanda", 
    dataNascimento: "22/11/1993", 
    cpf: "170.204.305-55", 
    rg: "223344556", 
    email: "fernanda@gmail.com", 
    tipoUsuario: "funcionario", 
    rua: "rua paz", 
    numero: "182", 
    bairro: "bela vista", 
    cidade: "Fortaleza", 
    uf: "ce", 
    telefone: "(85) 98765-4321", 
    senha: "12345678", 
    confirmarSenha: "12345678" 
  },
  { 
    id: 6, 
    nome: "Pedro", 
    dataNascimento: "15/02/1988", 
    cpf: "193.506.712-88", 
    rg: "354789123", 
    email: "pedro@gmail.com", 
    tipoUsuario: "administrador", 
    rua: "avenida rio branco", 
    numero: "32", 
    bairro: "centro", 
    cidade: "Belo Horizonte", 
    uf: "mg", 
    telefone: "(31) 99876-5432", 
    senha: "12345678", 
    confirmarSenha: "12345678" 
  },
  { 
    id: 7, 
    nome: "Juliana", 
    dataNascimento: "30/07/1997", 
    cpf: "102.304.506-11", 
    rg: "258789147", 
    email: "juliana@gmail.com", 
    tipoUsuario: "funcionario", 
    rua: "rua dos girassóis", 
    numero: "118", 
    bairro: "jardim maringá", 
    cidade: "Maringá", 
    uf: "pr", 
    telefone: "(44) 99999-3333", 
    senha: "12345678", 
    confirmarSenha: "12345678" 
  },
  { 
    id: 8, 
    nome: "Roberto", 
    dataNascimento: "09/09/1982", 
    cpf: "209.403.512-77", 
    rg: "126789456", 
    email: "roberto@gmail.com", 
    tipoUsuario: "prestador", 
    rua: "rua morumbi", 
    numero: "25", 
    bairro: "moema", 
    cidade: "São Paulo", 
    uf: "sp", 
    telefone: "(11) 96754-3210", 
    senha: "12345678", 
    confirmarSenha: "12345678" 
  },
  { 
    id: 9, 
    nome: "Luciana", 
    dataNascimento: "13/01/1994", 
    cpf: "140.305.678-99", 
    rg: "457123689", 
    email: "luciana@gmail.com", 
    tipoUsuario: "prestador", 
    rua: "rua da paz", 
    numero: "12", 
    bairro: "vila maria", 
    cidade: "São Paulo", 
    uf: "sp", 
    telefone: "(11) 98765-4321", 
    senha: "12345678", 
    confirmarSenha: "12345678" 
  },
  { 
    id: 10, 
    nome: "Marcos", 
    dataNascimento: "26/03/1992", 
    cpf: "157.603.459-21", 
    rg: "546789123", 
    email: "marcos@gmail.com", 
    tipoUsuario: "funcionario", 
    rua: "rua do rio", 
    numero: "800", 
    bairro: "zona sul", 
    cidade: "São Paulo", 
    uf: "sp", 
    telefone: "(11) 96123-4567", 
    senha: "12345678", 
    confirmarSenha: "12345678" 
  },
  { 
    id: 11, 
    nome: "Tatiane", 
    dataNascimento: "01/05/1986", 
    cpf: "124.305.678-44", 
    rg: "568123789", 
    email: "tatiane@gmail.com", 
    tipoUsuario: "funcionario", 
    rua: "avenida das palmeiras", 
    numero: "555", 
    bairro: "barrio alto", 
    cidade: "Porto Alegre", 
    uf: "rs", 
    telefone: "(51) 99988-7766", 
    senha: "12345678", 
    confirmarSenha: "12345678" 
  },
  { 
    id: 12, 
    nome: "Luiz", 
    dataNascimento: "19/12/1981", 
    cpf: "134.503.712-90", 
    rg: "789456123", 
    email: "luiz@gmail.com", 
    tipoUsuario: "prestador", 
    rua: "rua do paraíso", 
    numero: "20", 
    bairro: "vila nova", 
    cidade: "Salvador", 
    uf: "ba", 
    telefone: "(71) 99871-2345", 
    senha: "12345678", 
    confirmarSenha: "12345678" 
  },
  { 
    id: 13, 
    nome: "Paula", 
    dataNascimento: "24/08/1990", 
    cpf: "105.507.914-65", 
    rg: "758423691", 
    email: "paula@gmail.com", 
    tipoUsuario: "prestador", 
    rua: "rua do bosque", 
    numero: "68", 
    bairro: "vila da paz", 
    cidade: "Natal", 
    uf: "rn", 
    telefone: "(84) 99123-4321", 
    senha: "12345678", 
    confirmarSenha: "12345678" 
  },
  { 
    id: 14, 
    nome: "Ricardo", 
    dataNascimento: "11/11/1984", 
    cpf: "143.503.820-54", 
    rg: "658412039", 
    email: "ricardo@gmail.com", 
    tipoUsuario: "funcionario", 
    rua: "rua da liberdade", 
    numero: "112", 
    bairro: "serra verde", 
    cidade: "Vitória", 
    uf: "es", 
    telefone: "(27) 99765-4321", 
    senha: "12345678", 
    confirmarSenha: "12345678" 
  }

  ]);

  const Salvar = (e) => {
    e.preventDefault();
    setErroEmail("");
    setErroSenha("");
    
    if (ValorEmail.trim() === "") {
      setErroEmail("O email de login é obrigatório.");
    }
    
    if (Valorsenha.trim() === "") {
      setErroSenha("A senha é obrigatória.");
    }
    
    if (ValorEmail.trim() !== "" && Valorsenha.trim() !== "") {
      console.log("Email:", ValorEmail);

      console.log("Senha:", Valorsenha);
      
    }

    usuario.map ( (i) => {
      if(i.email == ValorEmail && i.senha == Valorsenha){
        console.log(`Logado com sucesso!`);
        usuario.senha = ""
        localStorage.setItem("Usuario", JSON.stringify(usuario))
      } else {
        console.log("Email ou senha inválidos.");
      }
    });
  };

  return (
    <div>

      <div className="mb-4">
        <input
          placeholder="Login"
          type="text"
          nome={email}
          valor={ValorEmail}
          onChange={(e) => alteraValorEmail(e.target.value)}
          className="w-full p-2 text-lg border border-gray-300 rounded-md placeholder-yellow-400"
        />
        {erroEmail && <p className="text-red-500 text-sm">{erroEmail}</p>}
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
