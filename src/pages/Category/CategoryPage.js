import { Grid, Typography } from '@mui/material'
import { ArticleItem } from 'components/Articles/ArticleItem'
import articlesArray from 'utils/ArticlesArray'
import React, { useState } from 'react'

export const CategoryPage = () => {
    const [articlesLikeState, setArticlesLikeState] = useState({
        1: true,
        2: true,
    })

    const toggleLikeState = (articleId) =>
        setArticlesLikeState((prevState) => ({
            ...prevState,
            [articleId]: !prevState[articleId],
        }))
    return (
        <>
            <Typography variant="h3" align="center"></Typography>

            <Grid
                container
                spacing={1}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {articlesArray
                    .filter((article) => article.ishome === 'true')
                    .map(({ id, name, image }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ArticleItem
                                id={id}
                                name={name}
                                image={image}
                                toggleLikeState={toggleLikeState}
                                isLiked={articlesLikeState[id]}
                            />
                        </Grid>
                    ))}
            </Grid>
        </>
    )
}
