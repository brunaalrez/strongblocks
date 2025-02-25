'use client'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Insumos() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-100 to-blue-300 p-6">
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
        <h1 className="text-3xl font-bold text-gray-900">Insumos</h1>
        <hr className="my-4 border-gray-400"/>

        <div className="flex flex-col gap-4 items-center mt-6">
          <button
            onClick={() => router.push('/insumos/visualizar_insumos')}
            className="w-64 px-6 py-3 bg-amber-400 text-gray-900 rounded-lg shadow-md hover:bg-amber-500 transition text-lg"
          >
            Visualizar
          </button>

          <button
            onClick={() => router.push('/insumos/cadastrar_insumos')}
            className="w-64 px-6 py-3 bg-stone-950 text-yellow-200 rounded-lg shadow-md hover:bg-stone-800 transition text-lg"
          >
            Cadastrar Insumo
          </button>

          <button
            onClick={() => router.push('/')}
            className="w-64 px-6 py-3 bg-amber-400 text-gray-900 rounded-lg shadow-md hover:bg-amber-500 transition text-lg"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}
