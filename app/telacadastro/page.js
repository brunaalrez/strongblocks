import Cadastro from "./components/cadastro";

export default function Usuario() {
  return (
    <div>
      <div className="p-2 rounded bg-blue-700 text-white">

      <h1>Cadastro de Usuário</h1>
      </div>
      

      <div className="flex justify-center items-center min-h-screen bg-blue-400">
      <div className="bg-white bg-opacity-80 p-6 rounded-lg w-80 shadow-lg">
        <h2 className="text-center text-2xl font-semibold mb-6">Prencha seus dados:</h2>
    
        <input className="p-2 rounded bg-blue-700 text-white placeholder-white w-72" placeholder="Nome" />
        <input className="p-2 rounded bg-blue-700 text-white placeholder-white w-72" placeholder="Sobrenome" />
        <input className="p-2 rounded bg-blue-700 text-white placeholder-white w-72" placeholder="Idade" type="number" />
        <input className="p-2 rounded bg-blue-700 text-white placeholder-white w-72" placeholder="CPF" />

        <button className="bg-black text-white p-2 rounded-full hover:bg-black w-24">
          Cadastrar
        </button>
 
 
 
  </div>
</div>



      
     
      
   
    </div>
  );
}