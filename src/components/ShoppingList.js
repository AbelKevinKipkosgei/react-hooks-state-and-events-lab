import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectCategory, setSelectCategory] = useState("All");
  function handleCategoryChange(event) {
    setSelectCategory(event.target.value);
  }
  const filteredItems =
    selectCategory === "All"
      ? items
      : items.filter((item) => item.category === selectCategory);
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select
          name="filter"
          onChange={handleCategoryChange}
          value={selectCategory}
        >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
