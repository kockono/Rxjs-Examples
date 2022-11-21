import { interval, timer } from 'rxjs';

const observer = {
    next: val => console.log( 'next', val ),
    complete: () => console.log('complete')
    
}

const hoyEn5 = new Date();
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5)

const interval$ = interval(1000);
// const timer$    = timer(2000);
// Permite poner intervalo y en que momento va disparar el intervalo
// Disparate en 2 segundos, y repitelo cada segundo 1s
// Puede recibir Fechas
const timer$    = timer(2000, 1000);

console.log( 'Inicio' )
// interval$.subscribe( observer )
timer$.subscribe( observer )
console.log( 'Fin' )