import { useState } from 'react'

export type HeroSlide = {
  src: string
  alt: string
  label: string
  detail: string
}

type HeroCarouselProps = {
  slides: HeroSlide[]
}

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeSlide = slides[activeIndex]

  const showPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? slides.length - 1 : currentIndex - 1,
    )
  }

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length)
  }

  return (
    <section className="hero-carousel" aria-label="Forge Fitness facilities">
      <div className="hero-carousel__frame">
        <img
          key={activeSlide.src}
          src={activeSlide.src}
          alt={activeSlide.alt}
          className="hero-carousel__image"
        />
        <div className="hero-carousel__caption">
          <span>{activeSlide.label}</span>
          <strong>{activeSlide.detail}</strong>
        </div>
      </div>
      <div className="hero-carousel__controls">
        <button type="button" onClick={showPrevious} aria-label="Previous slide">
          <span aria-hidden="true">←</span>
        </button>
        <div className="hero-carousel__indicators" aria-label="Choose a slide">
          {slides.map((slide, index) => (
            <button
              type="button"
              className={index === activeIndex ? 'is-active' : undefined}
              aria-label={`Show slide ${index + 1}: ${slide.label}`}
              aria-current={index === activeIndex ? 'true' : undefined}
              key={slide.src}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <button type="button" onClick={showNext} aria-label="Next slide">
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  )
}