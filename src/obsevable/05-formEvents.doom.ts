import { fromEvent } from 'rxjs';

/**
 * Eventos del DOM
 */
// Te permite acceder a las propiedades de mouse <MouseEvent>
// Te permite acceder a las propiedades teclado <KeyboardEvent>
const source1$ = fromEvent<MouseEvent>(document, 'click');
const source2$ = fromEvent<KeyboardEvent>(document, 'keyup');
// No te permite acceder a las propiedades
// const source2$ = fromEvent(document, 'keyup');

const observer = {
    next: val => console.log( 'next', val )
    
}

// source1$.subscribe( ev => {
//     console.log( ev.x )
//     console.log( ev.y )
// });

// Destrocturado
source1$.subscribe( ({ x, y}) => {
    console.log( x )
    console.log( y )
    
});

source2$.subscribe( evento => {
    console.log( "evento:", evento.key)
    
});