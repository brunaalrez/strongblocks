'use client'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function visualizarProdutoB() {

  const insumos = [
    {
      nome: "Bloco",
      quantidade: "8",
    },
    {
        nome: "Canaleta",
        quantidade: "4",
    },
    {
        nome: "Meio Bloco",
        quantidade: "5",
    },
    {
        nome: "Meia Canaleta",
        quantidade: "2",
    }
  ];

  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-8">
      <div className="mb-6">
        <Image src="/strongblocks-logo.jpg" alt="StrongBlocks Logo" width={120} height={120} className="rounded-lg shadow-md" />
      </div>

      <div className="max-w-6xl w-full bg-white shadow-lg rounded-xl p-8 text-center">
        <h1 className="text-2xl font-bold text-yellow-600">Situação Atual dos Produtos</h1>
        <hr className="my-4 border-gray-300" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {insumos.map((i, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md border border-gray-200 p-6 flex flex-col gap-2 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold text-yellow-700">{i.nome}</h2>
              <div className="text-sm text-gray-600">
                <p><span className="font-semibold text-gray-800">Quantidade: Palete</span> {i.quantidade}</p>
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
