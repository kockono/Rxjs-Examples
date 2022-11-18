import { asyncScheduler } from 'rxjs';

// setTimeout(() => { }, 30000);
// setInterval(()  => { }, 3000)

const saludar = () =>  console.log( 'Hola Mundo' );
const saludarConParametro = name =>  console.log( 'Hola', name );

// param1: Función, param2: tiempo de ejecución, param3: parametro para la función
// asyncScheduler.schedule( saludar, 2000)
asyncScheduler.schedule( saludarConParametro, 2000, 'Chris')

const subs = asyncScheduler.schedule( function(state){
    console.log( state )

    // Mando el estado, y cada cuando lo va emitir cada 1s
    this.schedule(state + 1, 1000)
    
}, 3000, 0)

// Destruyelo despues de 10 segundos
setTimeout(() => {
    subs.unsubscribe();
}, 10000);

// 2da Manera, destruyelo a los 6 segundos
asyncScheduler.schedule( ()=> subs.unsubscribe(), 6000);