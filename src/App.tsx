import { useState } from 'react';
import './App.scss';
import { food } from './data/food';
import MenuCard from './components/MenuCard';
import Filter from './components/Filter';

function App() {
  const [items, setItems] = useState(food);
  const menuCategories = [...new Set(food.map((item) => item.category))];
  const filterItems = (category: string) => {
    const newItems = food.filter((newItem) => newItem.category === category);
    setItems(newItems);
  };

  return (
    <>
      <h1>A lovely filter!</h1>
      <Filter
        menuCategories={menuCategories}
        filterItems={filterItems}
        setItems={setItems}
      />
      <div>
        <ul>
          {items.map((item) => (
            <MenuCard item={item} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
