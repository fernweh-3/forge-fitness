import { Link } from 'react-router-dom'
import { membershipPlans } from '../data/memberships'

export function MembershipsPage() {
  return (
    <div className="memberships-page">
      <section className="memberships-intro" aria-labelledby="memberships-title">
        <p className="page-placeholder__eyebrow">Forge Fitness plans</p>
        <h1 id="memberships-title">Choose your way to get stronger.</h1>
        <p>
          Simple membership options with the access and support you need to
          keep showing up.
        </p>
      </section>

      <section aria-labelledby="plans-title">
        <div className="section-heading">
          <p className="page-placeholder__eyebrow">Membership options</p>
          <h2 id="plans-title">Find the plan that fits your routine.</h2>
        </div>
        <div className="membership-grid">
          {membershipPlans.map((plan) => (
            <article
              className={
                plan.featured
                  ? 'membership-card membership-card--featured'
                  : 'membership-card'
              }
              key={plan.name}
            >
              {plan.featured && (
                <p className="membership-card__badge">Best value</p>
              )}
              <h3>{plan.name}</h3>
              <p className="membership-card__description">{plan.description}</p>
              <p className="membership-card__price">
                <strong>{plan.price}</strong>
                <span>{plan.cadence}</span>
              </p>
              <ul className="membership-card__benefits">
                {plan.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
              <Link className="button-link" to="/contact">
                Choose {plan.name}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}