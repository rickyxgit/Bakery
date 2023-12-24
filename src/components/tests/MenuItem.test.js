import React from 'react';
import { render, screen } from '@testing-library/react';
import MenuItem from '../MenuItem.js';


test('renders MenuItem component with correct data', () => {
  const testData = {
    image: '../../assets/oatmealCookies.jpg',
    name: "menu pic",
    price: 10.99,
  };

  const { getByText, getByAltText } = render(
    <MenuItem image={testData.image} name={testData.name} price={testData.price} />
  );

  // Check if the name and price are rendered correctly
  const nameElement = screen.getByText(testData.name);
  const priceElement = screen.getByText(`$${testData.price.toFixed(2)}`);
  expect(nameElement).toBeInTheDocument();
  expect(priceElement).toBeInTheDocument();

   // Check if the image is rendered correctly
  const imageElement = screen.getByTestId('menu-image');
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveStyle(`background-image: url(${testData.image})`);
});