interface ILicitador {
  nombre: string;
  oferta: number;
  temeraria: boolean;
}

export interface ILicitadores extends Array<ILicitador> {}
