'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

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
      router.push('/telalogin');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col justify-center items-center">
      <div className="font-black p-4 rounded bg-yellow-400 text-white mb-6 text-center">
        <h1>StrongBlocks</h1>
      </div>

      <form className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Cadastro de Usuário</h2>

        {/* Form Inputs */}
        <div className="space-y-4">
          <input
            className="w-full p-3 rounded border border-gray-300"
            placeholder="Nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            className="w-full p-3 rounded border border-gray-300"
            type="date"
            placeholder="Data de Nascimento"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
          />
          <input
            className="w-full p-3 rounded border border-gray-300"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <input
            className="w-full p-3 rounded border border-gray-300"
            placeholder="RG"
            value={rg}
            onChange={(e) => setRg(e.target.value)}
          />
          <input
            className="w-full p-3 rounded border border-gray-300"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="space-y-2 mt-4">
            <h3 className="font-medium text-lg">Tipo de Usuário</h3>
            <div className="flex flex-col space-y-2">
              <label>
                <input
                  type="radio"
                  name="tipoUsuario"
                  value="administrador"
                  checked={tipoUsuario === 'administrador'}
                  onChange={(e) => setTipoUsuario(e.target.value)}
                />
                Administrador
              </label>
              <label>
                <input
                  type="radio"
                  name="tipoUsuario"
                  value="funcionario"
                  checked={tipoUsuario === 'funcionario'}
                  onChange={(e) => setTipoUsuario(e.target.value)}
                />
                Funcionário
              </label>
              <label>
                <input
                  type="radio"
                  name="tipoUsuario"
                  value="prestador"
                  checked={tipoUsuario === 'prestador'}
                  onChange={(e) => setTipoUsuario(e.target.value)}
                />
                Prestador
              </label>
              <label>
                <input
                  type="radio"
                  name="tipoUsuario"
                  value="fornecedor"
                  checked={tipoUsuario === 'fornecedor'}
                  onChange={(e) => setTipoUsuario(e.target.value)}
                />
                Fornecedor
              </label>
            </div>
          </div>

          {/* Endereço */}
          <div className="space-y-2 mt-4">
            <h3 className="font-medium text-lg">Endereço</h3>
            <input
              className="w-full p-3 rounded border border-gray-300"
              placeholder="Rua"
              value={rua}
              onChange={(e) => setRua(e.target.value)}
            />
            <input
              className="w-full p-3 rounded border border-gray-300"
              placeholder="Número"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
            <input
              className="w-full p-3 rounded border border-gray-300"
              placeholder="Bairro"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
            />
            <input
              className="w-full p-3 rounded border border-gray-300"
              placeholder="Cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
            <input
              className="w-full p-3 rounded border border-gray-300"
              placeholder="UF"
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            />
          </div>

          {/* Telefone */}
          <input
            className="w-full p-3 rounded border border-gray-300"
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />

          {/* Senha */}
          <div className="space-y-2 mt-4">
            <input
              className="w-full p-3 rounded border border-gray-300"
              placeholder="Senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <input
              className="w-full p-3 rounded border border-gray-300"
              placeholder="Confirmar senha"
              type="password"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
            />
          </div>

          {erro && <div className="text-red-500">{erro}</div>}

          <button
            className="w-full p-3 bg-yellow-500 text-white rounded mt-6"
            onClick={handleSalvar}
          >
            Salvar e Continuar
          </button>
        </div>
      </form>
    </div>
  );
}
