import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders the home page and accessible main navigation', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: 'Build strength that lasts.' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(
      screen.getAllByRole('link', { name: 'Book a free trial' }),
    ).toHaveLength(2)
  })

  it('renders each configured route', () => {
    const routes = [
      ['/memberships', 'Choose your way to get stronger.'],
      ['/classes', 'Classes'],
      ['/contact', 'Contact'],
    ] as const

    for (const [route, heading] of routes) {
      window.history.pushState({}, '', route)
      render(<App />)

      expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument()
      cleanup()
    }
  })

  it('shows the three membership plans for comparison', () => {
    window.history.pushState({}, '', '/memberships')
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Monthly' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Annual' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Student' })).toBeInTheDocument()
    expect(screen.getByText('Best value')).toBeInTheDocument()
  })
})