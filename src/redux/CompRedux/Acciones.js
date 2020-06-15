import{SUMAR, RESTAR, AGREGAR, BORRAR, ITEMDELETE} from './Tipos'


export const agregar = (p,c,b) =>{
    return{
        type: AGREGAR,
        producto:{nombre:p, cantidad:c, bill: b}
    }
}
export const borrar = (id) =>{
    return{
        type: BORRAR,
        id:id,

    }
}
export const itemDelete = (id,c,b) =>{
    return{
        type: ITEMDELETE,
        id:id,
        cant:c,
        bill:b

    }
}

export const sumar = (y) =>{
    return{
        type: SUMAR,
        miDato:y
    }
}
export const restar = (y) =>{
    return{
        type: RESTAR,
        cuanto:y
    }
}