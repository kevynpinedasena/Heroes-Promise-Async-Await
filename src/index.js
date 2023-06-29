// import { promesaLenta, promesaMedia, promesaRapida } from "./js/promesas";
// import { buscarHeroe, buscarHeroeAsync } from "./js/promesas";
// import { obtenerHeroesArr, obtenerHeroesAwait } from "./js/await";

import { heroesCiclo, heroeIfAwait } from "./js/await";



// promesaLenta.then( console.log );
// promesaMedia.then( console.log );
// promesaRapida.then( console.log );


// Promise.race([ promesaLenta, promesaMedia, promesaRapida ])
//     .then(console.log)
//     .catch(console.warn)

// buscarHeroe( 'capi' )
//     .then( heroe => console.log(heroe) )
//     .catch( error => console.warn(error));

// buscarHeroeAsync( 'iron' )
//     .then( heroe => console.log(heroe))
//     .catch( error => console.warn(error))

// console.time('await')
// obtenerHeroesArr().then( heroes => {
//     console.table(heroes);
//     console.timeEnd('await');
// });


// funcion asincrona
// console.time('await')

// obtenerHeroesAwait('capi2')
//     .then( heroes => {
//         console.log(heroes);
        
//         console.timeEnd('await');
//     })
//     .catch( err => console.error(err));


heroesCiclo();

heroeIfAwait('iron');