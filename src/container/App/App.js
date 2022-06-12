import React from 'react'

import { Footer } from 'container/Footer/Footer'
import { Header } from 'container/Header/Header'
import { Main } from 'container/Main/Main'
import { Container, CssBaseline } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/scrollbar'

export const App = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Container>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <img src="images/slide1_1280x768.jpg" alt=""></img>{' '}
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="images/slide2_1280x768.jpg" alt=""></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="images/slide3.jpg" alt=""></img>
                    </SwiperSlide>
                </Swiper>
            </Container>
            <Main />
            <Footer />
        </>
    )
}
