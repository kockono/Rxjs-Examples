import { Observable, Observer, Subscriber } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log("next [Next]:", value),
    error: error => console.warn("error [Obs]:", error),
    complete: () => console.log("completado [obs]:")
};


const intervalo$ = new Observable( subscriber => {
    // Crear un contador, 1,2,3,4,5

    let cont = 0

    const interval = setInterval(() => {
      cont++;
      subscriber.next(cont);
    }, 1000)

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    return () => { // Cuando termina el subscribe se dispara
        clearInterval(interval);
        console.log("Intervalo terminado");
        
    }
});


const subs = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs.add(subs2)
// .add(subs3); // Concatena los observables o los hace sus hijos (inevestigar mas a profundidad)

setTimeout(() => {
    subs.unsubscribe();    
    console.log('Completado timeout');
    
}, 3000);
