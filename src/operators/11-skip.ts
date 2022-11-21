import { fromEvent, interval } from "rxjs";
import { skip, takeUntil, takeWhile, tap } from "rxjs/operators";


const boton = document.createElement('Button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append( boton );

const counter$ = interval(1000);

// Referencia a mi boton HTML que se encuentra arriba
const clickBtn$ = fromEvent( boton, 'click' ).pipe(
    tap(() => console.log( 'Antes del skip' )),
    skip(1),
    tap(() => console.log( 'tap despues del skip' ))
)

counter$.pipe(
    takeUntil( clickBtn$ )
)
.subscribe({
    next: value =>  console.log( value ),
    complete: () => console.log( 'Complete' ),

});