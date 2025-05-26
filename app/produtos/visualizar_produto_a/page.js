'use client'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';
import host from '@/app/lib/host';

export default function visualizarProdutoA() {
  const router = useRouter();

  // Função para buscar produtos do backend 
  async function buscaQuantidade() {
    try {
      const response = await axios.get(host + "/produtos/a"); // Requisição GET para a API
      console.log(response.data); // Exibe a resposta no console
      setProdutos(response.data); // Atualiza o estado com os dados recebidos
    } catch (error) {
      console.error("Erro ao buscar produtos:", error); // Exibe erro caso a requisição falhe
    }
  }

  // useEffect para executar a função de busca ao montar o componente
  useEffect(() => {
    buscaQuantidade(); // Executa a busca na montagem do componente
  }, []);

  // Temporariamente usando `insumos` fixos, substitua por `produtos` se necessário
  const [produtos, setProdutos] = useState([
    { nome: "Bloco"},
    { nome: "Canaleta"},
    { nome: "Meio Bloco"},
    { nome: "Meia Canaleta"}
  ]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-8">
      <div className="mb-6">
        <Image src="/strongblocks-logo.jpg" alt="StrongBlocks Logo" width={120} height={120} className="rounded-lg shadow-md" />
      </div>

      <div className="max-w-6xl w-full bg-white shadow-lg rounded-xl p-8 text-center">
        <h1 className="text-2xl font-bold text-yellow-600">Situação Atual dos Produtos</h1>
        <hr className="my-4 border-gray-300" />

        {/* Grid dos cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {produtos.map((i, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md border border-gray-200 p-6 flex flex-col gap-2 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold text-yellow-700">{i.nome}</h2>
              <div className="text-sm text-gray-600">
                <p><span className="font-semibold text-gray-800">Quantidade:</span> {i.quantidade} Paletes</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={() => router.push('/produtos/visualizar_produto')}
            className="w-full sm:w-auto px-6 py-3 bg-stone-950 text-yellow-200 rounded-lg shadow-md hover:bg-stone-800 transition"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}
