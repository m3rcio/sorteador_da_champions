import { Clube,Pote } from "../models/classes";

export class Sorteador{
    

 pote1 = new Pote(1, [
  new Clube("1", "PSG", "https://img.uefa.com/imgml/TP/teams/logos/32x32/52747.png", 1, "França", []),
  new Clube("2", "Real Madrid", "https://img.uefa.com/imgml/TP/teams/logos/32x32/50051.png", 1, "Espanha", []),
  new Clube("3", "Manchester City", "https://img.uefa.com/imgml/TP/teams/logos/32x32/52919.png", 1, "Inglaterra", []),
  new Clube("4", "Barcelona", "https://img.uefa.com/imgml/TP/teams/logos/32x32/50080.png", 1, "Espanha", []),
  new Clube("5", "Borussia Dortmund", "https://img.uefa.com/imgml/TP/teams/logos/32x32/52758.png", 1, "Alemanha", []),
  new Clube("6", "Bayern de Munique", "https://img.uefa.com/imgml/TP/teams/logos/32x32/50037.png", 1, "Alemanha", []),
  new Clube("7", "Liverpool", "https://img.uefa.com/imgml/TP/teams/logos/32x32/7889.png", 1, "Inglaterra", []),
  new Clube("8", "Inter de Milão", "https://img.uefa.com/imgml/TP/teams/logos/32x32/50138.png", 1, "Itália", []),
  new Clube("9", "Chelsea", "https://img.uefa.com/imgml/TP/teams/logos/32x32/52914.png", 1, "Inglaterra", []),
]);

 pote2 = new Pote(2, [
  new Clube("10", "Arsenal", "https://img.uefa.com/imgml/TP/teams/logos/32x32/52280.png", 2, "Inglaterra", []),
  new Clube("11", "Bayer Leverkusen", "https://img.uefa.com/imgml/TP/teams/logos/32x32/50109.png", 2, "Alemanha", []),
  new Clube("12", "Atlético de Madrid", "https://img.uefa.com/imgml/TP/teams/logos/32x32/50124.png", 2, "Espanha", []),
  new Clube("13", "Benfica", "https://img.uefa.com/imgml/TP/teams/logos/32x32/50147.png", 2, "Portugal", []),
  new Clube("14", "Atalanta", "https://img.uefa.com/imgml/TP/teams/logos/32x32/52816.png", 2, "Itália", []),
  new Clube("15", "Villarreal", "https://img.uefa.com/imgml/TP/teams/logos/32x32/70691.png", 2, "Espanha", []),
  new Clube("16", "Juventus", "https://img.uefa.com/imgml/TP/teams/logos/32x32/50139.png", 2, "Itália", []),
  new Clube("17", "Eintracht Frankfurt", "https://img.uefa.com/imgml/TP/teams/logos/32x32/50072.png", 2, "Alemanha", []),
  new Clube("18", "Club Brugge", "https://img.uefa.com/imgml/TP/teams/logos/32x32/50043.png", 2, "Bélgica", []),
]);

 pote3 = new Pote(3, [
  new Clube("19", "Tottenham", "https://img.uefa.com/imgml/TP/teams/logos/32x32/1652.png", 3, "Inglaterra", []),
  new Clube("36", "PSV", "https://img.uefa.com/imgml/TP/teams/logos/32x32/50062.png", 3, "Holanda", []),
  new Clube("20", "Ajax", "https://img.uefa.com/imgml/TP/teams/logos/32x32/50143.png", 3, "Holanda", []),
  new Clube("21", "Napoli", "https://img.uefa.com/imgml/TP/teams/logos/32x32/50136.png", 3, "Itália", []),
  new Clube("22", "Sporting", "https://img.uefa.com/imgml/TP/teams/logos/32x32/50149.png", 3, "Portugal", []),
  new Clube("23", "Olympiacos", "https://img.uefa.com/imgml/TP/teams/logos/32x32/2610.png", 3, "Grécia", []),
  new Clube("24", "Slavia Praha", "https://img.uefa.com/imgml/TP/teams/logos/32x32/52498.png", 3, "República Tcheca", []),
  new Clube("25", "Bodø/Glimt", "https://img.uefa.com/imgml/TP/teams/logos/32x32/59333.png", 3, "Noruega", []),
  new Clube("26", "Marseille", "https://img.uefa.com/imgml/TP/teams/logos/32x32/52748.png", 3, "França", []),
]);

  pote4 = new Pote(4, [
  new Clube("27", "Copenhaga", "https://img.uefa.com/imgml/TP/teams/logos/32x32/52709.png", 4, "Dinamarca", []),
  new Clube("28", "Monaco", "https://img.uefa.com/imgml/TP/teams/logos/32x32/50023.png", 4, "França", []),
  new Clube("29", "Galatasaray", "https://img.uefa.com/imgml/TP/teams/logos/32x32/50067.png", 4, "Turquia", []),
  new Clube("30", "Union SG", "https://img.uefa.com/imgml/TP/teams/logos/32x32/64125.png", 4, "Bélgica", []),
  new Clube("31", "Qarabag", "https://img.uefa.com/imgml/TP/teams/logos/32x32/60609.png", 4, "Azerbaijão", []),
  new Clube("32", "Athletic Club", "https://img.uefa.com/imgml/TP/teams/logos/32x32/50125.png", 4, "Espanha", []),
  new Clube("33", "Newcastle", "https://img.uefa.com/imgml/TP/teams/logos/32x32/59324.png", 4, "Inglaterra", []),
  new Clube("34", "Pafos", "https://img.uefa.com/imgml/TP/teams/logos/32x32/2609532.png", 4, "Chipre", []),
  new Clube("35", "Kairat Almaty", "https://img.uefa.com/imgml/TP/teams/logos/32x32/79970.png", 4, "Cazaquistão", []),
]);

potes=[this.pote1,this.pote2,this.pote3,this.pote4];

 organizarPotes(potes:Pote[]){

      let todosPotes = potes.map(p => p.clubes).flat(); // O flat retorna todos os arrays em um só

     
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