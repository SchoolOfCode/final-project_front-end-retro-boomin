import { screen } from '@testing-library/react';
import { render } from './test-utils';
import createRecipe from '../pages/createrecipe'
import '@testing-library/jest-dom'

describe('createrecipe', () => {
  test('renders a button to submit recipe', () => {

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
  })
})