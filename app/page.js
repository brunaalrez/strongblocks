'use client'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-stone-950">Bem-vindo ao Sistema Strong Blocks</h1>
        <p className="text-gray-400 mt-2">Gerencie sua produção e estoque com facilidade.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => router.push('/telalogin')}
            className="w-full px-6 py-3 bg-amber-400 text-stone-950 rounded-lg shadow-md hover:bg-amber-500 transition"
          >
            Login
          </button>

          <button
            onClick={() => router.push('/historico')}
            className="w-full px-6 py-3 bg-stone-950 text-yellow-200 rounded-lg shadow-md hover:bg-stone-800 transition"
          >
            Histórico
          </button>

          <button
            onClick={() => router.push('/produtos')}
            className="w-full px-6 py-3 bg-gray-400 text-stone-950 rounded-lg shadow-md hover:bg-gray-500 transition"
          >
            Produtos
          </button>

          <button
            onClick={() => router.push('/insumos')}
            className="w-full px-6 py-3 bg-yellow-200 text-stone-950 rounded-lg shadow-md hover:bg-yellow-300 transition"
          >
            Insumos
          </button>

        </div>
      </div>
    </div>
  );
}
