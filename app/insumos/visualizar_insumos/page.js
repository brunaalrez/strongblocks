'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import axios from 'axios';

export default function VisualizarInsumo() {
  const [insumos, setInsumos] = useState([
  ]);



  const router = useRouter();

  async function BuscaInsumo() {
    try {
      const response = await axios.get("http://localhost:4000/insumo");
      console.log(response.data);
      setInsumos(response.data);
    } catch (error) {
      if (error.response?.status === 404) {
        // console.error("Rota não encontrada. Verifique se a URL está correta.");
      } else {
        console.error("Erro ao buscar Produto:", error.message)
      }
    }
  }

  useEffect(() => {
    BuscaInsumo();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-8">
      <div className="mb-6">
        <Image
          src="/strongblocks-logo.jpg"
          alt="StrongBlocks Logo"
          width={120}
          height={120}
          className="rounded-lg shadow-md"
        />
      </div>

      <div className="max-w-6xl w-full bg-white shadow-lg rounded-xl p-8 text-center">
        <h1 className="text-2xl font-bold text-yellow-600">Situação Atual dos Insumos</h1>
        <hr className="my-4 border-gray-300" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {insumos.map((i, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md border border-gray-200 p-6 flex flex-col gap-2 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold text-yellow-700">{i.nome}</h2>
              <div className="text-sm text-gray-600">
                <p><span className="font-semibold text-gray-800">Total:</span> {i.quantidade}</p>
                <p><span className="font-semibold text-gray-800">Fornecedor:</span> {i.fornecedor}</p>
                {/* <p><span className="font-semibold text-gray-800">Endereço:</span> {i.endereco}</p>
                <p><span className="font-semibold text-gray-800">Telefone:</span> {i.telefone}</p>
                <p><span className="font-semibold text-gray-800">Whatsapp:</span> {i.whatsapp}</p>
                <p><span className="font-semibold text-gray-800">Email:</span> {i.email}</p> */}
              </div>
              {/* <p className="text-gray-500 italic mt-2 border-t pt-2 text-sm">"{i.slogan}"</p> */}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={() => router.push('/insumos/visualizar_e_cadastrar_insumos')}
            className="w-full sm:w-auto px-6 py-3 bg-stone-950 text-yellow-200 rounded-lg shadow-md hover:bg-stone-800 transition"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}
