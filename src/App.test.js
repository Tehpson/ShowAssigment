import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Header } from './components/header/Header';
import { HomeView } from './views/HomeView';

test('renders learn react link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Welcome to the AstraZeneca TV Database/i);
  expect(linkElement).toBeInTheDocument();
});
