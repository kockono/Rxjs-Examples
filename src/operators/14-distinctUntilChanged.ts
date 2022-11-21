import { from, of } from "rxjs";
import { distinctUntilChanged, distinctUntilKeyChanged } from "rxjs/operators";
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

console.log( 'distinctUntilChanged\n' )
from(personajes).pipe( 
  distinctUntilChanged( (anterior, actual) => anterior.nombre === actual.nombre) 
) // No repitio el nombre de Zero
.subscribe(console.log);

console.log( 'distinctUntilChangedKey\n' )

from(personajes).pipe( 
	distinctUntilKeyChanged('nombre') 
  ) // Igual que pluck, nombre de las propiedades
  .subscribe(console.log);