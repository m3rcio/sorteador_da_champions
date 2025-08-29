import { Clube,Pote } from "../models/classes";

export class Sorteador{
    

// potes=[this.pote1,this.pote2,this.pote3,this.pote4]

 organizarPotes(potes:Pote[]){

    let todosPotes=potes.flat(); // O flat retorna todos os arrays em um só

     
    for(let i=todosPotes.length -1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [todosPotes[i], todosPotes[j]] = [todosPotes[j], todosPotes[i]];
    }

     let resultado : any[]=[];
  for (let i = 0; i < todosPotes.length; i += 9) {
    resultado.push(todosPotes.slice(i, i + 9));
  }

  return resultado;
    
}

}