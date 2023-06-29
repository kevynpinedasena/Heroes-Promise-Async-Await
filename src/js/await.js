import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesIds = ['capi', 'iron', 'spiderman'];

const heroesPromesas = heroesIds.map( id => buscarHeroe(id) );

export const obtenerHeroesArr = async() => {

    // ejecutar con return mas facil sin el for
    return await Promise.all( heroesIds.map( buscarHeroe ) );


    // forma de resolver usando await con for
    // const heroesArr = [];

    // for (const id of heroesIds) {
    //     heroesArr.push( buscarHeroe(id) );
    // }

    // return await Promise.all( heroesArr );
}

export const obtenerHeroesAwait = async( id ) => {

    try {

        const heroe = await buscarHeroeAsync( id );
        return heroe;

    } catch (error) {

        console.log(' CATCH!!! ');
        return {
            nombre: 'Sin nombre',
            poder: 'sin Poder',
        }
    }

}


export const heroesCiclo = async() => {
    console.time('HeroesCiclo');

    // con foreach await
    for await( const heroe of heroesPromesas){
        console.log(heroe);
    }


    // con foreach
    // const heroes = await Promise.all( heroesPromesas );
    // heroes.forEach( heroe => console.log(heroe));

    console.timeEnd('HeroesCiclo');
}


export const heroeIfAwait = async (id) => {
    if ( ( await buscarHeroeAsync(id) ).nombre === 'Iroman' ) {
        console.log('es el mejor de todos');
    }
    else{
        console.log('Naaaa');
    }
}