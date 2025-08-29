export class Clube {
 
  id: string;
  nome?: string;
  logo?: string;
  pote?: number;
  pais: string;
  jogos: Jogo[];

  constructor(
    id: string,
    nome: string,
    logo: string,
    pote: number,
    pais: string,
    jogos: Jogo[]
  ) {
    this.id = id;
    this.nome = nome;
    this.logo = logo;
    this.pote = pote;
    this.pais = pais;
    this.jogos = jogos ?? [];
  }
}

export class Pote {
 
     id: number;
  clubes: Clube[];

  constructor(id: number, clubes: Clube[]) {
    this.id = id;
    this.clubes = clubes;
  }
}

export interface Jogo {
  adversarioId: string[];           
  local: "casa" | "fora";
}