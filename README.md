## Description

Beauty-Studio is a desktop app built for make-up enthusiasts. On load, the app renders the landing page, at the top of which there are 9 product categories to click on and view, plus a 'loves' section, where the user can view their selected favorite products.

Clicking on any of the categories will generate, at first, a fetch call to the API for that specific category, followed by the loading of the product cards on the screen. Each card will contain information about the brand, the name, the price, and an image(if available). At the bottom of the cards there are the heart shaped "love" button, and a link to the Detail Page of each product. 

On the detail page, the user can look more into the product, by reading the description, analyzing the color palette (where applicable), checking the rating of the product, or the tag list, if it has any.

If the user accidentally enters a strange url, the page with display a Not Found message, inviting the user to go back to the home page.

This project highlights my efforts of creating an app using React, Redux, Router and testing it using Enzyme.

The app was created using `create-react-app`.


## Installation

```
https://github.com/andreeahanson/beauty-studio.git
```
Once you have cloned the repo, install the library dependencies. Run:

```
npm install
```
To view the app in action, run the following command in your terminal:

```
npm start
```
Then, go to http://localhost:3000/ in your browser to see the code running in the browser.


## Screenshots
![Crawll](https://github.com/andreeahanson/lightside/blob/master/src/images/Crawll.png)

![People](https://github.com/andreeahanson/lightside/blob/master/src/images/People.png)

![PeopleFav](https://github.com/andreeahanson/lightside/blob/master/src/images/People-with-favs.png)

![Favorites](https://github.com/andreeahanson/lightside/blob/master/src/images/Favorites-full.png)

![FavoritesEmpty](https://github.com/andreeahanson/lightside/blob/master/src/images/Favorites-empty.png)

![GIF](https://media.giphy.com/media/kZty7ldVvp8m4Sih2G/200w_d.gif)

## Learning goals

- Learn how to wireframe and know why it is important.
- Write squeaky clean, well refactored code using ES6 & ES7 syntax.
- Make informed design decisions to create a user-friendly application.
- Keep state based components to a minimum and leverage more functional components.
- Use a modular architecture for your application file structure.
- Think deeply about React Lifecycle Methods.
- Understand and utilize React Router to effectively display data.
- Use propTypes for every component receiving props.
