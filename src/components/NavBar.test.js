import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from './NavBar';

// test('Render halaman NavBar dengan benar', async () => {
//     render(<NavBar />);

//     //mencari text tertentu
//     const text = screen.getByText(/My Recipe/i);
//     expect(text).toBeInTheDocument();

//     const text2 = screen.getByTestId('my-recipe');
//     expect(text2.innerHTML).toBe('My Recipe');

//     const search = screen.getByTestId('form-search');
//     expect(search).toBeInTheDocument();
// })

test('Test Case 10 : my-recipe with innerHTML and toBe', () => {
    render(<NavBar />);

    const text = screen.getByTestId('my-recipe');
    expect(text).toBeInTheDocument();
    expect(text.innerHTML).toBe('My Recipe');
});

test('Test Case 11 : form-search with InTheDocument, checkinput, and trigger', () => {
    const mockSearch = jest.fn(); // Create a mock function for search
    render(<NavBar search={ mockSearch } />);
  
    // Memastikan semua bagian ada di document
    const form = screen.getByTestId('form-search');
    const input = screen.getByPlaceholderText('Recipe Name');
    const button = screen.getByRole('button', { name: /search/i });
    expect(form).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  
    // Memastikan input pada kolom search sudah sesuai
    fireEvent.change(input, { target: { value: 'Pancakes' } });
    expect(input.value).toBe('Pancakes');
  
    // User trigger melakukan click pada button search
    fireEvent.click(button);
  
    // Memastikan apakah searching sudah dengan nilai inputan yang sama
    expect(mockSearch).toHaveBeenCalledWith('Pancakes');

    // Memastikan kolom search sudah kosong kembali
    expect(input.value).toBe('');

    // Backend di App.jsx menangkap dan memproses searching Pancakes, dan return hasil
    // Ini yang belum tau caranya
  });