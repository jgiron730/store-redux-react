import React from 'react'
import { Helmet } from "react-helmet";
import './StylesRedux.scss'
import Header from './Header'
import Productos from './Productos'
import Product from './Product'

import { AnimatePresence } from "framer-motion"

import { BrowserRouter as Router, Route, Switch,HashRouter } from 'react-router-dom'


function Padre() {

    return (
        <>
            <HashRouter basename='/'>
                <Header />
                <Route
                    render={({ location }) => (
                        <AnimatePresence exitBeforeEnter initial={false}>
                            <Switch location={location} key={location.pathname}>
                                <Route exact path="/">
                                    <Helmet>
                                        <title>Store</title>
                                    </Helmet>
                                    <Productos />
                                </Route>
                                <Route path="/product/:idProduct">
                                    <Product />
                                </Route>
                            </Switch>

                        </AnimatePresence>
                    )}
                />
            </HashRouter>
        </>
    )
}

export default Padre
