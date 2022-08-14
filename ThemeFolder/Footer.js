import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#FCC62E"
        color="black"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Text</Box>
              <Box>
                <Link href="/" color="inherit">
                  Text
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Text
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Text
                </Link>
              </Box>
              <Box borderBottom={1}>Text</Box>
              <Box>
                <Link href="/" color="inherit">
                  Text
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Text
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Text
                </Link>
              </Box>
              <Box borderBottom={1}>Text</Box>
              <Box>
                <Link href="/" color="inherit">
                  Text
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Text
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Text
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{xs: 5, sm:10}} pb={{xs: 5, sm:0}}>Craveaway &reg; {new Date().getFullYear()}</Box>
        </Container>
      </Box>
    </footer>
  );
}
