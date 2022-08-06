import { Grid, Typography } from '@mui/material'
import { ArticleItem } from 'components/Articles/ArticleItem'
import articlesArray from 'utils/ArticlesArray'
import React, { useState } from 'react'

export const YorkshireTerrierExtendedPage = () => {
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
                    .filter((article) => article.isYorkshireTerrier === 'true')
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
                <div class="h3">Classification:</div>The Yorkshire Terrier,
                nicknamed the Yorkie, seems quite full of himself, and why not?
                With his long silky coat and perky topknot, the Yorkshire
                Terrier is one of the most glamorous representatives of the dog
                world, sure to attract attention wherever he goes. Because he's
                so small he often travels in style — in special dog purses toted
                around by his adoring owner. The long steel-blue and tan coat
                may be the Yorkie's crowning glory, but it's his personality
                that truly endears him to his family. Oblivious to his small
                size (weighing in at no more than seven pounds), the Yorkshire
                Terrier is a big dog in a small body, always on the lookout for
                adventure and maybe even a bit of trouble.
            </div>
            <div class="p">
                <div class="h3">Personality:</div> Smart and self-assured, the
                Yorkshire Terrier is a combination of endearingly small size and
                adventurous terrier spirit. The breed displays a range of
                personalities. Some are cuddly and perky, wanting nothing more
                than to follow in their people's footsteps throughout the day.
                Others are mischievous, outgoing, and into everything. Set
                limits, and your Yorkie will be a wonderful companion, but if
                you spoil him, watch out! Start training when they're puppies,
                and you'll have much better luck than if you let them have their
                way and then try to correct bad habits. Like all dogs, Yorkies
                needs early socialization — exposure to many different people,
                sights, sounds, and experiences — when they're young.
                Socialization helps ensure that your Yorkie will be a friendly,
                well-rounded dog.
            </div>
            <div class="p">
                <div class="h3">Living With:</div> Yorkshire Terriers enjoy
                taking a walk with you or playing outside, but since they're
                very active while indoors, it doesn't take a lot of effort to
                keep them well exercised. In general, Yorkies are receptive to
                training, especially if it brings them attention for performing
                cute tricks or performing in agility or obedience trials. They
                can be difficult to housetrain, however, because their
                "accidents" are so small and easy to clean up that people let it
                slide. That's a mistake. It's better to show them where to go
                from the beginning and reward them for doing their business in
                the right place. When you make the effort, you can end up with a
                very well trained Yorkie indeed. They definitely are housedogs
                and don't tolerate extreme heat or cold well. Many people paper
                train their Yorkshire Terriers so they don't have to take them
                outdoors when the weather is too hot or cold. Yorkies love
                squeaky toys, but it's important to check the toy every few days
                to make sure they haven't chewed them open and pulled out the
                squeaker. They especially enjoy fetching toys that you throw for
                them. If you're crafty, consider crocheting a ball for your
                Yorkie — larger than a golf ball but smaller than a tennis ball
                — and stuffing it with used panty hose. He'll love it!
            </div>
        </>
    )
}
