import React from 'react';
import { food } from '../data/food';

type MenuProps = {
  menuCategories: string[];
  filterItems: (category: string) => void;
  setItems: (items: any) => void;
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
