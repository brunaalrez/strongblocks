import React from 'react';

export default function HistoricoAtividades() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-blue-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Histórico de Atividades</h1>

      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg">
        <div className="bg-blue-600 text-white p-4 font-semibold">Histórico de Movimentações</div>

        <div className="p-4 flex justify-between font-bold bg-gray-200">
          <span>Nome</span>
          <span>Ação</span>
          <span>Data</span>
        </div>

        <div className="border-b hover:bg-blue-50 p-4 flex justify-between">
          <span>João Silva</span>
          <span>Login no sistema</span>
          <span>2025-02-06 10:00:00</span>
        </div>

        <div className="border-b hover:bg-blue-50 p-4 flex justify-between">
          <span>Maria Souza</span>
          <span>Cadastro de insumo</span>
          <span>2025-02-06 11:15:00</span>
        </div>

        <div className="border-b hover:bg-blue-50 p-4 flex justify-between">
          <span>Carlos Lima</span>
          <span>Atualização de dados do prestador</span>
          <span>2025-02-05 14:30:00</span>
        </div>

        <div className="border-b hover:bg-blue-50 p-4 flex justify-between">
          <span>Ana Clara</span>
          <span>Exclusão de usuário</span>
          <span>2025-02-05 16:45:00</span>
        </div>
      </div>
    </div>
  );
}
