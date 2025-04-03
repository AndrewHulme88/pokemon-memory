// /tests/App.test.jsx - Tests for the App component to ensure core functionality

import { render, screen } from '@testing-library/react';
import App from '../App.jsx';

// Test suite for the App component
describe('App Component', () => {
  // Test 1: Check if the component renders without crashing
  it('renders successfully', () => {
    render(<App />);
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Assumes a header/banner exists
  });

  // Test 2: Verify that key text or elements are present
  it('displays the main title', () => {
    render(<App />);
    const titleElement = screen.getByText(/welcome to pokemon memory/i); // Adjust text to match your app
    expect(titleElement).toBeInTheDocument();
  });

  // Test 3: Test interactivity (e.g., a button click)
  it('handles button click correctly', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /start game/i }); // Adjust to match your button
    fireEvent.click(button);
    expect(screen.getByText(/game started/i)).toBeInTheDocument(); // Adjust expected outcome
  });
});