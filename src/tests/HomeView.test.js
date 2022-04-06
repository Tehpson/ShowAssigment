import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { HomeView } from '../views/HomeView';


test('renders learn react link', () => {
  render(<HomeView />)
  const linkElement = screen.getByText(/Welcome to the AstraZeneca TV Database/i);
  expect(linkElement).toBeInTheDocument();
})

test('Show text not Searched', () => {
  render(<HomeView/>)
  const linkElement = screen.getByText(/Get started by searching for a show/i);
  expect(linkElement).toBeInTheDocument();
})
