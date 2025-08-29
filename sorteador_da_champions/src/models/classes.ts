export class Clube {
 
   id!: string;                
   nome?: string;
   logo?: string;
   pote?: number;
   pais?: string;
   jogos?: 
    { adversarioId: string, local: "casa" | "fora" }[]
}

export class Pote {
 
     id!: number;
     clubes?: Clube[]
}