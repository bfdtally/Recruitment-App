import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { officialLinks } from '../data/officialLinks'
import { siteContent } from '../data/siteContent'

const quickActions = [
  { icon: 'book' as const, title: 'Explore Undergraduate Programs', text: 'Browse education pathways and official program information.', to: '/programs', tone: 'green' },
  { icon: 'cap' as const, title: 'Admissions & How to Apply', text: 'Find current steps, requirements, and official application links.', to: '/admissions', tone: 'orange' },
  { icon: 'coins' as const, title: 'Scholarships & Financial Aid', text: 'Connect students with current official funding resources.', to: '/financial-aid', tone: 'gold' },
  { icon: 'download' as const, title: 'Download Counselor Materials', text: 'Access shareable and printable resources for student conversations.', to: '/resources', tone: 'green' },
  { icon: 'pin' as const, title: 'Visit FAMU', text: 'Explore official options for experiencing the campus and community.', to: '/visit', tone: 'orange' },
  { icon: 'chat' as const, title: 'Contact the College of Education', text: 'Reach the College of Education and find the right next connection.', to: '/contact', tone: 'gold' },
]

export function HomePage() {
  return <>
    <section className="hero">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Built for Florida’s school counselors</p>
          <h1>Help Your Students Discover What’s Possible at the FAMU College of Education</h1>
          <p className="hero-lede">Quick access to College of Education programs, admissions resources, scholarships and financial aid information, and materials you can share with students and families.</p>
          <div className="button-row"><Link className="button button-orange" to="/programs">Explore programs <Icon name="arrow" /></Link><Link className="text-link" to="/resources">View counselor resources <Icon name="arrow" /></Link></div>
        </div>
        <div className="hero-art">
          <div className="arch arch-back" />
          <div className="photo-frame"><img src="/assets/famu-teacher-classroom.png" alt="A teacher leads a discussion with a diverse group of college students in a classroom" /></div>
          <div className="stat-card"><strong>1887</strong><span>Where FAMU’s academic story began</span></div>
          <span className="dot dot-one"/><span className="dot dot-two"/>
        </div>
      </div>
    </section>

    <section className="quick-section shell" aria-labelledby="quick-heading">
      <div className="section-heading"><div><p className="eyebrow">Find it fast</p><h2 id="quick-heading">What do you need today?</h2></div><p>Choose a starting point and get to the information you need in seconds.</p></div>
      <div className="card-grid">{quickActions.map(({ icon, title, text, to, tone }) => <Link className="action-card" to={to} key={title}><span className={`icon-tile ${tone}`}><Icon name={icon}/></span><span><strong>{title}</strong><small>{text}</small></span><span className="card-arrow"><Icon name="arrow"/></span></Link>)}</div>
    </section>

    <section className="heritage-section">
      <div className="shell heritage-grid">
        <div className="heritage-art"><span className="year-watermark">1887</span><div className="heritage-seal"><span>Founded in</span><strong>1887</strong></div></div>
        <div className="heritage-copy"><p className="eyebrow">{siteContent.heritage.eyebrow}</p><h2>{siteContent.heritage.title}</h2><p>{siteContent.heritage.body}</p><a className="text-link" href={officialLinks.coe.url} target="_blank" rel="noreferrer">Explore the official COE website <Icon name="arrow" /></a><small>Source reviewed {siteContent.heritage.reviewedOn}</small></div>
      </div>
    </section>

    <section className="cta-section shell"><div><p className="eyebrow">Ready when your student is</p><h2>Keep the next step simple.</h2><p>Open the official application or start with a program conversation—there’s no wrong place to begin.</p></div><div className="button-row"><a className="button button-orange" href={officialLinks.apply.url} target="_blank" rel="noreferrer">Apply to FAMU <Icon name="arrow"/></a><Link className="button button-light" to="/admissions">Admissions resources</Link></div></section>
  </>
}
