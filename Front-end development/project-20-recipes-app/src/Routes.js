import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  Login,
  MainPage,
  RecipeDetails,
  DoneRecipes,
  Explore,
  ExploreFood,
  FavoriteRecipes,
  ExploreIngredients,
  Profile,
  NotFoundPage,
} from './pages';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/comidas" component={MainPage} />
      <Route exact path="/bebidas" component={MainPage} />
      <Route exact path="/comidas/:id" component={RecipeDetails} />
      <Route exact path="/bebidas/:id" component={RecipeDetails} />
      <Route exact path="/comidas/:id/in-progress" component={RecipeDetails} />
      <Route exact path="/bebidas/:id/in-progress" component={RecipeDetails} />
      <Route exact path="/explorar" component={Explore} />
      <Route exact path="/explorar/comidas" component={ExploreFood} />
      <Route exact path="/explorar/bebidas" component={ExploreFood} />
      <Route exact path="/explorar/comidas/ingredientes" component={ExploreIngredients} />
      <Route exact path="/explorar/bebidas/ingredientes" component={ExploreIngredients} />
      <Route exact path="/explorar/comidas/area" component={NotFoundPage} />
      <Route exact path="/perfil" component={Profile} />

      <Route exact path="/receitas-feitas" component={DoneRecipes} />
      <Route exact path="/receitas-favoritas" component={FavoriteRecipes} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
