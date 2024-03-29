import React, { useState, useDeferredValue, useEffect } from 'react'
import { useGetBlogListQuery } from '../blogStore/query'
import { GetTopHeadlinesParams } from '../blogStore/Types/blogsTypes'
import { MAIN_CONSTANTS } from '../constants'
import { Box, Container, Grid, Typography } from '@mui/material'
import Cards from './Cards'
import CardsSkeleton from './CardsSkeleton'
import InfiniteScroll from 'react-infinite-scroll-component';
import DropDown from './DropDown'
import Chip from '@mui/material/Chip';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
const { QUERY, COUNTRY, CATEGORY, SELECT_LABELS } = MAIN_CONSTANTS

const NewsListing = () => {
    const [searchValue, setSearchValue] = useState("")
    const deferredSearch = useDeferredValue(searchValue)
    const [queryParams, setQueryParams] = useState<GetTopHeadlinesParams>(
        {
            country: QUERY.COUNTRY,
            category: QUERY.CATEGORY,
            apiKey: QUERY.API_KEY,
            page: QUERY.PAGE,
            pageSize: QUERY.PAGE_SIZE,
            q: ""
        }
    )
    const { data: newsListingData, isLoading } = useGetBlogListQuery(queryParams);

    useEffect(() => {
        setQueryParams((prevParams) => ({
            ...prevParams,
            q: deferredSearch
        }));
    }, [deferredSearch])

    const fetchMoreData = () => {
        setQueryParams((prevParams) => ({
            ...prevParams,
            pageSize: prevParams.pageSize + 12,
        }));
    };

    const handleOnChangesFilters = (event: SelectChangeEvent, name: string) => {
        setQueryParams((prevParams) => ({
            ...prevParams,
            [name]: event.target.value
        }));
    }

    const handleReset = () => {
        setQueryParams({
            country: QUERY.COUNTRY,
            category: QUERY.CATEGORY,
            apiKey: QUERY.API_KEY,
            page: QUERY.PAGE,
            pageSize: QUERY.PAGE_SIZE,
            q: ""
        })
    }
    return (
        <>
            <Box sx={{
                position: 'sticky',
                top: {md:'64px' , sx:'64px' , xs:'56px'},
                background: '#fff',
                padding: '15px 0',
                zIndex: 999,
                boxShadow: "rgba(0, 0, 0, 0.03) 0px 4px 15px"
            }}>
                <Container>

                    <Grid
                        container
                        alignItems='center'
                        spacing={2}
                        // mb={2}

                    >
                        <Grid item xs={3} sm={1} md={1} lg={1} xl={1} >
                            <Chip
                                label="Reset"
                                deleteIcon={<TuneIcon />}
                                onDelete={handleReset}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={9} sm={3.7} md={3.7} lg={3.7} xl={3.7} >
                            <DropDown
                                options={COUNTRY}
                                label={SELECT_LABELS.COUNTRY}
                                handleChange={(event) => { handleOnChangesFilters(event, "country") }}
                                selectedValue={queryParams.country}
                            />
                        </Grid>
                        <Grid item xs={6} sm={3.7} md={3.7} lg={3.7} xl={3.7} >
                            <DropDown
                                options={CATEGORY}
                                label={SELECT_LABELS.CATEGORY}
                                handleChange={(event) => { handleOnChangesFilters(event, "category") }}
                                selectedValue={queryParams.category}
                            />
                        </Grid>
                        <Grid item xs={6} sm={3.6} md={3.6} lg={3.6} xl={3.6} >
                            <Box sx={{ width: "100%" }}>
                                <FormControl fullWidth>
                                    <TextField
                                        id="outlined-basic"
                                        label="Search"
                                        variant="outlined"
                                        type="text"
                                        InputProps={{
                                            endAdornment: (
                                                <SearchIcon
                                                />
                                            )
                                        }}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setSearchValue(event.target.value)
                                        }}
                                    />
                                </FormControl>
                            </Box>
                        </Grid>
                    </Grid>

                </Container>
            </Box>
            <Container sx={{ marginTop: '5rem', marginBottom: '1.5rem' }}>

                <InfiniteScroll
                    dataLength={newsListingData?.articles?.length ?? 0}
                    next={fetchMoreData}
                    hasMore={newsListingData?.articles?.length !== newsListingData?.totalResults}
                    loader={
                        <Grid mb={1} container spacing={2}>
                            {Array.from(new Array(4)).map((item, index) => (
                                <Grid item xs={12} sm={12} md={4} lg={4} xl={3} key={index}>
                                    <CardsSkeleton />
                                </Grid>
                            ))}
                        </Grid>
                    }
                >
                    <Grid container spacing={2} sx={{ paddingBottom: '1rem' }}>
                        {
                            newsListingData?.articles && newsListingData?.articles?.length > 0 && newsListingData.articles instanceof Array ?
                                newsListingData.articles.map((lists, index) => {
                                    return <Grid item xs={12} sm={12} md={4} lg={4} xl={3} key={index}>
                                        <Cards
                                            lists={lists}
                                        />
                                    </Grid>
                                }) :
                                <>
                                    {
                                        isLoading &&
                                        Array.from(new Array(8)).map((item) => (
                                            <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
                                                <CardsSkeleton />
                                            </Grid>
                                        ))

                                    }
                                    {
                                        newsListingData?.articles?.length === 0 && newsListingData?.articles instanceof Array && !isLoading &&
                                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <Typography sx={{
                                                marginTop: '50px',
                                                textAlign: 'center',
                                                color: 'red'
                                            }}>
                                                No Data Found.
                                            </Typography>
                                        </Grid>
                                    }
                                </>

                        }
                    </Grid>
                </InfiniteScroll>
            </Container>
        </>
    )
}

export default NewsListing