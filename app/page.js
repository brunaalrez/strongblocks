'use client'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 px-4">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl p-10 text-center space-y-8">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image
            src="/strongblocks-logo.jpg"
            alt="StrongBlocks Logo"
            width={200}
            height={200}
            className="rounded-lg shadow-md"
          />
        </div>

        <h1 className="text-3xl font-bold text-stone-900">Bem-vindo ao Sistema Strong Blocks</h1>
        <p className="text-gray-600 text-lg">Gerencie sua produção e estoque com facilidade.</p>

        {/* Botões */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          <button
            onClick={() => router.push('/historico')}
            className="w-full px-8 py-4 text-lg bg-amber-400 text-stone-950 font-semibold rounded-xl shadow-md hover:bg-amber-500 transition duration-300 ease-in-out"
          >
            Histórico
          </button>

          <button
            onClick={() => router.push('/produtos/visualizar_cadastrar_produto')}
            className="w-full px-8 py-4 text-lg bg-amber-400 text-stone-950 font-semibold rounded-xl shadow-md hover:bg-amber-500 transition duration-300 ease-in-out"
          >
            Produtos
          </button>

          <button
            onClick={() => router.push('insumos/visualizar_e_cadastrar_insumos')}
            className="w-full px-8 py-4 text-lg bg-amber-400 text-stone-950 font-semibold rounded-xl shadow-md hover:bg-amber-500 transition duration-300 ease-in-out"
          >
            Insumos
          </button>
        </div>
      </div>
    </div>
  );
}
