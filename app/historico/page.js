'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importando o useRouter
import Cadastro from './components/usuarios';
import Insumos from './components/insumos';
import Produtos from './components/produtos';
import Login from './components/login';
import Image from 'next/image';

export default function HistoricoAtividades() {
  // const [exibeCadastro, alteraExibeCadastro] = useState(true);
  const [exibeInsumos, alteraExibeInsumos] = useState(true); // ← Agora começa com Insumos visível
  const [exibeProdutos, alteraExibeProdutos] = useState(false);
  // const [exibeLogin, alteraExibelogin] = useState(false);

  const router = useRouter(); // Definindo o router

  function alteraExibicao(tela) {
    // alteraExibeCadastro(tela === "cadastro");
    alteraExibeInsumos(tela === "insumos");
    alteraExibeProdutos(tela === "produtos");
    // alteraExibelogin(tela === "login");
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      
      {/* Logo */}
      <div className="mb-4">
        <Image
          src="/strongblocks-logo.jpg"
          alt="StrongBlocks Logo"
          width={120}
          height={120}
          className="rounded-lg shadow-md"
        />
      </div>

      <h1 className="text-3xl font-bold text-black-900 mb-6">Histórico de Atividades</h1>

      {/* Botões estilizados */}
      <div className="flex flex-wrap justify-center gap-3 bg-gray-200 text-white px-6 py-2 rounded-lg shadow-lg">
        {/* <button
          onClick={() => alteraExibicao("cadastro")}
          className={`px-4 py-2 rounded-lg transition ${
            exibeCadastro ? 'bg-amber-400 text-gray-900 font-semibold' : 'bg-gray-400 hover:bg-gray-200'
          }`}
        >
          Usuários
        </button> */}
        <button
          onClick={() => alteraExibicao("insumos")}
          className={`px-4 py-2 rounded-lg transition ${
            exibeInsumos ? 'bg-amber-400 text-gray-900 font-semibold' : 'bg-gray-400 hover:bg-gray-200'
          }`}
        >
          Insumos
        </button>
        <button
          onClick={() => alteraExibicao("produtos")}
          className={`px-4 py-2 rounded-lg transition ${
            exibeProdutos ? 'bg-amber-400 text-gray-900 font-semibold' : 'bg-gray-400 hover:bg-gray-200'
          }`}
        >
          Produtos
        </button>
        {/* <button
          onClick={() => alteraExibicao("login")}
          className={`px-4 py-2 rounded-lg transition ${
            exibeLogin ? 'bg-amber-400 text-gray-900 font-semibold' : 'bg-gray-400 hover:bg-gray-200'
          }`}
        >
          Login
        </button> */}
      </div>

      {/* Exibição das telas */}
      <div className="mt-6 w-full max-w-3xl p-6 bg-white shadow-lg rounded-lg">
        {/* {exibeCadastro && <Cadastro />} */}
        {exibeInsumos && <Insumos />}
        {exibeProdutos && <Produtos />}
        {/* {exibeLogin && <Login />} */}
      </div>

      {/* Botão Voltar */}
      <div className="mt-6">
        <button
          onClick={() => router.push('/')} // Navegação para a página inicial
          className="px-6 py-2 bg-amber-400 text-white rounded-lg hover:bg-amber-400 transition"
        >
          Voltar
        </button>
      </div>
    </div>
  );
}

// Função Exemplo adicionada novamente
function Exemplo() {
  return (
    <div>
      <Image 
        src="/strongblocks-logo.jpg" 
        alt="Logo StrongBlocks"
        width={150} 
        height={150} 
        className="rounded-lg shadow-md"
      />
    </div>
  );
}
