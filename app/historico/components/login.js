'use client'
import { useState } from "react";

export default function Login() {

  const [login, alteralogin] = useState([
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
    <div className="w-full max-w-4xl bg-stone-950 shadow-xl rounded-xl overflow-hidden text-white">
      <div className="bg-amber-400 text-stone-900 p-5 font-bold text-lg text-center">
        Histórico de Movimentações de Login
      </div>

      <div className="p-4 flex justify-between font-semibold bg-stone-900 text-stone-100 border-b border-stone-700">
        <span>Nome</span>
        <span>Ação</span>
        <span>Data</span>
      </div>

      {login.map((i, index) => (
        <div 
          key={index} 
          className="p-4 flex justify-between items-start bg-stone-700 border-b border-stone-800 hover:bg-stone-600 transition"
        >
          <span className="w-1/3">{i.nome}</span>
          <span className="w-1/3">{i.ação}</span>
          <span className="w-1/3 text-right">{i.Datahora}</span>
        </div>
      ))}
    </div>
  );
}
