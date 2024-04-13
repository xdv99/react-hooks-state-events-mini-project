import React from "react";

function CategoryFilter({ categories, category, handleClick }) {
  const categoriesButtons = [];

  for (let i = 0; i < categories.length; i++) {
    categoriesButtons.push(
      <button
        key={`category${i}`}
        className={category === categories[i] ? "selected" : ""}
        onClick={() => handleClick(categories[i])}
      >
        {categories[i]}
      </button>
    );
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoriesButtons}
    </div>
  );
}

export default CategoryFilter;
