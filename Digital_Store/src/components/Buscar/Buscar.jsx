import { useState } from "react";



export default function Buscar(){
    const [searchPage, setSearchPage] = useState('');
    

  


    return(
        <form >
            
             <input type="search" name="pesProduto" id="pesProduto"  placeholder="Pesquisar produto..." onChange={(e) => {
                let paginas = e.target.value.toLowerCase()
                paginas == 'home' ? paginas= '/ ' : paginas
                setSearchPage(paginas)
                
            }} />
            
            <button type="submit" className="nav-btn " id="btnPesquisa"><i className="bi bi-search"></i></button>
        </form>
    )
}