import { Container, Grid } from '@mui/material'
import React from 'react'
import './ContactPage.scss'

export const ContactPage = () => {
    return (
        <>
            <Container>
                <Grid container className="contact">
                    <Grid item xs={12} sm={6}>
                        <div class="h2">MAKSGROOM</div>
                        <div class="p">Ukraine, Poltava, Street</div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div class="h3">Have any questions?</div>
                        <div class="p">Contact Us - @Email</div>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
