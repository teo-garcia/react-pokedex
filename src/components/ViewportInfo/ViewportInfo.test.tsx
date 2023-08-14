import { act, render, fireEvent, screen } from '@testing-library/react'
import { ViewportInfo } from './ViewportInfo'

describe('<ViewportInfo /> tests', () => {
  test('It should render initial width and height', () => {
    render(<ViewportInfo />)
    const initialWidth = window.innerWidth
    const initialHeight = window.innerHeight

    const widthElement = screen.getByText(`width: ${initialWidth}px;`)
    const heightElement = screen.getByText(`height: ${initialHeight}px;`)

    expect(widthElement).toBeInTheDocument()
    expect(heightElement).toBeInTheDocument()
  })

  test('It should update width and height on window resize', () => {
    render(<ViewportInfo />)
    const newWidth = 800
    const newHeight = 600

    act(() => {
      window.innerWidth = newWidth
      window.innerHeight = newHeight
    })

    fireEvent(window, new Event('resize'))

    expect(screen.getByText(`width: ${newWidth}px;`)).toBeInTheDocument()
    expect(screen.getByText(`height: ${newHeight}px;`)).toBeInTheDocument()
  })
})
