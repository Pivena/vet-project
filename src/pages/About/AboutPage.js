import { Container, Grid } from '@mui/material'
import React from 'react'
import './AboutPage.scss'

export const AboutPage = () => {
    return (
        <>
            <Container>
                <Grid item xs={12} sm={6} className="about">
                    <div className="h2">ABOUT US</div>
                    <div className="h1">Family vet clinic</div>
                    <div className="p">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Repellat assumenda exercitationem autem suscipit
                        ducimus totam fugit voluptatem aut sit temporibus illo
                        facere quidem mollitia, excepturi, veritatis maiores
                        similique enim rem veniam qui repudiandae inventore
                        aspernatur magni? Nostrum voluptas necessitatibus
                        distinctio aliquam minus deserunt repellendus, voluptate
                        minima, odit molestias id labore nesciunt asperiores
                        omnis!{' '}
                    </div>
                </Grid>
            </Container>
        </>
    )
}
