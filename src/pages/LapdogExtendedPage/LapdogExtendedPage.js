import { Grid, Typography } from '@mui/material'
import { ArticleItem } from 'components/Articles/ArticleItem'
import articlesArray from 'utils/ArticlesArray'
import React, { useState } from 'react'

export const LapdogExtendedPage = () => {
    const [articlesLikeState, setArticlesLikeState] = useState({})

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
                    .filter((article) => article.isLapdog === 'true')
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
            <div class="p">
                <div class="h3">Classification:</div>A lap dog is a small pet
                dog that can fit on a person’s lap. It is a general term that
                can be applied to several dog breeds. The most common group of
                bred lap dogs is called the toy dog group. It includes popular
                small dogs like Yorkshire terriers, chihuahuas and toy poodles.
                Lap dogs are historically associated with luxury and wealth
                because they do not generally perform labor or hunting tasks for
                humans. They are considered companion animals and, in some
                instances, fashion accessories. Lap dogs are thought to be some
                of the earliest pet animals. Their original job was to attract
                parasites like fleas off their owners.
            </div>
            <div class="p">
                <div class="h3">Personality:</div> A lap dog may display
                dominant behavior for which a bigger dog would be disciplined.
                Such actions can include jumping on a person or growling. This
                may make the dog anxious and disturbed. Dogs are considered
                hierarchical animals that should know their order in the pack to
                feel secure. If a human makes a distinction between training a
                lap dog and a bigger dog, the lap dog’s emotional health may
                suffer.
            </div>
            <div class="p">
                <div class="h3">Living With:</div> There are several
                considerations when choosing a lap dog. Families may want a
                friendly dog that is known to get along well with children.
                English toy spaniels are considered both playful and gentle.
                Others may want a more sedate dog for an older person. A Shih
                Tzu rarely displays aggressive behavior and is thought to be
                well-suited for apartment living. Small dogs have a reputation
                for frequent and high-pitched barking. A Japanese Chin, also
                known as a Japanese spaniel, is a lap dog originally bred for
                the Japanese royal family. They are thought to be very quiet and
                even move stealthy, causing some to compare them to cats.
                Another quiet lap dog is the French bulldog. It is considered,
                however, a challenge to train.
            </div>
        </>
    )
}
