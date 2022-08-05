import {
  Container,
  Grid,
  Typography,
  Button,
  Hidden,
  Box,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Image from 'next/image';
import CookingTeam from '../public/CookingTeamwork.svg';
import AddRecipeButton from './AddRecipeButton';

export const Hero = () => {
  return (
    // Container contains all elements for the Hero section of the homepage: this is under the Navbar
    <Box>
      <Container maxWidth="lg">
        {/* Grid container is currently split into 3 grid items: 1: Heading text with Button and 2: Image */}
        <Grid
          container
          // justifyContent="center"
          justifyContent="space-between"
          alignItems="center"
          sx={{ paddingTop: '0px' }}
          spacing={0}
          backgroundColor=""
          overflow="hidden"
          marginTop="96px"
        >
          <Grid item md={6} xs={6}>
            <Typography
              component="h1"
              variant="h3"
              sx={{ fontWeight: 700, fontSize: { xs: '2rem', sm: '3rem' } }}
            >
              Choose and create healthy alternatives to fast food!
            </Typography>
            <AddRecipeButton sx={{ marginTop: '16px', fontSize: '20px' }} />
          </Grid>

          <Grid item md={5} xs={4}>
            <Image
              src={CookingTeam}
              width="300px"
              height="200px"
              style={{
                opacity: '80%',
                backgroundColor: '',
              }}
            />
          </Grid>
        </Grid>
        <Hidden smDown></Hidden>
      </Container>
    </Box>
  );
};
