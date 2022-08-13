## Plan

- central alignment of cards on homepage ✅
- hero changing on full screen to figma design on mobile with repositioning input ✅
- styling navbar draw
- alignment of cards on profile page ✅
- alignment of shopping list chips on profile page
- add plus button to recipepage ingredients that can add items to shoppingList on user profile ❌ requires backend table ❌
- resizing image on dev2 branch for cards and for recipepage when card is clicked on ✅
- delete input from navbar on everypage except for homepage: How? ❌

---

### tuesday 9th august

- change +create recipe button and submit recipe button on all instances:
  - AddRecipeButton component
    - Hero component: Up & Down
  - create recipe page
  - to have rounded border-radius at least 50% of the height of the element. This is to be consistent with the tone of voice of the app: welcoming, appetising and quality and all other elements have rounded corners. ✅

### Homepage

- change the yellow of the star to the brand yellow ✅

### Create recipe page

- see if an icon or illustration looks better before the page title inline with the title (something food related to add approachability)

### Recipe page

- place the heart icon ✅
- place the nutrition icon ✅
- make sure the image comes through from the data and populate and cover the image area ✅
- see the Creator on a seperate line from the icon and author name ✅
- space the icon strip centrally ✅
- size the icons and the text to be slightly larger ✅
- make sure ingredients are contained within the width of the box and they wrap to a new line no matter how many ingredients added
- see if an icon or illustration looks better before the page title inline with the title (something food related to add approachability)
- position the image centrally and to the top

### User profile page

- add navbar to user profile page
- consult figma design for layout
- copy and paste code over from style branch for whole page to see if it fits

<!-- limit top recipes to 12 and add show all recipes button
1. array method - slice first 12 top recipes array (payload)
2.

 -->

const [limit, setLimit] = useState(12);

{payload.slice(0, limit ? limit : payload.length).map(item => <Cards data={limit} />)};

<button onClick={() => setLimit(null)}>All recipes</button>

---

When you click the chip "all" in the Categories Component we want to populate the cards area in Cards Component with all of the cards from the data

- we need to clear the current set of cards and render the new set of cards

- we also need to change the 'Top recipes' headline to 'All recipes'

++

- add image to home page ✅
- fix image on mobile screen size mobile hero (ask team what they think it looks like)
- place the all button on mobile ✅
- make the opacity of the required lighter ✅
- align nav hamburger menu icon to left (use material icon for it to get rid of the misalignment)

### sat 13th august

- add cursor: 'pointer' to clickable area of recipe cards ✅
- change description on recipepage to: Instructions / Method ✅
- if card is in a users profile fav icon should be filled not outlined / or get rid of fav icon ❌
- change upload image button to under the image upload area on create recipe page ✅
- place hamburger menu icon central to the navbar ✅
- style navbar draw with brand guidelines: give brand colors: ✅ and style the whole thing to look professional ❌
- change all recipes button to view all ✅

### functionality:

- all recipes button does not get all recipes
  - when all recipies button is clicked the title should change on "featured recipes" to "all recipes" and visa versa so that the user can go back and forth
- when search input is used, if there are result then display the results, if no results then display there are no search results for that search
- create recipe does not submit to anywhere
- if a user searches an there is no result then the page should tell the user no result are found and also redirect to a populated version of the page with featured recipes after a few seconds

- ### Get Chips on homepage working

#### phase 1

- in the datafile of recipes add a category to each recipe object with the category name that corresponds to the chip name (Pizza, Burgers ect) ✅
- add a file in Public called data.json ✅
- use online converter to turn the javascript file to a json formatted file and paste into data.json ✅
- because it is now in the public folder check that the data can be received on path: localhost:3000/data.json ✅
- now we can send a request to url: http://localhost:3000/data.json instead of the other url without categories ✅

- send the fetch request for the data inside getServerSideProps to: http://localhost:3000/data.json and save in a response variable. Make the function async to await the data. ✅
- get the promise and await the conversion of the data to json format ✅
- return an object as props for GSSP getServerSideProps return {props: {payload: data}} as the data that comes back is just an array of objects with the name signed as a variable when converted to json. ✅
- in the functional page Component deconstruct and receive the ({payload}) to make use of it ✅
- set the payload as the initial value of state so that it is stored to multiuse ✅

- the value of the chips is hardcode but these values need to be stored in the database table and be generated from these. ✅
- simulate an api on the backend which will be a backend table of categories by creating an array and map over it (this will be instead of hardcoding the chips) ✅
- create an array called: const categories ✅
- create a object with a name and emoji keys and transfer the values for each chip ✅
- map over the categories ✅
- return one Chip Component per object and for the label access the object.emoji and object.name and include the variant outlined as part of the styling and add sx={{cursor: "pointer"}} to mimick a button that is clickable ((think about hover states also, maybe put a component of Button on it for those features)) ✅

#### phase 2

- now that each category has a name, when we click on a category we should filter the recipes
- create a function const filterRecipes
- console log the name of the category clicked on to make sure we are getting it
- add onClick to the Chip Component returned, call the filterRecipes function and pass in the name and receive in the function as argument
- deconstruct the mapped object into name and emojivariables
- change the labels on the chips to reflect the deconstruction
