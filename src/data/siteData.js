// Legacy figures have no recorded client-approved source. Keep the credibility
// section empty until the firm confirms figures that can be published.
export const stats = [];

// Contact details currently displayed in the public site footer. Their source is
// legacy site copy; client confirmation has not been recorded in this repository.
export const firmContact = {
  address: ['3rd Flr Suite 310, BMK House', 'Plot 4-5 Nyabong Rd, Wampewo Avenue', 'P.O Box 27674, Kampala, Uganda'],
  phone: '+256 393 216 316',
  email: 'rmackay@rmackayadvocates.com',
  footerRegistration: 'Reg. No. 20499',
  footerOfficeNote: 'Offices in Kenya & Uganda',
  sourceStatus: 'Existing footer copy; client confirmation pending',
};

export const contactEnquiryNotice = {
  // Short, safe public notice to avoid long unclosed strings in source.
  text: 'Submitting an enquiry does not guarantee an appointment or establish a lawyer-client relationship. Do not include confidential, urgent, or time-sensitive details.',
  approvalStatus: 'Suggested website wording; client and privacy review pending',
};

export const practiceAreas = [
  {
    number: '01', slug: 'tax', title: 'Tax',
    summary: 'Considered advice on tax matters affecting businesses and individuals.',
    introduction: '', services: [], relatedAttorneys: [], seoTitle: '', seoDescription: '',
    copyStatus: 'existing-demo-copy',
  },
  {
    number: '02', slug: 'criminal', title: 'Criminal',
    summary: 'Skilled representation in criminal matters, including business crime.',
    introduction: '', services: [], relatedAttorneys: [], seoTitle: '', seoDescription: '',
    copyStatus: 'existing-demo-copy',
  },
  {
    number: '03', slug: 'corporate-commercial', title: 'Corporate and Commercial Practice',
    mobileTitleLines: ['Corporate and', 'Commercial', 'Practice'],
    summary: 'Business-minded counsel for agreements, transactions and commercial decisions.',
    mobileSummaryLines: ['Business-minded counsel for agreements,', 'transactions and commercial decisions.'],
    introduction: '', services: [], relatedAttorneys: [], seoTitle: '', seoDescription: '',
    copyStatus: 'existing-demo-copy',
  },
  {
    number: '04', slug: 'conveyancing', title: 'Conveyancing',
    summary: 'Clear guidance through property transfers and conveyancing matters.',
    introduction: '', services: [], relatedAttorneys: [], seoTitle: '', seoDescription: '',
    copyStatus: 'existing-demo-copy',
  },
  {
    number: '05', slug: 'corporate-compliance', title: 'Corporate Compliance',
    summary: 'Practical compliance counsel to keep businesses on the right side of regulation.',
    introduction: '', services: [], relatedAttorneys: [], seoTitle: '', seoDescription: '',
    copyStatus: 'existing-demo-copy',
  },
];

export const aboutPageContent = {
  confirmedFacts: {
    firmName: 'R. Mackay Advocates',
    location: 'Kampala, Uganda',
    leadershipSlugs: ['robert-mackay', 'richard-rugambwa'],
    conciseIntroduction: 'Based in Kampala, R. Mackay Advocates is led by Managing Partners Robert Mackay and Richard Rugambwa.',
  },
  pendingClientContent: ['Approved firm history and founding year', 'Approved mission and values', 'Approved detailed firm narrative'],
  provisionalCopy: {
    heroHeading: ['Legal insight.', 'Commercial understanding.', 'Personal commitment.'],
    heroIntro: 'We advise clients with attention to their circumstances and the decisions ahead.',
    approach: [
      { title: 'Clarity', text: 'Clear communication and a practical view of the decisions ahead.' },
      { title: 'Considered Advice', text: 'Thoughtful counsel that takes the wider context of each decision into account.' },
      { title: 'Personal Attention', text: 'Responsive service that keeps the individual matter in view.' },
    ],
    peopleIntro: 'Find names, roles and available profile information in the directory.',
  },
};

