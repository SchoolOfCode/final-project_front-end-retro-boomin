import { screen } from '@testing-library/react';
import { render } from './test-utils';
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('index', () => {
  test('renders a button to create recipe', () => {

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
  })
})