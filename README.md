# Clothes Store App

<img src="https://user-images.githubusercontent.com/60331479/126299244-79774dd2-9f22-4962-baca-ebfacf4cc91f.png" styles="color:white"/>

## Getting Starter

`npm install`

This project is built with webpack for two envioroments.

# Develop
You could start with command `npm run start` 

## Production
Whit this command you could generate the bundle of webpack `npm run build`

## Tecnologies
* React
* Sass
* React router
* Redux
* Webpack
* Vercel

## Main Dependencies

```
  {
    "@babel/runtime": "^7.14.6",
    "axios": "^0.21.1",
    "classnames": "^2.3.1",
    "prop-types": "^15.7.2",
    "query-string": "^7.0.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router": "^5.2.0",
    "react-router-dom": "^5.2.0",
    "redux": "^4.1.0",
    "redux-thunk": "^2.3.0",
    "swiper": "^6.7.5"
  }

```

## Project Structure

```
├── babel.config.js
├── package.json
├── package-lock.json
├── public
│   └── index.html
├── src
│   ├── App.jsx
│   ├── assets
│   │   └── icons
│   │       ├── Icon ionic-ios-search.svg
│   │       ├── icon-cart.svg
│   │       ├── icon-facebook.svg
│   │       ├── icon-instagram.svg
│   │       ├── icon-twitter.svg
│   │       ├── icon-user.svg
│   │       └── icon-youtube.svg
│   ├── components
│   │   ├── Button
│   │   │   ├── Button.jsx
│   │   │   ├── Button.scss
│   │   │   └── index.js
│   │   ├── Card
│   │   │   ├── Card.jsx
│   │   │   ├── Card.scss
│   │   │   └── index.js
│   │   ├── CardSlider
│   │   │   ├── CardSlider.jsx
│   │   │   ├── index.js
│   │   │   └── styles.scss
│   │   ├── GridCard
│   │   │   ├── GridCard.jsx
│   │   │   ├── GridCard.scss
│   │   │   └── index.js
│   │   ├── Header
│   │   │   ├── Header.jsx
│   │   │   ├── Header.scss
│   │   │   └── index.js
│   │   ├── ImageSlider
│   │   │   ├── ImageSlider.jsx
│   │   │   ├── ImageSlider.scss
│   │   │   └── index.js
│   │   ├── MobileNavbar
│   │   │   ├── index.js
│   │   │   ├── MobileNavbar.jsx
│   │   │   └── MobileNavbar.scss
│   │   ├── Navbar
│   │   │   ├── index.js
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.scss
│   │   ├── NavbarLinks
│   │   │   ├── index.js
│   │   │   ├── NavbarLinks.jsx
│   │   │   └── NavbarLinks.scss
│   │   ├── Publication
│   │   │   ├── index.js
│   │   │   ├── Publication.jsx
│   │   │   └── Publication.scss
│   │   ├── SearchBar
│   │   │   ├── index.js
│   │   │   ├── SearchBar.jsx
│   │   │   └── SearchBar.scss
│   │   └── ShoppingCartButton
│   │       ├── index.js
│   │       ├── ShoppingCartButton.scss
│   │       └── ShoppingCartIcon.jsx
│   ├── constants
│   │   └── servicesConstants.js
│   ├── context
│   │   └── MobileNavbarContext
│   │       ├── index.js
│   │       └── MobileNavbarContext.jsx
│   ├── hooks
│   │   ├── useForm
│   │   │   ├── useForm.jsx
│   │   │   └── useForm.test.jsx
│   │   └── useWindowDimensions
│   │       └── useWindowDimensions.jsx
│   ├── index.js
│   ├── index.scss
│   ├── layouts
│   │   ├── CartShop
│   │   │   ├── CartShop.jsx
│   │   │   ├── CartShop.scss
│   │   │   └── index.js
│   │   ├── Categories
│   │   │   ├── Categories.jsx
│   │   │   ├── Categories.scss
│   │   │   └── index.js
│   │   ├── Footer
│   │   │   ├── Footer.jsx
│   │   │   ├── Footer.scss
│   │   │   └── index.js
│   │   ├── Home
│   │   │   ├── Home.jsx
│   │   │   ├── Home.scss
│   │   │   └── index.js
│   │   └── Search
│   │       ├── index.js
│   │       ├── Search.jsx
│   │       └── Search.scss
│   ├── pages
│   │   └── MainPage
│   │       ├── index.js
│   │       ├── MainPage.jsx
│   │       └── MainPage.scss
│   ├── redux
│   │   ├── actions
│   │   │   ├── addCart.js
│   │   │   ├── deleteCart.js
│   │   │   ├── getProducts.js
│   │   │   └── sendCart.js
│   │   ├── index.js
│   │   ├── reducers
│   │   │   ├── cartReducer.js
│   │   │   └── rootReducer.js
│   │   ├── store
│   │   │   └── index.js
│   │   └── types
│   │       └── index.js
│   ├── router
│   │   ├── AppRouter
│   │   │   ├── AppRouter.jsx
│   │   │   └── index.js
│   │   └── PrivateRoute
│   │       └── PrivateRoute.jsx
│   ├── sass
│   │   └── index.scss
│   ├── services
│   │   ├── getCategory
│   │   │   ├── getCategory.js
│   │   │   └── index.js
│   │   ├── getProducts
│   │   │   ├── getProducts.js
│   │   │   └── index.js
│   │   ├── getProductsByid
│   │   │   ├── getProductsByid.js
│   │   │   └── index.js
│   │   └── searchService
│   │       ├── index.js
│   │       └── searchService.js
│   ├── setupTests.js
│   └── utils
│       ├── capitalize
│       │   ├── capitalize.js
│       │   └── index.js
│       ├── CompareId
│       │   ├── compareId.js
│       │   └── index.js
│       ├── publicationsData.js
│       ├── sliderData.js
│       └── sliderDataMobile
│           └── sliderDataMobile.js
├── webpack.config.dev.js
└── webpack.config.js

```
