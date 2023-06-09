import React from 'react';
import ReactDom from 'react-dom/client';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

const App = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const Header = () => {
  return <h1>Fast React Pizza Co.</h1>;
};

const Menu = () => {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizzas />
      <Pizzas />
      <Pizzas />
    </div>
  );
};

const Footer = () => {
  return (
    <footer>{new Date().toLocaleTimeString()} - We're currently open.</footer>
  );
};

const Pizzas = () => {
  return (
    <div>
      <img src="pizzas/margherita.jpg" alt="Pizza margherita" />
      <h2>Pizza Margherita</h2>
      <p>Tomato and mozarella</p>
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {' '}
    <App />
  </React.StrictMode>
);
