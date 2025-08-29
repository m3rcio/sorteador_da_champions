import { Clube, Pote } from './classes';


const pote1 = new Pote(1, [
  new Clube("1", "PSG", "psg.png", 1, "França", []),
  new Clube("2", "Real Madrid", "realmadrid.png", 1, "Espanha", []),
  new Clube("3", "Manchester City", "mancity.png", 1, "Inglaterra", []),
  new Clube("4", "Barcelona", "barcelona.png", 1, "Espanha", []),
  new Clube("5", "Borussia Dortmund", "dortmund.png", 1, "Alemanha", []),
  new Clube("6", "Bayern de Munique", "bayern.png", 1, "Alemanha", []),
  new Clube("7", "Liverpool", "liverpool.png", 1, "Inglaterra", []),
  new Clube("8", "Inter de Milão", "inter.png", 1, "Itália", []),
  new Clube("9", "Chelsea", "chelsea.png", 1, "Inglaterra", []),
]);

const pote2 = new Pote(2, [
  new Clube("10", "Arsenal", "arsenal.png", 2, "Inglaterra", []),
  new Clube("11", "Bayer Leverkusen", "leverkusen.png", 2, "Alemanha", []),
  new Clube("12", "Atlético de Madrid", "atleti.png", 2, "Espanha", []),
  new Clube("13", "Benfica", "benfica.png", 2, "Portugal", []),
  new Clube("14", "Atalanta", "atalanta.png", 2, "Itália", []),
  new Clube("15", "Villarreal", "villarreal.png", 2, "Espanha", []),
  new Clube("16", "Juventus", "juventus.png", 2, "Itália", []),
  new Clube("17", "Eintracht Frankfurt", "frankfurt.png", 2, "Alemanha", []),
  new Clube("18", "Club Brugge", "brugge.png", 2, "Bélgica", []),
]);

const pote3 = new Pote(3, [
  new Clube("19", "Tottenham", "tottenham.png", 3, "Inglaterra", []),
  new Clube("36", "PSV", "psv.png", 3, "Holanda", []),
  new Clube("20", "Ajax", "ajax.png", 3, "Holanda", []),
  new Clube("21", "Napoli", "napoli.png", 3, "Itália", []),
  new Clube("22", "Sporting", "sporting.png", 3, "Portugal", []),
  new Clube("23", "Olympiacos", "olympiacos.png", 3, "Grécia", []),
  new Clube("24", "Slavia Praha", "slavia.png", 3, "República Tcheca", []),
  new Clube("25", "Bodø/Glimt", "bodo.png", 3, "Noruega", []),
  new Clube("26", "Marseille", "marseille.png", 3, "França", []),
]);

const pote4 = new Pote(4, [
  new Clube("27", "Copenhaga", "copenhaga.png", 4, "Dinamarca", []),
  new Clube("28", "Monaco", "monaco.png", 4, "França", []),
  new Clube("29", "Galatasaray", "galatasaray.png", 4, "Turquia", []),
  new Clube("30", "Union SG", "unionsg.png", 4, "Bélgica", []),
  new Clube("31", "Qarabag", "qarabag.png", 4, "Azerbaijão", []),
  new Clube("32", "Athletic Club", "athletic.png", 4, "Espanha", []),
  new Clube("33", "Newcastle", "newcastle.png", 4, "Inglaterra", []),
  new Clube("34", "Pafos", "pafos.png", 4, "Chipre", []),
  new Clube("35", "Kairat Almaty", "kairat.png", 4, "Cazaquistão", []),
]);

const potes=[pote1,pote2,pote3,pote4]

function organizarPotes(pote1,pote2,pote3,pote4){
    return [...pote1, ...pote2, ...pote3, ...pote4];
}