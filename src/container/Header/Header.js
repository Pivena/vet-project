import React from 'react'
import { Container } from '@mui/material'
import { Menu } from 'components/Menu/Menu'
import logo from 'assets/logo.jpg'
import './Header.scss'

export const Header = () => {
    return (
        <>
            <Container>
                <div className="container">
                    <div className="row">
                        <div>
                            <img src={logo} alt="" />
                        </div>
                        <Menu />
                    </div>
                </div>
            </Container>
        </>
    )
}
