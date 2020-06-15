import React from 'react'
import { agregar } from './CompRedux/Acciones'
import { motion } from "framer-motion"
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'

function Productos() {
    const datos = useSelector(state => state)
    const dispatch = useDispatch();

    const mover: Varianst = {
        inicial: { opacity: 0},
        animar: {
            opacity: 1,
            transition: {
                duration: .1,
                ease: [0.45, 0, 0.55, 1],
                staggerChildren: .1,
                when: "beforeChildren"
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: .5,
                ease: [0.45, 0, 0.55, 1],
            }
        }
    }

    const cascada: Varianst ={
        inicial: { opacity: 0, x:50},
        animar: {
            opacity: 1, x:0,
            transition: {
                duration: .2,
                x:{ type: "spring", stiffness: 80 }
            }
        },
        exit: {
            
        }
    }
    return (
        <motion.ul id="productos" key="2" initial={'inicial'} animate={'animar'} exit={'exit'} variants={mover} >
        {
            Object.keys(datos.reductor).map((x, k) =>
                <motion.li key={k} variants={cascada}>
                    <Link to={`/product/${x}`}>
                    <motion.img src={datos.reductor[x].foto} alt={x} whileHover={{scale: .95  }}/>
                    </Link>
                    <h3>{x}</h3>
                    <div>
                        <span>Price: <b>${datos.reductor[x].price}</b> &nbsp;</span>
                        <span>Stock: <b>{datos.reductor[x].units}</b></span>
                    </div>
                    {datos.reductor[x].units === 0 ?
                        <p>No Stock</p> :
                        <button onClick={() => dispatch(agregar(x, 1, datos.reductor[x].price))}>Agregar</button>}
                    
                </motion.li>
            )
        }
    </motion.ul>
    )
}

export default Productos
