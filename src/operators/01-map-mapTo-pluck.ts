import { fromEvent, range } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';

range(1, 5) // Recibe un numero y retorna un numero
.pipe(map<number, number>( (valor:number) =>  valor * 10 ))
.subscribe(console.log)

// const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup')
//                .pipe(
//                 map( event => event.code ) )
//                .subscribe( console.log )

// Lo separo por 3 fases
const keyUp$$ = fromEvent<KeyboardEvent>(document, 'keyup')



const keyupPluck$ = keyUp$$.pipe(
    pluck('target', 'baseURI') // ==  tartget.baseUri
);

const keyupMapTo$ = keyUp$$.pipe(
    mapTo('tecla presionada')
);

const keyupCode$ = keyUp$$.pipe(
    map( event => event.code)
)

// keyupCode$.subscribe()
keyupPluck$.subscribe(res => console.log('pluck', res))
keyupMapTo$.subscribe(res => console.log('mapTo', res))
keyupCode$.subscribe(res => console.log('map', res))
