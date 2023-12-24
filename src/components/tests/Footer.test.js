import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer.js';

test('social media link', () => {
  render(<Footer />);

  const socialMediaLinks = {
    'Instagram': 'https://www.instagram.com/'
  };

  Object.entries(socialMediaLinks).forEach(([platform, url]) => { 
    const linkElement = screen.getByTestId('Instagram'); 
    expect(linkElement).toHaveAttribute('href', url);
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
    
   });
});

test('renders copyright text with the correct year and text', () => {
  render(<Footer />);
  
  const copyrightText = screen.getByText(/© 2023 Anne'sBakery\.com/i);
  expect(copyrightText).toBeInTheDocument();
});

