"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FitbitIcon from '@mui/icons-material/Fitbit';
import Container from '@mui/material/Container';
import { MAIN_CONSTANTS } from '../constants';
import { Button } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation'

function Navbar() {

  const router = useRouter();
  const pathname = usePathname()

  const [activePage, setActivePage] = React.useState(() => {
    const matchedPage = MAIN_CONSTANTS.PAGES?.find(
      (page) => pathname === page.route
    );
    return matchedPage?.name || 'News';
  });

  const handlePageChange = (page: { name: string, route: string }) => {
    setActivePage(page?.name);
    router.push(`${page.route}`);
  };

  return (
    <AppBar position="fixed" sx={{ boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <FitbitIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Blogs
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {MAIN_CONSTANTS.PAGES.map((page, index) => (
              <Button
                key={index}
                onClick={() => handlePageChange(page)}
                sx={{
                  my: 2,
                  color: activePage === page.name ? 'secondary.main' : 'info.contrastText',
                  display: 'block'
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <FitbitIcon />
            </IconButton>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Blogs
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;