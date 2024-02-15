export type Food = {
  id: number;
  name: string;
  category: string;
  price: number;
  emoji: string;
  description: string;
};

export const food: Food[] = [
  {
    id: 1,
    name: 'Margherita Pizza',
    category: 'Pizza',
    price: 9.99,
    emoji: '🍕',
    description:
      'Classic Italian pizza topped with tomato sauce, mozzarella cheese, and fresh basil.',
  },
  {
    id: 2,
    name: 'Pepperoni Pizza',
    category: 'Pizza',
    price: 10.99,
    emoji: '🍕',
    description:
      'Traditional pizza topped with pepperoni slices and mozzarella cheese.',
  },
  {
    id: 3,
    name: 'Spaghetti Carbonara',
    category: 'Pasta',
    price: 12.49,
    emoji: '🍝',
    description:
      'Spaghetti pasta tossed in a creamy sauce made with eggs, cheese, pancetta, and black pepper.',
  },
  {
    id: 4,
    name: 'Fettuccine Alfredo',
    category: 'Pasta',
    price: 11.99,
    emoji: '🍝',
    description:
      'Wide fettuccine noodles smothered in a rich and creamy Alfredo sauce.',
  },
  {
    id: 5,
    name: 'Caesar Salad',
    category: 'Salad',
    price: 7.99,
    emoji: '🥗',
    description:
      'Crisp romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.',
  },
  {
    id: 6,
    name: 'Greek Salad',
    category: 'Salad',
    price: 8.49,
    emoji: '🥗',
    description:
      'A refreshing salad made with lettuce, tomatoes, cucumbers, olives, onions, feta cheese, and Greek dressing.',
  },
  {
    id: 7,
    name: 'Cheeseburger',
    category: 'Burger',
    price: 8.99,
    emoji: '🍔',
    description:
      'Juicy beef patty topped with melted cheese, lettuce, tomato, onion, and pickles on a bun.',
  },
  {
    id: 8,
    name: 'Veggie Burger',
    category: 'Burger',
    price: 7.99,
    emoji: '🍔',
    description:
      'A delicious vegetarian option made with a plant-based patty, lettuce, tomato, onion, and special sauce on a bun.',
  },
  {
    id: 9,
    name: 'Chicken Tikka Masala',
    category: 'Curry',
    price: 14.99,
    emoji: '🍛',
    description:
      'Tender pieces of chicken cooked in a creamy tomato-based sauce with Indian spices.',
  },
  {
    id: 10,
    name: 'Vegetable Korma',
    category: 'Curry',
    price: 13.49,
    emoji: '🍛',
    description:
      'A flavorful vegetarian dish made with mixed vegetables cooked in a creamy and aromatic sauce.',
  },
  {
    id: 11,
    name: 'Mango Lassi',
    category: 'Beverage',
    price: 3.49,
    emoji: '🥤',
    description:
      'A refreshing Indian drink made with yogurt, mango, sugar, and ice.',
  },
  {
    id: 12,
    name: 'Iced Tea',
    category: 'Beverage',
    price: 2.99,
    emoji: '🥤',
    description: 'A cool and refreshing blend of brewed tea served over ice.',
  },
];
