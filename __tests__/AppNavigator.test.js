// __tests__/AppNavigator.test.js
import React from 'react';
import App from '../App';

jest.mock('@react-navigation/stack', () => {
    return {
        createStackNavigator: jest.fn().mockReturnValue({
        Navigator: ({ children }) => <>{children}</>,
        Screen: ({ children }) => <>{children}</>,
      }),
    };
  });

jest.mock('../src/Home', () => {
  return jest.fn(() => 'Home');
});

jest.mock('../src/Details', () => {
  return jest.fn(() => 'Details');
});

describe('AppNavigator', () => {
  test('renders correctly', () => {
    const component = (
        <App />
    );
  });
});
