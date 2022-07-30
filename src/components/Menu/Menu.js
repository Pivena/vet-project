import React from 'react'
import { Button } from '@mui/material'
import './Menu.scss'
import { NavLink } from 'react-router-dom'

export const Menu = () => {
    return (
        <>
            <div className="menu">
                <Button>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'active-menu-NavLink' : 'menu-NavLink'
                        }
                    >
                        Home
                    </NavLink>
                </Button>
                <Button>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? 'active-menu-NavLink' : 'menu-NavLink'
                        }
                    >
                        About
                    </NavLink>
                </Button>
                <Button>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? 'active-menu-NavLink' : 'menu-NavLink'
                        }
                    >
                        Contact
                    </NavLink>
                </Button>
                <Button className="category">
                    <NavLink
                        to="/category"
                        className={({ isActive }) =>
                            isActive ? 'active-menu-NavLink' : 'menu-NavLink'
                        }
                    >
                        Category
                    </NavLink>
                </Button>
            </div>
        </>
    )
}
