import { Link } from 'react-router-dom'

export function ComingSoonPage({ title }: { title: string }) {
  return <section className="page-placeholder shell"><p className="eyebrow">Resource center</p><h1>{title}</h1><p>This section is prepared in the application shell and will be developed in the next project phase using verified official FAMU sources.</p><Link className="button button-green" to="/">Return home</Link></section>
}
