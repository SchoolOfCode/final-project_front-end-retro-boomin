import { createContext } from 'react';
import data from '../db/recipeData';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const state = {
    cardsData: [
      {
        id: 1,
        title: '0indexId1Broccoli & Chicken',

        image:
          'https://images.pexels.com/photos/262973/pexels-photo-262973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        nutritionCatergory: 'Orangic',
        rating: 4.5,
        ratingEntries: 50,
        timeToCreate: 20,
        serves: 2,
        pricePerServing: 5,
        ingredients: [
          'Chicken breasts',
          'Broccoli',
          'Rice',
          'Salsa',
          'Carrots',
        ],
        description:
          'This salmon salad recipe makes a main dish salad with chopped vegetables, flaky fish, and tangy citrus dressing. It has plenty of protein and healthy fats, so it’s nutritious and delicious! ',
        creator: 'Raffa',
        rateThisRecipe: 4.5,
      },
      {
        id: 2,
        title: '1indexId2Salmon Salad',

        image:
          'https://images.pexels.com/photos/262973/pexels-photo-262973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        nutritionCatergory: 'Orangic',
        rating: 4.5,
        ratingEntries: 50,
        timeToCreate: 20,
        serves: 2,
        pricePerServing: 5,
        ingredients: [
          'Chicken breasts',
          'Broccoli',
          'Rice',
          'Salsa',
          'Carrots',
        ],
        description:
          'This salmon salad recipe makes a main dish salad with chopped vegetables, flaky fish, and tangy citrus dressing. It has plenty of protein and healthy fats, so it’s nutritious and delicious! ',
        creator: 'Raffa',
        rateThisRecipe: 4.5,
      },
      {
        id: 3,
        title: '2IndexId3Mac & Cheese',
        image:
          'https://images.pexels.com/photos/262973/pexels-photo-262973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        nutritionCatergory: 'Orangic',
        rating: 4.5,
        ratingEntries: 50,
        timeToCreate: 20,
        serves: 2,
        pricePerServing: 5,
        ingredients: [
          'Chicken breasts',
          'Broccoli',
          'Rice',
          'Salsa',
          'Carrots',
        ],
        description:
          'This salmon salad recipe makes a main dish salad with chopped vegetables, flaky fish, and tangy citrus dressing. It has plenty of protein and healthy fats, so it’s nutritious and delicious! ',
        creator: 'Raffa',
        rateThisRecipe: 4.5,
      },
      {
        id: 4,
        title: '3IndexId4Kippers and Spinach',
        image:
          'https://images.pexels.com/photos/262973/pexels-photo-262973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        nutritionCatergory: 'Orangic',
        rating: 4.5,
        ratingEntries: 50,
        timeToCreate: 20,
        serves: 2,
        pricePerServing: 5,
        ingredients: [
          'Chicken breasts',
          'Broccoli',
          'Rice',
          'Salsa',
          'Carrots',
        ],
        description:
          'This salmon salad recipe makes a main dish salad with chopped vegetables, flaky fish, and tangy citrus dressing. It has plenty of protein and healthy fats, so it’s nutritious and delicious! ',
        creator: 'Raffa',
        rateThisRecipe: 4.5,
      },
      {
        id: 5,
        title: '4IndexId5Steak and Eggs',
        image:
          'https://images.pexels.com/photos/262973/pexels-photo-262973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        nutritionCatergory: 'Orangic',
        rating: 4.5,
        ratingEntries: 50,
        timeToCreate: 20,
        serves: 2,
        pricePerServing: 5,
        ingredients: [
          'Chicken breasts',
          'Broccoli',
          'Rice',
          'Salsa',
          'Carrots',
        ],
        description:
          'This salmon salad recipe makes a main dish salad with chopped vegetables, flaky fish, and tangy citrus dressing. It has plenty of protein and healthy fats, so it’s nutritious and delicious! ',
        creator: 'Raffa',
        rateThisRecipe: 4.5,
      },
      {
        id: 6,
        title: '5indexId6Feta, Smoked Salmon Salad',
        image:
          'https://images.pexels.com/photos/262973/pexels-photo-262973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        nutritionCatergory: 'Orangic',
        rating: 4.5,
        ratingEntries: 50,
        timeToCreate: 20,
        serves: 2,
        pricePerServing: 5,
        ingredients: [
          'Chicken breasts',
          'Broccoli',
          'Rice',
          'Salsa',
          'Carrots',
        ],
        description:
          'This salmon salad recipe makes a main dish salad with chopped vegetables, flaky fish, and tangy citrus dressing. It has plenty of protein and healthy fats, so it’s nutritious and delicious! ',
        creator: 'Raffa',
        rateThisRecipe: 4.5,
      },
      {
        id: 7,
        title: '6IndexId7Almond flour Pizza',
        image:
          'https://images.pexels.com/photos/262973/pexels-photo-262973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        nutritionCatergory: 'Orangic',
        rating: 4.5,
        ratingEntries: 50,
        timeToCreate: 20,
        serves: 2,
        pricePerServing: 5,
        ingredients: [
          'Chicken breasts',
          'Broccoli',
          'Rice',
          'Salsa',
          'Carrots',
        ],
        description:
          'This salmon salad recipe makes a main dish salad with chopped vegetables, flaky fish, and tangy citrus dressing. It has plenty of protein and healthy fats, so it’s nutritious and delicious! ',
        creator: 'Raffa',
        rateThisRecipe: 4.5,
      },
    ],
  };
  return <Context.Provider value={state}>{children}</Context.Provider>;
};
