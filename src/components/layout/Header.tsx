import { NavLink } from 'react-router-dom'

const navigationItems = [
  { label: 'Home', to: '/' },
  { label: 'Memberships', to: '/memberships' },
  { label: 'Classes', to: '/classes' },
  { label: 'Contact', to: '/contact' },
]

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink className="brand" to="/" aria-label="Forge Fitness home">
          Forge Fitness
        </NavLink>
        <nav className="site-nav" aria-label="Main navigation">
          <ul className="site-nav__list">
            {navigationItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'site-nav__link is-active' : 'site-nav__link'
                  }
                  to={item.to}
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}