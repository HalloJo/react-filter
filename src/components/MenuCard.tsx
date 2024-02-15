import React from 'react';
import { Food } from '../data/food';

type MenuCardProps = {
  item: Food;
};

const MenuCard = ({ item }: MenuCardProps) => {
  return (
    <li className="menucard">
      <div className="menucard__title">
        <span>{item.emoji}</span>
        <h2>{item.name}</h2>
      </div>
      <p className="menucard__price">{item.price}</p>
      <p className="menucard__description">{item.description}</p>
    </li>
  );
};

export default MenuCard;
