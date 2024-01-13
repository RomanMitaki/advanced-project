import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from './Button'

describe('btn test', () => {
  test('should render Button', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
  test('should render Button with theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('clear')
    screen.debug()
  })
})
