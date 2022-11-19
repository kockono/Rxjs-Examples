import { range, Observable, of, from, fromEvent } from 'rxjs';
import { filter, map, pluck } from 'rxjs/operators';

export interface heroe  { 
    tipo   : string;
    nombre : string;
}

const personajes:heroe[] = [
    {
        tipo:'heroe',
        nombre:'Batman'
    },
    {
        tipo:'heroe',
        nombre:'Superman'
    },
    {
        tipo:'enemigo',
        nombre:'Flash Reverso'
    },
]

const obs$ = of<any>(personajes);

// range(1, 10).pipe(
//     filter( value => value % 2 == 1 )
// ).subscribe(console.log)

from(personajes).pipe(
    filter( p => p.tipo == 'heroe')
).subscribe(console.log)

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' ).pipe(
    map( res => res.code), // Emite un String de un KeyboardEvent
    filter(key => key === 'Enter'),
    filter(key => key === 'Enter')
)

keyup$.subscribe(console.log)