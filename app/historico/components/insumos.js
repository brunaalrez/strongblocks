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
      ação: "Adicionou 300m² de tijolos",
      Datahora: "2025-02-06 às 12:45:22"
    },
    {
      id: 3,
      nome: "João Ferreira",
      ação: "Adicionou 20 sacos de cal",
      Datahora: "2025-02-07 às 08:20:10"
    },
    {
      id: 4,
      nome: "Fernanda Costa",
      ação: "Removeu 50m de ferro 10mm",
      Datahora: "2025-02-07 às 09:35:50"
    },
    {
      id: 5,
      nome: "Lucas Martins",
      ação: "Adicionou 100 litros de tinta branca",
      Datahora: "2025-02-07 às 10:55:15"
    },
    {
      id: 6,
      nome: "Ricardo Lima",
      ação: "Adicionou 30m² de telha cerâmica",
      Datahora: "2025-02-07 às 11:10:40"
    },
    {
      id: 7,
      nome: "Paula Oliveira",
      ação: "Removeu 15 sacos de argamassa",
      Datahora: "2025-02-08 às 07:45:30"
    },
    {
      id: 8,
      nome: "Gustavo Rocha",
      ação: "Adicionou 250m de fio elétrico 4mm",
      Datahora: "2025-02-08 às 09:10:25"
    },
    {
      id: 9,
      nome: "Tatiane Silva",
      ação: "Adicionou 40m² de piso porcelanato",
      Datahora: "2025-02-08 às 11:55:12"
    },
    {
      id: 10,
      nome: "Eduardo Nunes",
      ação: "Removeu 5 rolos de lã de vidro",
      Datahora: "2025-02-09 às 08:30:45"
    },
    {
      id: 11,
      nome: "Patrícia Moreira",
      ação: "Adicionou 150m de tubo PVC 50mm",
      Datahora: "2025-02-09 às 10:40:33"
    },
    {
      id: 12,
      nome: "Sérgio Almeida",
      ação: "Adicionou 10 latas de verniz",
      Datahora: "2025-02-09 às 14:05:50"
    },
    {
      id: 13,
      nome: "Vanessa Duarte",
      ação: "Removeu 300kg de brita",
      Datahora: "2025-02-10 às 09:15:20"
    },
    {
      id: 14,
      nome: "Marcelo Antunes",
      ação: "Adicionou 50m de cabo coaxial",
      Datahora: "2025-02-10 às 10:30:10"
    }
  ]);

  return (
    <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg">
      <div className="bg-amber-400 text-white p-4 font-semibold">Histórico de Movimentações de insumos</div>

      <div className="p-4 flex justify-between font-bold bg-gray-200">
        <span>Nome</span>
        <span>Ação</span>
        <span>Data</span>
      </div>

      {insumo.map((i) => (
        <div className="border-b hover:bg-blue-50 p-4 flex justify-between">
          <span>{i.nome}</span>
          <span>{i.ação}</span>
          <span>{i.Datahora}</span>
        </div>
      ))}

      <div className="border-b hover:bg-blue-50 p-4 flex justify-between">
        <span>João Silva</span>
        <span>Removeu 50kg pó de pedra</span>
        <span>2025-02-06 às 10:58:08</span>
      </div>

    </div>
  );
}

