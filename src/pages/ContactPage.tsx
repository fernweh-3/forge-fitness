import { useState, type ChangeEvent, type FormEvent } from 'react'
import { gymInfo } from '../data/home'

type ContactFormData = {
  name: string
  email: string
  message: string
}

type TrialFormData = {
  name: string
  email: string
  preferredDate: string
  preferredTime: string
  goal: string
}

type FormErrors<T> = Partial<Record<keyof T, string>>

const emptyContactForm: ContactFormData = {
  name: '',
  email: '',
  message: '',
}

const emptyTrialForm: TrialFormData = {
  name: '',
  email: '',
  preferredDate: '',
  preferredTime: '',
  goal: '',
}

function validateContactForm(form: ContactFormData): FormErrors<ContactFormData> {
  const errors: FormErrors<ContactFormData> = {}

  if (!form.name.trim()) errors.name = 'Please enter your name.'
  if (!form.email.trim()) errors.email = 'Please enter your email address.'
  if (!form.message.trim()) errors.message = 'Please tell us how we can help.'

  return errors
}

function validateTrialForm(form: TrialFormData): FormErrors<TrialFormData> {
  const errors: FormErrors<TrialFormData> = {}

  if (!form.name.trim()) errors.name = 'Please enter your name.'
  if (!form.email.trim()) errors.email = 'Please enter your email address.'
  if (!form.preferredDate) errors.preferredDate = 'Please choose a preferred date.'
  if (!form.preferredTime) errors.preferredTime = 'Please choose a preferred time.'
  if (!form.goal.trim()) errors.goal = 'Please tell us what you want to work on.'

  return errors
}

