import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Container,
  Hidden,
  Menu,
  MenuItem,
} from '@mui/material';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../public/logo.svg';

export const Navbar = () => {
  const [el, setEl] = useState(null);

  const openMenu = (event) => {
    setEl(event.currentTarget);
  };
  return (
    <>
      <AppBar position="relative" sx={{ backgroundColor: '#FEFCFC' }}>
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              justifyContent: 'space-between',
            }}
          >
            <Image src={logo} width={194} height={30} />
            <Hidden mdUp>
              <MenuIcon onClick={openMenu} />
            </Hidden>
            <Menu
              sx={{ '& a': { color: 'black' } }}
              anchorEl={el}
              open={Boolean(el)}
              onClose={() => setEl(null)}
            >
              <MenuItem>
                <Link href="/">Home</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/about">About</Link>
              </MenuItem>
            </Menu>

            <Hidden mdDown>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  borderRadius: '100px',
                  py: 1,
                  px: 2,
                  '& input': {
                    border: 'none',
                    outline: 'none',
                    borderRadius: '100px',
                    fontSize: '1.2rem',
                  },
                }}
              >
                <SearchIcon sx={{ color: 'black' }} />
                <input placeholder="Search Recipe" />
              </Box>

              <Box
                sx={{ '& a': { marginLeft: '16px', textDecoration: 'none' } }}
              >
                <Link href="/">Home</Link>
                <Link href="/">About</Link>
                <Link href="/">All Recipes</Link>
              </Box>

              <AccountCircleIcon />
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
