import { Link } from 'react-router-dom'
import { officialLinks } from '../data/officialLinks'

export function Footer() {
  return <footer className="site-footer">
    <div className="shell footer-grid">
      <div><strong>Florida A&amp;M University College of Education Counselor Resource Center</strong><p>A counselor-focused resource for exploring College of Education opportunities and reaching current official FAMU information.</p></div>
      <div><strong>Quick links</strong><Link to="/programs">Explore programs</Link><Link to="/resources">Counselor resources</Link><Link to="/contact">Contact</Link></div>
      <div><strong>Official FAMU resources</strong><a href={officialLinks.coe.url}>College of Education</a><a href={officialLinks.admissions.url}>Admissions</a><a href={officialLinks.apply.url}>Apply to FAMU</a></div>
    </div>
    <div className="shell footer-bottom"><span>Independently developed resource center prototype.</span><span>This is not an official FAMU admissions system.</span></div>
  </footer>
}
