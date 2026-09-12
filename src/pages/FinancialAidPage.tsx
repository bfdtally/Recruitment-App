import { OfficialResourceCard } from '../components/OfficialResourceCard'
import { officialLinks } from '../data/officialLinks'

const fundingResources = [
  { eyebrow: 'University opportunities', title: 'FAMU Scholarships', description: 'Explore current scholarship guidance and opportunities through the official University Scholarship Program.', link: officialLinks.scholarships, featured: true },
  { eyebrow: 'Aid and FAFSA', title: 'Office of Financial Aid', description: 'Find current financial aid steps, FAFSA information, types of aid, forms, and contact support.', link: officialLinks.financialAid },
  { eyebrow: 'Begin with admission', title: 'FAMU Admissions', description: 'Review the admissions process and connect funding exploration with a student’s application journey.', link: officialLinks.admissions },
  { eyebrow: 'Program exploration', title: 'College of Education', description: 'Return to the official College of Education website for current college-level information and opportunities.', link: officialLinks.coe },
]

export function FinancialAidPage() {
  return <>
    <section className="resource-hero aid-hero"><div className="shell narrow-heading"><p className="eyebrow">Scholarships &amp; financial aid</p><h1>Connect students with current funding resources</h1><p>A streamlined starting point for official scholarship, financial aid, admissions, and College of Education information.</p></div></section>
    <section className="official-resources shell" aria-labelledby="funding-heading"><div className="section-heading"><div><p className="eyebrow">Official FAMU resources</p><h2 id="funding-heading">Explore ways to fund college</h2></div><p>Use these links to review current details directly with FAMU.</p></div><div className="official-grid funding-grid">{fundingResources.map((resource) => <OfficialResourceCard key={resource.title} eyebrow={resource.eyebrow} title={resource.title} description={resource.description} href={resource.link.url} featured={resource.featured}/>)}</div>
      <div className="update-notice"><div className="notice-icon">i</div><div><strong>Check the official source for the latest opportunity</strong><p>Scholarship availability, requirements, award amounts, and deadlines can change. Counselors, students, and families should confirm current information through the linked official FAMU pages.</p></div></div>
    </section>
    <section className="funding-help"><div className="shell funding-help-grid"><div><p className="eyebrow">A simple conversation starter</p><h2>Different students may use different resources.</h2></div><p>Financial aid can include grants, scholarships, work opportunities, and loans. The FAMU Office of Financial Aid explains current options and guides students through the official process.</p><a className="button button-orange" href={officialLinks.financialAid.url} target="_blank" rel="noreferrer">Visit Financial Aid</a></div></section>
  </>
}
