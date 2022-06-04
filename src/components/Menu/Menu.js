import React from 'react'
import { Button } from '@mui/material'
import './Menu.scss'

export const Menu = () => {
    return (
        <>
            <div className="menu">
                <Button>HOME</Button>
                <Button>ABOUT CLINIC</Button>
                <Button>OUR STAFF</Button>
                <Button>CONTACT</Button>
                <Button>BLOG</Button>
            </div>
        </>
    )
}
