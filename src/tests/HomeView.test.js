import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent, waitFor, queryByTestId, getByTestId } from '@testing-library/react';
import { SearchBar } from '../components/header/searchBar/SearchBar';
import { HomeView } from '../views/HomeView';
import { ShowAPI } from "../assets/API";


test('renders Header Text', () => {
  render(<HomeView />)
  const linkElement = screen.getByText(/Welcome to the AstraZeneca TV Database/i);
  expect(linkElement).toBeInTheDocument();
})

test('Show text not Searched', () => {
  render(<HomeView />)
  const linkElement = screen.getByText(/Get started by searching for a show/i);
  expect(linkElement).toBeInTheDocument();
})
