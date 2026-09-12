export type CounselorResource = {
  id: string
  title: string
  description: string
  type: 'Web page' | 'Directory' | 'Visit information' | 'Funding resource'
  audience: Array<'Counselors' | 'Students' | 'Families'>
  category: string
  officialUrl: string
  dateReviewed: string
  active: boolean
  featured: boolean
  qrDestination?: string
}

export const counselorResources: CounselorResource[] = [
  { id:'coe-overview', title:'College of Education Overview', description:'Official overview, programs, student services, and College of Education news.', type:'Web page', audience:['Counselors','Students','Families'], category:'College of Education Overview', officialUrl:'https://coe.famu.edu/', dateReviewed:'2026-09-11', active:true, featured:true, qrDestination:'https://coe.famu.edu/' },
  { id:'undergraduate-programs', title:'Undergraduate Programs', description:'Browse counselor-friendly program summaries and direct official program links.', type:'Directory', audience:['Counselors','Students','Families'], category:'Undergraduate Programs', officialUrl:'/programs', dateReviewed:'2026-09-11', active:true, featured:true, qrDestination:'/programs' },
  { id:'admissions', title:'FAMU Admissions', description:'Official admissions information for freshman, transfer, graduate, and other applicants.', type:'Web page', audience:['Counselors','Students','Families'], category:'Admissions', officialUrl:'https://admissions.famu.edu/', dateReviewed:'2026-09-11', active:true, featured:true, qrDestination:'https://admissions.famu.edu/' },
  { id:'scholarships', title:'FAMU Scholarships', description:'Current scholarship information from the University Scholarship Program.', type:'Funding resource', audience:['Counselors','Students','Families'], category:'Scholarships & Financial Aid', officialUrl:'https://www.famu.edu/students/scholarships/index.php', dateReviewed:'2026-09-11', active:true, featured:true, qrDestination:'https://www.famu.edu/students/scholarships/index.php' },
  { id:'financial-aid', title:'Office of Financial Aid', description:'FAFSA guidance, aid types, forms, and contact support from FAMU.', type:'Funding resource', audience:['Counselors','Students','Families'], category:'Scholarships & Financial Aid', officialUrl:'https://www.famu.edu/students/office-of-financial-aid/index.php', dateReviewed:'2026-09-11', active:true, featured:false, qrDestination:'https://www.famu.edu/students/office-of-financial-aid/index.php' },
  { id:'campus-visits', title:'Campus Visits', description:'Official family and group campus-tour information and registration options.', type:'Visit information', audience:['Counselors','Students','Families'], category:'Campus Visit Information', officialUrl:'https://www.famu.edu/students/new-student-orientation/campus-visits.php', dateReviewed:'2026-09-11', active:true, featured:true, qrDestination:'https://www.famu.edu/students/new-student-orientation/campus-visits.php' },
  { id:'future-rattlers', title:'COE Future Rattlers', description:'College of Education guidance for prospective and newly admitted students.', type:'Web page', audience:['Counselors','Students','Families'], category:'Family Information', officialUrl:'https://coe.famu.edu/student-services/for-future-rattlers.php', dateReviewed:'2026-09-11', active:true, featured:false, qrDestination:'https://coe.famu.edu/student-services/for-future-rattlers.php' },
]
