/**
 * @format
 */
import React from "react";
import App from "../App";
import { waitFor, render, fireEvent } from '@testing-library/react-native';

it('app renders correctly', async () => {
  const { getByTestId, getByText, queryByTestId, toJSON} = render(<App/>)
  const button = getByText('Say Hello');
  fireEvent.press(button);
  await waitFor(() => expect(queryByTestId('printed-message')).toBeTruthy());
  expect(getByTestId("printed-message").props.children).toBe("Hello world!");
  expect(toJSON()).toMatchSnapshot();
});