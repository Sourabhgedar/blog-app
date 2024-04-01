

import { Container } from "@mui/material"
import { getSourceData } from '../../api'
import dynamic from 'next/dynamic'
const Cards = dynamic(() => import('@/app/components/Cards'), { ssr: false })

import { Grid } from "@mui/material"
export async function Sources() {
    const data = await getSourceData()
    
    return (
        <>
            <Container sx={{ marginTop: '5rem', marginBottom: '1.5rem' }}>
                <Grid container spacing={2} sx={{ paddingBottom: '1rem' }}>
                    {
                        data !== null && data?.sources?.length > 0 &&
                        data?.sources instanceof Array && data?.sources.map((items: any, index: number) => {
                            const props = {
                                urlToImage: null,
                                author: items.name,
                                description: items.description,
                                url: items.url
                            }
                            return <>
                                <Grid item xs={12} sm={12} md={4} lg={4} xl={3} key={index}>
                                    <Cards
                                        lists={props}
                                        isSourcePage={true}
                                    />
                                </Grid>
                            </>
                        })
                    }
                </Grid>
            </Container>
        </>
    )
}
