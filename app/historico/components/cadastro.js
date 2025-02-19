'use client'
import { useState } from "react";

export default function Cadastro() {

  const cadastro = [
    {
      nome: "Marly Lopes",
      ação: "Cadastrou Marcelo Diniz",
      Datahora: "2024-12-06 às 09:06:50"
    },
    {
      nome: "Carlos Mendes",
      ação: "Cadastrou Fernanda Alves",
      Datahora: "2024-12-06 às 10:15:30"
    },
    {
      nome: "Ana Souza",
      ação: "Atualizou os dados de João Ricardo",
      Datahora: "2024-12-06 às 11:05:20"
    },
    {
      nome: "João Ferreira",
      ação: "Removeu o cadastro de Tatiane Lima",
      Datahora: "2024-12-06 às 12:30:45"
    },
    {
      nome: "Fernanda Costa",
      ação: "Cadastrou Gustavo Rocha",
      Datahora: "2024-12-06 às 13:10:22"
    },
    {
      nome: "Lucas Martins",
      ação: "Atualizou os dados de Eduardo Nunes",
      Datahora: "2024-12-06 às 14:45:15"
    },
    {
      nome: "Ricardo Lima",
      ação: "Removeu o cadastro de Vanessa Duarte",
      Datahora: "2024-12-06 às 15:20:10"
    },
    {
      nome: "Paula Oliveira",
      ação: "Cadastrou Patrícia Moreira",
      Datahora: "2024-12-06 às 16:30:50"
    },
    {
      nome: "Gustavo Rocha",
      ação: "Atualizou os dados de Sérgio Almeida",
      Datahora: "2024-12-06 às 17:10:40"
    },
    {
      nome: "Tatiane Silva",
      ação: "Cadastrou Marcos Antônio",
      Datahora: "2024-12-06 às 18:25:12"
    },
    {
      nome: "Eduardo Nunes",
      ação: "Removeu o cadastro de João Ferreira",
      Datahora: "2024-12-06 às 19:05:33"
    },
    {
      nome: "Patrícia Moreira",
      ação: "Cadastrou Laura Mendes",
      Datahora: "2024-12-06 às 19:50:29"
    },
    {
      nome: "Sérgio Almeida",
      ação: "Atualizou os dados de Paula Oliveira",
      Datahora: "2024-12-06 às 20:15:45"
    },
    {
      nome: "Vanessa Duarte",
      ação: "Removeu o cadastro de Ricardo Lima",
      Datahora: "2024-12-06 às 21:00:50"
    },
    {
      nome: "Marcelo Antunes",
      ação: "Cadastrou Beatriz Santos",
      Datahora: "2024-12-06 às 21:45:10"
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

      {cadastro.map((i) => (
        <div className="border-b hover:bg-blue-50 p-4 flex justify-between">
          <span>{i.nome}</span>
          <span>{i.ação}</span>
          <span>{i.Datahora}</span>
        </div>
      ))}

    </div>
  );
}

