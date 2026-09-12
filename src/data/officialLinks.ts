export type OfficialLink = {
  label: string
  url: string
  sourceUrl: string
  reviewedOn: string
}

export const officialLinks = {
  coe: {
    label: 'FAMU College of Education',
    url: 'https://coe.famu.edu/',
    sourceUrl: 'https://coe.famu.edu/',
    reviewedOn: '2026-09-11',
  },
  apply: {
    label: 'Apply to FAMU',
    url: 'https://admissions.famu.edu/apply-now.php',
    sourceUrl: 'https://admissions.famu.edu/apply-now.php',
    reviewedOn: '2026-09-11',
  },
  admissions: {
    label: 'FAMU Admissions',
    url: 'https://admissions.famu.edu/',
    sourceUrl: 'https://admissions.famu.edu/',
    reviewedOn: '2026-09-11',
  },
  freshman: {
    label: 'Undergraduate Admissions',
    url: 'https://admissions.famu.edu/student-types/freshman.php',
    sourceUrl: 'https://admissions.famu.edu/student-types/freshman.php',
    reviewedOn: '2026-09-11',
  },
  transfer: {
    label: 'Transfer Information',
    url: 'https://admissions.famu.edu/student-types/transfer.php',
    sourceUrl: 'https://admissions.famu.edu/student-types/transfer.php',
    reviewedOn: '2026-09-11',
  },
  visit: {
    label: 'Visit FAMU',
    url: 'https://www.famu.edu/students/new-student-orientation/campus-visits.php',
    sourceUrl: 'https://www.famu.edu/students/new-student-orientation/campus-visits.php',
    reviewedOn: '2026-09-11',
  },
  financialAid: {
    label: 'Financial Aid',
    url: 'https://www.famu.edu/students/office-of-financial-aid/index.php',
    sourceUrl: 'https://www.famu.edu/students/office-of-financial-aid/index.php',
    reviewedOn: '2026-09-11',
  },
  scholarships: {
    label: 'Scholarships',
    url: 'https://www.famu.edu/students/scholarships/index.php',
    sourceUrl: 'https://www.famu.edu/students/scholarships/index.php',
    reviewedOn: '2026-09-11',
  },
  futureRattlers: {
    label: 'College of Education Future Rattlers',
    url: 'https://coe.famu.edu/student-services/for-future-rattlers.php',
    sourceUrl: 'https://coe.famu.edu/student-services/for-future-rattlers.php',
    reviewedOn: '2026-09-11',
  },
} satisfies Record<string, OfficialLink>
