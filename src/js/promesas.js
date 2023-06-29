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

export const buscarHeroe = ( id ) => {

    const heroe = heroes[id];

    return new Promise( ( resulta, fallo ) => {

        if ( heroe ) {
            setTimeout(() => {
                resulta( heroe );
            }, 1000);
        }
        else{
            fallo(`No existe un heroe con el id ${ id }`);
        }
    } );
}

export const buscarHeroeAsync = async( id ) => {

    const heroe = heroes[id];

    if ( heroe ) {
        return heroe;
    }
    else{
        throw `No existe un heroe con el id ${ id }`;
    }
}


const promesaLenta = new Promise( (resuelta, fallo ) => {
    setTimeout(() => {
        resuelta('promesa lenta');
    }, 2000);
})

const promesaMedia = new Promise( (resuelta, fallo ) => {
    setTimeout(() => {
        resuelta('promesa Media');
    }, 1500);
})

const promesaRapida = new Promise( (resuelta, fallo ) => {
    setTimeout(() => {
        resuelta('promesa Rapida');
    }, 1000);
})

export{
    promesaLenta,
    promesaMedia,
    promesaRapida
}