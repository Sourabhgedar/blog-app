import React, { useState } from 'react'
import { useGetBlogListQuery } from '../blogStore/query'
import { GetTopHeadlinesParams } from '../blogStore/Types/blogsTypes'
import { MAIN_CONSTANTS } from '../constants'
import { Button, Container, Grid } from '@mui/material'
import Cards from './Cards'
import CardsSkeleton from './CardsSkeleton'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Article } from '../blogStore/Types/blogsTypes'
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
    const fetchMoreData = () => {
        setQueryParams((prevParams) => ({
            ...prevParams,
            pageSize: prevParams.pageSize + 10,
        }));
    };
    return (
        <Container sx={{ marginTop: '5rem', marginBottom: '1.5rem' }}>
            <InfiniteScroll
                dataLength={newsListingData?.articles?.length ?? 0}
                next={fetchMoreData}
                hasMore={newsListingData?.articles?.length !== newsListingData?.totalResults}
                loader={
                    <Grid mt={1} mb={1} container spacing={2}>
                        {Array.from(new Array(3)).map((item, index) => (
                            <Grid item xs={12} sm={12} md={3} lg={4} xl={3} key={index}>
                                <CardsSkeleton />
                            </Grid>
                        ))}
                    </Grid>
                }
            >
                <Grid container spacing={2}>
                    {
                        newsListingData?.articles && newsListingData.articles instanceof Array && isSuccess
                            ? newsListingData.articles.map((lists, index) => {
                                return <Grid item xs={12} sm={12} md={3} lg={4} xl={3} key={index}>
                                    <Cards
                                        lists={lists}
                                    />
                                </Grid>
                            }) :
                            isLoading &&
                            Array.from(new Array(6)).map((item) => (
                                <Grid item xs={12} sm={12} md={3} lg={4} xl={3}>
                                    <CardsSkeleton />
                                </Grid>
                            ))
                    }
                </Grid>
            </InfiniteScroll>

        </Container>
    )
}

export default NewsListing