import { casoUno, casoDos, casoTres, casoCuatro } from './casos.js';

export default function licitacion(presupuestoBase, licitadores) {
  const numLics = licitadores.length;

  switch (numLics) {
    case 1:
      return casoUno(presupuestoBase, licitadores);
    case 2:
      return casoDos(licitadores);
    case 3:
      return casoTres(presupuestoBase, licitadores);
    default:
      return casoCuatro(licitadores);
  }
}