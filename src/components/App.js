import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isLightTheme, setisLightTheme] = useState(false);
  const appClass = isLightTheme ? "App dark" : "App light";
  function themeToggle() {
    setisLightTheme((isLightTheme) => !isLightTheme);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={themeToggle}>
          {isLightTheme ? "Dark Mode" : "Light Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
