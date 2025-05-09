'use client'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function visualizarProdutoC() {
    const router = useRouter();
    return ( 
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
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
                <h1 className="text-2xl font-bold text-stone-950">Situação Atual</h1>
                <hr className="my-4 border-gray-400" />
            </div>
            <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8 text-center text-black">
                <p>Bloco</p>
                <br/>
                <p>Canaleta</p>
                <br/>
                <p>Meio Bloco</p>
                <br/>
                <p>Meia Canaleta</p>
                <br/>
            </div>
            <button
                onClick={() => router.push('/produtos/visualizar_cadastrar_produto')}
                className="w-full sm:w-auto px-6 py-3 bg-stone-950 text-yellow-200 rounded-lg shadow-md hover:bg-stone-800 transition"
            >
                Voltar
            </button>
        </div>
     );
}

export default visualizarProdutoC;