'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importando o useRouter para navegação

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
  const router = useRouter(); // hook do router

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

    setErro(''); // Limpar mensagem de erro
    return true;
  };

  const handleSalvar = (e) => {
    e.preventDefault(); // Previne o comportamento padrão

    if (validarCampos()) {
      // Se a validação for bem-sucedida, redireciona para a tela de login
      router.push('/telalogin');
    }
  };

  return (
    <div>
      <div className="font-black p-2 rounded bg-yellow-400 text-white">
        <h1>StrongBlocks</h1>
      </div>

      <div className="flex flex-col min-h-screen bg-gray-400">
        <div className="">
          <h2 className="text-2xl text-white font-semibold mb-6">Dados para login:</h2>

          {/* Campos de formulário */}
          <input
            className="grid grid-cols-1 font-Regular-Italic p-2 rounded bg-yellow-400 text-white placeholder-white w-72"
            placeholder="Nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <br />
          <input
            className="grid grid-cols-1 font-Regular-Italic p-2 rounded bg-yellow-400 text-white placeholder-white w-72"
            placeholder="Data de Nascimento"
            type="date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
          />
          <br />
          <input
            className="grid grid-cols-1 font-Regular p-2 rounded bg-yellow-400 text-white placeholder-white w-72"
            placeholder="CPF"
            type="text" // Alterado para 'text' para evitar problemas com números
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <br />
          <input
            className="grid grid-cols-1 font-Regular p-2 rounded bg-yellow-400 text-white placeholder-white w-72"
            placeholder="RG"
            type="text" // Alterado para 'text' para evitar problemas com números
            value={rg}
            onChange={(e) => setRg(e.target.value)}
          />
          <br />
          <input
            className="grid grid-cols-1 font-Regular p-2 rounded bg-yellow-400 placeholder-white w-72"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <hr />
          <h2 className="text-white">Tipo de usuário</h2>
          <div className="flex flex-col text-white">
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
          <hr />
          <h3 className="text-white">Endereço</h3>
          <input
            className="font-Regular-Italic p-2 rounded bg-yellow-400 text-white placeholder-white w-72"
            placeholder="Rua"
            value={rua}
            onChange={(e) => setRua(e.target.value)}
          />
          <input
            className="font-Regular-Italic p-2 rounded bg-yellow-400 text-white placeholder-white w-72"
            placeholder="Número"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
          <input
            className="font-Regular-Italic p-2 rounded bg-yellow-400 text-white placeholder-white w-72"
            placeholder="Bairro"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
          />
          <input
            className="font-Regular-Italic p-2 rounded bg-yellow-400 text-white placeholder-white w-72"
            placeholder="Cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />
          <input
            className="font-Regular-Italic p-2 rounded bg-yellow-400 text-white placeholder-white w-72"
            placeholder="UF"
            value={uf}
            onChange={(e) => setUf(e.target.value)}
          />
          <br />
          <br />
          <h3 className="text-white">Telefone</h3>
          <input
            className="grid grid-cols-1 font-Regular-Italic p-2 rounded bg-yellow-400 text-white placeholder-white w-72"
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <br />
          <h3 className="text-white">Senha</h3>
          <input
            className="grid grid-cols-1 font-Regular-Italic p-2 rounded bg-yellow-400 text-white placeholder-white w-72"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            type="password"
          />
          <br />
          <input
            className="grid grid-cols-1 font-Regular-Italic p-2 rounded bg-yellow-400 text-white placeholder-white w-72"
            placeholder="Confirmar senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            type="password"
          />
          <br />
          {erro && <div className="text-red-500">{erro}</div>}

          {/* Botão que chama handleSalvar e realiza a navegação */}
          <button
            className="bg-black text-white p-2 rounded-full hover:bg-black w-24"
            onClick={handleSalvar} // Usando a função de validação e navegação
          >
            Salvar e continuar
          </button>
        </div>
      </div>
    </div>
  );
}
