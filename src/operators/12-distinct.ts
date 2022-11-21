import { from, of } from "rxjs";
import { distinct } from "rxjs/operators";

const numeros$ = of<number | string>(12,3,4,5,67,2,8,8,634,62345,23,1,11,1,12,2,'1')

numeros$.pipe(
    distinct() // === También especifica el tipado osea '1' != 1
).subscribe(console.log)

interface Personaje {
    nombre:string;
}

const personajes:Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Willie'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Z'
    },
    {
        nombre: 'Zero'
    },
]

from(personajes).pipe( 
    distinct(p => p.nombre) // Estara al pendiente de p.nombre
) // No repitio el nombre de Zero
.subscribe(console.log);