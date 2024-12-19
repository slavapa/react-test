import { render, screen } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import App from '../../App';

// Setup Mock Service Worker
const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
    return res(
      ctx.json([
        { id: 1, title: 'Test Post 1', body: 'This is the body of test post 1.' },
        { id: 2, title: 'Test Post 2', body: 'This is the body of test post 2.' },
      ])
    );
  })
);

// Establish API mocking before all tests
beforeAll(() => server.listen());

// Reset request handlers after each test
afterEach(() => server.resetHandlers());

// Cleanup after all tests are done
afterAll(() => server.close());

test('renders loading message initially', () => {
  render(<App />);
  const loadingElement = screen.getByText(/loading/i);
  expect(loadingElement).toBeInTheDocument();
});

test('renders list of posts after fetching', async () => {
  render(<App />);

  // Wait for posts to appear
  const post1 = await screen.findByText('Test Post 1');
  const post2 = await screen.findByText('Test Post 2');

  // Assert posts are displayed
  expect(post1).toBeInTheDocument();
  expect(post2).toBeInTheDocument();
});
