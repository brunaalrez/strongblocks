'use client'
import axios from "axios";
import { useEffect, useState } from "react";

export default function Insumos() {

  const [insumo, alterainsumo] = useState([]);

  async function BuscaInsumo() {
    try {
      const response = await axios.get("http://localhost:4000/movimentacoes/Insumo");
      console.log(response.data);
      alterainsumo(response.data);
    } catch (error) {
      console.error("Erro ao buscar insumo", error);
    }
  }

  useEffect(() => {
    BuscaInsumo();
  }, []);

  return (
    <div className="w-full max-w-4xl bg-stone-950 shadow-xl rounded-xl overflow-hidden text-white">
      <div className="bg-amber-400 text-stone-900 p-5 font-bold text-lg text-center">
        Histórico de Movimentações de Insumos
      </div>

      {/* ✅ Cabeçalho da tabela */}
      <div className="p-4 flex font-semibold bg-stone-900 text-stone-100 border-b border-stone-700">
        <span className="w-1/4">Insumo</span>
        <span className="w-1/4">Quantidade</span>
        <span className="w-1/4">Movimentação</span>
        <span className="w-1/4 text-right">Data e Hora</span>
      </div>

      {/* ✅ Linhas dos dados */}
      {insumo.map((i, index) => (
        <div 
          key={index} 
          className="p-4 flex items-start bg-stone-700 border-b border-stone-800 hover:bg-stone-600 transition"
        >
          <span className="w-1/4">{i.tpi.nome ?? 'Sem nome'}</span>
          <span className="w-1/4">{i.quantidade}</span>
          <span className="w-1/4">{i.tipo_movimentacao}</span>
          <span className="w-1/4 text-right">
            {new Date(i.date).toLocaleString('pt-BR', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: false
            })}
          </span>
        </div>
      ))}
    </div>
  );
}
