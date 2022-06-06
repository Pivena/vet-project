import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ArticleItem.scss'
import React from 'react'

export const ArticleItem = ({ name, description, image }) => {
    return (
        <Card>
            <CardContent className="card-content">
                <div className="article-img">
                    <img src={image} alt="" />
                </div>
                <h4 className="article-title">{name}</h4>
                <p className="article-features">{description}</p>
            </CardContent>
            <CardActions className="category">
                <Button variant="secondary">Category</Button>
                <Button variant="secondary">Like</Button>
            </CardActions>
        </Card>
    )
}
