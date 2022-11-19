import { range } from "rxjs";
import { map, tap } from "rxjs/operators";


const numeros$ = range(1,5);
// Con el tap podemos depurar todo y ver la respuesta final que sería
// el complete
numeros$.pipe(
    tap( x => console.log('antes', x)),
    map( val => val * 10),
    tap({
        next: valor => console.log('despues', valor),
        complete: () => console.log('Se terminó todo')
    })
)
.subscribe( val => console.log('subs', val))

