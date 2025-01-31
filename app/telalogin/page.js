import Login from "./components/Login";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-[#00f2fe] bg-blue-500">
      <div className="bg-white bg-opacity-80 p-6 rounded-lg w-80 shadow-lg">
        <h2 className="text-center text-2xl font-semibold mb-6">Bem vindo a StrongBlocks!<br/><br/> Faça seu login:</h2>
        
        <Login 
          login="Login" 
          senha="senha" 
          username="username" 
          Logar="Logar"
        />
      </div>
    </div>
  );
}