'use client'
import React from 'react';

function ComprovanteDeCompra() {
  function alertt(){
    alert('Compra aprovada!');
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-yellow-100 p-6 w-96 rounded-lg shadow-xl border border-gray-400">
        <h2 className="text-3xl font-bold text-center text-black mb-6">Carrinho</h2>
        <div className="space-y-4">
       
          <div className="space-y-2 text-black">
            <div className="flex justify-between">
              <span>Produto A</span>
              <span>????</span>
            </div>
            <div className="flex justify-between">
              <span>Produto B</span>
              <span>????</span>
            </div>
            <div className="flex justify-between">
              <span>Produto C</span>
              <span>????</span>
            </div>
          </div>

          <div className="border-t border-gray-400 pt-4 mt-4">
            <div className="flex justify-between font-bold text-xl text-black">
              <span>Total</span>
              <span>????</span>
            </div>
          </div>

          
          <div className="mt-6 text-center">
            <button onClick={()=> alertt()} className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-400 focus:outline-none transition duration-200">
              Finalizar Compra
            </button>
            <button onClick={()=> window.location.href='/produtos'}  className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-400 focus:outline-none transition duration-200 m-5">
              Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprovanteDeCompra;
