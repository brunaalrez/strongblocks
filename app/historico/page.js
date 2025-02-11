'use client'
import React, { useState } from 'react';
import Cadastro from './components/cadastro';
import Insumos from './components/insumos';
import Produtos from './components/produtos';
import Login from './components/login';

export default function HistoricoAtividades() {

  const [exibeCadastro, alteraExibeCadastro] = useState(true);
  const [exibeInsumos, alteraExibeInsumos] = useState(false);
  const [exibeProdutos, alteraExibeProdutos] = useState(false);
  const [exibeLogin, alteraExibelogin] = useState(false);

  function alteraExibicao(tela) {
    if (tela == "cadastro") {
      alteraExibeCadastro(true);
      alteraExibeInsumos(false);
      alteraExibeProdutos(false);
      alteraExibelogin(false);
    }

    if (tela == "insumos") {
      alteraExibeCadastro(false);
      alteraExibeInsumos(true);
      alteraExibeProdutos(false);
      alteraExibelogin(false);
    }

    if (tela == "produtos") {
      alteraExibeCadastro(false);
      alteraExibeInsumos(false);
      alteraExibeProdutos(true);
      alteraExibelogin(false);
    }

    if (tela == "login") {
      alteraExibeCadastro(false);
      alteraExibeInsumos(false);
      alteraExibeProdutos(false);
      alteraExibelogin(true);
    }
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-blue-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Histórico de Atividades</h1>

      <div className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-950">
      <button onClick={() => alteraExibicao("cadastro")}>Cadastro</button>
      <button onClick={() => alteraExibicao("insumos")}>Insumos</button>
      <button onClick={() => alteraExibicao("produtos")}>Produtos</button>
      <button onClick={() => alteraExibicao("login")}>Login</button>
      </div>

      {exibeCadastro == true ? 
      <Cadastro /> 
      :
      <div></div>}
      {exibeInsumos == true ?
      <Insumos /> 
      : <div></div>}
      {exibeProdutos == true ?
      <Produtos /> 
      : 
      <div></div>}
      {exibeLogin == true ? 
      <Login /> 
      :
       <div></div>}
    </div>
  );
}