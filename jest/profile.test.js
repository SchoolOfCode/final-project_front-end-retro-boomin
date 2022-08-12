import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Profile', () => {
  test('renders a button to create recipe', () => {
    render(<Home />)

    const button = screen.getByRole('heading')

    expect(button).toBeInTheDocument()
  })
})