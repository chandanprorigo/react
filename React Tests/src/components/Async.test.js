// Async.test.js
import { render, screen } from "@testing-library/react";
import Async from "./Async";

// Mock the global fetch function
beforeAll(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  fetch.mockClear(); // Reset call history between tests
});

afterAll(() => {
  delete global.fetch; // Clean up after all tests
});

describe('Async component', () => {
  test('renders post if request succeeds', async () => {
    // Arrange
    fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'first post' }],
    });

    // Act
    render(<Async />);
    const listItems = await screen.findAllByRole('listitem');

    // Assert
    expect(listItems).toHaveLength(1);
    expect(listItems[0]).toHaveTextContent('first post');
  });
});
