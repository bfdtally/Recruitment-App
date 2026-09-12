import { Link } from 'react-router-dom'
import { OfficialResourceCard } from '../components/OfficialResourceCard'
import { officialLinks } from '../data/officialLinks'

const resources = [
  { eyebrow: 'Start here', title: 'Apply to FAMU', description: 'Open FAMU’s official application options for undergraduate, transfer, graduate, and other applicants.', link: officialLinks.apply, featured: true },
  { eyebrow: 'First-time students', title: 'Undergraduate Admissions', description: 'Review current freshman admission information, required materials, and official guidance.', link: officialLinks.freshman },
  { eyebrow: 'Experience campus', title: 'Visit FAMU', description: 'Explore current family and group tour options through the official campus visits page.', link: officialLinks.visit },
  { eyebrow: 'Continue your journey', title: 'Transfer Information', description: 'Find current transfer categories, application information, and the FAMU IGNITE pathway.', link: officialLinks.transfer },
  { eyebrow: 'Plan for college', title: 'Financial Aid', description: 'Reach the Office of Financial Aid for FAFSA guidance, aid types, forms, and support.', link: officialLinks.financialAid },
  { eyebrow: 'Explore opportunities', title: 'Scholarships', description: 'Review current university scholarship information and official application guidance.', link: officialLinks.scholarships },
  { eyebrow: 'College of Education', title: 'Future Rattlers', description: 'See current College of Education information for students exploring teacher-education pathways.', link: officialLinks.futureRattlers },
]

const steps = [
  { number: '01', title: 'Explore a program', text: 'Browse College of Education pathways.', to: '/programs', external: false },
  { number: '02', title: 'Review admissions', text: 'See current university information.', to: officialLinks.admissions.url, external: true },
  { number: '03', title: 'Explore funding', text: 'Review aid and scholarship resources.', to: '/financial-aid', external: false },
  { number: '04', title: 'Visit FAMU', text: 'Experience the campus and community.', to: officialLinks.visit.url, external: true },
  { number: '05', title: 'Apply', text: 'Open the official application options.', to: officialLinks.apply.url, external: true },
]

export function AdmissionsPage() {
  return <>
    <section className="resource-hero admissions-hero"><div className="shell narrow-heading"><p className="eyebrow">Admissions resources</p><h1>Make the next step easier to find</h1><p>Direct access to current, official FAMU resources counselors can use and share with students and families.</p></div></section>
    <section className="official-resources shell" aria-labelledby="admissions-resources"><div className="section-heading"><div><p className="eyebrow">Official destinations</p><h2 id="admissions-resources">Everything in one place</h2></div><p>Each card opens the corresponding official FAMU page in a new tab.</p></div><div className="official-grid">{resources.map((resource) => <OfficialResourceCard key={resource.title} eyebrow={resource.eyebrow} title={resource.title} description={resource.description} href={resource.link.url} featured={resource.featured}/>)}</div></section>
    <section className="admission-distinction"><div className="shell distinction-grid"><div><p className="eyebrow">One helpful distinction</p><h2>Two milestones, clearly separated</h2><p>Students first apply for admission to Florida A&amp;M University. Teacher-education students may later complete a separate College of Education process for admission to a professional teacher-education program.</p></div><div className="milestone-stack"><div><span>First</span><strong>Admission to Florida A&amp;M University</strong><p>The university application and undergraduate admissions process.</p></div><div><span>Later, when applicable</span><strong>Admission to a Professional Teacher Education Program</strong><p>A College of Education milestone during the student’s university journey. Review current details on the Future Rattlers page.</p><a href={officialLinks.futureRattlers.url} target="_blank" rel="noreferrer">View Future Rattlers information →</a></div></div></div></section>
    <section className="next-steps shell"><div className="section-heading"><div><p className="eyebrow">Helping a student take the next step</p><h2>A flexible path forward</h2></div><p>Every step is optional and can be opened independently.</p></div><div className="step-track">{steps.map((step) => step.external ? <a key={step.number} href={step.to} target="_blank" rel="noreferrer"><span>{step.number}</span><strong>{step.title}</strong><small>{step.text}</small></a> : <Link key={step.number} to={step.to}><span>{step.number}</span><strong>{step.title}</strong><small>{step.text}</small></Link>)}</div></section>
  </>
}
