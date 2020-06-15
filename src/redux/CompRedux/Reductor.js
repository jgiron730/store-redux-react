import { combineReducers } from 'redux'
import { AGREGAR, BORRAR, ITEMDELETE } from './Tipos'
import { productos, factura } from './productos'



const reductor = (estado = productos, accion) => {
    switch (accion.type) {
        case AGREGAR:
            let nombre = accion.producto.nombre;
            let cantidad = accion.producto.cantidad
            return { ...estado, [nombre]: { ...estado[nombre], units: estado[nombre].units - cantidad } }
        case ITEMDELETE:
            return{...estado,[accion.id]: {...estado[accion.id], units: estado[accion.id].units + accion.cant}}
        case BORRAR: return estado = {}
        default:
            return estado
    }
}

/*  const facturacion =(estado=factura, accion)=>{
    switch (accion.type) {
        case AGREGAR:
            let nombre = accion.producto.nombre;
            let cantidad = accion.producto.cantidad;
            let precio = accion.producto.bill;
            
            return {...estado, [nombre]: {
                    ...estado[nombre], 
                    bill: estado[nombre].bill + precio, 
                    units: estado[nombre].units + cantidad
                },
                'total': {
                    amount: estado.total.amount + cantidad,
                    payment: estado.total.payment + precio,
                 }
            }    
        default:
            return estado
    }
} */
const facturacion = (estado = factura, accion) => {
    switch (accion.type) {
        case AGREGAR:
            let nombre = accion.producto.nombre;
            let cantidad = accion.producto.cantidad;
            let precio = accion.producto.bill;

            let pfinal = estado[nombre] ? estado[nombre].bill + precio : precio;
            let pcant = estado[nombre] ? estado[nombre].units + cantidad : cantidad;

            return {
                ...estado,
                [nombre]: {
                    bill: pfinal,
                    units: pcant,
                    price: precio
                },
                'total': {
                    amount: estado.total ? estado.total.amount + cantidad : cantidad,
                    payment: estado.total ? estado.total.payment + precio : precio,

                }
            }
        case ITEMDELETE:
            const removeProperty = prop => ({ [prop]: _, ...rest }) => rest
            const removeId = removeProperty(accion.id)
            return {...removeId(estado),
                'total': {
                    amount: estado.total.amount - accion.cant,
                    payment:  estado.total.payment - accion.bill,

                }
            }
        default:
            return estado
    }
}

let inicio = {

}
const prueva = (estado = inicio, accion) => {
    switch (accion.type) {
        case 'SUMAR':
            return { ...estado, [accion.nuevo.num]: accion.nuevo.cant }
        default:
            return estado
    }
}

export default combineReducers({
    reductor,
    facturacion,
    prueva
})