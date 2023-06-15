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
  const pizzas = pizzaData;
  // const pizzas = [];  // For checking if there is no any pizza in the menu.
  const pizzasNum = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzasNum > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}

      {/* <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        photoName="pizzas/margherita.jpg"
        price={10}
      />

      <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        photoName="pizzas/focaccia.jpg"
        price={6}
      /> */}
    </main>
  );
};

const Pizza = ({ pizzaObj }) => {
  console.log(pizzaObj);

  if (pizzaObj.soldOut) return null;

  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price} EUR</span>
      </div>
    </li>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;

  console.log(hour);

  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open");
  // if (hour >= closeHour && hour <= openHour) alert("Sorry we're currently closed");

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
};

const Order = ({ openHour, closeHour }) => {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
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
