import React from 'react'
import { Container } from '@mui/material'
import { Articles } from 'components/Articles/Articles'

import { Route, Routes } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CategoryPage } from 'pages/Category/CategoryPage'
import { AboutPage } from 'pages/About/AboutPage'
import { ContactPage } from 'pages/Contact/ContactPage'

export const Main = () => {
    return (
        <>
            <Container>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <main>
                                <Articles />
                                <Swiper />
                                <SwiperSlide />
                            </main>
                        }
                    />
                    <Route path="/category" element={<CategoryPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </Container>
        </>
    )
}
