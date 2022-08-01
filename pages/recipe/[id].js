import * as React from 'react';
import { IconButton, Stack, Chip } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Rating from '@mui/material/Rating';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import { useRouter } from 'next/router';

export default function RecipeCard() {
  const data = useContext(Context);
  const router = useRouter();
  console.log('{id.jsPage', router.query);
  // FOR RATE-THIS-RECIPE-SECTION
  const [starValue, setStarValue] = React.useState(4);
  const routerQueryNumber = router.query;
  console.log('router', router);
  console.log('router.query', router.query);
  console.log('router.query.id', router.query.id);
  console.log(
    'DataArraySearchByIdToIndexValue',
    data.cardsData[router.query.id - 1]
  );
  const newData = data.cardsData[router.query.id - 1];

  return (
    <>
      {data.cardsData.find((value) => value.id === router.query.id)}
      {console.log('consoleData', data.cardsData[routerQueryNumber.id])}

      <h2>{newData.title}</h2>

      <div className="card-content-container">
        <div className="card-image-container">
          <img src="" alt="some-image" className="card-image" />
          <Stack direction="row" spacing={1}>
            <Chip
              className="chip-mui"
              label="Organic"
              sx={{
                color: '#fff',
                fontSize: '12px',
                position: 'absolute',
                display: 'flex',
                justifyContent: 'flex-end',
                top: '8px',
                right: '8px',
                backgroundColor: '#14AE5C',
              }}
            />
            <IconButton
              sx={{ position: 'absolute', bottom: '8px', right: '8px' }}
              variant="plain"
              id="heart-icon"
              onClick={() => console.log('milfs')}
            >
              <FavoriteBorder />
            </IconButton>
          </Stack>
        </div>

        <div className="recipe-card-info-container">
          <div className="rating-container">
            <StarIcon />
            <p className="rating-number">5.0</p>
            <p className="rating-amount">(55)</p>
          </div>
          <div className="timeToCreate">
            <AccessTimeIcon />
            <p className="timeToCreate-text">20mins</p>
          </div>
          <div className="serves">
            <PeopleIcon />
            <p className="serves-text">2</p>
          </div>
          <div className="price">
            <PaymentIcon />
            <p className="price-text">£5</p>
            <p className="serving">(Price per serving)</p>
          </div>
        </div>

        <div className="ingredients-container">
          <p className="ingredients-title">Ingredients</p>

          <ul className="ingredients-items">
            <li>2 Chicken breasts</li>
            <li>50g Broccoli</li>
            <li>100g Rice</li>
            <li>Salsa</li>
            <li>Carrots</li>
          </ul>
        </div>

        <div className="description-container">
          <p className="description-title">Description</p>
          <p className="description-text">{newData.description}</p>
        </div>

        <div className="creator-container">
          <p className="creator-title">Creator</p>
          <div className="creator-content">
            <AccountCircleIcon />
            <p className="creator-name">Raffa</p>
          </div>
        </div>

        <div className="ratings-container">
          <p className="ratings-title">Rate this recipe</p>
          <div className="ratings-content">
            <Rating name="read-only" value={starValue} />
          </div>
        </div>
      </div>
    </>
  );
}
