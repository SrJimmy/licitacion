/**
 * Calcula la media de las ofertas de los licitadores, excluyendo aquellos
 * que se encuentran en la lista de exclusiones.
 *
 * @param {Array} licitadores - Lista de licitadores con sus ofertas.
 * @param {Array} [exclusiones=[]] - Lista de licitadores a excluir del cálculo de la media.
 * @returns {number} - La media de las ofertas.
 */
export function mediaOfertas(licitadores, exclusiones = []) {
  let total = 0;
  let contador = 0;

  for (let i = 0; i < licitadores.length; i++) {
    const licitador = licitadores[i];

    // Excluye al licitador si se encuentra en el array de exclusiones
    if (exclusiones.some((exclusion) => exclusion.nombre === licitador.nombre)) {
      continue;
    }

    total += licitador.oferta;
    contador++;
  }

  return total / contador;
}

/**
 * Encuentra el objeto u objetos con ofertas máximas dentro de la lista de licitadores.
 * @param {Array} licitadores - Lista de objetos con la información de cada licitador.
 * @param {number} numObjetos - Número de objetos con ofertas máximas que se desean encontrar.
 * @returns {Array} - Lista de objetos con ofertas máximas.
 */
export function maxOfertas(licitadores, cantidad = 1) {
  // Ordenar la lista de licitadores de manera descendente según la oferta
  const licitadoresOrdenados = licitadores.sort((a, b) => b.oferta - a.oferta);

  return licitadoresOrdenados.slice(0, cantidad);
}
