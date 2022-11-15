import { of } from 'rxjs'

// unknow: No hemos especificado el tipado
// Crea una secuencia de cosas, desde objetos, numeros, string, promesas, boleanos
const obs$ = of<any>([1,2],{a:1, b:2, }, function(){}, true, Promise.resolve(true) );

console.log( 'Inicio del Obs$' )
obs$.subscribe( 
    next => console.log( 'next', next ),
    error =>  null,
    () => console.log( 'terminamos la secuencia' )
    
)
console.log( 'Fin del Obs$' )
