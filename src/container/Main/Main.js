import { Container } from '@mui/material'
import { Articles } from 'components/Articles/Articles'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Main = () => {
    return (
        <>
            <Container>
                <Swiper />
                <SwiperSlide />
                <Articles />
            </Container>
        </>
    )
}
