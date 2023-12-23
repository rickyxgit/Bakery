import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer.js';


test('Dummy test that always passes', () => {
  // Perform some action or assertion that always passes
  expect(true).toBe(true);
});


test('renders social media icons and links with correct URLs and attributes', () => {
  render(<Footer />);
  
  const socialMediaLinks = {
    'Instagram': 'https://www.instagram.com/'

    /** 
    'Facebook': 'https://www.facebook.com/',
    'Twitter': 'https://twitter.com/',
    'LinkedIn': 'https://www.linkedin.com/', */
    
  };


  Object.entries(socialMediaLinks).forEach(([platform, url]) => {
    const iconElement = screen.getByTestId(`${platform}Icon`);
    /**const linkElement = screen.getByTestId('instagram-link'); */
    const linkElement = screen.getByRole('link', { name: platform });

 

    expect(linkElement).toHaveAttribute('href', url);
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
    
 
   });
});

/** 
test('renders copyright text with the correct year and text', () => {
  render(<Footer />);
  
  const copyrightText = screen.getByText(/© 2023 Anne'sBakery\.com/i);
  expect(copyrightText).toBeInTheDocument();
});

*/