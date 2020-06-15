import React from 'react'
import { useSelector } from 'react-redux'

function Facturacion() {
    const datos = useSelector(state => state)
    //const dispatch = useDispatch();

    //console.log(datos.prueva['uno'])
    return (
        <div>

{/*             {
                Object.keys(datos.prueva).map((x, k) =>
                    <p key={k}>{x} - {datos.prueva[x]}</p>
                )
            }

            <button onClick={() => dispatch({ type: 'SUMAR', nuevo: { num: 'cuatro', cant: 4 } })}>cuatro</button>
            <button onClick={() => dispatch({ type: 'SUMAR', nuevo: { num: 'cinco', cant: 5 } })}>cinco</button>
            <button onClick={() => dispatch({ type: 'SUMAR', nuevo: { num: 'cinco', cant: 555 } })}>cinco</button>
            <br />
            <br />
            <br /> */}
            <table id="miTabla">
                <tbody>

                    <tr>
                        <th>Item</th>
                        <th>Amount</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>

                    {
                        Object.keys(datos.facturacion).map((x, k) =>

                            x === 'total' ?
                            null
                        :
                                <tr key={k}>
                                    <td>{x}</td>
                                    <td>{datos.facturacion[x].units}</td>
                                    <td>${datos.facturacion[x].price}</td>
                                    <td>${datos.facturacion[x].bill}</td>
                                </tr>

                        )
                    }
                    <tr>
                        <td><b>Total</b></td>
                        <td><b>{datos.facturacion['total'] ?datos.facturacion['total'].amount : 0}</b></td>
                        <td>-</td>
                        <td><b>${datos.facturacion['total']?datos.facturacion['total'].payment : 0}</b></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Facturacion
