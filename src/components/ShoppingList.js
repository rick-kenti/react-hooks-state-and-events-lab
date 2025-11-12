import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // 1️⃣ Track selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // 2️⃣ Update when user selects new category
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // 3️⃣ Filter items based on selected category
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
