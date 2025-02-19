'use client'
import { useState } from "react";

export default function Login() {

  const [insumos, alterainsumos] = useState([
    {
      id: 0,
      nome: "Marly Lopes",
      ação: "Fez login no sistema",
      Datahora: "2025-02-06 às 10:01:45"
    },
    {
      id: 1,
      nome: "Carlos Mendes",
      ação: "Fez logout do sistema",
      Datahora: "2025-02-06 às 10:15:30"
    },
    {
      id: 2,
      nome: "Ana Souza",
      ação: "Tentou login com senha incorreta",
      Datahora: "2025-02-06 às 10:45:12"
    },
    {
      id: 3,
      nome: "João Ferreira",
      ação: "Fez login no sistema",
      Datahora: "2025-02-06 às 11:05:20"
    },
    {
      id: 4,
      nome: "Fernanda Costa",
      ação: "Fez logout do sistema",
      Datahora: "2025-02-06 às 11:35:50"
    },
    {
      id: 5,
      nome: "Lucas Martins",
      ação: "Fez login no sistema",
      Datahora: "2025-02-06 às 12:10:15"
    },
    {
      id: 6,
      nome: "Ricardo Lima",
      ação: "Tentou login com conta inativa",
      Datahora: "2025-02-06 às 12:40:33"
    },
    {
      id: 7,
      nome: "Paula Oliveira",
      ação: "Fez login no sistema",
      Datahora: "2025-02-06 às 13:20:10"
    },
    {
      id: 8,
      nome: "Gustavo Rocha",
      ação: "Fez logout do sistema",
      Datahora: "2025-02-06 às 14:05:30"
    },
    {
      id: 9,
      nome: "Tatiane Silva",
      ação: "Fez login em outro dispositivo",
      Datahora: "2025-02-06 às 14:55:12"
    },
    {
      id: 10,
      nome: "Eduardo Nunes",
      ação: "Tentou login várias vezes sem sucesso",
      Datahora: "2025-02-06 às 15:30:45"
    },
    {
      id: 11,
      nome: "Patrícia Moreira",
      ação: "Fez login no sistema",
      Datahora: "2025-02-06 às 16:10:33"
    },
    {
      id: 12,
      nome: "Sérgio Almeida",
      ação: "Fez logout do sistema",
      Datahora: "2025-02-06 às 16:45:50"
    },
    {
      id: 13,
      nome: "Vanessa Duarte",
      ação: "Tentou login com senha incorreta",
      Datahora: "2025-02-06 às 17:15:20"
    },
    {
      id: 14,
      nome: "Marcelo Antunes",
      ação: "Fez login no sistema",
      Datahora: "2025-02-06 às 18:30:10"
    }
  ]);

  return ( 
    <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg">
      <div className="bg-amber-400 text-white p-4 font-semibold">
        Histórico de Movimentações de Login
      </div>

      <div className="p-4 flex justify-between font-bold bg-gray-200">
        <span>Nome</span>
        <span>Ação</span>
        <span>Data</span>
      </div>

      {insumos.map((i) => (
        <div className="border-b hover:bg-blue-50 p-4 flex justify-between">
          <span>{i.nome}</span>
          <span>{i.ação}</span>
          <span>{i.Datahora}</span>
        </div>
      ))}

    </div>
  );
}
