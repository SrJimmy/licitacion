import { casoUno, casoDos, casoTres, casoCuatro } from './casos.js';

function licitacion(presupuestoBase, licitadores) {
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

const presupuestoBase = 10000;
const licitadores = [
    { nombre: 'Pacos S.L', oferta: 7300, temeraria: false },
    { nombre: 'Hierros S.L', oferta: 9700, temeraria: false },
    { nombre: 'Marcos S.L', oferta: 5100, temeraria: false },
    // { nombre: 'Sillas S.L', oferta: 1000, temeraria: false },
    // { nombre: 'Monitores S.L', oferta: 5000, temeraria: false },
];

console.log(licitacion(presupuestoBase, licitadores))