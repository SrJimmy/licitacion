import { mediaOfertas, maxOfertas } from "./licMath.js";

/**
 * Caso 1
 *
 * Cuando, concurriendo un solo licitador, sea inferior al presupuesto base de
 * licitación en más de 25 unidades de porcentaje.
 *
 * @param {Number} presupuestoBase
 * @param {Array} licitadores
 * @returns {Array}
 */
export function casoUno(presupuestoBase, licitadores) {
  const [lictA, ...resto] = [...licitadores];

  lictA.temeraria = lictA.oferta < presupuestoBase * 0.75;

  return [lictA, ...resto];
}

/**
 * Caso 2
 *
 * Cuando concurran dos licitadores, la que sea inferior en más de 20 unidades
 * de porcentaje a la otra oferta.
 *
 * @param {Array} licitadores
 * @returns {Array}
 */
export function casoDos(licitadores) {
  const [lictA, lictB, ...resto] = [...licitadores];

  lictA.temeraria = lictA.oferta < lictB.oferta * 0.8;
  lictB.temeraria = !lictA.temeraria && lictB.oferta < lictA.oferta * 0.8;

  return [lictA, lictB, ...resto];
}

/**
 * Caso 3
 *
 * Cuando concurran tres licitadores, las que sean inferiores en más de 10
 * unidades de porcentaje a la media aritmética de las ofertas presentadas.
 * No obstante, se excluirá para el cómputo de dicha media la oferta de cuantía
 * más elevada cuando sea superior en más de 10 unidades de porcentaje a dicha media.
 * En cualquier caso, se considerará desproporcionada la baja superior a
 * 25 unidades de porcentaje respecto al presupuesto base.
 *
 * @param {Number} presupuestoBase
 * @param {Array} licitadores
 * @returns {Array}
 */
export function casoTres(presupuestoBase, licitadores) {
  const licts = [...licitadores];

  const media =
    maxOfertas(licts, 1)[0].oferta > mediaOfertas(licts) * 1.1
      ? mediaOfertas(licts, maxOfertas(licts, 1))
      : mediaOfertas(licts);

  licts.forEach(
    (lict) =>
      (lict.temeraria =
        lict.oferta < media * 0.9 || lict.oferta < presupuestoBase * 0.75)
  );

  return licts;
}

/**
 * Caso 4
 *
 * Cuando concurran cuatro o más licitadores, las que sean inferiores en más de
 * 10 unidades de porcentaje a la media aritmética de las ofertas presentadas.
 * No obstante, si entre ellas existen ofertas que sean superiores a dicha media
 * en más de 10 unidades de porcentaje, se procederá al cálculo de una nueva media
 * sólo con las ofertas que no se encuentren en el supuesto indicado.En todo caso,
 * si el número de las restantes ofertas es inferior a tres, la nueva media se
 * calculará sobre las tres ofertas de menor cuantía.
 *
 * @param {Array} licitadores
 * @returns {Array}
 */
export function casoCuatro(licitadores) {
  const licts = [...licitadores];

  let media = mediaOfertas(licts);
  const lictsInferior = licts.filter((lict) => lict.oferta < media * 0.9);
  const lictsSuperior = licts.filter((lict) => lict.oferta > media * 1.1);

  if (lictsSuperior.length > 0) {
    media = mediaOfertas(licts, lictsSuperior);
  }

  if (lictsInferior.length < 3) {
    const lictsTresOfertasMenorCuantia = licts
      .sort((a, b) => a.oferta - b.oferta)
      .slice(0, 3);
    media = mediaOfertas(lictsTresOfertasMenorCuantia);
  }

  licts.forEach((lict) => (lict.temeraria = lict.oferta < media * 0.9));

  return licts;
}
