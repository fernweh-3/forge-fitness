import { cleanup, fireEvent, render, screen, within } from '@testing-library/react'
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
      screen.getAllByRole('link', { name: 'Book a Free Trial' }),
    ).toHaveLength(2)
    expect(screen.getByRole('heading', { name: 'Find your next session.' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Good work gets noticed.' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Opening hours' })).toBeInTheDocument()
    expect(screen.getAllByText('184 Franklin Street')).toHaveLength(1)
    expect(screen.getAllByAltText('Forge Fitness mark')).toHaveLength(1)
    const nextSlideButton = screen.getByRole('button', { name: 'Next slide' })
    expect(nextSlideButton).toBeInTheDocument()
    expect(
      screen.getByAltText(
        'Training floor with racks, weights, and an open space for coached sessions',
      ),
    ).toBeInTheDocument()
    fireEvent.click(nextSlideButton)
    expect(
      screen.getByAltText('Coach guiding a member through a strength training movement'),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Explore Classes' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Expert coaching' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Supportive community' })).toBeInTheDocument()
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
    expect(
      screen.getByRole('heading', { name: 'Membership questions, answered.' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Can I try Forge Fitness before joining?'),
    ).toBeInTheDocument()
  })

  it('lists classes with schedule details and filters by type and difficulty', () => {
    window.history.pushState({}, '', '/classes')
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Strength Lab' })).toBeInTheDocument()
    expect(screen.getByText('Alex Morgan')).toBeInTheDocument()
    expect(screen.getByText('Monday & Wednesday · 6:00 PM')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Class type'), { target: { value: 'Mobility' } })
    expect(screen.getAllByRole('article')).toHaveLength(2)
    expect(screen.getByRole('heading', { name: 'Mobility Reset' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Strength Lab' })).not.toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Difficulty'), { target: { value: 'Advanced' } })
    expect(screen.getByRole('heading', { name: 'Classes' })).toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent('No classes match those filters')
  })

  it('renders the filtered class card with all required details', () => {
    window.history.pushState({}, '', '/classes')
    render(<App />)
    fireEvent.change(screen.getByLabelText('Class type'), { target: { value: 'Conditioning' } })
    fireEvent.change(screen.getByLabelText('Difficulty'), { target: { value: 'Advanced' } })

    const classCard = screen.getByRole('article')
    expect(within(classCard).getByRole('heading', { name: 'Engine Room' })).toBeInTheDocument()
    expect(within(classCard).getByText('Maya Rivera')).toBeInTheDocument()
    expect(within(classCard).getByText('60 minutes')).toBeInTheDocument()
    expect(within(classCard).getByText('Saturday · 9:00 AM')).toBeInTheDocument()
  })
})