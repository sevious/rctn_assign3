import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

// test('Render halaman Footer dengan benar', () => {
//     render(<Footer />);

//     const text = screen.getByTestId('footer-text');
//     expect(text.innerHTML).toBe('© 2024 Company, Inc. All rights reserved.');

//     const link_fb = screen.getByTestId('link-facebook');
//     expect(link_fb).toHaveProperty('href', 'https://facebook.com/')

//     const link_x = screen.getByTestId('link-x');
//     expect(link_x).toHaveProperty('href', 'https://x.com/')

//     const link_ig = screen.getByTestId('link-instagram');
//     expect(link_ig).toHaveProperty('href', 'https://instagram.com/')
// })

test('Test Case 6 : footer-text with innerHTML and toBe', () => {
    render(<Footer />);
  
    const text = screen.getByTestId('footer-text');
    expect(text).toBeInTheDocument();
    expect(text.innerHTML).toBe('© 2024 Company, Inc. All rights reserved.');
});

test('Test Case 7 : link-facebook with href', () => {
    render(<Footer />);

    const link_fb = screen.getByTestId('link-facebook');
    expect(link_fb).toBeInTheDocument();
    expect(link_fb).toHaveProperty('href', 'https://facebook.com/');
});

test('Test Case 8 : link-x with href', () => {
    render(<Footer />);

    const link_x = screen.getByTestId('link-x');
    expect(link_x).toBeInTheDocument();
    expect(link_x).toHaveProperty('href', 'https://x.com/');
});

test('Test Case 9 : link-instagram with href', () => {
    render(<Footer />);

    const link_ig = screen.getByTestId('link-instagram');
    expect(link_ig).toBeInTheDocument();
    expect(link_ig).toHaveProperty('href', 'https://instagram.com/');
});