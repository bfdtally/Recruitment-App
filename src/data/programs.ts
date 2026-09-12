export type ProgramCategory = 'elementary' | 'secondary' | 'k12' | 'other' | 'graduate'

export type Program = {
  slug: string
  name: string
  shortName: string
  degree: string
  gradeBand?: string
  category: ProgramCategory
  level: 'Undergraduate' | 'Graduate' | 'Additional option'
  summary: string
  officialUrl: string
  sourceUrl: string
  reviewedOn: string
  future?: {
    video?: string
    pdf?: string
    facultyContact?: string
    careerInformation?: string
    featuredStory?: string
  }
}

const licensurePrograms = 'https://coe.famu.edu/about/licensure-programs.php'

export const programs: Program[] = [
  {
    slug: 'elementary-education', name: 'Elementary Education', shortName: 'Elementary Education', degree: 'Bachelor of Science', gradeBand: 'K–6', category: 'elementary', level: 'Undergraduate',
    summary: 'Explore preparation for teaching and learning in elementary school settings, with Reading and ESOL endorsement areas identified by the College.',
    officialUrl: 'https://www.famu.edu/academics/all-programs/coe/elementary-education-k-6-bs.php', sourceUrl: licensurePrograms, reviewedOn: '2026-09-11',
  },
  {
    slug: 'music-teacher-education', name: 'Music Teacher Education', shortName: 'Music Education', degree: 'Bachelor of Science', gradeBand: 'K–12', category: 'k12', level: 'Undergraduate',
    summary: 'Explore an educator preparation pathway focused on music teaching across elementary and secondary grade levels.',
    officialUrl: 'https://www.famu.edu/academics/all-programs/coe/music-education-k-12-bs.php', sourceUrl: licensurePrograms, reviewedOn: '2026-09-11',
  },
  {
    slug: 'physical-education', name: 'Physical Education', shortName: 'Physical Education', degree: 'Bachelor of Science', gradeBand: 'K–12', category: 'k12', level: 'Undergraduate',
    summary: 'Explore an educator preparation pathway focused on physical education across elementary and secondary grade levels.',
    officialUrl: 'https://www.famu.edu/academics/all-programs/coe/physical-education-k-12-bs.php', sourceUrl: licensurePrograms, reviewedOn: '2026-09-11',
  },
  ...[
    ['biology-education', 'Biology Education', 'Biology', 'https://www.famu.edu/academics/all-programs/coe/biology-education-6-12-bs.php'],
    ['chemistry-education', 'Chemistry Education', 'Chemistry', 'https://www.famu.edu/academics/all-programs/coe/chemistry-education-6-12-bs.php'],
    ['english-education', 'English Education', 'English', 'https://www.famu.edu/academics/all-programs/coe/english-education-6-12-bs.php'],
    ['mathematics-education', 'Mathematics Education', 'Mathematics', 'https://www.famu.edu/academics/all-programs/coe/mathematics-education-6-12-bs.php'],
    ['physics-education', 'Physics Education', 'Physics', 'https://www.famu.edu/academics/all-programs/coe/physics-education-6-12-bs.php'],
    ['social-science-education', 'Social Science Education', 'Social Science', 'https://www.famu.edu/academics/all-programs/coe/social-science-education-6-12-bs.php'],
  ].map(([slug, name, subject, officialUrl]): Program => ({
    slug, name: `Secondary Education – ${name}`, shortName: name, degree: 'Bachelor of Science', gradeBand: '6–12', category: 'secondary', level: 'Undergraduate',
    summary: `Explore educator preparation for teaching ${subject.toLowerCase()} in secondary school settings.`,
    officialUrl, sourceUrl: officialUrl, reviewedOn: '2026-09-11',
  })),
  {
    slug: 'professional-training-option', name: 'Professional Training Option', shortName: 'Professional Training Option', degree: 'Alternative certification pathway', category: 'other', level: 'Additional option',
    summary: 'An approved pathway providing pre-professional educator preparation for eligible students majoring in areas other than education.',
    officialUrl: 'https://coe.famu.edu/certificates-and-endorsements/professional-training-option.php', sourceUrl: 'https://coe.famu.edu/certificates-and-endorsements/professional-training-option.php', reviewedOn: '2026-09-11',
  },
  {
    slug: 'educational-leadership-certification', name: 'Add-on Educational Leadership Certification', shortName: 'Educational Leadership Certification', degree: 'Add-on certification', category: 'other', level: 'Additional option',
    summary: 'Official information for education professionals exploring an add-on certification in educational leadership.',
    officialUrl: 'https://coe.famu.edu/certificates-and-endorsements/educational-leadership-certification.php', sourceUrl: 'https://coe.famu.edu/certificates-and-endorsements/', reviewedOn: '2026-09-11',
  },
  ...[
    ['curriculum-and-instruction-ms', 'Curriculum and Instruction', 'Master of Science', 'https://www.famu.edu/academics/all-programs/coe/curriculum-and-instruction-ms.php'],
    ['educational-leadership-graduate', 'Educational Leadership', 'Master of Science / Ph.D.', 'https://www.famu.edu/academics/all-programs/coe/educational-leadership-ms.php'],
    ['sport-management-ms', 'Sport Management', 'Master of Science', 'https://www.famu.edu/academics/all-programs/coe/sport-management-ms.php'],
  ].map(([slug, name, degree, officialUrl]): Program => ({
    slug, name, shortName: name, degree, category: 'graduate', level: 'Graduate',
    summary: `Explore current graduate study information for ${name} through the official College of Education website.`,
    officialUrl, sourceUrl: officialUrl, reviewedOn: '2026-09-11',
  })),
]

export const programCategories: Array<{ id: 'all' | ProgramCategory; label: string }> = [
  { id: 'all', label: 'All programs' },
  { id: 'elementary', label: 'Elementary Education' },
  { id: 'secondary', label: 'Secondary Education' },
  { id: 'k12', label: 'K–12 Programs' },
  { id: 'other', label: 'Other COE Programs' },
  { id: 'graduate', label: 'Graduate Programs' },
]
