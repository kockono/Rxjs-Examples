import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';


// Metodo 1:
// ajax.put( url, {
//     id: 1,
//     nombre: 'Fernando'
// }, {
//     'mi-token': 'ABC123'
// }).subscribe( console.log  );

// ajax.post( url, {
//     id: 1,
//     nombre: 'Chris'
// }, {
//     'mi-token': 'ABC123'
// }).subscribe( console.log  );

// Metodo 2: Tiene mejor control, podríamos cambiar la variable 'method'
ajax({
    url: url,
    method: 'DELETE',
    headers: {
        'mi-token': 'ABC123'
    },
    body: {
        id: 1,
        nombre: 'Fernando'
    }
}).subscribe( console.log );





