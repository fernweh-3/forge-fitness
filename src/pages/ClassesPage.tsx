import { useState } from 'react'
import { classLevels, classTypes, fitnessClasses, type ClassLevel, type ClassType } from '../data/classes'

export function ClassesPage() {
  const [selectedType, setSelectedType] = useState<ClassType | 'All'>('All')
  const [selectedLevel, setSelectedLevel] = useState<ClassLevel | 'All'>('All')

  const filteredClasses = fitnessClasses.filter((fitnessClass) => {
    const matchesType = selectedType === 'All' || fitnessClass.type === selectedType
    const matchesLevel = selectedLevel === 'All' || fitnessClass.level === selectedLevel

    return matchesType && matchesLevel
  })

  return (
    <div className="classes-page">
      <section className="classes-intro" aria-labelledby="classes-title">
        <p className="page-placeholder__eyebrow">Forge Fitness schedule</p>
        <h1 id="classes-title">Classes</h1>
        <p>Find a coached session that fits your goals, experience, and week.</p>
      </section>

      <section className="classes-directory" aria-labelledby="classes-directory-title">
        <div className="section-heading">
          <p className="page-placeholder__eyebrow">Train with purpose</p>
          <h2 id="classes-directory-title">Choose your next session.</h2>
        </div>

        <div className="class-filters" aria-label="Filter classes">
          <label>
            Class type
            <select
              value={selectedType}
              onChange={(event) => setSelectedType(event.target.value as ClassType | 'All')}
            >
              <option value="All">All class types</option>
              {classTypes.map((classType) => (
                <option key={classType} value={classType}>
                  {classType}
                </option>
              ))}
            </select>
          </label>
          <label>
            Difficulty
            <select
              value={selectedLevel}
              onChange={(event) => setSelectedLevel(event.target.value as ClassLevel | 'All')}
            >
              <option value="All">All difficulty levels</option>
              {classLevels.map((classLevel) => (
                <option key={classLevel} value={classLevel}>
                  {classLevel}
                </option>
              ))}
            </select>
          </label>
        </div>

        {filteredClasses.length > 0 ? (
          <div className="class-list" aria-live="polite">
            {filteredClasses.map((fitnessClass) => (
              <article className="class-card" key={fitnessClass.name}>
                <div className="class-card__heading">
                  <p className="class-card__type">{fitnessClass.type}</p>
                  <h3>{fitnessClass.name}</h3>
                </div>
                <p className="class-card__description">{fitnessClass.description}</p>
                <dl className="class-card__details">
                  <div>
                    <dt>Instructor</dt>
                    <dd>{fitnessClass.instructor}</dd>
                  </div>
                  <div>
                    <dt>Difficulty</dt>
                    <dd>{fitnessClass.level}</dd>
                  </div>
                  <div>
                    <dt>Duration</dt>
                    <dd>{fitnessClass.duration}</dd>
                  </div>
                  <div>
                    <dt>Schedule</dt>
                    <dd>{fitnessClass.schedule}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        ) : (
          <p className="class-list__empty" role="status">
            No classes match those filters. Try a different combination.
          </p>
        )}
      </section>
    </div>
  )
}