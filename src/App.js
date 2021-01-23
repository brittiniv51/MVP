import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { AddIngredient } from './components/AddIngredient';
import { EditIngredient } from './components/EditIngredient';
import "./styles.css";

import { GlobalProvider } from './context/GlobalState';
/* logo header
nav content
footer */

function App() {
  return (
    // <div className= "container">
    // <div className= "logo"></div>
    //   <div className= "items">Logo</div>
    //   <div className= "items">business name</div>
    //   <div className= "items">est. 2020</div>
    // <div className= "header">header </div>
    // <div className= "nav"> nav</div>
    // <div className= "content"> content</div>
    // <div className= "footer">footer </div>
    <GlobalProvider>
      <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add" component={AddIngredient} exact />
        <Route path="/edit/:id" component={EditIngredient} exact />
      </Switch>
      </BrowserRouter>
    </GlobalProvider>
    // </div>
  );
}

export default App;