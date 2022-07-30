import React from 'react'

export const LapdogPage = () => {
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
                    .filter((article) => article.category === 'lapdog')
                    .map(({ id, name, description, image }) => (
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
