import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { ComingSoonPage } from './pages/ComingSoonPage'
import { ProgramsPage } from './pages/ProgramsPage'
import { ProgramDetailPage } from './pages/ProgramDetailPage'
import { AdmissionsPage } from './pages/AdmissionsPage'
import { FinancialAidPage } from './pages/FinancialAidPage'
import { ResourcesPage } from './pages/ResourcesPage'
import { VisitPage } from './pages/VisitPage'
import { ContactPage } from './pages/ContactPage'
import { WhyPage } from './pages/WhyPage'
import { ContentAuditPage } from './pages/ContentAuditPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return <div className="app"><ScrollToTop/><Header/><main id="main"><Routes><Route path="/" element={<HomePage/>}/><Route path="/why-famu-coe" element={<WhyPage/>}/><Route path="/programs" element={<ProgramsPage/>}/><Route path="/programs/:slug" element={<ProgramDetailPage/>}/><Route path="/admissions" element={<AdmissionsPage/>}/><Route path="/financial-aid" element={<FinancialAidPage/>}/><Route path="/resources" element={<ResourcesPage/>}/><Route path="/visit" element={<VisitPage/>}/><Route path="/contact" element={<ContactPage/>}/><Route path="/content-audit" element={<ContentAuditPage/>}/><Route path="*" element={<ComingSoonPage title="Page not found"/>}/></Routes></main><Footer/></div>
}
