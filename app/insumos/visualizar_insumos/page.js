'use client'
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';

const insumos = {
  areia: {
    nome: "Areia",
    total: "150 Metros",
    fornecedor: "Areia Dourada LTDA",
    endereco: "Rodovia das Dunas, Km 45 - Região Litorânea, Fortaleza, CE",
    telefone: "(85) 3456-7890",
    whatsapp: "(85) 99876-5432",
    email: "comercial@areiadourada.com.br",
    slogan: "A base sólida para sua construção começa com a nossa areia!"
  },
  cimento: {
    nome: "Cimento",
    total: "500kg",
    fornecedor: "ITAU",
    endereco: "Av. Principal, 123 - Centro, São Paulo, SP",
    telefone: "(11) 1234-5678",
    whatsapp: "(11) 98765-4321",
    email: "fornecimentoitau@empresa.com.br",
    slogan: "Fundamentando sua obra com a força do nosso cimento!"
  },
  'po-de-pedra': {
    nome: "Pó de Pedra",
    total: "100 Metros",
    fornecedor: "Pedras & Cia LTDA",
    endereco: "Estrada das Pedreiras, 789 - Zona Industrial, Rio de Janeiro, RJ",
    telefone: "(21) 4002-8922",
    whatsapp: "(21) 99988-7766",
    email: "contato@pedrasecia.com.br",
    slogan: "Da rocha ao concreto, fornecendo qualidade e resistência!"
  }
};

export default function VisualizarInsumo() {
  const router = useRouter();
  const { insumo } = useParams();
  
  const dados = insumos[insumo];

  if (!dados) {
    return <p className="text-center text-red-500">Insumo não encontrado.</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="mb-6">
        <Image src="/strongblocks-logo.jpg" alt="StrongBlocks Logo" width={120} height={120} className="rounded-lg shadow-md" />
      </div>

      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-stone-950">Situação Atual dos Insumos</h1>
        <hr className="my-4 border-gray-400" />
        
        <h2 className="text-xl text-stone-950">{dados.nome}</h2>
        <p className="text-gray-400 mt-4"><strong>Total:</strong> {dados.total}</p>
        <p className="text-gray-400 mt-2"><strong>Fornecedor:</strong> {dados.fornecedor}</p>
        <p className="text-gray-400"><strong>Endereço:</strong> {dados.endereco}</p>
        <p className="text-gray-400"><strong>Telefone:</strong> {dados.telefone}</p>
        <p className="text-gray-400"><strong>Whatsapp:</strong> {dados.whatsapp}</p>
        <p className="text-gray-400"><strong>Email:</strong> {dados.email}</p>
        <p className="text-gray-400 italic">"{dados.slogan}"</p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => router.push('/insumos/visualizar')} className="w-full sm:w-auto px-6 py-3 bg-stone-950 text-yellow-200 rounded-lg shadow-md hover:bg-stone-800 transition">Voltar</button>
          <button onClick={() => router.push('/insumos/repor')} className="w-full sm:w-auto px-6 py-3 bg-amber-400 text-stone-950 rounded-lg shadow-md hover:bg-amber-500 transition">Repor Insumo</button>
          <button onClick={() => router.push('/insumos/cancelar')} className="w-full sm:w-auto px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition">Cancelar Fornecedor</button>
        </div>
      </div>
    </div>
  );
}
