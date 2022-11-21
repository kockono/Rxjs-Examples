import { fromEvent } from "rxjs";
import { takeWhile } from "rxjs/operators";


const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    takeWhile( ({ y }) =>  y <= 150, true)
)

.subscribe( {
    next: val => console.log('next:', val),
    complete: () => console.log( 'Completado' )
})
