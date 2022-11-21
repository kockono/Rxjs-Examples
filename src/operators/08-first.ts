import { fromEvent } from "rxjs";
import { first, map, take, tap } from "rxjs/operators";


const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    tap(()=> console.log('tap') ),
    // map(event => ({
    //     clientX: event.clientX,
    //     clientY: event.clientY,
    // })),
    first<MouseEvent>( ({clientX}:MouseEvent) => clientX >= 150)
    )

.subscribe( {
    next: val => console.log('next:', val),
    complete: () => console.log( 'Completado' )
})
