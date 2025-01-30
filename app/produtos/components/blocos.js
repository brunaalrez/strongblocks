function Blocos(arrt) {
    return ( 
        <div className="text-center border-solid border w-1/5 bg-zinc-50 p-5">
            <p>Qual tipo de bloco você precisa?</p>
            <img src="https://placehold.co/200"/>
            <p>{arrt.nomeproduto}</p>
            <a><button>Adiquirir</button></a>
        </div>
     );
}

export default Blocos;