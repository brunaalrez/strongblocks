'use client'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function visualizarProduto() {
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
                <h1 className="text-3xl font-bold text-gray-900">Selecione o Produto</h1>
                <hr className="my-4 border-gray-400" />

                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                    onClick={() => router.push('/produtos/visualizar_produto_a')}
                    className="w-full sm:w-auto px-6 py-3 bg-stone-950 text-yellow-200 rounded-lg shadow-md hover:bg-stone-800 transition"
                >
                    Bloco Tipo A
                    <br/>
                    19x19x39
                </button>

                <button
                    onClick={() => router.push('/produtos/visualizar_produto_b')}
                    className="w-full sm:w-auto px-6 py-3 bg-amber-400 text-stone-950 rounded-lg shadow-md hover:bg-amber-500 transition"
                >
                    Bloco Tipo B
                    <br/>
                    14x19x39
                </button>

                <button
                    onClick={() => router.push('/produtos/visualizar_produto_c')}
                    className="w-full sm:w-auto px-6 py-3 bg-gray-400 text-stone-950 rounded-lg shadow-md hover:bg-gray-500 transition"
                >
                    Bloco Tipo C
                    <br/>
                    09x19x39
                </button>

                <button
                    onClick={() => router.push('/produtos/visualizar_cadastrar_produto')}
                    className="w-full sm:w-auto px-6 py-3 bg-stone-950 text-yellow-200 rounded-lg shadow-md hover:bg-stone-800 transition"
                >
                    Voltar
                </button>
            </div>
      </div>
    </div>
     );
}

export default visualizarProduto;