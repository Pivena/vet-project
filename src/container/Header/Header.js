import React from 'react'
import { Container } from '@mui/material'
import { Menu } from 'components/Menu/Menu'

import './Header.scss'

export const Header = () => {
    return (
        <>
            <Container>
                <Menu />
            </Container>
        </>
    )
}
