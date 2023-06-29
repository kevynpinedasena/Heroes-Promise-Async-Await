const heroes = {
    capi: {
        nombre: 'Capitan America',
        poder: 'Super Fuerza',
    },
    iron: {
        nombre: 'Iroman',
        poder: 'Volar',
    },
    spiderman: {
        nombre: 'Piter Parker',
        poder: 'La mejor reaccion',
    },
}


export const buscarHeroe = ( id, callback ) => {

    const heroe = heroes[id];

    if ( heroe ) {
        callback( null, heroe );
    }
    else{
        callback(`No existe un heroe con el id ${ id }`);
    }

    // callback( heroe );
}