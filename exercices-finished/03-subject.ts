import { interval, Subject } from 'rxjs';
import { take, map } from 'rxjs/operators';
/**
 * Ejercicio: Realizar que los dos observables finales, 
 * emitan exactamente el mismo valor
 * 
 * Tip: Hot Observable? subjects?
 */

(() =>{

  // == NO TOCAR este bloque ====================
  const reloj$ = interval(1000).pipe(
    take(5),
    map( val => Math.round(Math.random() * 100) )
  );
  // No tocar la creación del observable
  // ============================================
  const subject$ = new Subject();
  reloj$.subscribe(subject$);
//   const subs1 = subject$.subscribe( observer );
//   const subs2 = subject$.subscribe( observer );

  // Estos dos observables deben de emitir exactamente los mismos valores
  reloj$.pipe().subscribe( val => console.log('obs1', val) );
  reloj$.pipe().subscribe( val => console.log('obs2', val) );

})();

		