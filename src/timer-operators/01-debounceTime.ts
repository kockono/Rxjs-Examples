import { fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged, pluck, tap } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>( document, 'click' );
const input$ = fromEvent<KeyboardEvent>( document, 'input' );

// Emitira el evento despues de 3segundos pero, si continua en emision
// no lo emitira hasta que pasen por lo menos 3 segundos
click$.pipe(
	debounceTime(3000) // 3000ms = 3s
).subscribe(console.log);

const input = document.createElement('input');
document.querySelector('body').append( input )

input$.pipe(
	pluck('target', 'value'),
	debounceTime(1000),
	// De esta manera si borra y escribe lo mismo no hara doble envio
	distinctUntilChanged() 
)
.subscribe(console.log)