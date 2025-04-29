'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';

export default function CadastroInsumo() {
  const router = useRouter();
  const [insumo, setInsumo] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [fornecedor, setFornecedor] = useState('');
  const [mensagem, setMensagem] = useState('');

  const fornecedores = {
    'Cimento': 'Itau Materiais',
    'Areia': 'Areia Forte',
    'Po de Pedra': 'PedraMax'
  };

  const handleInsumoChange = (e) => {
    const selectedInsumo = e.target.value;
    setInsumo(selectedInsumo);
    setFornecedor(fornecedores[selectedInsumo] || '');
  };

  const handleSubmit = async () => {
    if (!insumo || !quantidade || !fornecedor || quantidade === '0') {
      setMensagem("Todos os campos são obrigatórios e a quantidade deve ser diferente de zero!");
      return;
    }

    try {
      const item =  {
        tipo_de_insumo: insumo,
        quantidade: quantidade,
        fornecedor: fornecedor
      };
      console.log(item);
      const response = await axios.post("http://localhost:3001/cadastrar-insumo", item, {
        headers: { "Content-Type": "application/json" }
      });

      setMensagem("Insumo cadastrado com sucesso!");
      setTimeout(() => router.push('/insumos'), 2000);
    } catch (error) {
      console.error("Erro ao cadastrar insumo:", error);
      setMensagem("Erro ao cadastrar insumo.");
    }
  };

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

      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-stone-950 text-center">Remover Insumo</h1>
        <hr className="my-4 border-gray-400" />

        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-stone-950 font-medium">Insumo</label>
            <select
              value={insumo}
              onChange={handleInsumoChange}
              className="w-full px-4 py-2 border rounded-lg text-stone-950 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <option value="">Selecione o Insumo</option>
              <option value="Po de Pedra">Pó de pedra</option>
              <option value="Areia">Areia</option>
              <option value="Cimento">Cimento</option>
            </select>
          </div>

          <div>
            <label className="block text-stone-950 font-medium">Quantidade (kg ou Metros)</label>
            <input
              type="number"
              value={quantidade}
              onChange={(e) => {
                const valor = Math.abs(Number(e.target.value));
                setQuantidade(valor > 0 ? -valor : '');
              }}
              className="w-full px-4 py-2 border rounded-lg text-stone-950 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Ex: -500"
            />
          </div>

          <div>
            <label className="block text-stone-950 font-medium">Fornecedor</label>
            <input
              type="text"
              value={fornecedor}
              readOnly
              className="w-full px-4 py-2 border rounded-lg bg-gray-200 text-stone-950"
            />
          </div>

          {mensagem && <p className="text-center text-red-500">{mensagem}</p>}

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full sm:w-auto px-6 py-3 bg-amber-400 text-stone-950 rounded-lg shadow-md hover:bg-amber-500 transition"
            >
              Remover
            </button>

            <button
              type="button"
              onClick={() => router.push('/insumos/visualizar_e_cadastrar_insumos')}
              className="w-full sm:w-auto px-6 py-3 bg-stone-950 text-yellow-200 rounded-lg shadow-md hover:bg-stone-800 transition"
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
