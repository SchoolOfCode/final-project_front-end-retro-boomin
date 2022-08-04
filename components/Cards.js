import { Container, Grid, Paper, Box, Typography, Chip } from '@mui/material';
import Image from 'next/image';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Cards = () => {
  return (
    <Container maxWidth="lg" sx={{ mb: 10 }}>
      <Grid container spacing={5}>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <Paper sx={{ overflow: 'hidden' }}>
            <Box
              sx={{
                height: '200px',
                position: 'relative',
              }}
            >
              <Image src="/test.jpg" layout="fill" />

              <Chip
                color="success"
                label="Organic"
                sx={{
                  zIndex: 100,
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                }}
              />
            </Box>

            <Box padding="16px">
              <Typography variant="h6" sx={{ fontSize: '16px' }}>
                Chicken and Broccoli with Spinach
              </Typography>

              <Box
                display="flex"
                alignItems="center"
                marginTop="16px"
                marginBottom="16px"
              >
                <StarIcon sx={{ color: 'yellow', marginRight: '4px' }} /> 4.5
              </Box>

              <Box display="flex" alignItems="center">
                <AccessTimeIcon sx={{ color: '#343A40', marginRight: '4px' }} />{' '}
                20 mins
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <Paper sx={{ overflow: 'hidden' }}>
            <Box
              sx={{
                height: '200px',
                position: 'relative',
              }}
            >
              <Image src="/test.jpg" layout="fill" />

              <Chip
                color="success"
                label="Organic"
                sx={{
                  zIndex: 100,
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                }}
              />
            </Box>

            <Box padding="16px">
              <Typography variant="h6" sx={{ fontSize: '16px' }}>
                Chicken and Broccoli with Spinach
              </Typography>

              <Box
                display="flex"
                alignItems="center"
                marginTop="16px"
                marginBottom="16px"
              >
                <StarIcon sx={{ color: 'yellow', marginRight: '4px' }} /> 4.5
              </Box>

              <Box display="flex" alignItems="center">
                <AccessTimeIcon sx={{ color: '#343A40', marginRight: '4px' }} />{' '}
                20 mins
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <Paper sx={{ overflow: 'hidden' }}>
            <Box
              sx={{
                height: '200px',
                position: 'relative',
              }}
            >
              <Image src="/test.jpg" layout="fill" />

              <Chip
                color="success"
                label="Organic"
                sx={{
                  zIndex: 100,
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                }}
              />
            </Box>

            <Box padding="16px">
              <Typography variant="h6" sx={{ fontSize: '16px' }}>
                Chicken and Broccoli with Spinach
              </Typography>

              <Box
                display="flex"
                alignItems="center"
                marginTop="16px"
                marginBottom="16px"
              >
                <StarIcon sx={{ color: 'yellow', marginRight: '4px' }} /> 4.5
              </Box>

              <Box display="flex" alignItems="center">
                <AccessTimeIcon sx={{ color: '#343A40', marginRight: '4px' }} />{' '}
                20 mins
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <Paper sx={{ overflow: 'hidden' }}>
            <Box
              sx={{
                height: '200px',
                position: 'relative',
              }}
            >
              <Image src="/test.jpg" layout="fill" />

              <Chip
                color="success"
                label="Organic"
                sx={{
                  zIndex: 100,
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                }}
              />
            </Box>

            <Box padding="16px">
              <Typography variant="h6" sx={{ fontSize: '16px' }}>
                Chicken and Broccoli with Spinach
              </Typography>

              <Box
                display="flex"
                alignItems="center"
                marginTop="16px"
                marginBottom="16px"
              >
                <StarIcon sx={{ color: 'yellow', marginRight: '4px' }} /> 4.5
              </Box>

              <Box display="flex" alignItems="center">
                <AccessTimeIcon sx={{ color: '#343A40', marginRight: '4px' }} />{' '}
                20 mins
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Cards;
