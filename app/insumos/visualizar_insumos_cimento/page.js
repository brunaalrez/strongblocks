'use client'
import { useRouter } from 'next/navigation';

export default function PrimeiraInsumos() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-stone-950">Situação Atual dos Insumos</h1>
        <hr className="my-4 border-gray-400" />
        
        <h2 className="text-xl text-stone-950">Cimento</h2>
        <p className="text-gray-400 mt-4">Adicionou 500kg</p>

        <p className="text-gray-400 mt-2">
          <strong>Fornecedor:</strong> ITAU
        </p>
        <p className="text-gray-400">
          <strong>Endereço:</strong> Av. Principal, 123 - Centro, São Paulo, SP
        </p>
        <p className="text-gray-400">
          <strong>Telefone:</strong> (11) 1234-5678
        </p>
        <p className="text-gray-400">
          <strong>Whatsapp:</strong> (11) 98765-4321
        </p>
        <p className="text-gray-400">
          <strong>Email:</strong> fornecimentoitau@empresa.com.br
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => router.push('/insumos')}
            className="w-full sm:w-auto px-6 py-3 bg-stone-950 text-yellow-200 rounded-lg shadow-md hover:bg-stone-800 transition"
          >
            Voltar
          </button>

          <button
            onClick={() => router.push('/insumos/repor')}
            className="w-full sm:w-auto px-6 py-3 bg-amber-400 text-stone-950 rounded-lg shadow-md hover:bg-amber-500 transition"
          >
            Repor Insumo
          </button>

          <button
            onClick={() => router.push('/insumos/cancelar')}
            className="w-full sm:w-auto px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
          >
            Cancelar Fornecedor
          </button>
        </div>
      </div>
    </div>
  );
}
