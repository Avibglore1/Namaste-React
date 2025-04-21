import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Body from "../component/Body"
import { expect, vi } from 'vitest'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../utils/watchListstore";
import MOCK_DATA from "./../component/mocks/fullmovieObject.json"

global.fetch = vi.fn(() => 
  Promise.resolve({
    json: () => Promise.resolve({ results: MOCK_DATA })
  })
);

it('load search component on clicking search button', async() => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Body/>
      </BrowserRouter>
    </Provider>
  );

  // Wait for the initial render
  await waitFor(() => {
    const searchInput = screen.getByPlaceholderText("Search for movie...");
    expect(searchInput).toBeInTheDocument();
  });

  // Now get the elements after they've been loaded
  const searchInput = screen.getByPlaceholderText("Search for movie...");
  fireEvent.change(searchInput, { target: { value: 'man' } });
  
  const searchBtn = screen.getByText('Search');
  expect(searchBtn).toBeInTheDocument();
  
  // Click the search button
  fireEvent.click(searchBtn);

  // Wait for the filtered results
  await waitFor(() => {
    const cards = screen.getAllByTestId('movieCard');
    expect(cards.length).toBe(2); // Adjust this number based on how many movies with "man" your mock data contains
  });
});