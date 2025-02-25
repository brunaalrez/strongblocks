import Login from "./components/Login";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r bg-gray-200">
      <div className="bg-white bg-opacity-80 p-6 rounded-lg w-80 shadow-lg flex flex-col items-center">
        <div className="mb-6">
          <Image
            src="/strongblocks-logo.jpg"
            alt="StrongBlocks Logo"
            width={120}
            height={120}
            className="rounded-lg shadow-md"
          />
        </div>
        
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
