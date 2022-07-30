import React from 'react'
import { Container } from '@mui/material'
import { Articles } from 'components/Articles/Articles'

import { Route, Routes } from 'react-router-dom'

import { CategoryPage } from 'pages/Category/CategoryPage'
import { AboutPage } from 'pages/About/AboutPage'
import { ContactPage } from 'pages/Contact/ContactPage'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/scrollbar'

export const Main = ({ toggleLikeState, articlesLikeState }) => {
    return (
        <>
            <Container>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <main>
                                <Swiper
                                    modules={[
                                        Navigation,
                                        Pagination,
                                        Scrollbar,
                                        A11y,
                                    ]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                    scrollbar={{ draggable: true }}
                                    onSlideChange={() =>
                                        console.log('slide change')
                                    }
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img
                                            src="images/slide1_1280x768.jpg"
                                            alt=""
                                        ></img>{' '}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img
                                            src="images/slide2_1280x768.jpg"
                                            alt=""
                                        ></img>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img
                                            src="images/slide3.jpg"
                                            alt=""
                                        ></img>
                                    </SwiperSlide>
                                </Swiper>
                                <Articles
                                    toggleLikeState={toggleLikeState}
                                    articlesLikeState={articlesLikeState}
                                />
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
