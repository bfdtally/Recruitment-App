import { useState } from 'react'
import { counselorResources, type CounselorResource } from '../data/counselorResources'
import { QRModal } from '../components/QRModal'
import { ShareEmailModal } from '../components/ShareEmailModal'

export function ResourcesPage() {
  const [qr, setQr] = useState<CounselorResource|null>(null)
  const [email, setEmail] = useState<CounselorResource|null>(null)
  const resolveUrl = (url:string) => url.startsWith('/') ? `${window.location.origin}${url}` : url
  return <><section className="resource-hero"><div className="shell narrow-heading"><p className="eyebrow">Counselor resources</p><h1>Find it, show it, or share it—in seconds</h1><p>Fast access to verified resources for conversations with students and families.</p></div></section><section className="resource-library shell"><div className="section-heading"><div><p className="eyebrow">Resource library</p><h2>Ready for the conversation</h2></div><p>All listed resources are active and were reviewed on September 11, 2026.</p></div><div className="library-grid">{counselorResources.filter(r=>r.active).map(resource=><article className="library-card" key={resource.id}><div className="program-tags"><span>{resource.category}</span><span>{resource.type}</span></div><h3>{resource.title}</h3><p>{resource.description}</p><small>For {resource.audience.join(', ')}</small><div className="library-actions"><a className="button button-green" href={resource.officialUrl}>Open</a><button onClick={()=>navigator.clipboard.writeText(resolveUrl(resource.officialUrl))}>Copy Link</button><button onClick={()=>setEmail(resource)}>Share by Email</button>{resource.qrDestination&&<button onClick={()=>setQr(resource)}>QR Code</button>}</div></article>)}</div><div className="placeholder-note"><strong>Printable materials and videos</strong><p>Approved FAMU recruiting PDFs and videos can be added here when supplied. No sample download is presented as an official file.</p></div></section>{qr&&<QRModal title={qr.title} url={resolveUrl(qr.qrDestination!)} onClose={()=>setQr(null)}/>} {email&&<ShareEmailModal title={email.title} url={resolveUrl(email.officialUrl)} onClose={()=>setEmail(null)}/>}</>
}
