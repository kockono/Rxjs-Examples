import { asyncScheduler, of, range } from 'rxjs';

// El segundo valor emite 10 veces desde el -5 apartir del -5
// -5: Inicio, 10: Emisiones
const src$ = range(-5, 10)

// Lo convierte en async
const srcAsync$ = range(1, 5, asyncScheduler)

console.log( 'Inicio' )
src$.subscribe(console.log)
srcAsync$.subscribe(console.log)
console.log( 'Fin' )
