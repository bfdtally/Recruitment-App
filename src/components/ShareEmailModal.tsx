import { useState } from 'react'

type Props = { title: string; url: string; onClose: () => void }

export function ShareEmailModal({ title, url, onClose }: Props) {
  const [audience, setAudience] = useState<'student'|'family'>('student')
  const [subject, setSubject] = useState(`FAMU College of Education: ${title}`)
  const defaultMessage = (kind: 'student'|'family') => kind === 'student'
    ? `Here is information about a Florida A&M University College of Education resource we discussed. You can use the link below to learn more and review current official FAMU information.\n\n${title}\n${url}`
    : `Here is information for your family about a Florida A&M University College of Education resource we discussed. The link below provides more details and connects you with current official FAMU information.\n\n${title}\n${url}`
  const [message, setMessage] = useState(defaultMessage('student'))
  const switchAudience = (next: 'student'|'family') => { setAudience(next); setMessage(defaultMessage(next)) }
  return <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}><div className="share-modal" role="dialog" aria-modal="true" aria-labelledby="share-email-title"><button className="modal-close" onClick={onClose} aria-label="Close email sharing">×</button><p className="eyebrow">Share by email</p><h2 id="share-email-title">Send a helpful next step</h2><div className="audience-switch"><button className={audience==='student'?'active':''} onClick={() => switchAudience('student')}>Student version</button><button className={audience==='family'?'active':''} onClick={() => switchAudience('family')}>Family version</button></div><label>Subject<input value={subject} onChange={(e) => setSubject(e.target.value)}/></label><label>Message<textarea rows={8} value={message} onChange={(e) => setMessage(e.target.value)}/></label><div className="modal-actions"><button className="button outline-button" onClick={() => navigator.clipboard.writeText(subject)}>Copy Subject</button><button className="button outline-button" onClick={() => navigator.clipboard.writeText(message)}>Copy Message</button><a className="button button-orange" href={`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`}>Open in Email App</a></div></div></div>
}
