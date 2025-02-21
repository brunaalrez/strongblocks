'use client'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Insumos() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-100 to-blue-300 p-6">
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
      
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Selecione o Insumo</h1>
        <hr className="my-4 border-gray-400" />

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => router.push('/insumos/visualizar_insumos_cimento')}
            className="w-full sm:w-auto px-6 py-3 bg-stone-950 text-yellow-200 rounded-lg shadow-md hover:bg-stone-800 transition"
          >
            Cimento
          </button>

          <button
            onClick={() => router.push('/insumos/visualizar_insumos_areia')}
            className="w-full sm:w-auto px-6 py-3 bg-amber-400 text-stone-950 rounded-lg shadow-md hover:bg-amber-500 transition"
          >
            Areia
          </button>

          <button
            onClick={() => router.push('/insumos/visualizar_insumos_po')}
            className="w-full sm:w-auto px-6 py-3 bg-gray-400 text-stone-950 rounded-lg shadow-md hover:bg-gray-500 transition"
          >
            Pó de Pedra
          </button>

          <button
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