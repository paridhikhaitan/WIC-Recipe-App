import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Recipe from "./Recipe.js";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  // // part 2
  // const APP_ID = "54f5fb62";
  // const APP_KEY = "ed7c473e53f990d85f72af084a155be0";

  // const [recipes, setRecipes] = useState([]);
  // const [search, setSearch] = useState("");
  // const [query, setQuery] = useState("chicken");

  // // gets run everytime the page re-renders itself
  // useEffect( () => {
  //   getRecipes();
  // }, [query]);

  // const getRecipes = async () => {
  //   const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  //   const data = await response.json();
  //   setRecipes(data.hits);
  // }
  
  // const updateSearch = e => {
  //   setSearch(e.target.value);
  // }

  // const getSearch = e => {
  //   e.preventDefault();
  //   setQuery(search);
  //   setSearch("");
  // }

  return (
    <div className="App">
      {/* <form onSubmit={getSearch}> */}
      <form>
        {/* <input type="text" value={search} onChange={updateSearch}></input> */}
        <input type="text"></input>
        <button type="submit">Search</button>
      </form>
      <div className="recipes">
      {/* {recipes.map(recipe => (
        <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}></Recipe>
      ))} */}
      <Recipe title={"Pasta"} calories={200} image={"../logo512.png"} ingredients={["Pasta", "Milk", "Cheese"]}></Recipe>
      </div>
    </div>
  );
};

export default App;
