import { from } from "rxjs";
import { reduce, scan } from "rxjs/operators";

/**
 * Basicamante un Fibonacci
 * 1+2+3+4+5 = 15
 * El valor acomulado actual
 * @take   - El numero de veces que repite el interval
 * @scan   - Emite el calor de una x una
 */

const numbers = [1,2,3,4,5]

const totalReducer = ( acum: number, valueActual:number ) => acum + valueActual;

from( numbers ).pipe(
    reduce( totalReducer)
)
.subscribe(console.log)

from( numbers ).pipe(
    scan( totalReducer)
)
.subscribe(console.log)