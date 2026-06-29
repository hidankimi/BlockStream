// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BlockStream title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BlockStream/i);
    expect(titleElement).toBeInTheDocument();
});
