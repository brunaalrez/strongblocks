// 'use client'
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';


// export default function cadastrarProduto() {
//     const router = useRouter();
//     const [tipo, setTipo] = useState('');
//     const [produtos, setProduto] = useState('');
//     const [medida, setMedia] = useState('');
//     const [fornecedores, setFornecedores] = useState([]);

//     const handleInsumoChange = (e) => {
//         const selectedProduto = e.target.value;
//         setProduto(selectedProduto);
//     };
//     return ( 
//         <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//             {/* Logo */}
//             <div className="mb-6">
//                 <Image
//                 src="/strongblocks-logo.jpg"
//                 alt="StrongBlocks Logo"
//                 width={120}
//                 height={120}
//                 className="rounded-lg shadow-md"
//                 />
//             </div>

//             <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
//                 <h1 className="text-2xl font-bold text-stone-950 text-center">Cadastro de Produto</h1>
//                 <hr className="my-4 border-gray-400" />

//                 <div className="flex flex-col gap-4">
//                     <div>
//                         <label className="block text-stone-950 font-medium">Produto</label>
//                         <select
//                             value={tipo}
//                             onChange={handleInsumoChange}
//                             className="w-full px-4 py-2 border rounded-lg text-stone-950 focus:outline-none focus:ring-2 focus:ring-amber-400"
//                         >
//                             <option>Tipo A</option>
//                             <option>Tipo B</option>
//                             <option>Tipo C</option>
//                         </select>
//                     </div>
//                     <div>
//                         <label className="block text-stone-950 font-medium">Produto</label>
//                         <select
//                             value={produtos}
//                             onChange={handleInsumoChange}
//                             className="w-full px-4 py-2 border rounded-lg text-stone-950 focus:outline-none focus:ring-2 focus:ring-amber-400"
//                         >
//                             <option>Selecione o Produto</option>
//                             <option>Canaleta</option>
//                             <option>Meia Canaleta</option>
//                             <option>Meio Bloco</option>
//                             <option>Bloco</option>
//                         </select>
//                     </div>
//                     <div>
//                     <label className="block text-stone-950 font-medium">Medida</label>
//                         <select
//                             value={medida}
//                             onChange={handleInsumoChange}
//                             className="w-full px-4 py-2 border rounded-lg text-stone-950 focus:outline-none focus:ring-2 focus:ring-amber-400"
//                         >
//                             <option>Selecione a Medida o Produto</option>
//                             <option>19x19x39</option>
//                             <option>14x19x39</option>
//                             <option>09x19x39</option>
//                         </select>
//                     </div>
//                     <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
//                         <button
//                             type="button"
//                             onClick={() => router.push('/')}
//                             className="w-full sm:w-auto px-6 py-3 bg-amber-400 text-stone-950 rounded-lg shadow-md hover:bg-amber-500 transition"
//                         >
//                           Cadastrar
//                         </button>

//                         <button
//                             type="button"
//                             onClick={() => router.push('/produtos/visualizar_cadastrar_produto')}
//                             className="w-full sm:w-auto px-6 py-3 bg-stone-950 text-yellow-200 rounded-lg shadow-md hover:bg-stone-800 transition"
//                         >
//                             Voltar
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//      );
// }
