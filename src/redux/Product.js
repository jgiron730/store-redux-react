import React from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { agregar } from './CompRedux/Acciones'
import { useSelector, useDispatch } from 'react-redux'
import { Helmet } from "react-helmet";
import { Pro } from './CompStyles'
import { motion } from "framer-motion"
import tv from './imgs/pc.jpg'

function Product() {
    const { idProduct } = useParams()
    const datos = useSelector(state => state)
    const dispatch = useDispatch();

    const { reductor } = datos;
    console.log(reductor)

    const cont: Variants = {
        inicial: {},
        animar: {

        },
        exit: {

        }
    }

    const verde: Variants = {
        inicial: { x: '100%' },
        animar: {
            x: 0,
            transition: {
                duration: .5,
                ease: [0.16, 1, 0.3, 1],
                staggerChildren: .1,
                when: "beforeChildren"
            }
        },
        exit: {
            width: 0,
            transition: {
                duration: .5,
                ease: [0.16, 1, 0.3, 1],
                staggerChildren: .1,
                when: "afterChildren"
            }
        }
    }
    const product: Variants = {
        inicial: { x: 100, opacity: 0 },
        animar: {
            x: 0, opacity: 1,
            transition: {
                delay: .3,
                duration: .5,
                ease: [0.16, 1, 0.3, 1]
            }
        },
        exit: {
            x: -50, opacity: 0,
            transition: {
                duration: .5,
                ease: [0.45, 0, 0.55, 1]
            }
        }
    }

    const details: Variants = {
        inicial: { x: 50, opacity: 0 },
        animar: {
            x: 0, opacity: 1,
            transition: {
                duration: .3
            }
        },
        exit: {
            x: -50, opacity: 0,
            transition: {
                duration: .3
            }
        }
    }


    return (
        <Pro key="2" initial={'inicial'} animate={'animar'} exit={'exit'} variants={cont} >
            <Helmet>
                <title>{idProduct}</title>
            </Helmet>

            <div>
                <motion.img variants={product} src={reductor[idProduct].foto} />
            </div>

            <motion.div variants={verde} >
                <div className="details" >
                    <motion.h3 variants={details}>{idProduct}</motion.h3>
                    <motion.p variants={details}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure. </motion.p>
                    <motion.div className="precio" variants={details}>
                        <span>Stock: <b>{reductor[idProduct].units}</b></span>
                        <span>Price: <b>${reductor[idProduct].price}</b></span>
                    </motion.div>

                    {reductor[idProduct].units === 0 ?
                        <p>No Stock</p> :
                        <motion.button variants={details}


                            whileTap={{ scale: 0.9 }}

                            onClick={() => dispatch(agregar(idProduct, 1, reductor[idProduct].price))}
                        >Agregar</motion.button>
                    }

                </div>
            </motion.div>

        </Pro>
    )
}

export default Product
