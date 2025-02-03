import Cadastro from "./components/cadastro";

export default function Usuario() {
  return (
    <div>
      <div className="font-black p-2 rounded bg-blue-700 text-white">

      <h1>StrongBlocks</h1>
      </div>
      

      <div className="flex flex-col min-h-screen bg-blue-400">
      <div className="">
        <h2 className="text-2xl text-white font-semibold mb-6">Dados para login:</h2>
    
        <input className=" grid grid-cols-1 font-Regular-Italic p-2 rounded bg-blue-700 text-white placeholder-white w-72" placeholder="Nome completo" />
        <input className=" grid grid-cols-1 font-Regular-Italic p-2 rounded bg-blue-700 text-white placeholder-white w-72" placeholder="Data de Nascimento" type="date" />
        <input className=" grid grid-cols-1 font-Regular p-2 rounded bg-blue-700 text-white placeholder-white w-72" placeholder="CPF" type="number" />
        <input className=" grid grid-cols-1 font-Regular p-2 rounded bg-blue-700 text-white placeholder-white w-72" placeholder="RG" type="number" />
        <input className=" grid grid-cols-1 font-Regular p-2 rounded bg-blue-700 placeholder-white w-72" placeholder="Email" />

        <hr/>

        <h2 className="text-white">Tipo de usuario</h2>
        <input className=" grid grid-cols-1 font-light rounded bg-blue-700 placeholder-white w-72" placeholder="Admnistrador" />
        <input className=" grid grid-cols-1 font-light rounded bg-blue-700 placeholder-white w-72" placeholder="Funcionario" />
        <input className=" grid grid-cols-1 font-light rounded bg-blue-700 placeholder-white w-30" placeholder="Prestador" />
      

        <button className="bg-black text-white p-2 rounded-full hover:bg-black w-24">
          Salvar e continuar
        </button>
 
 
  </div>
</div>


      
     
      
   
    </div>
  );
}