import React,{useState} from 'react'
import { FiShoppingCart } from 'react-icons/fi';
import { FaStore } from 'react-icons/fa';
import { Car, Nav } from './CompStyles'
import { Factura } from './CompStyles'
import { MdDeleteForever } from "react-icons/md";
import { motion, AnimatePresence  } from "framer-motion"
import { itemDelete } from './CompRedux/Acciones'

import { useSelector, useDispatch } from 'react-redux'

import {Link} from 'react-router-dom'


function Header() {
    const datos = useSelector(state => state)
    const dispatch = useDispatch();
    const [mostrar, setMostrar] = useState(false)
    const container = {
        initial: { opacity: 0, height: '0px', x:-14 },
        hidden: {
            opacity: 0, height: '0px', x:14,
            transition: {
                duration: .5, ease: [0.76, 0, 0.24, 1]
            }
        },
        show: {
            opacity: 1, height: '40px', x:0,
            transition: {
                duration: .5, ease: [0.76, 0, 0.24, 1]
            }
        }
    }
    return (
        <header>
            <Nav>
                <Link to="/">
                    <FaStore id="home" />
                </Link>
                <Car onClick={()=>setMostrar(x=>!x)}>
                    <FiShoppingCart />
                    <span>{datos.facturacion.total ? datos.facturacion.total.amount : 0}</span>
                </Car>
            </Nav>

            <AnimatePresence>
                {mostrar && (
                    <Factura
                     
                    key="modal"
                    initial={{ opacity: 0, y:-10 }}
                    animate={{ opacity: 1, y:0 }}
                    exit={{ opacity: 0, y:10 }}
                    transition={{duration: .4, ease: [0,0,0,0]}}
                    >
                        <li>
                            <span>Item</span>
                            <span>Amount</span>
                            <span>Price</span>
                            <span>Total</span>
                            <span>Actions</span>
                        </li>
                        <AnimatePresence>
                            {
                                Object.keys(datos.facturacion).map((x, k) =>
                                    x === 'total' ?
                                        null
                                        :
                                        <motion.li key={k}
                                            key={k}
                                            variants={container}
                                            initial="initial"
                                            animate="show"
                                            exit="hidden"
                                        >
                                            <span>{x}</span>
                                            <span>{datos.facturacion[x].units}</span>
                                            <span>${datos.facturacion[x].price}</span>
                                            <span>${datos.facturacion[x].bill}</span>
                                            <span>
                                                <MdDeleteForever onClick={() => dispatch(itemDelete(x, datos.facturacion[x].units, datos.facturacion[x].bill))} />

                                            </span>
                                        </motion.li>
                                )
                            }
                        </AnimatePresence>
                        <li>
                            <span><b>Total</b></span>
                            <span><b>{datos.facturacion['total'] ? datos.facturacion['total'].amount : 0}</b></span>
                            <span>-</span>
                            <span><b>${datos.facturacion['total'] ? datos.facturacion['total'].payment : 0}</b></span>
                            <span>-</span>
                        </li>

                    </Factura>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Header
