import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {HomePage} from "./components/pages/HomePage";
import {AdminHomePage} from "./components/pages/admin/AdminHomePage";
import {CategoryPage} from "./components/pages/CategoryPage";
import {Header} from "./components/layout/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={HomePage} />
      <Route path="/admin" exact component={AdminHomePage} />
      <Route path="/category:categoryId" component={CategoryPage} />

    </Router>
  );
};

export default App;
