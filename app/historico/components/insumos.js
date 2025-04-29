'use client'
import { useState } from "react";

export default function Insumos() {

  const [insumo, alterainsumo] = useState([
    {
      id: 0,
      nome: "Marly Lopes",
      ação: "Adicionou 500kg de cimento",
      Datahora: "2025-02-06 às 10:01:45"
    },
    {
      id: 1,
      nome: "Carlos Mendes",
      ação: "Removeu 200kg de areia",
      Datahora: "2025-02-06 às 11:15:30"
    },
    {
      id: 2,
      nome: "Ana Souza",
      ação: "Adicionou 300kg de cimento",
      Datahora: "2025-02-06 às 12:45:22"
    },
    {
      id: 3,
      nome: "João Ferreira",
      ação: "Adicionou 20kg de pó de pedra",
      Datahora: "2025-02-07 às 08:20:10"
    },
    {
      id: 4,
      nome: "Fernanda Costa",
      ação: "Removeu 50kg de cimento",
      Datahora: "2025-02-07 às 09:35:50"
    },
    {
      id: 5,
      nome: "Lucas Martins",
      ação: "Adicionou 100kg de areia",
      Datahora: "2025-02-07 às 10:55:15"
    },
    {
      id: 6,
      nome: "Ricardo Lima",
      ação: "Adicionou 30kg de cimento",
      Datahora: "2025-02-07 às 11:10:40"
    },
    {
      id: 7,
      nome: "Paula Oliveira",
      ação: "Removeu 15kg de pó de pedra",
      Datahora: "2025-02-08 às 07:45:30"
    },
    {
      id: 8,
      nome: "Gustavo Rocha",
      ação: "Adicionou 250kg de areia",
      Datahora: "2025-02-08 às 09:10:25"
    },
    {
      id: 9,
      nome: "Tatiane Silva",
      ação: "Adicionou 40kg de cimento",
      Datahora: "2025-02-08 às 11:55:12"
    },
    {
      id: 10,
      nome: "Eduardo Nunes",
      ação: "Removeu 50kg de areia",
      Datahora: "2025-02-09 às 08:30:45"
    },
    {
      id: 11,
      nome: "Patrícia Moreira",
      ação: "Adicionou 150kg de pó de pedra",
      Datahora: "2025-02-09 às 10:40:33"
    },
    {
      id: 12,
      nome: "Sérgio Almeida",
      ação: "Adicionou 10kg de cimento",
      Datahora: "2025-02-09 às 14:05:50"
    },
    {
      id: 13,
      nome: "Vanessa Duarte",
      ação: "Removeu 300kg de pó de pedra",
      Datahora: "2025-02-10 às 09:15:20"
    },
    {
      id: 14,
      nome: "Marcelo Antunes",
      ação: "Adicionou 50kg de areia",
      Datahora: "2025-02-10 às 10:30:10"
    }
  ]);

  return (
    <div className="w-full max-w-4xl bg-stone-950 shadow-xl rounded-xl overflow-hidden text-white">
      <div className="bg-amber-400 text-stone-900 p-5 font-bold text-lg text-center">
        Histórico de Movimentações de Insumos
      </div>

      <div className="p-4 flex justify-between font-semibold bg-stone-900 text-stone-100 border-b border-stone-700">
        <span>Nome</span>
        <span>Ação</span>
        <span>Data</span>
      </div>

      {insumo.map((i, index) => (
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