export function ContactPage() {
  const [contactForm, setContactForm] = useState(emptyContactForm)
  const [contactErrors, setContactErrors] = useState<FormErrors<ContactFormData>>({})
  const [contactSubmitted, setContactSubmitted] = useState(false)
  const [trialForm, setTrialForm] = useState(emptyTrialForm)
  const [trialErrors, setTrialErrors] = useState<FormErrors<TrialFormData>>({})
  const [trialSubmitted, setTrialSubmitted] = useState(false)

  function updateContactField(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target
    setContactForm((current) => ({ ...current, [name]: value }))
    setContactErrors((current) => ({ ...current, [name]: undefined }))
    setContactSubmitted(false)
  }

  function updateTrialField(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target
    setTrialForm((current) => ({ ...current, [name]: value }))
    setTrialErrors((current) => ({ ...current, [name]: undefined }))
    setTrialSubmitted(false)
  }

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const errors = validateContactForm(contactForm)
    setContactErrors(errors)
    setContactSubmitted(Object.keys(errors).length === 0)
  }

  function handleTrialSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const errors = validateTrialForm(trialForm)
    setTrialErrors(errors)
    setTrialSubmitted(Object.keys(errors).length === 0)
  }

  return (
    <div className="contact-page">
      <section className="contact-intro" aria-labelledby="contact-title">
        <p className="page-placeholder__eyebrow">Forge Fitness support</p>
        <h1 id="contact-title">Contact</h1>
        <p>Ask a question or book your first session with the Forge team.</p>
      </section>

      <div className="contact-layout">
        <section className="contact-details" aria-labelledby="contact-details-title">
          <div className="section-heading">
            <p className="page-placeholder__eyebrow">Come by</p>
            <h2 id="contact-details-title">Let&apos;s get you moving.</h2>
          </div>
          <address>
            {gymInfo.address.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
          <a href={`tel:${gymInfo.phone.replace(/[^\d+]/g, '')}`}>{gymInfo.phone}</a>
          <a href={`mailto:${gymInfo.email}`}>{gymInfo.email}</a>
          <div>
            <h3>Opening hours</h3>
            <dl className="hours-list">
              {gymInfo.hours.map(([day, hours]) => (
                <div key={day}>
                  <dt>{day}</dt>
                  <dd>{hours}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="form-panel" aria-labelledby="message-title">
          <div className="section-heading">
            <p className="page-placeholder__eyebrow">Questions welcome</p>
            <h2 id="message-title">Send us a message.</h2>
          </div>
          <form className="contact-form" onSubmit={handleContactSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={contactForm.name}
                onChange={updateContactField}
                aria-describedby={contactErrors.name ? 'contact-name-error' : undefined}
                aria-invalid={Boolean(contactErrors.name)}
              />
              {contactErrors.name && <p id="contact-name-error" className="form-error">{contactErrors.name}</p>}
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={contactForm.email}
                onChange={updateContactField}
                aria-describedby={contactErrors.email ? 'contact-email-error' : undefined}
                aria-invalid={Boolean(contactErrors.email)}
              />
              {contactErrors.email && <p id="contact-email-error" className="form-error">{contactErrors.email}</p>}
            </div>
            <div className="form-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={contactForm.message}
                onChange={updateContactField}
                aria-describedby={contactErrors.message ? 'contact-message-error' : undefined}
                aria-invalid={Boolean(contactErrors.message)}
              />
              {contactErrors.message && <p id="contact-message-error" className="form-error">{contactErrors.message}</p>}
            </div>
            <button type="submit">Send message</button>
            {contactSubmitted && (
              <p className="form-success" role="status">
                Thanks for reaching out. Your message has been received in demo mode.
              </p>
            )}
          </form>
        </section>

        <section className="form-panel form-panel--accent" aria-labelledby="trial-title">
          <div className="section-heading">
            <p className="page-placeholder__eyebrow">Start strong</p>
            <h2 id="trial-title">Book a free trial.</h2>
            <p>Tell us when you would like to visit and what you want to work on.</p>
          </div>
          <form className="contact-form" onSubmit={handleTrialSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="trial-name">Name</label>
              <input
                id="trial-name"
                name="name"
                type="text"
                value={trialForm.name}
                onChange={updateTrialField}
                aria-describedby={trialErrors.name ? 'trial-name-error' : undefined}
                aria-invalid={Boolean(trialErrors.name)}
              />
              {trialErrors.name && <p id="trial-name-error" className="form-error">{trialErrors.name}</p>}
            </div>
            <div className="form-field">
              <label htmlFor="trial-email">Email</label>
              <input
                id="trial-email"
                name="email"
                type="email"
                value={trialForm.email}
                onChange={updateTrialField}
                aria-describedby={trialErrors.email ? 'trial-email-error' : undefined}
                aria-invalid={Boolean(trialErrors.email)}
              />
              {trialErrors.email && <p id="trial-email-error" className="form-error">{trialErrors.email}</p>}
            </div>
            <div className="form-field-group">
              <div className="form-field">
                <label htmlFor="trial-date">Preferred date</label>
                <input
                  id="trial-date"
                  name="preferredDate"
                  type="date"
                  value={trialForm.preferredDate}
                  onChange={updateTrialField}
                  aria-describedby={trialErrors.preferredDate ? 'trial-date-error' : undefined}
                  aria-invalid={Boolean(trialErrors.preferredDate)}
                />
                {trialErrors.preferredDate && <p id="trial-date-error" className="form-error">{trialErrors.preferredDate}</p>}
              </div>
              <div className="form-field">
                <label htmlFor="trial-time">Preferred time</label>
                <select
                  id="trial-time"
                  name="preferredTime"
                  value={trialForm.preferredTime}
                  onChange={updateTrialField}
                  aria-describedby={trialErrors.preferredTime ? 'trial-time-error' : undefined}
                  aria-invalid={Boolean(trialErrors.preferredTime)}
                >
                  <option value="">Select a time</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
                {trialErrors.preferredTime && <p id="trial-time-error" className="form-error">{trialErrors.preferredTime}</p>}
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="trial-goal">What would you like to work on?</label>
              <textarea
                id="trial-goal"
                name="goal"
                rows={4}
                value={trialForm.goal}
                onChange={updateTrialField}
                aria-describedby={trialErrors.goal ? 'trial-goal-error' : undefined}
                aria-invalid={Boolean(trialErrors.goal)}
              />
              {trialErrors.goal && <p id="trial-goal-error" className="form-error">{trialErrors.goal}</p>}
            </div>
            <button type="submit">Request free trial</button>
            {trialSubmitted && (
              <p className="form-success" role="status">
                Your trial request is in. We&apos;ll be in touch in demo mode to confirm a time.
              </p>
            )}
          </form>
        </section>
      </div>
    </div>
  )
}