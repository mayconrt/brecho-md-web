import React from 'react'

import Header from '../../common/Header'
import Content from '../../common/Content'
import Menu from '../../common/Menu'
import Container from '../../common/Container'

import './style.css'

const Main = (props) => {
    return (
        <div className="ma-div-main">
            <Header />
            <Content>
                <Menu />
                <Container>
                    {props.children}
                </Container>
            </Content>
        </div>
    )
}

export default Main