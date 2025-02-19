'use client'
import { useState } from "react";

export default function Cadastro() {

  const produtos = [
    {
      nome: "Marly Lopes",
      ação: "Cadastrou 2 paletes de Bloco tipo A",
      Datahora: "2024-12-06 às 09:06:50"
    },
    {
      nome: "Carlos Mendes",
      ação: "Cadastrou 5 paletes de Bloco tipo B",
      Datahora: "2024-12-06 às 09:30:12"
    },
    {
      nome: "Ana Souza",
      ação: "Realizou venda de 3 paletes de Bloco tipo A",
      Datahora: "2024-12-06 às 10:15:30"
    },
    {
      nome: "João Ferreira",
      ação: "Removeu 1 palete de Bloco tipo C",
      Datahora: "2024-12-06 às 10:45:05"
    },
    {
      nome: "Fernanda Costa",
      ação: "Atualizou quantidade de 4 paletes de Bloco tipo A",
      Datahora: "2024-12-06 às 11:20:40"
    },
    {
      nome: "Lucas Martins",
      ação: "Cadastrou 6 paletes de Bloco tipo D",
      Datahora: "2024-12-06 às 12:00:18"
    },
    {
      nome: "Ricardo Lima",
      ação: "Realizou venda de 2 paletes de Bloco tipo B",
      Datahora: "2024-12-06 às 12:30:50"
    },
    {
      nome: "Paula Oliveira",
      ação: "Atualizou 1 palete de Bloco tipo E",
      Datahora: "2024-12-06 às 13:05:15"
    },
    {
      nome: "Gustavo Rocha",
      ação: "Cadastrou 10 paletes de Bloco tipo C",
      Datahora: "2024-12-06 às 13:40:22"
    },
    {
      nome: "Tatiane Silva",
      ação: "Realizou venda de 4 paletes de Bloco tipo A",
      Datahora: "2024-12-06 às 14:10:55"
    },
    {
      nome: "Eduardo Nunes",
      ação: "Removeu 3 paletes de Bloco tipo D",
      Datahora: "2024-12-06 às 14:50:05"
    },
    {
      nome: "Patrícia Moreira",
      ação: "Atualizou 2 paletes de Bloco tipo B",
      Datahora: "2024-12-06 às 15:30:12"
    },
    {
      nome: "Sérgio Almeida",
      ação: "Cadastrou 7 paletes de Bloco tipo F",
      Datahora: "2024-12-06 às 16:00:47"
    },
    {
      nome: "Vanessa Duarte",
      ação: "Realizou venda de 5 paletes de Bloco tipo C",
      Datahora: "2024-12-06 às 16:35:20"
    },
    {
      nome: "Marcelo Antunes",
      ação: "Cadastrou 3 paletes de Bloco tipo E",
      Datahora: "2024-12-06 às 17:05:30"
    }
  ];

  return (
    <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg">
      <div className="bg-amber-400 text-white p-4 font-semibold">
        Histórico de Movimentações de Usuários
      </div>

      <div className="p-4 flex justify-between font-bold bg-gray-200">
        <span>Nome</span>
        <span>Ação</span>
        <span>Data</span>
      </div>

      {produtos.map((i) => (
        <div className="border-b hover:bg-blue-50 p-4 flex justify-between" key={i.Datahora}>
          <span>{i.nome}</span>
          <span>{i.ação}</span>
          <span>{i.Datahora}</span>
        </div>
      ))}

    </div>
  );
}

