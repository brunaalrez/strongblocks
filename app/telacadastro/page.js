'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Usuario() {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [email, setEmail] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erro, setErro] = useState('');
  
  const router = useRouter();

  const validarCampos = () => {
    if (!nome || !dataNascimento || !cpf || !rg || !email || !tipoUsuario || !rua || !numero || !bairro || !cidade || !uf || !telefone || !senha || !confirmarSenha) {
      setErro('Por favor, preencha todos os campos obrigatórios.');
      return false;
    }
    if (cpf.length !== 11 || isNaN(cpf)) {
      setErro('CPF inválido. O CPF deve ter 11 dígitos.');
      return false;
    }
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      setErro('Por favor, insira um e-mail válido.');
      return false;
    }
    const regexTelefone = /^\d{10,11}$/;
    if (!regexTelefone.test(telefone)) {
      setErro('Por favor, insira um número de telefone válido (10 ou 11 dígitos).');
      return false;
    }
    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem.');
      return false;
    }

    setErro('');
    return true;
  };

  const handleSalvar = (e) => {
    e.preventDefault();
    if (validarCampos()) {
  
      console.log('Cadastro realizado com sucesso');
      
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6 flex flex-col justify-center items-center">
      
      <div className="mb-6">
        <Image
          src="/strongblocks-logo.jpg"
          alt="StrongBlocks Logo"
          width={120}
          height={120}
          className="rounded-lg shadow-md"
        />
      </div>

      <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Cadastro de Usuário</h2>

        <div className="space-y-4">
          <input
            className="w-full p-3 rounded-lg border border-gray-300"
            placeholder="Nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            className="w-full p-3 rounded-lg border border-gray-300"
            type="date"
            placeholder="Data de Nascimento"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
          />
          <input
            className="w-full p-3 rounded-lg border border-gray-300"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <input
            className="w-full p-3 rounded-lg border border-gray-300"
            placeholder="RG"
            value={rg}
            onChange={(e) => setRg(e.target.value)}
          />
          <input
            className="w-full p-3 rounded-lg border border-gray-300"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="space-y-2 mt-4">
            <h3 className="font-medium text-lg text-gray-900">Tipo de Usuário</h3>
            <div className="flex flex-col space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="tipoUsuario"
                  value="administrador"
                  checked={tipoUsuario === 'administrador'}
                  onChange={(e) => setTipoUsuario(e.target.value)}
                  className="mr-2"
                />
                Administrador
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="tipoUsuario"
                  value="funcionario"
                  checked={tipoUsuario === 'funcionario'}
                  onChange={(e) => setTipoUsuario(e.target.value)}
                  className="mr-2"
                />
                Funcionário
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="tipoUsuario"
                  value="prestador"
                  checked={tipoUsuario === 'prestador'}
                  onChange={(e) => setTipoUsuario(e.target.value)}
                  className="mr-2"
                />
                Prestador
              </label>
            </div>
          </div>

          <div className="space-y-2 mt-4">
            <h3 className="font-medium text-lg text-gray-900">Endereço</h3>
            <input
              className="w-full p-3 rounded-lg border border-gray-300"
              placeholder="Rua"
              value={rua}
              onChange={(e) => setRua(e.target.value)}
            />
            <input
              className="w-full p-3 rounded-lg border border-gray-300"
              placeholder="Número"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
            <input
              className="w-full p-3 rounded-lg border border-gray-300"
              placeholder="Bairro"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
            />
            <input
              className="w-full p-3 rounded-lg border border-gray-300"
              placeholder="Cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
            <input
              className="w-full p-3 rounded-lg border border-gray-300"
              placeholder="UF"
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            />
          </div>

          <input
            className="w-full p-3 rounded-lg border border-gray-300"
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />

          <div className="space-y-2 mt-4">
            <input
              className="w-full p-3 rounded-lg border border-gray-300"
              placeholder="Senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <input
              className="w-full p-3 rounded-lg border border-gray-300"
              placeholder="Confirmar senha"
              type="password"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
            />
          </div>

          {erro && <div className="text-red-500">{erro}</div>}

          <button
            className="w-full p-3 bg-amber-400 text-white rounded-lg mt-6 transition hover:bg-amber-500"
            onClick={handleSalvar}
          >
            Cadastrar
          </button>

          <div className="mt-4 text-center">
            <p> Já tem uma conta?</p>
            <Link href="/telalogin">
              <button className="w-full p-2 text-lg bg-black text-white rounded-md">
                Fazer Login
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
