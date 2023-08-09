import { render, screen } from '@testing-library/react'
import { AlertMessage } from './AlertMessage'
import type { AlertMessageProps } from './AlertMessage'

describe('<NotFoundMessage /> tests', () => {
  const mockProps: AlertMessageProps = {
    message: 'This is a test message',
  }

  test('It renders the message correctly', () => {
    render(<AlertMessage {...mockProps} />)
    const messageElement = screen.getByText(mockProps.message)
    expect(messageElement).toBeInTheDocument()
  })

  test('It renders the FaInfoCircle icon', () => {
    render(<AlertMessage {...mockProps} />)
    const iconElement = screen.getByTestId('info-circle-icon')
    expect(iconElement).toBeInTheDocument()
  })
})
