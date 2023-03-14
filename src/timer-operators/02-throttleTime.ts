import { asyncScheduler, fromEvent } from "rxjs";
import { throttleTime, distinctUntilChanged, pluck } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>( document, 'click' );
const input$ = fromEvent<KeyboardEvent>( document, 'input' );

// Emitira el evento despues de 3segundos pero, si continua en emision
// no lo emitira hasta que pasen por lo menos 3 segundos
click$.pipe(
	throttleTime(3000) // 3000ms = 3s
).subscribe(console.log);

const input = document.createElement('input');
document.querySelector('body').append( input )

// Emitira el primer y ultimo valor
input$.pipe(
	pluck('target', 'value'),
	throttleTime(1000, asyncScheduler, {
        leading: true,
        trailing: true
    }),
	// De esta manera si borra y escribe lo mismo no hara doble envio
	distinctUntilChanged() 
)
.subscribe(console.log)