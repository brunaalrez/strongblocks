export default function Login ({ login, senha, username, Logar }) {
    return (
      <div>
        <div className="mb-4">
          <label htmlFor={username} className="block text-sm mb-2">{login}</label>
          <input 
            type="text" 
            id={username} 
            name={username} 
            className="w-full p-2 text-lg border border-gray-300 rounded-md" 
          />
        </div>
  
        <div className="mb-4">
          <label htmlFor={senha} className="block text-sm mb-2">{senha}</label>
          <input 
            type="password" 
            id={senha} 
            name={senha} 
            className="w-full p-2 text-lg border border-gray-300 rounded-md" 
          />
        </div>
  
        <button 
          type="submit" 
          className="w-full p-2 text-lg bg-[#4facfe] text-white rounded-md hover:bg-[#00f2fe]"
        >
          {Logar}
        </button>
      </div>
    );
  }