import React, { useState } from 'react'

import { Footer } from 'container/Footer/Footer'
import { Header } from 'container/Header/Header'
import { Main } from 'container/Main/Main'
import { Container, CssBaseline } from '@mui/material'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/scrollbar'

export const App = () => {
    const [articlesLikeState, setArticlesLikeState] = useState({
        1: true,
    })

    const toggleLikeState = (articleId) =>
        setArticlesLikeState((prevState) => ({
            ...prevState,
            [articleId]: !prevState[articleId],
        }))

    return (
        <>
            <CssBaseline />
            <Header />
            <Container></Container>
            <Main
                toggleLikeState={toggleLikeState}
                articlesLikeState={articlesLikeState}
            />
            <Footer />
        </>
    )
}