export const attorneys = [
  {
    slug: 'robert-mackay',
    name: 'Robert Mackay',
    role: 'Managing Partner',
    image: 'Robert Mackay portrait.jpg',
    imagePosition: '50% 28%',
    imageAlt: 'Robert Mackay, Managing Partner',
    leadershipGroup: 'Managing Partners',
    featured: true,
    shortBio: 'Ugandan advocate and managing partner with extensive experience in criminal and commercial matters.',
    biography: [
      'Robert Mackay is a Ugandan advocate and Managing Partner of R. Mackay Advocates. He has experience across criminal litigation and international criminal law.',
      'In private practice he leads the firm on complex litigation and advisory work.',
    ],
    practiceAreas: [
      'International Criminal Law', 'Criminal Litigation & Defence', 'Anti-Corruption',
      'Financial Crime & Fraud', 'Asset Recovery', 'Cybercrime',
    ],
    experience: [
      { title: 'Prosecutor', organization: 'Office of the Director of Public Prosecutions', description: 'Anti-Corruption Department; prosecution experience.' },
      { title: 'Academic and institutional leadership', organization: 'Law Development Centre', description: 'Teaching and leadership roles.' },
    ],
    representativeMatters: [
      { title: 'The Prosecutor v Thomas Kwoyelo', description: 'Lead Counsel for victims before the International Crimes Division of the High Court of Uganda.' },
    ],
    education: [
      { degree: 'Master of Laws (LL.M.) in International Crime and Justice', institution: 'University of Turin & UNICRI, Italy' },
      { degree: 'Bachelor of Laws (LL.B.) (Hons)', institution: 'Makerere University' },
    ],
    qualifications: ['Specialist training in international criminal law and financial crime matters'],
    professionalMemberships: ['Uganda Law Society', 'International Bar Association'],
    admissions: ['Advocate of the High Court of Uganda'],
  },
  {
    slug: 'richard-rugambwa',
    name: 'Richard Rugambwa',
    role: 'Managing Partner',
    image: 'Richard Rugambwa portrait.jpg',
    imagePosition: '50% 19%',
    imageScale: 1.2,
    imageAlt: 'Richard Rugambwa, Managing Partner',
    leadershipGroup: 'Managing Partners',
    shortBio: 'Experienced partner focusing on corporate transactions and dispute resolution.',
    biography: [
      'Richard Rugambwa is a Managing Partner at R. Mackay Advocates with experience advising corporations and private clients on commercial matters.',
    ],
    practiceAreas: ['Corporate & Commercial Litigation', 'Banking & Finance', 'Employment Law', 'Regulatory Compliance'],
    qualifications: ['LL.B (Hons)', 'Diploma in Legal Practice'],
    admissions: ['Advocate of the High Court'],
  },
];

// Legacy demonstration headlines are retained as unpublished records for review.
export const insights = [
  { id: 'demo-commercial-agreements', slug: 'understanding-commercial-agreements-in-uganda', title: 'Understanding Commercial Agreements in Uganda', category: 'Legal Update', publishedAt: '2026-06-01', status: 'draft', approved: false },
  { id: 'demo-business-partnership', slug: 'business-partnership-considerations', title: 'What Businesses Should Consider Before Entering a Partnership', category: 'Business Law', publishedAt: '2026-04-15', status: 'draft', approved: false },
];

export const publishedInsights = insights
  .filter((article) => article.status === 'published' && article.approved === true)
  .sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || ''));

// Curated from original firm/team photographs already present in public/assets/images.
export const galleryImages = [
  {
    id: 'firm-team-portrait', image: 'about-team.jpeg',
    alt: 'Members of R. Mackay Advocates standing together for a team photograph.',
    imagePosition: 'center 0%',
    width: 1080, height: 627, orientation: 'landscape', homepageFeatured: true,
    category: null, title: null, caption: null,
  },
  {
    id: 'managing-partners', image: 'R Mackay Advocates leadership pair.jpg',
    alt: 'Managing Partners Robert Mackay and Richard Rugambwa standing together.',
    imagePosition: 'center 30%',
    width: 777, height: 1080, orientation: 'portrait', homepageFeatured: true,
    category: null, title: null, caption: null,
  },
];

export const image = (name) => `/assets/images/${name}`;
