'use client' // Indica que o componente será renderizado no cliente (Next.js)

import { useEffect, useState } from "react"; // Importa hooks do React
import axios from "axios"; // Importa o axios para realizar requisições HTTP

export default function Cadastro() {
  // Estado local contendo um histórico estático de movimentações de produtos
  const [produtos, alteraProdutos] = useState([ ]);

  // Função para buscar produtos do backend 
  async function buscaProdutos() {
    try {
      const response = await axios.get("http://localhost:4000/movimentacoes/produto"); // Requisição GET para a API
      console.log(response.data); // Exibe a resposta no console (apenas exemplo)
      alteraProdutos(response.data) // Atualiza o estado com os dados recebidos
    } catch (error) {
      console.error("Erro ao buscar produtos:", error); // Exibe erro caso a requisição falhe
    }
  }

  // useEffect para executar a função de busca ao montar o componente
  useEffect(() => {
    buscaProdutos(); // Executa a busca na montagem do componente
  }, []);

  // Renderização da interface
  return (
    <div className="w-full max-w-4xl bg-stone-950 shadow-xl rounded-xl overflow-hidden text-white">
      {/* Título */}
      <div className="bg-amber-400 text-stone-900 p-5 font-bold text-lg text-center">
        Histórico de Movimentações de Produtos
      </div>

      {/* Cabeçalho da tabela */}
      <div className="p-4 flex justify-between font-semibold bg-stone-900 text-stone-100 border-b border-stone-700">
        <span>Produto</span>
        <span>Quantidade</span>
        <span>Movimentação</span>
        <span>Data e Hora</span>
      </div>

      {/* Listagem de produtos (histórico) */}
      {produtos.map((item, index) => (
        <div
          key={index} // Chave única para cada item da lista
          className="p-4 flex justify-between items-start bg-stone-700 border-b border-stone-800 hover:bg-stone-600 transition"
        >
          <span className="w-1/3">{item.tpi.nome }</span> {/* Nome do produto */}
          <span className="w-1/3">{item.quantidade}</span> {/* Quantidade movimentada */}
          <span className="w-1/3">{item.tipo_movimentacao}</span> {/* Tipo de movimentação */}
          <span className="w-1/3">{item.date}</span> {/* Data e hora da movimentação */}
        </div>
      ))}
    </div>
  );
}
