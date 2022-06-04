import { Grid, Typography } from '@mui/material'
import React from 'react'
import { ArticleItem } from './ArticleItem'

export const Articles = () => {
    return (
        <>
            <Typography variant="h3" align="center">
                Articles
            </Typography>

            <Grid
                container
                spacing={1}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12} sm={6} md={4}>
                    <ArticleItem />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ArticleItem />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ArticleItem />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ArticleItem />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ArticleItem />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ArticleItem />
                </Grid>
                <Grid item sm={6} md={4}>
                    <ArticleItem />
                </Grid>
                <Grid item sm={6} md={4}>
                    <ArticleItem />
                </Grid>
                <Grid item sm={6} md={4}>
                    <ArticleItem />
                </Grid>
            </Grid>
        </>
    )
}
