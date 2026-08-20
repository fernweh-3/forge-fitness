import { Link } from 'react-router-dom'

const benefits = [
  {
    title: 'Train with purpose',
    description: 'Focused coaching and practical programming for measurable progress.',
  },
  {
    title: 'Built for every body',
    description: 'A welcoming training floor with options for every starting point.',
  },
  {
    title: 'Show up stronger',
    description: 'Build consistency with support that keeps your goals in reach.',
  },
]

export function HomePage() {
  return (
    <div className="home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero__content">
          <p className="page-placeholder__eyebrow">Forge Fitness</p>
          <h1 id="home-title">Build strength that lasts.</h1>
          <p>
            A modern local gym for focused training, expert guidance, and a
            stronger everyday life.
          </p>
          <Link className="button-link" to="/contact">
            Book a free trial
          </Link>
        </div>
        <div className="home-hero__panel" aria-label="Training environment">
          <span>01</span>
          <strong>Train<br />together.</strong>
          <p>Clear coaching. Real momentum.</p>
        </div>
      </section>

      <section className="home-intro" aria-labelledby="intro-title">
        <p className="page-placeholder__eyebrow">More than a workout</p>
        <h2 id="intro-title">A place to get stronger, your way.</h2>
        <p>
          Forge Fitness brings together smart training, a supportive community,
          and the tools to make progress feel possible week after week.
        </p>
      </section>

      <section className="home-benefits" aria-labelledby="benefits-title">
        <div className="section-heading">
          <p className="page-placeholder__eyebrow">Why Forge</p>
          <h2 id="benefits-title">The work is yours. The support is ours.</h2>
        </div>
        <div className="benefit-list">
          {benefits.map((benefit, index) => (
            <article className="benefit-item" key={benefit.title}>
              <span className="benefit-item__number">0{index + 1}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-cta" aria-labelledby="cta-title">
        <div>
          <p className="page-placeholder__eyebrow">Start here</p>
          <h2 id="cta-title">Your first session is on us.</h2>
        </div>
        <Link className="button-link button-link--light" to="/contact">
          Book a free trial
        </Link>
      </section>
    </div>
  )
}