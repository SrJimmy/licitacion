import * as math from './math.js';

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
    const licitadorA = licitadores[0];

    if (licitadorA.oferta < presupuestoBase * 0.75) {
        licitadorA.temeraria = true;
    }

    return licitadores;
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
    const licitadorA = licitadores[0];
    const licitadorB = licitadores[1];

    if (licitadorA.oferta < licitadorB.oferta * 0.8) {
        licitadorA.temeraria = true;
    } else if (licitadorB.oferta < licitadorA.oferta * 0.8) {
        licitadorB.temeraria = true;
    }

    return licitadores;
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
    let media = math.average(licitadores);
    const licitadorMax = math.max(licitadores, 1);

    if (licitadorMax[0].oferta > media * 1.1) {
        media = math.average(licitadores, licitadorMax);
    }

    licitadores.forEach(licitador => {
        if (licitador.oferta < media * 0.9 || licitador.oferta < presupuestoBase * 0.75) {
            licitador.temeraria = true;
        }
    });

    return licitadores;
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
    return licitadores;
}