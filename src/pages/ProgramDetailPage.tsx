import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { officialLinks } from '../data/officialLinks'
import { programs } from '../data/programs'
import { QRModal } from '../components/QRModal'
import { ShareEmailModal } from '../components/ShareEmailModal'

export function ProgramDetailPage() {
  const { slug } = useParams()
  const program = programs.find((item) => item.slug === slug)
  const [shareStatus, setShareStatus] = useState('')
  const [showQr, setShowQr] = useState(false)
  const [showEmail, setShowEmail] = useState(false)
  if (!program) return <Navigate to="/programs" replace />

  const shareProgram = async () => {
    const shareData = { title: `${program.name} | FAMU College of Education`, text: `Explore ${program.name} at the FAMU College of Education.`, url: window.location.href }
    try {
      if (navigator.share) {
        await navigator.share(shareData)
        setShareStatus('Share options opened.')
      } else {
        await navigator.clipboard.writeText(window.location.href)
        setShareStatus('Program link copied.')
      }
    } catch (error) {
      if ((error as Error).name !== 'AbortError') setShareStatus('Unable to share. Copy the page address from your browser.')
    }
  }

  return <article className="program-detail">
    <header className="detail-hero"><div className="shell"><Link className="back-link" to="/programs">← All programs</Link><div className="program-tags"><span>{program.level}</span>{program.gradeBand && <span>{program.gradeBand}</span>}</div><h1>{program.name}</h1><p>{program.summary}</p></div></header>
    <div className="shell detail-layout">
      <section className="detail-main"><p className="eyebrow">Program overview</p><h2>A clear starting point for the conversation</h2><p>This page provides a concise introduction for counselors, students, and families. Curriculum, admission requirements, certification details, and other institutional information can change; use the official program destination below for the most current details.</p>
        <div className="detail-facts"><div><span>Degree or credential</span><strong>{program.degree}</strong></div><div><span>Teaching or professional area</span><strong>{program.gradeBand ?? program.shortName}</strong></div></div>
        <div className="official-note"><strong>Current information is one click away</strong><p>Explore the latest curriculum, admissions guidance, and program details through the official FAMU links provided on this page.</p></div>
      </section>
      <aside className="detail-actions" aria-label="Program actions"><h2>Share the next step</h2><a className="button button-orange" href={program.officialUrl} target="_blank" rel="noreferrer">View Official Program Information <Icon name="arrow" /></a><a className="button outline-button" href={officialLinks.admissions.url} target="_blank" rel="noreferrer">Admissions Information</a><button className="button outline-button" onClick={shareProgram}>Share This Program</button><button className="button outline-button" onClick={() => setShowEmail(true)}>Share by Email</button><button className="button outline-button" onClick={() => setShowQr(true)}>Show QR Code</button><button className="button outline-button" onClick={() => window.print()}>Print This Page</button><p className="share-status" role="status">{shareStatus}</p><small>Source reviewed {program.reviewedOn}</small></aside>
    </div>
    <div className="print-url">Program URL: {window.location.href}<br/>Official source: {program.officialUrl}</div>{showQr&&<QRModal title={program.name} url={window.location.href} onClose={()=>setShowQr(false)}/>} {showEmail&&<ShareEmailModal title={program.name} url={window.location.href} onClose={()=>setShowEmail(false)}/>} 
  </article>
}
