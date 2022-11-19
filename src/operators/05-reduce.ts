import { interval } from "rxjs";
import { take, tap, reduce } from "rxjs/operators";

/**
 * Basicamante un Fibonacci
 * 1+2+3+4+5 = 15
 * El valor acomulado actual
 * @take   - El numero de veces que repite el interval
 * @reduce - Emite todos los valores de una
 */

const numbers = [1,2,3,4,5]

const totalReducer = ( acumalador: number, valorActual:number ) => {
    return acumalador + valorActual;
}

const total = numbers.reduce( totalReducer )

interval(500).pipe(
    take(6),
    tap(console.log),
    reduce(totalReducer)
)
.subscribe({
    next: val => console.log( val ),
    complete: () => console.log( 'Completado' )
})