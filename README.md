## Description

Beauty-Studio is a desktop app built for make-up enthusiasts. On load, the app renders the landing page, at the top of which there are 9 product categories to click on and view, plus a 'loves' section, where the user can view their selected favorite products.

Clicking on any of the categories will generate, at first, a fetch call to the API for that specific category, followed by the loading of the product cards on the screen. Each card will contain information about the brand, the name, the price, and an image(if available). At the bottom of the cards there are the heart shaped "love" button, and a link to the Detail Page of each product. 

On the detail page, the user can look more into the product, by reading the description, analyzing the color palette (where applicable), checking the rating of the product, or the tag list, if it has any.

If the user accidentally enters a strange url, the page with display a Not Found message, inviting the user to go back to the home page.

This project highlights my efforts of creating an app using React, Redux, Router, and also testing it using Enzyme.

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

##### Home Page
![Home Page](https://github.com/andreeahanson/beauty-studio/blob/master/src/images/Home%20Page.png)

##### Product Collection
![Product Collection](https://github.com/andreeahanson/beauty-studio/blob/master/src/images/Product%20Collection.png)

##### Product Detail
![Product Detail](https://github.com/andreeahanson/beauty-studio/blob/master/src/images/Product%20Detail%20Page.png)

##### Favorites
![Favorites](https://github.com/andreeahanson/beauty-studio/blob/master/src/images/Favorites.png)


## Learning goals

- Practice building apps using wireframes.
- Make informed design decisions to create a user-friendly application.
- Learn Redux and make use of the store, rather than local state of components and containers
- Use a modular architecture for your application file structure.
- Learn to write tests in React
- Learn how to write asynchronous tests
- Understand and utilize React Router to effectively display data.
- Use propTypes for every component receiving props.
