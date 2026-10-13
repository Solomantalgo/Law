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
  text: 'Submitting an enquiry does not guarantee an appointment or establish a lawyer-client relationship. Please avoid including confidential, urgent or time-sensitive details and do not attach documents.',
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
  // Existing marketing language and proposed approach themes are provisional drafts for client review.
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
    shortBio: 'Ugandan advocate, prosecutor and legal educator with more than 18 years of experience across criminal litigation, international criminal law, anti-corruption, financial crime and commercial advisory.',
    biography: [
      'Robert Mackay is a Ugandan advocate, prosecutor, legal educator and Managing Partner of R. Mackay Advocates, with more than 18 years of experience across complex criminal litigation, international criminal law, anti-corruption, financial crime, cybercrime, commercial advisory work and professional legal training.',
      'He has built his practice at the intersection of domestic and international justice, combining courtroom advocacy with strategic legal advisory services for individuals, businesses and public institutions. His experience includes work on matters involving financial crime, corruption, money laundering, asset recovery, cybercrime and transnational criminal conduct.',
      'Robert began his public-sector legal career as a pioneer prosecutor in the Anti-Corruption Department of the Office of the Director of Public Prosecutions, where he participated in corruption and financial-crime prosecutions and led multidisciplinary teams of prosecutors, investigators and support personnel.',
      'In private practice, he leads R. Mackay Advocates, a Kampala-based law firm handling criminal, commercial, anti-corruption and cybercrime matters. His practice has included investigations, transnational fraud and asset-recovery work, as well as strategic advisory engagements requiring multidisciplinary and, where appropriate, multi-jurisdictional teams.',
      { heading: 'International Criminal Law', text: 'Robert has specialised international training and practical experience in international criminal justice. He holds an LL.M. in International Crime and Justice from the University of Turin and UNICRI, and is a member of the Association of Defence Counsel practising before the International Criminal Court.' },
      { text: 'He served as Lead Counsel for victims in The Prosecutor v Thomas Kwoyelo before the International Crimes Division of the High Court of Uganda, a domestic prosecution of international crimes arising from the Lord’s Resistance Army conflict.' },
      { text: 'His international criminal law training has included work concerning the International Criminal Court, hybrid tribunals, victims and witness protection, financial crime, money laundering, terrorism financing and international defence practice.' },
      { heading: 'Anti-Corruption and Financial Crime', text: 'Robert has experience in anti-corruption and financial-crime matters through public prosecution and private practice. During his service with the Office of the Director of Public Prosecutions, he worked on corruption and financial-crime prosecutions, led multidisciplinary teams and contributed to case-management and prosecution systems. He subsequently contributed to anti-money-laundering law reform through the Uganda Law Society Criminal Law Cluster and undertook specialist training in money laundering, financial investigations and asset recovery.' },
      { heading: 'Cybercrime and Complex Investigations', text: 'Robert advises and represents clients in matters involving cybercrime, digital investigations, financial crime and complex criminal conduct. He has undertaken specialist training in cybercrime and complex investigations, including a Cybercrime Master Class at the Royal Institute of Public Administration in London, and has experience leading investigations involving cybercrime, financial crime, asset recovery and transnational criminal conduct.' },
      { heading: 'Commercial and Corporate Advisory', text: 'Alongside his criminal and public-law practice, Robert has undertaken commercial and corporate advisory engagements, including work involving mergers and acquisitions, strategic alliances, joint ventures and regulatory compliance. His experience includes advising on a proposed strategic alliance involving oil and gas logistics opportunities in East Africa, including review of applicable company and M&A law and preparation of a joint-venture agreement and related management arrangements.' },
      { text: 'He also has specialist training in international commercial arbitration and corporate compliance in the oil and gas sector.' },
      { heading: 'Legal Education and Professional Training', text: 'At the Law Development Centre, Robert has held senior academic and institutional leadership positions, including Acting Head of Post Graduate Legal Studies and Legal Aid, Deputy Head of Post Graduate Legal Studies and Legal Aid, and Head of Subject for Criminal Proceedings and Land Transactions. His leadership has included postgraduate legal training, curriculum implementation, examinations, quality assurance and engagement with the Judiciary, Uganda Law Society, Law Council and other legal-sector institutions.' },
      { text: 'He has also trained and spoken to lawyers, prosecutors, investigators and other professionals on international criminal law, anti-corruption, digital forensics, anti-money laundering, criminal investigations and complex fraud.' },
    ],
    practiceAreas: [
      'International Criminal Law', 'Criminal Litigation & Defence', 'Anti-Corruption',
      'Financial Crime & Fraud', 'Anti-Money Laundering', 'Asset Recovery', 'Cybercrime',
      'White-Collar Defence & Investigations', 'International Commercial Arbitration',
      'Commercial & Corporate Advisory', 'Criminal Justice & Regulatory Matters',
      'Legal Education & Professional Training', 'Institutional Governance & Reform',
    ],
    experience: [
      { title: 'Prosecutor', organization: 'Office of the Director of Public Prosecutions', description: 'Anti-Corruption Department; prosecution work and multidisciplinary team leadership.' },
      { title: 'Academic and institutional leadership', organization: 'Law Development Centre', description: 'Acting Head and Deputy Head of Post Graduate Legal Studies and Legal Aid; Head of Subject for Criminal Proceedings and Land Transactions.' },
    ],
    representativeMatters: [
      { title: 'The Prosecutor v Thomas Kwoyelo', description: 'Lead Counsel for victims before the International Crimes Division of the High Court of Uganda.' },
    ],
    education: [
      { degree: 'Master of Laws (LL.M.) in International Crime and Justice', institution: 'University of Turin & United Nations Interregional Crime and Justice Research Institute (UNICRI), Italy' },
      { degree: 'Diploma in International Commercial Arbitration', institution: 'American University, Washington College of Law, United States' },
      { degree: 'Diploma in Management and Administration', institution: 'Uganda Management Institute' },
      { degree: 'Diploma in Legal Practice', institution: 'Law Development Centre, Kampala' },
      { degree: 'Bachelor of Laws (LL.B.) (Hons)', institution: 'Makerere University' },
    ],
    qualifications: [
      'Specialist training in international criminal law defence, financial crime, money laundering and asset recovery, counter-terrorism prosecution, cybercrime, anti-corruption law, corporate compliance and public procurement.',
    ],
    professionalMemberships: [
      'Uganda Law Society', 'East African Law Society', 'International Bar Association',
      'Association of Defence Counsel practising before the International Criminal Court',
      'International White-Collar Defense and Investigations Practice Group',
      { name: 'Committee and technical work', description: 'Uganda Law Society Continuing Legal Education Committee; Uganda Law Society Criminal Cluster; International Bar Association Anti-Corruption Committee; technical working groups on criminal procedure and sentencing reform.' },
    ],
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
    shortBio: 'Experienced partner focusing on corporate transactions, commercial dispute resolution and regulatory compliance.',
    biography: [
      'Richard Rugambwa is a Managing Partner at R. Mackay Advocates with experience advising corporations, financial institutions and private clients on commercial litigation, transactions and regulatory matters.',
    ],
    practiceAreas: [
      'Corporate & Commercial Litigation', 'Banking & Finance', 'Employment Law', 'Regulatory Compliance',
    ],
    qualifications: ['LL.B (Hons)', 'Diploma in Legal Practice'],
    admissions: ['Advocate of the High Court'],
  },
  {
    slug: 'ruth-twongyeirwe',
    name: 'Ruth Twongyeirwe',
    role: 'Advocate',
    image: 'Ruth Twongyeirwe.JPG',
    imagePosition: '50% 24%',
    imageAlt: 'Ruth Twongyeirwe, Advocate',
    shortBio: 'Ruth Twongyeirwe is an Advocate at R. Mackay Advocates. Her experience includes legal advice, court and tribunal representation, dispute resolution, legal drafting, case management and judicial support.',
    biography: [
      'Ruth Twongyeirwe is an Advocate whose work has included advising and representing clients, preparing legal documents, managing cases and supporting judicial work. Her experience spans private legal practice and a period assisting a judge at the Mpigi High Court Circuit.',
    ],
    experience: [
      {
        title: 'Advocate',
        organization: 'R. Mackay Advocates',
        period: '2025 to present',
        areas: [
          {
            title: 'Legal advice and representation',
            items: [
              'Explains applicable laws, rights, obligations, remedies and legal options to clients.',
              'Advises clients on ways to address legal disputes and provides legal opinions on issues affecting individuals and businesses.',
              'Represents clients in courts, tribunals and other legal proceedings, including presenting arguments and evidence.',
            ],
          },
          {
            title: 'Documents and dispute resolution',
            items: [
              'Drafts pleadings, contracts, agreements, legal opinions, notices and court applications, and reviews documents prepared by clients.',
              'Participates in mediation, arbitration and other dispute resolution processes, and negotiates with opposing advocates and parties.',
            ],
          },
          {
            title: 'Case management and preparation',
            items: [
              'Maintains case files and records, coordinates with colleagues, clients and witnesses, and monitors deadlines and court dates.',
              'Prepares matters for hearings and coordinates the legal work required to progress proceedings.',
            ],
          },
        ],
      },
      {
        title: 'Private Legal Assistant to a Judge',
        organization: 'Mpigi High Court Circuit',
        period: '2025',
        areas: [
          {
            title: 'Legal research and case files',
            items: [
              'Researched laws, statutes, regulations and case law relevant to matters before the judge, and prepared summaries and briefs.',
              'Organized and maintained court files, and reviewed pleadings, applications, submissions and other court documents.',
            ],
          },
          {
            title: 'Judgments and courtroom support',
            items: [
              'Assisted, as directed, with research and the preparation or review of judgments, rulings, orders and other judicial documents.',
              'Attended court sessions, tracked proceedings, orders and directions, and assisted the judge with relevant law and procedure.',
              'Proofread judicial documents and related correspondence, and maintained confidentiality when handling sensitive court materials.',
              'Prepared files and relevant documents for court sessions and hearings.',
            ],
          },
        ],
      },
      {
        title: 'Legal Assistant',
        organization: 'Tuhimbise & Co. Advocates',
        period: 'May 2021 to July 2024',
        areas: [
          {
            title: 'Case investigation and legal research',
            items: [
              'Investigated case facts and researched relevant laws, regulations and legal materials, including preparation of legal opinions.',
              'Gathered, reviewed and organized evidence and supporting documents for case preparation and advocate review.',
            ],
          },
          {
            title: 'Legal drafting and document management',
            items: [
              'Drafted contracts, mortgages, reports, affidavits, pleadings, complaints, summonses, discovery requests and responses to opposing counsel.',
              'Organized paper and electronic files and assisted with filing exhibits, briefs, appeals and other court documents.',
            ],
          },
          {
            title: 'Trial, court and dispute-resolution support',
            items: [
              'Prepared exhibits, coordinated witnesses, took trial notes and organized materials for courtroom use.',
              'Assisted lawyers during trials, reviewed transcripts, managed case files and prepared materials for mediation conferences.',
            ],
          },
          {
            title: 'Client coordination and case administration',
            items: [
              'Communicated case progress to clients, coordinated with witnesses, opposing counsel and other parties, and scheduled interviews and meetings.',
              'Coordinated with senior advocates on case status and next steps, monitored calendars and deadlines, and prepared case documentation.',
              'Checked outstanding balances involving clients, advocates and providers, and maintained case-cost records.',
            ],
          },
        ],
      },
    ],
    education: [
      {
        degree: 'Postgraduate Diploma, Bar Course',
        institution: 'Law Development Centre, 2021',
      },
      {
        degree: 'Bachelor of Laws (LL.B)',
        institution: 'Uganda Christian University, Mukono, 2013 to 2017',
      },
      {
        degree: 'Uganda Advanced Certificate of Education (UACE)',
        institution: 'Kashaka Girls Secondary School, Mbarara, 2011 to 2012',
      },
      {
        degree: 'Uganda Certificate of Education (UCE)',
        institution: 'Kashaka Girls Secondary School, Mbarara, 2007 to 2010',
      },
    ],
    additionalTraining: [
      {
        title: 'Clerkship Training',
        institution: 'Entebbe Magistrates Court, Uganda',
        period: '2015',
      },
      {
        title: 'Certificate in Networking and Leadership',
        institution: 'Transforming Nations Alliance, Kampala, Uganda',
        period: '2017',
      },
    ],
    qualifications: ['Practising certificate'],
    skills: [
      {
        category: 'Legal and technical skills',
        items: [
          'Legal research', 'Legal drafting', 'Case management', 'Document management',
          'Trial preparation', 'Evidence gathering', 'Legal software proficiency', 'Case filing systems',
        ],
      },
      {
        category: 'Professional and interpersonal skills',
        items: [
          'Analytical thinking', 'Communication', 'Client relations', 'Team collaboration',
          'Problem solving', 'Time management', 'Critical thinking', 'Decision making',
        ],
      },
    ],
    languages: [
      { name: 'English', proficiency: 'Excellent' },
      { name: 'Luganda', proficiency: 'Good' },
      { name: 'Runyakitara', proficiency: 'Excellent' },
      { name: 'Kiswahili', proficiency: 'Excellent' },
    ],
  },
  {
    slug: 'racheal-namuddu',
    name: 'Racheal Namuddu',
    role: 'Senior Associate',
    profilePending: true,
    shortBio: 'Senior Associate specializing in land transactions, civil litigation and corporate compliance.',
    biography: [
      'Racheal Namuddu provides legal advice in land conveyancing, estate management and commercial transactions.',
    ],
    practiceAreas: [
      'Land Transactions & Conveyancing', 'Civil Litigation', 'Corporate Governance',
    ],
    qualifications: ['LL.B (Hons)', 'Diploma in Legal Practice'],
    admissions: ['Advocate of the High Court'],
  },
  {
    slug: 'journey-john-kakinga',
    name: 'Journey John Kakinga',
    role: 'Legal Associate',
    profilePending: true,
    shortBio: 'Legal Associate focusing on criminal proceedings, legal research and dispute resolution.',
    biography: [
      'Journey John Kakinga works across domestic litigation, legal research and regulatory advisory for client matters.',
    ],
    practiceAreas: [
      'Criminal Defence Support', 'Legal Research & Advisory', 'Dispute Resolution',
    ],
    qualifications: ['LL.B (Hons)', 'Diploma in Legal Practice'],
    admissions: ['Advocate of the High Court'],
  },
  {
    slug: 'musimbi-alex',
    name: 'Musimbi Alex',
    role: 'Legal Associate',
    profilePending: true,
    shortBio: 'Legal Associate focusing on corporate advisory, commercial drafting and client representation.',
    biography: [
      'Musimbi Alex advises local and international clients on contract drafting, commercial dispute resolution and compliance.',
    ],
    practiceAreas: [
      'Commercial Drafting & Advisory', 'Taxation Counsel', 'Litigation',
    ],
    qualifications: ['LL.B (Hons)', 'Diploma in Legal Practice'],
    admissions: ['Advocate of the High Court'],
  },
];

