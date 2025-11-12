import React, { useState } from "react";

function Item({ name, category }) {
  // 1️⃣ Track cart state
  const [isInCart, setIsInCart] = useState(false);

  // 2️⃣ Toggle on click
  function handleAddClick() {
    setIsInCart((isInCart) => !isInCart);
  }

  // 3️⃣ Conditional classes and text
  const liClass = isInCart ? "in-cart" : "";
  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";
  const buttonClass = isInCart ? "remove" : "add";

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleAddClick}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
