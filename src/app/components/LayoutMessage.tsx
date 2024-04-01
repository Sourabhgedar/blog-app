import React, { ReactNode } from 'react';
import { Container, Grid } from "@mui/material"

interface Props {
    children: ReactNode;
}

const Index = ({ children }: Props) => {
    return (
        <>
            <Container sx={{ marginTop: '5rem', marginBottom: '1.5rem' }}>
                <Grid container spacing={2} sx={{ paddingBottom: '1rem' }}>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={3} >
                        {children}
                    </Grid>
                </Grid>
            </Container>

        </>
    );
};

export default Index;
