import React from 'react'
import { Container, GlobalStyle } from './CompStyles'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import combineReducers from './CompRedux/Reductor'
import Padre from './Padre'

const tienda = createStore(combineReducers)

function InicioRedux() {
    return (
        <Provider store={tienda}>
            <GlobalStyle/>
            <Container>
                <Padre/>
            </Container>
        </Provider>
    )
}

export default InicioRedux