// Legacy demonstration headlines are retained as unpublished records for review.
// Add only client-approved material to this collection before setting approved=true.
export const insights = [
  { id: 'demo-commercial-agreements', slug: 'understanding-commercial-agreements-in-uganda', title: 'Understanding Commercial Agreements in Uganda', category: 'Legal Update', publishedAt: '2026-06-12', content: [], status: 'draft', source: 'Legacy website demonstration', approved: false },
  { id: 'demo-business-partnership', slug: 'business-partnership-considerations', title: 'What Businesses Should Consider Before Entering a Partnership', category: 'Business Law', publishedAt: '2026-05-28', content: [], status: 'draft', source: 'Legacy website demonstration', approved: false },
  { id: 'demo-property-transactions', slug: 'property-transactions-legal-considerations', title: 'Property Transactions: Key Legal Considerations', category: 'Property', publishedAt: '2026-05-09', content: [], status: 'draft', source: 'Legacy website demonstration', approved: false }
];

export const publishedInsights = insights
  .filter((article) => article.status === 'published' && article.approved === true)
  .sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || ''));

// Curated from original firm/team photographs already present in public/assets/images.
// Categories and captions remain empty until the firm supplies approved context.
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
  {
    id: 'firm-team-group', image: 'hero-team.jpeg',
    alt: 'R. Mackay Advocates team pictured together in two rows.',
    imagePosition: 'center 0%',
    width: 1080, height: 719, orientation: 'landscape', homepageFeatured: true,
    category: null, title: null, caption: null,
  },
  {
    id: 'robert-mackay-portrait', image: 'Robert Mackay portrait.jpg',
    alt: 'Robert Mackay, Managing Partner of R. Mackay Advocates.',
    imagePosition: 'center 38%',
    width: 719, height: 1080, orientation: 'portrait', homepageFeatured: true,
    category: null, title: null, caption: null,
  },
  {
    id: 'richard-rugambwa-portrait', image: 'Richard Rugambwa portrait.jpg',
    alt: 'Richard Rugambwa, Managing Partner of R. Mackay Advocates.',
    imagePosition: 'center 38%',
    width: 719, height: 1080, orientation: 'portrait', homepageFeatured: true,
    category: null, title: null, caption: null,
  },
];

export const image = (name) => `/assets/images/${name}`;
