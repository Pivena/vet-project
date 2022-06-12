import { Grid, Typography } from '@mui/material'
import React from 'react'
import { ArticleItem } from './ArticleItem'
import articlesArray from 'utils/ArticlesArray'

export const Articles = () => {
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
                {articlesArray.map(({ id, name, description, image }) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                        <ArticleItem
                            name={name}
                            description={description}
                            image={image}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
