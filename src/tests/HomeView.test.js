import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent, waitFor, queryByTestId, getByTestId } from '@testing-library/react';
import App from '../App';
import { HomeView } from '../views/HomeView';


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

test('no Result Found', async () => {
  render(<HomeView />)
  fireEvent.click(screen.getByTestId('search-button'))
  await waitFor(() => expect(screen.getByText('No Result found')).toBeInTheDocument())
})

test('Result found', async () => {
  render(<App/>)
  const searchInput = screen.getByPlaceholderText('Search')
  fireEvent.change(searchInput, { target: { value: 'spiderman' } })
  expect(searchInput.value).toBe('spiderman')
  fireEvent.click(screen.getByTestId('search-button'))
  await waitFor(() => expect(screen.getAllByTestId('card-title')[0]).toBeInTheDocument())
})
