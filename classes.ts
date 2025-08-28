export class Clube {
  constructor(
  public id: string,                
  public nome: string,
  public logo: string,
  public pote: number,
  public pais: string,
  public jogos: 
    { adversarioId: string, local: "casa" | "fora" }[]
  ){}
}

export class Pote {
  constructor(
    public id: number,
    public clubes: Clube[]
  ) {}
}