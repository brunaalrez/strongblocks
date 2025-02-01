
function Blocos(arrt) {
    return ( 
        <div className="text-center border-solid text-gray-800 bg-yellow-50 ps-5 pe-5 border-gray-300 shadow-2xl ">
            <p>Qual tipo de bloco você precisa?</p>
            <img src="https://placehold.co/200"/>
            <p>{arrt.nomeproduto}</p>
            <button href="adiquirir_produto" className="bg-yellow-400 text-color-gray-400">Adiquirir</button>
        </div>
     );
}

export default Blocos;