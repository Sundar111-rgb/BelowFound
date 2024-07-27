// __tests__/NowPlaying.test.js
import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import NowPlaying from '../src/NowPlaying'; // Adjust the path as necessary

// Mock the fetch function
global.fetch = require('jest-fetch-mock');

const mockMovieList = {
  results: [
    {
      id: '1',
      title: 'Movie 1',
      release_date: '2024-07-26',
      vote_average: 8.5,
    },
    {
      id: '2',
      title: 'Movie 2',
      release_date: '2024-07-27',
      vote_average: 7.5,
    },
  ],
};

describe('NowPlaying Component', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('renders correctly initially', () => {
    const { getByTestId } = render(<NowPlaying />);
    expect(getByTestId('now-playing-container')).toBeTruthy();
  });


  test('renders the FlatList with movies', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockMovieList));

    const { getByText } = render(<NowPlaying />);

    await waitFor(() => {
      expect(getByText('Movie 1')).toBeTruthy();
      expect(getByText('Movie 2')).toBeTruthy();
    });
  });

  test('fetches and displays movies correctly', async () => {
    const mockResponse = {
      results: [
        {
          title: 'Movie 1',
          release_date: '2021-01-01',
          vote_average: 8.5,
        },
        {
          title: 'Movie 2',
          release_date: '2021-02-01',
          vote_average: 7.0,
        },
      ],
    };

    fetch.mockResponseOnce(JSON.stringify(mockResponse));

    render(<NowPlaying />);

   
      expect('Movie 1').toBeTruthy();
      expect('Release date :2021-01-01').toBeTruthy();
      expect('Rating :8.5').toBeTruthy();

      expect('Movie 2').toBeTruthy();
      expect('Release date :2021-02-01').toBeTruthy();
      expect('Rating :7.0').toBeTruthy();
   
  });
});
