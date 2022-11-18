import { of, from } from 'rxjs';

/**
 * @of   - Toma argumentos y genera una secuencia de valores
 * @from - array, promise, iterable, observable
 */

const observer = {
    next: val => console.log( 'next', val ),
    error: () => console.log(  ),
    complete: () => console.log(  )
    
}

const source$ = from( [1,2,3,4,5] );
const source2$ = of( [1,2,3,4,5] );


// source$.subscribe( observer )
source2$.subscribe( observer )