import './App.css';

import React from "react";

import {
  AboutUs,
  Brands,
  Footer,
  Gallery,
  Header,
  Products,
} from "./container";

import { Navbar } from "./components";
import "./App.css";

const App = () => (
  <div>
    <Header />
    <AboutUs />
    <Brands />
    <Gallery />
    <Products />
    <Footer />
  </div>
);

export default App;

