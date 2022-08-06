import { Grid, Typography } from '@mui/material'
import { ArticleItem } from 'components/Articles/ArticleItem'
import articlesArray from 'utils/ArticlesArray'
import React, { useState } from 'react'

export const ShitsuExtendedPage = () => {
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
                    .filter((article) => article.isShitsu === 'true')
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
                <div class="h3">Classification:</div>
                Shih Tzu are classified in the toy group in most countries, with
                a height of eight to 11 inches and weight of nine to 16 pounds
                (four to seven kilograms). As with most toy breeds, shih tzu are
                quick to mature, reaching adult size by about 10 months. The
                shih tzu is often slightly longer than tall, with a sturdy body
                and a good-sized head. The muzzle is quite short, with an
                undershot bite. The head is rounded and the eyes are quite
                prominent. The tail is carried gaily curled up over the back.
                The gait is long and swift for such a small dog. The shih tzu is
                covered with luxuriant, long, straight hair. This double coat
                does require a fair amount of upkeep, especially if left long on
                these short dogs so that it sweeps the ground. Any color is
                acceptable for the coat, but dark pigment is preferred around
                the eyes and on the nose. Shih tzu tend to be fairly hardy
                little dogs and often live to 14 or 15 years of age.
            </div>
            <div class="p">
                <div class="h3">Personality:</div> Shih tzu are renowned for
                their perky, happy temperaments. They are lively and friendly.
                Shih tzu tend to get along well with people of all ages and with
                other dogs as well as other pets of different species. Rarely
                you will find a snippy shih tzu, but most are very sweet. With
                their short muzzles, shih tzu are not big chewers, but they do
                enjoy digging and some indulge in nuisance barking. They have a
                big desire to be with people, whether that is sitting on your
                lap or taking a hike through the park.
            </div>
            <div class="p">
                <div class="h3">Living With:</div> Shih Tzu are very easy to
                keep and quickly become obese if given too many treats. They do
                not need or want a mile hike every day, but they do enjoy walks
                and should be kept fit. Shih tzu do compete in obedience and
                agility with some success. Beware of exercising a shih tzu in
                hot, humid weather with the short muzzle, the breed is prone to
                heat stroke. Hair is a four-letter word when it comes to the
                shih tzu. Most pet owners resort to a short year-round body
                clip, which looks quite nice and is very easy to care for. If
                you wish to keep the long flowing coat, you must be prepared for
                some serious grooming time. These dogs require weekly baths with
                oiling of the coat to help keep matting down and daily grooming
                to keep any foreign objects from catching in the coat. Dogs with
                the correct texture of coat do not mat nearly as much as those
                with a soft coat. The shih tzu tends to require a large amount
                of personal attention each day. They thrive on human company and
                can easily become spoiled. They enjoy training and learning
                tricks, making them the center of attention. Shih tzu should be
                socialized to children early on, but they enjoy people of all
                ages. Do not count on your shih tzu to guard the house; he would
                probably welcome a burglar with open paws.
            </div>
        </>
    )
}
