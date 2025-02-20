'use client'
import { useRouter } from 'next/navigation';

export default function Insumos() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-stone-950">Selecione o Insumo</h1>
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
        </div>
      </div>
    </div>
  );
}
