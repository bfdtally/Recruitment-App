import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { programCategories, programs, type ProgramCategory } from '../data/programs'

type Filter = 'all' | ProgramCategory

export function ProgramsPage() {
  const [filter, setFilter] = useState<Filter>('all')
  const visiblePrograms = useMemo(() => programs.filter((program) => filter === 'all' || program.category === filter), [filter])
  const undergraduateCount = programs.filter((program) => program.level === 'Undergraduate').length

  return <>
    <section className="programs-hero">
      <div className="shell narrow-heading"><p className="eyebrow">Explore academic pathways</p><h1>Programs for future educators and leaders</h1><p>Browse verified College of Education offerings, then open any program for a concise, counselor-friendly overview and direct links to official FAMU information.</p></div>
    </section>
    <section className="program-explorer shell" aria-labelledby="program-list-heading">
      <div className="program-summary"><div><strong>{undergraduateCount}</strong><span>undergraduate licensure programs</span></div><p>Programs are presented for exploration—not as recommendations or student matches.</p></div>
      <div className="filter-bar" aria-label="Filter programs">
        {programCategories.map((category) => <button key={category.id} className={filter === category.id ? 'active' : ''} aria-pressed={filter === category.id} onClick={() => setFilter(category.id)}>{category.label}</button>)}
      </div>
      <div className="results-heading"><h2 id="program-list-heading">{programCategories.find((category) => category.id === filter)?.label}</h2><span aria-live="polite">{visiblePrograms.length} {visiblePrograms.length === 1 ? 'program' : 'programs'}</span></div>
      <div className="program-grid">{visiblePrograms.map((program, index) => <article className="program-card" key={program.slug}>
        <div className={`program-number tone-${index % 3}`}>{String(index + 1).padStart(2, '0')}</div>
        <div className="program-tags"><span>{program.level}</span>{program.gradeBand && <span>{program.gradeBand}</span>}</div>
        <h3>{program.name}</h3><p>{program.summary}</p>
        <dl><div><dt>Credential</dt><dd>{program.degree}</dd></div>{program.gradeBand && <div><dt>Teaching area</dt><dd>{program.gradeBand}</dd></div>}</dl>
        <Link className="program-link" to={`/programs/${program.slug}`}>Learn more <Icon name="arrow" /></Link>
      </article>)}</div>
    </section>
  </>
}
