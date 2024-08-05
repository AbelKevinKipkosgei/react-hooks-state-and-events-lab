import React, { useState } from "react";

function Item({ name, category }) {
  const [isAdded, setIsAdded] = useState(false);
  const liClassName = isAdded ? "in-cart" : "";
  const buttonClassName = isAdded ? "remove" : "add";
  function manageCart() {
    setIsAdded((isAdded) => !isAdded);
  }
  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClassName} onClick={manageCart}>
        {isAdded ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
