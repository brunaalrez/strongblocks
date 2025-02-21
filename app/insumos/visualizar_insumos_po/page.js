'use client'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function PrimeiraInsumos() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Logo */}
      <div className="mb-6">
        <Image
          src="/strongblocks-logo.jpg"
          alt="StrongBlocks Logo"
          width={120}
          height={120}
          className="rounded-lg shadow-md"
        />
      </div>

      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-stone-950">Situação Atual dos Insumos</h1>
        <hr className="my-4 border-gray-400" />
        
        <h2 className="text-xl text-stone-950">Pó de Pedra</h2> 
        <p className="text-gray-400 mt-4"><strong>Total:</strong> 100 Metros</p>

        <p className="text-gray-400 mt-2">
          <strong>Fornecedor:</strong> Pedras & Cia LTDA
        </p>
        <p className="text-gray-400">
          <strong>Endereço:</strong> Estrada das Pedreiras, 789 - Zona Industrial, Rio de Janeiro, RJ
        </p>
        <p className="text-gray-400">
          <strong>Telefone:</strong> (21) 4002-8922
        </p>
        <p className="text-gray-400">
          <strong>Whatsapp:</strong> (21) 99988-7766
        </p>
        <p className="text-gray-400">
          <strong>Email:</strong> contato@pedrasecia.com.br
        </p>
        <p className="text-gray-400 italic">
          "Da rocha ao concreto, fornecendo qualidade e resistência!"
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => router.push('/insumos/visualizar_insumos')}
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
