'use client'
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';

export default function CadastroFornecedor() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [erroNome, setErroNome] = useState("");
  const [erroEmail, setErroEmail] = useState("");
  const [erroCpf, setErroCpf] = useState("");
  const [erroTelefone, setErroTelefone] = useState("");
  const [erroSenha, setErroSenha] = useState("");
  const [erroConfirmarSenha, setErroConfirmarSenha] = useState("");

  const Salvar = (e) => {
    e.preventDefault();
    setErroNome("");
    setErroEmail("");
    setErroCpf("");
    setErroTelefone("");
    setErroSenha("");
    setErroConfirmarSenha("");

    let valid = true;

    if (nome.trim() === "") {
      setErroNome("O nome é obrigatório.");
      valid = false;
    }

    if (email.trim() === "") {
      setErroEmail("O email é obrigatório.");
      valid = false;
    }

    if (cpf.trim() === "") {
      setErroCpf("O CPF é obrigatório.");
      valid = false;
    }

    if (telefone.trim() === "") {
      setErroTelefone("O telefone é obrigatório.");
      valid = false;
    }

    if (senha.trim() === "") {
      setErroSenha("A senha é obrigatória.");
      valid = false;
    }

    if (confirmarSenha.trim() === "") {
      setErroConfirmarSenha("A confirmação da senha é obrigatória.");
      valid = false;
    } else if (senha !== confirmarSenha) {
      setErroConfirmarSenha("As senhas não coincidem.");
      valid = false;
    }

    if (valid) {
      console.log("Cadastro realizado com sucesso!");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      
      <div className="mb-4">
        <Image
          src="/strongblocks-logo.jpg"
          alt="StrongBlocks Logo"
          width={120}
          height={120}
          className="rounded-lg shadow-md"
        />
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6">Cadastro de Fornecedor</h2>

      <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg">
        <div className="mb-4">
          <input
            placeholder="Nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full p-3 text-lg border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 placeholder:text-amber-400"
          />
          {erroNome && <p className="text-red-500 text-sm">{erroNome}</p>}
        </div>

        <div className="mb-4">
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 text-lg border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 placeholder:text-amber-400"
          />
          {erroEmail && <p className="text-red-500 text-sm">{erroEmail}</p>}
        </div>

        <div className="mb-4">
          <input
            placeholder="CPF"
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            className="w-full p-3 text-lg border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 placeholder:text-amber-400"
          />
          {erroCpf && <p className="text-red-500 text-sm">{erroCpf}</p>}
        </div>

        <div className="mb-4">
          <input
            placeholder="Telefone"
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            className="w-full p-3 text-lg border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 placeholder:text-amber-400"
          />
          {erroTelefone && <p className="text-red-500 text-sm">{erroTelefone}</p>}
        </div>

        <div className="mb-4">
          <input
            placeholder="Senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full p-3 text-lg border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 placeholder:text-amber-400"
          />
          {erroSenha && <p className="text-red-500 text-sm">{erroSenha}</p>}
        </div>

        <div className="mb-4">
          <input
            placeholder="Confirmar Senha"
            type="password"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            className="w-full p-3 text-lg border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 placeholder:text-amber-400"
          />
          {erroConfirmarSenha && <p className="text-red-500 text-sm">{erroConfirmarSenha}</p>}
        </div>

        <button
          type="submit"
          onClick={Salvar}
          className="w-full p-3 text-lg bg-amber-400 text-white rounded-md hover:bg-amber-500"
        >
          Cadastrar
        </button>

        <div className="mt-4 text-center">
          <p>Já tem uma conta?</p>
          <Link href="/telalogin">
            <button className="w-full p-3 text-lg bg-black text-white rounded-md hover:bg-gray-800">
              Fazer Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
