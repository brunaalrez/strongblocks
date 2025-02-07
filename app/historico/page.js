'use client'
import React, { useState } from 'react';
import Cadastro from './components/cadastro';
import Insumos from './components/insumos';

export default function HistoricoAtividades() {

  const [exibeCadastro, alteraExibeCadastro] = useState(true)
  const [exibeInsumos, alteraExibeInsumos] = useState(false)

  function alteraExibicao(tela){

      if(tela == "cadastro"){
        alteraExibeInsumos(false)
        alteraExibeCadastro(true)
      }

      if(tela == "insumos"){
        alteraExibeInsumos(true)
        alteraExibeCadastro(false)
      }
  }
  return (
    
    <div className="flex flex-col items-center min-h-screen bg-blue-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Histórico de Atividades</h1>

      <button onClick={()=> alteraExibicao("cadastro")}>Cadastro</button>
      <button onClick={()=> alteraExibicao("insumos")}>insumos</button>

      {
        exibeCadastro == true?
        <Cadastro/>  
        :
        <div></div>  
      }

{
        exibeInsumos == true?
        <Insumos/>  
        :
        <div></div>  
      }
     
     

    </div>
  );
}
