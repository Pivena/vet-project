import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ArticleItem.scss'
import React from 'react'

export const ArticleItem = () => {
    return (
        <Card>
            <CardContent>
                <h4>Shitsu</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Saepe, tempora! Quibusdam quia voluptatibus ab nemo quis!
                </p>
            </CardContent>
            <CardActions className="category">
                <Button variant="contained">Category</Button>
                <Button variant="contained">Like</Button>
            </CardActions>
        </Card>
    )
}
