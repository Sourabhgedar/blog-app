import React, { useState } from 'react'
import { useGetBlogListQuery } from '../blogStore/query'
import { GetTopHeadlinesParams } from '../blogStore/Types/blogsTypes'
import { MAIN_CONSTANTS } from '../constants'
import { Container, Grid } from '@mui/material'
import Cards from './Cards'
import CardsSkeleton from './CardsSkeleton'
const { QUERY } = MAIN_CONSTANTS
const NewsListing = () => {
    const [queryParams, setQueryParams] = useState<GetTopHeadlinesParams>(
        {
            country: QUERY.COUNTRY,
            category: QUERY.CATEGORY,
            apiKey: QUERY.API_KEY,
            page: QUERY.PAGE,
            pageSize: QUERY.PAGE_SIZE
        }
    )
    const { data: newsListingData, isLoading, isError, isSuccess } = useGetBlogListQuery(queryParams);
    return (
        <Container sx={{ marginTop: '5rem', marginBottom: '1.5rem' }}>
            <Grid container spacing={2}>
                {
                    newsListingData?.articles && newsListingData.articles instanceof Array && isSuccess ?
                        newsListingData.articles.filter(items => items.author && items.description).map((lists) => {
                            return <Grid item xs={12} sm={12} md={3} lg={4} xl={3}>
                                <Cards
                                    lists={lists}
                                />
                            </Grid>
                        }) :
                        Array.from(new Array(6)).map((item) => (
                            <Grid item xs={12} sm={12} md={3} lg={4} xl={3}>
                                <CardsSkeleton />
                            </Grid>
                        ))
                }
            </Grid>
        </Container>
    )
}

export default NewsListing