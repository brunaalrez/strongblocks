function Produtos() {
    return ( 

        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg">
        <div className="bg-yellow-400 text-white p-4 font-semibold">Histórico de Movimentações produtos</div>

        <div className="p-4 flex justify-between font-bold bg-gray-200">
          <span>Nome</span>
          <span>Ação</span>
          <span>Data</span>
        </div>

        <div className="border-b hover:bg-blue-50 p-4 flex justify-between">
          <span>Bloco tipo A</span>
          <span>Realizada venda de 2 paletes</span>
          <span>2025-03-08 11:50:00</span>
        </div>

 
      </div>
     );
}

export default Produtos;