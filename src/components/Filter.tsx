import React from "react";
import { Food, food } from "../data/food";

type MenuProps = {
  menuCategories: string[];
  filterItems: (category: string) => void;
  setItems: (items: Food[]) => void;
};

const Filter = ({ menuCategories, filterItems, setItems }: MenuProps) => {
  return (
    <div>
      {menuCategories.map((item: string) => (
        <button onClick={() => filterItems(item)}>{item}</button>
      ))}
      <button onClick={() => setItems(food)}>All</button>
    </div>
  );
};

export default Filter;
