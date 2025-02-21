'use client'
import { useRouter } from 'next/navigation';

export default function Insumos() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-stone-950">Insumos</h1>
        <hr className="my-4 border-gray-400"/>

       
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => router.push('/insumos/visualizar_insumos')}
            className="w-full sm:w-auto px-6 py-3 bg-amber-400 text-stone-950 rounded-lg shadow-md hover:bg-amber-500 transition"
          >
            Visualizar
          </button>

          <button
            onClick={() => router.push('/insumos/cadastrar_insumos')}
            className="w-full sm:w-auto px-6 py-3 bg-stone-950 text-yellow-200 rounded-lg shadow-md hover:bg-stone-800 transition"
          >
            Cadastrar Insumo
          </button>

          <button
              onClick={() => router.push('/')}
              className="w-full sm:w-auto px-6 py-3 bg-stone-950 text-yellow-200 rounded-lg shadow-md hover:bg-stone-800 transition"
            >
              Voltar
            </button>
        </div>
      </div>
    </div>
  );
}
