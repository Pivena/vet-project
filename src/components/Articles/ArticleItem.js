import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ArticleItem.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

export const ArticleItem = ({
    id,
    name,
    description,
    image,
    isLiked = false,
    toggleLikeState,
}) => {
    return (
        <Card>
            <CardContent className="card-content">
                <div className="article-img">
                    <img src={image} alt="" />
                </div>
                <Button onClick={() => toggleLikeState(id)}>
                    {' '}
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
                <h4 className="article-title">{name}</h4>
                <p className="article-features">{description}</p>
            </CardContent>
            <CardActions className="category">
                <Button variant="secondary">
                    <NavLink to="/Category" className="navlink">
                        Category
                    </NavLink>
                </Button>
                <Button variant="secondary">
                    <NavLink to={`/${name}ExtendedPage`} className="navlink">
                        {name}
                    </NavLink>
                </Button>
            </CardActions>
        </Card>
    )
}
