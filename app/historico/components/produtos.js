'use client'

import { useEffect, useState } from "react";
import axios from "axios";

export default function Cadastro() {

  const [produtos, alteraProdutos] = useState([]);

  // 🔎 Função para buscar movimentações de produtos
  async function buscaProdutos() {
    try {
      const response = await axios.get("http://localhost:4000/movimentacoes/Produto");
      console.log(response.data);
      alteraProdutos(response.data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  }

  // ▶️ Executa busca na montagem do componente
  useEffect(() => {
    buscaProdutos();
  }, []);

  return (
    <div className="w-full max-w-4xl bg-stone-950 shadow-xl rounded-xl overflow-hidden text-white">
      {/* 🔶 Título */}
      <div className="bg-amber-400 text-stone-900 p-5 font-bold text-lg text-center">
        Histórico de Movimentações de Produtos
      </div>

      {/* 🔷 Cabeçalho da tabela */}
      <div className="p-4 flex font-semibold bg-stone-900 text-stone-100 border-b border-stone-700">
        <span className="w-1/4">Produto</span>
        <span className="w-1/4">Quantidade</span>
        <span className="w-1/4">Movimentação</span>
        <span className="w-1/4 text-right">Data e Hora</span>
      </div>

      {/* 🔸 Listagem de produtos */}
      {produtos.map((item, index) => (
        <div
          key={index}
          className="p-4 flex items-start bg-stone-700 border-b border-stone-800 hover:bg-stone-600 transition"
        >
          <span className="w-1/4">{item.tpi.nome ?? 'Sem nome'}</span>
          <span className="w-1/4">{item.quantidade}</span>
          <span className="w-1/4">{item.tipo_movimentacao}</span>
          <span className="w-1/4 text-right">
            {new Date(item.date).toLocaleString('pt-BR', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: false,
              timeZone: 'UTC'
            })}
          </span>
        </div>
      ))}
    </div>
  );
}
