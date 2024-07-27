// __tests__/Home.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../src/Home'; 



//Mocking the createBottomTabNavigator
jest.mock('@react-navigation/bottom-tabs', () => {
  return {
    createBottomTabNavigator: jest.fn().mockReturnValue({
      Navigator: ({ children }) => <>{children}</>,
      Screen: ({ children }) => <>{children}</>,
    }),
  };
});


test('navigates to Popular tab on tab press', () => {
  const { getByText } = render(<Home />);
  const popularTab = getByText('Popular');
  fireEvent.press(popularTab);
  expect(popularTab.props.style.transform[0].translateY).toBe(3);
});

test('navigates to Top Rated tab on tab press', () => {
  const { getByText } = render(<Home />);
  const topRatedTab = getByText('Top Rated');
  fireEvent.press(topRatedTab);
  expect(topRatedTab.props.style.transform[0].translateY).toBe(3);
});

test('navigates to Upcoming tab on tab press', () => {
  const { getByText } = render(<Home />);
  const upcomingTab = getByText('Upcoming');
  fireEvent.press(upcomingTab);
  expect(upcomingTab.props.style.transform[0].translateY).toBe(3);
});
test('triggers animation on Now Playing tab press', () => {
  const { getByText } = render(<Home />);
  const nowPlayingTab = getByText('Now Playing');
  act(() => {
    fireEvent.press(nowPlayingTab);
  });
  expect(nowPlayingTab.props.style.transform[0].translateY).toBe(3);
});

 jest.mock('../src/NowPlaying', () => jest.fn());
 jest.mock('../src/Popular', () => jest.fn());
 jest.mock('../src/TopRated', () => jest.fn());
 jest.mock('../src/Upcoming', () => jest.fn());

jest.mock('../src/assets/video.png', () => jest.fn());
jest.mock('../src/assets/popularity.png', () => jest.fn());
jest.mock('../src/assets/badge.png', () => jest.fn());
jest.mock('../src/assets/upcoming.png', () => jest.fn());

describe('Home Component', () => {
  test('renders correctly', () => {
    render(
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    );
  });
});
