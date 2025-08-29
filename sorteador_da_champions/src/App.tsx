import { useState } from 'react'
import './App.css'
import {  Clube} from './models/classes';
import { Sorteador } from './services/Sorteador';

const App: React.FC=()=> {
  

  const [grupos, setGrupos] = useState<Clube[][]>([]);

  const handleSortear = () => {
    const sorteador = new Sorteador();
    const resultado = sorteador.organizarPotes(sorteador.potes);
    setGrupos(resultado);
  };

  return (
    <div>
      <h1>Sorteio da Champions</h1>
      <button onClick={handleSortear}>Sortear</button>

      {grupos.length > 0 && (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {grupos.map((grupo, idx) => (
            <div key={idx} style={{ border: "1px solid #ccc", padding: "10px" }}>
              <h2>Pote {idx + 1}</h2>
              <ul>
                {grupo.map((clube) => (
                  <li key={clube.id}>
                    <img src={clube.logo}></img>
                    {clube.nome} ({clube.pais})
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );

}

export default App;
