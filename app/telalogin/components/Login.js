'use client'
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Login({ login, senha, email, Logar }) {
  const [ValorEmail, alteraValorEmail] = useState("");
  const [Valorsenha, alteraValorSenha] = useState("");
  const [erroEmail, setErroEmail] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  const [usuario, alteraUsuarios] = useState([
    {
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
  ]);

  const router = useRouter();

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

    usuario.map((i) => {
      if (i.email == ValorEmail && i.senha == Valorsenha) {
        console.log(`Logado com sucesso!`);
        localStorage.setItem("Usuario", JSON.stringify(i));

        router.push("http://localhost:3000");
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
          className="w-full p-2 text-lg border border-gray-300 rounded-md placeholder-amber-400"
        />
        {erroEmail && <p className="text-red-500 text-sm">{erroEmail}</p>}
      </div>

      <br />

      <div className="mb-4">
        <input
          placeholder="Senha"
          type="password"
          nome={senha}
          valor={Valorsenha}
          onChange={(e) => alteraValorSenha(e.target.value)}
          className="w-full p-2 text-lg border border-gray-300 rounded-md placeholder-amber-400"
        />
        {erroSenha && <p className="text-red-500 text-sm">{erroSenha}</p>}
      </div>

      <button
        type="submit"
        onClick={Salvar}
        className="w-full p-2 text-lg bg-amber-400 text-white rounded-md hover:bg-amber-500"
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

      <div className="mt-4 text-center">
        <p>É um fornecedor?</p>
        <Link href="/telacadastrofornecedor">
          <button className="w-full p-2 text-lg bg-black text-white rounded-md">
            Cadastrar-se
          </button>
        </Link>
      </div>
    </div>
  );
}
