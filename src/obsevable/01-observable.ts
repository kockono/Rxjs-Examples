import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log("Next [Next]:", value),
    error: error => console.warn("Error [Obs]:", error),
    complete: () => console.log("Completado [obs]:")
};


const obs$ = new Observable<string>( subs => {

        subs.next('Hola');
        subs.next('Mundo');

        // const a = undefined;
        // a.nombre = 'Fernando';

        subs.complete();
        subs.next('Completado');

});

obs$.subscribe(observer);

obs$.subscribe()

// obs$.subscribe(
//     res => console.log('next:', res),
//     error => console.error('error:', error),
//     () => console.info("Completado")
    
//     )




