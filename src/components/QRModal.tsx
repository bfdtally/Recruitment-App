import { QRCodeSVG } from 'qrcode.react'

export function QRModal({ title, url, onClose }: { title:string; url:string; onClose:()=>void }) {
  return <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}><div className="qr-modal" role="dialog" aria-modal="true" aria-labelledby="qr-title"><button className="modal-close" onClick={onClose} aria-label="Close QR code">×</button><p className="eyebrow">Scan to explore</p><h2 id="qr-title">{title}</h2><div className="qr-frame"><QRCodeSVG value={url} size={260} level="M" includeMargin /></div><p className="qr-url">{url}</p><button className="button button-green" onClick={() => window.print()}>Print QR Handout</button></div></div>
}
