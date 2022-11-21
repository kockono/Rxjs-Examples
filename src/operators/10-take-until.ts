import { fromEvent, interval } from "rxjs";
import { takeUntil, takeWhile } from "rxjs/operators";


const boton = document.createElement('Button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append( boton );

const counter$ = interval(1000);

// Referencia a mi boton HTML que se encuentra arriba
const clickBtn$ = fromEvent( boton, 'click' )

counter$.pipe(
    takeUntil( clickBtn$ )
)
.subscribe({
    next: value =>  console.log( value ),
    complete: () => console.log( 'Complete' ),

});