import { gymInfo } from '../../data/home'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <img
          className="site-footer__logo"
          src="/brand/forge-fitness-logo-on-dark.svg"
          alt="Forge Fitness"
        />
        <p>Strength starts here.</p>
        <address>
          {gymInfo.address.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </address>
        <div className="site-footer__contact">
          <a href={`tel:${gymInfo.phone.replace(/[^\d+]/g, '')}`}>{gymInfo.phone}</a>
          <a href={`mailto:${gymInfo.email}`}>{gymInfo.email}</a>
        </div>
        <h2 className="site-footer__hours-title">Opening hours</h2>
        <dl className="site-footer__hours">
          {gymInfo.hours.map(([day, hours]) => (
            <div key={day}>
              <dt>{day}</dt>
              <dd>{hours}</dd>
            </div>
          ))}
        </dl>
      </div>
    </footer>
  )
}