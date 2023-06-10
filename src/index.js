import React from 'react';
import ReactDom from 'react-dom/client';

import './index.css';

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
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const Header = () => {
  // const style = { color: 'red', fontSize: '48px', textTransform: 'uppercase' };
  // return <h1 style={style}>Fast React Pizza Co.</h1>;
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  );
};

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizzas />
      <Pizzas />
      <Pizzas />
    </main>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open");
  // if (hour >= closeHour && hour <= openHour) alert("Sorry we're currently closed");

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} - We're currently open.
    </footer>
  );
};

const Pizzas = () => {
  return (
    <div>
      <img src="pizzas/margherita.jpg" alt="Pizza margherita" />
      <h3>Pizza Margherita</h3>
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
