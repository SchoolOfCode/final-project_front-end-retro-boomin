import { screen } from '@testing-library/react';
import { render } from './test-utils';
import Profile from '../pages/profile'
import '@testing-library/jest-dom';

describe('Profile', () => {
  test('renders a button to create recipe', () => {
    render(<Profile />)

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
  })
})