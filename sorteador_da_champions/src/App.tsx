import { useState } from 'react'
import './App.css'
import {  Clube} from './models/classes';
import { Sorteador } from './services/Sorteador';

const App: React.FC=()=> {
  
   
    const sorteador = new Sorteador();

  const [grupos, setGrupos] = useState<Clube[][]>(
    sorteador.potes.map((pote) => pote.clubes) 
  );

  const handleSortear = () => {
    const resultado = sorteador.organizarPotes(sorteador.potes);
    setGrupos(resultado);
  };
  const mostrarAdversarios=()=>{
    const resultado = sorteador.sortearAdversarios(); // agora retorna Clube[][]
  setGrupos(resultado);
  }
  
  return (
    <div>
      <h1>Sorteio da Champions</h1>
      {/* <button onClick={handleSortear} className='sortear'>Sortear</button> */}
      <button onClick={mostrarAdversarios}>Mosrar Adversários</button>
  
      {grupos.length > 0 && (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {grupos.map((grupo, idx) => (
            <div key={idx} style={{  padding: "10px" }}>
              <div className='poteTitle'><h2>Pote {idx + 1}</h2></div>
              <ul className='clubes_do_pote'>
                {grupo.map((clube) => (
                  <><h2><img src={clube.logo}></img> {clube.nome} </h2><li key={clube.id}>
                    <ul className="adversario-list">
                      {clube.jogos.map((jogo, i) => (
                        <li key={i}>
                          <img src={jogo.adversarioLogo.join(", ")} alt="" /> {jogo.adversarioNome} ({jogo.local})
                        </li>
                      ))}
                    </ul>
                  </li></>
                ))}
              </ul>
              
            </div>
          ))}
        </div>
      )}
      {/* {grupos.map((grupo, idx)=>{
        <div key={}>
          <h2>Pote {</h2>
        </div>
      })} */}
      
    </div>
  );

}

export default App;
