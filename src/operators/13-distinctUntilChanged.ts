import { from, of } from "rxjs";
import { distinct, distinctUntilChanged } from "rxjs/operators";

const numeros$ = of<any>(12,3,4,5,67,2,8,8,634,62345,23,1,11,1,12,2,'1')

// Emitira todos los valores que sean diferentes al anterior a diferencia de distinct
// que solo acepta valores unicos sin importar el orden
numeros$.pipe(
    distinctUntilChanged() // === También especifica el tipado osea '1' != 1
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
]

from(personajes).pipe( 
  distinctUntilChanged( (anterior, actual) => anterior.nombre === actual.nombre) 
) // No repitio el nombre de Zero
.subscribe(console.log);