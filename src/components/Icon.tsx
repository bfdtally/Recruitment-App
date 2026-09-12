type IconName = 'arrow' | 'book' | 'cap' | 'coins' | 'download' | 'pin' | 'chat' | 'menu' | 'close'

const paths: Record<IconName, React.ReactNode> = {
  arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
  book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5z"/></>,
  cap: <><path d="m2 10 10-5 10 5-10 5z"/><path d="M6 12.5V17c3 2.2 9 2.2 12 0v-4.5"/><path d="M22 10v6"/></>,
  coins: <><ellipse cx="8" cy="7" rx="5" ry="3"/><path d="M3 7v4c0 1.7 2.2 3 5 3s5-1.3 5-3V7"/><path d="M3 11v4c0 1.7 2.2 3 5 3 1 0 2-.2 2.7-.5"/><path d="M14 12c3 0 5 1.3 5 3s-2 3-5 3-5-1.3-5-3 2-3 5-3z"/><path d="M9 15v3c0 1.7 2.2 3 5 3s5-1.3 5-3v-3"/></>,
  download: <><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M4 19h16"/></>,
  pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.5"/></>,
  chat: <><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/><path d="M8 9h8M8 13h5"/></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  close: <><path d="m6 6 12 12M18 6 6 18"/></>,
}

export function Icon({ name }: { name: IconName }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
}
