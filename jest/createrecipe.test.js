import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('createrecipe', () => {
  test('renders a button to submit recipe', () => {

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
  })
})