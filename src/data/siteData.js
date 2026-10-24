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
    conciseIntroduction: 'Based in Kampala, R. Mackay Advocates is led by Founding Partner Robert Mackay and Managing Partner Richard Rugambwa.',
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
    role: 'Founding Partner',
    image: 'Robert Mackay portrait.jpg',
    imagePosition: '50% 28%',
    imageAlt: 'Robert Mackay, Founding Partner',
    leadershipGroup: 'Leadership',
    featured: true,
    shortBio: 'Ugandan advocate, prosecutor and legal educator with more than 18 years of experience across criminal litigation, international criminal law, anti-corruption, financial crime and commercial advisory.',
    biography: [
      'Robert Mackay is a Ugandan advocate, prosecutor, legal educator and Founding Partner of R. Mackay Advocates, with more than 18 years of experience across complex criminal litigation, international criminal law, anti-corruption, financial crime, cybercrime, commercial advisory work and professional legal training.',
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
    imagePosition: '50% 0%',
    imageScale: 1.5,
    imageScaleOrigin: 'center 12%',
    imageAlt: 'Richard Rugambwa, Managing Partner',
    leadershipGroup: 'Leadership',
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
    imagePosition: '50% 27%',
    imageScale: 1.25,
    imageAlt: 'Ruth Twongyeirwe, Advocate',
    shortBio: 'Ruth Twongyeirwe is an Advocate at R. Mackay Advocates. Her experience includes legal advice, court and tribunal representation, dispute resolution, legal drafting, case management and judicial support.',
    biography: [
      'Ruth Twongyeirwe is an Advocate whose work has included advising and representing clients, preparing legal documents, managing cases and supporting judicial work. Her experience spans private legal practice and a period providing research support to a judge.',
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
        title: 'Private Researcher for a Judge',
        period: '2025',
        // Wording pending Ruth Twongyeirwe's final approval after consultation with Counsel Robert.
        approvalStatus: 'Pending final approval',
        description: 'Conducted legal research and analysis to support judicial work, including reviewing case law, legislation, pleadings and other legal materials. Assisted with the preparation of research briefs and the review of judicial documents under the judge’s direction.',
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
    slug: 'kakala-keren-suubi',
    name: 'Kakala Keren Suubi',
    role: 'Legal Intern',
    directoryGroup: 'Legal Team',
    shortBio: 'Kakala Keren Suubi is a Legal Intern at R. Mackay Advocates. Her CV records legal internship experience at the firm, the Supreme Court of Uganda and the Court of Appeal of Uganda, as well as a field attachment at Parliament of Uganda.',
    biography: [
      'Kakala Keren Suubi is a Legal Intern at R. Mackay Advocates. Her experience includes court support, legal research, supervised drafting and a legislative field attachment at Parliament of Uganda.',
    ],
    experience: [
      { title: 'Legal Intern', organization: 'R. Mackay Advocates', period: 'July 2025 to present' },
      {
        title: 'Volunteer', organization: 'Supreme Court of Uganda', period: 'March 2024 to August 2024',
        areas: [{ title: 'Court support', items: [
          'Assisted court staff with case management and trial preparation.',
          'Researched case law, statutes and precedents.',
          'Prepared draft memoranda, opinions and judgments under supervision.',
          'Participated in legal discussions and case conferences to analyse legal documents and strategies.',
          'Organised case files, scheduled appointments and maintained records.',
        ] }],
      },
      {
        title: 'Volunteer', organization: 'Court of Appeal of Uganda', period: 'July 2023 to February 2024',
        areas: [{ title: 'Court support', items: [
          'Assisted court staff with case management and trial preparation.',
          'Researched case law, statutes and precedents.',
          'Prepared draft memoranda, opinions and judgments under supervision.',
          'Participated in legal discussions and case conferences to analyse legal documents and strategies.',
          'Organised case files, scheduled appointments and maintained records.',
        ] }],
      },
      {
        title: 'Field Attachment Intern', organization: 'Parliament of Uganda', period: 'September 2022 to October 2022',
        description: 'Field attachment completed as part of the academic requirements for the Bachelor of Laws at Makerere University School of Law.',
        areas: [{ title: 'Legislative and administrative support', items: [
          'Researched legislative matters and prepared briefs for the parliamentary legal department.',
          'Attended committee meetings, took notes and prepared reports.',
          'Attended parliamentary proceedings and observed debates and discussions.',
        ] }],
      },
    ],
    education: [
      { degree: 'Postgraduate Diploma in Legal Practice', institution: 'Law Development Centre, Kampala', period: '2024 to 2025' },
      { degree: 'Postgraduate Diploma in Human Resource Management', institution: 'Uganda Christian University, Mukono', period: '2024 to 2025' },
      { degree: 'Bachelor of Laws (LL.B.)', institution: 'Makerere University School of Law, Kampala', period: '2019 to 2023' },
      { degree: 'Uganda Advanced Certificate of Education', institution: 'Uganda Martyrs Secondary School, Namugongo', period: '2017 to 2018' },
      { degree: 'Uganda Certificate of Education', institution: 'Naalya Secondary School, Namugongo', period: '2013 to 2016' },
    ],
    skills: [
      { category: 'Legal capabilities', items: ['Legal research and writing', 'Legal analysis and interpretation'] },
      { category: 'Professional skills', items: ['Communication and interpersonal skills', 'Independent work and collaboration in a team environment', 'Microsoft Office Suite', 'Legal research databases'] },
    ],
  },
  {
    slug: 'oyet-brian',
    name: 'Oyet Brian',
    role: 'Legal Assistant',
    directoryGroup: 'Legal Team',
    shortBio: 'Oyet Brian is a Legal Assistant at R. Mackay Advocates. His experience includes legal drafting, research, case file management, client liaison and court filing support, with earlier clerkship and Ministry of Internal Affairs experience.',
    biography: [
      'Oyet Brian is a Legal Assistant at R. Mackay Advocates. He supports legal research and drafting, case administration, client communication, court filings and compliance processes. His earlier experience includes a clerkship internship at ABMAK Associates and an internship at the Ministry of Internal Affairs.',
    ],
    experience: [
      {
        title: 'Legal Assistant', organization: 'R. Mackay Advocates, Uganda', period: 'August 2024 to present',
        areas: [{ title: 'Legal and case support', items: [
          'Drafts, proofreads and reviews contracts, agreements, pleadings and other legal documents for accuracy and consistency with applicable law and firm policies.',
          'Maintains electronic and physical case files, tracks deadlines and supports timely court and regulatory submissions.',
          'Researches statutes, case law and legal precedents, and prepares summaries and briefs for case strategy and client advice.',
          'Liaises with clients, provides updates, responds to enquiries and schedules meetings with advocates.',
          'Prepares and files court documents, manages court correspondence and coordinates appearances with judges, opposing counsel and relevant authorities.',
          'Coordinates calendars, meetings and travel, and assists with billing and invoice tracking.',
          'Monitors compliance with legal requirements and internal policies.',
          'Works with lawyers, paralegals and administrative staff to coordinate legal and administrative tasks.',
          'Uses legal management software, electronic filing systems and Microsoft Office to maintain records and prepare documents.',
        ] }],
      },
      {
        title: 'Clerkship Intern', organization: 'ABMAK Associates', period: '2024',
        areas: [{ title: 'Clerkship experience', items: [
          'Attended court sessions, client meetings and internal consultations to observe legal procedure and case management.',
          'Assisted with supervised research and summaries of case law, statutes and regulations.',
          'Helped prepare draft letters, memoranda and simple legal documents for attorney review.',
          'Organised case files and supported office scheduling and note-taking.',
          'Assisted attorneys, under supervision, with gathering client information and preparing case background materials.',
          'Learned and applied legal and ethical standards under supervising lawyers.',
          'Collaborated with attorneys, paralegals and other staff on legal and administrative tasks.',
        ] }],
      },
      {
        title: 'Intern', organization: 'Ministry of Internal Affairs', period: 'June 2017 to August 2017',
        areas: [{ title: 'Policy and administrative support', items: [
          'Researched national laws, policies and regulations relating to internal affairs, public administration and governance.',
          'Assisted with letters, memoranda, reports and briefing notes under supervision.',
          'Organised official files and records in line with government filing procedures.',
          'Supported communication with departments, government agencies and members of the public to gather information and schedule meetings.',
          'Assisted with schedules, meetings, minutes and data entry.',
          'Learned government procedures, protocols and ethical standards.',
          'Supported research and administration for ministry projects and programmes.',
          'Attended departmental meetings and prepared notes or summaries for supervisors.',
        ] }],
      },
    ],
    education: [
      { degree: 'Bachelor of Laws (Honours)', institution: 'Islamic University in Uganda', period: '2019 to 2023' },
      { degree: 'Bachelor of Arts in Social Sciences', institution: 'Makerere University', period: '2015 to 2019' },
      { degree: 'Uganda Advanced Certificate of Education', institution: 'Lubiri Secondary School', period: '2013 to 2015' },
      { degree: 'Uganda Certificate of Education', institution: 'Lubiri Secondary School', period: '2009 to 2012' },
    ],
    skills: [
      { category: 'Legal and administrative skills', items: ['Drafting legal documents, contracts and correspondence', 'Maintaining client and case files', 'Scheduling appointments, court dates and meetings', 'Liaising professionally with clients, attorneys and courts', 'Accuracy in filings and reports', 'Legal management software and Microsoft Office'] },
      { category: 'Core competencies', items: ['Legal research and analysis', 'Case and document management', 'Client relations and communication', 'Compliance and regulatory adherence', 'Time management and multitasking', 'Administrative support in legal settings'] },
    ],
    languages: [
      { name: 'English', spoken: 'Fluent', written: 'Excellent', listening: 'Excellent' },
      { name: 'Runyakitara', spoken: 'Fluent', written: 'Excellent', listening: 'Excellent' },
      { name: 'Runyoro/Rutooro', spoken: 'Fluent', written: 'Excellent', listening: 'Excellent' },
      { name: 'Luganda', spoken: 'Fluent', written: 'Excellent', listening: 'Excellent' },
    ],
  },
  {
    "slug": "rugambwa-jerry",
    "name": "Rugambwa Jerry",
    "role": "Legal Assistant (Internship)",
    "biography": [
      "Rugambwa Jerry is a law graduate whose CV records legal assistant internships at R. Mackay Advocates and the Chief Magistrate’s Court in Mbarara, alongside human-rights volunteering, student leadership and legal research. His internship at R. Mackay Advocates ran from June to September 2024."
    ],
    "experience": [
      {
        "title": "Legal Assistant Intern",
        "organization": "R. Mackay Advocates, Kampala",
        "period": "June to September 2024",
        "areas": [
          {
            "title": "Responsibilities",
            "items": [
              "Researched and drafted legal opinions, pleadings and advisory notes on civil matters.",
              "Assisted in preparing litigation case files.",
              "Participated in reviewing legal documents submitted by government departments and agencies.",
              "Observed civil and criminal court proceedings.",
              "Participated in pre-trial briefings and coordinated with witnesses, law enforcement and client departments.",
              "Managed files, took minutes and prepared legal correspondence."
            ]
          }
        ]
      },
      {
        "title": "Legal Assistant Intern",
        "organization": "Chief Magistrate’s Court, Mbarara",
        "period": "July to September 2023",
        "areas": [
          {
            "title": "Responsibilities",
            "items": [
              "Conducted research and prepared briefs, memoranda and case summaries.",
              "Assisted magistrates during court sessions and adjudication of civil and criminal matters.",
              "Observed proceedings and recorded trial procedure, witness examinations and rulings.",
              "Assisted with drafting judgments, rulings and court orders under supervision.",
              "Reviewed and organised case files for accuracy and compliance with court protocols.",
              "Coordinated scheduling and case management with advocates, litigants and court staff.",
              "Supported case registration, records and filing.",
              "Prepared weekly activity progress reports within agreed timeframes."
            ]
          }
        ]
      }
    ],
    "volunteering": [
      {
        "title": "Legal Advisor Volunteer",
        "organization": "Human Rights Association, Uganda Christian University Chapter",
        "period": "January 2023 to December 2024",
        "areas": [
          {
            "title": "Responsibilities",
            "items": [
              "Interpreted national, regional and international human-rights instruments relevant to the association’s activities.",
              "Drafted memoranda and press statements on general rights issues at the university.",
              "Supported planning and legal review of student events and rights-awareness workshops.",
              "Engaged university bodies and stakeholders on student rights and freedoms.",
              "Conducted student training sessions and rights-literacy forums on procedures and legal remedies.",
              "Collaborated with student organisations and NGOs on joint human-rights initiatives and research."
            ]
          }
        ]
      },
      {
        "title": "Advisor Coordinator Volunteer",
        "organization": "HiveColab, Uganda",
        "period": "August 2021 to December 2022",
        "areas": [
          {
            "title": "Responsibilities",
            "items": [
              "Developed and implemented advocacy strategies aligned with association priorities.",
              "Coordinated awareness campaigns, petitions and dialogues on social-justice issues.",
              "Facilitated engagement with university administration, student bodies and civil-society organisations.",
              "Organised forums and panel discussions.",
              "Supervised volunteers and coordinated student participation in campaigns and events."
            ]
          }
        ]
      }
    ],
    "education": [
      {
        "degree": "Bachelor of Laws (LL.B.) (Honours)",
        "institution": "Uganda Christian University, Mukono",
        "period": "August 2021 to July 2025"
      },
      {
        "degree": "Uganda Advanced Certificate of Education",
        "institution": "Plus Two High School",
        "period": "March 2019 to December 2020"
      },
      {
        "degree": "Uganda Certificate of Education",
        "institution": "Mbarara High School",
        "period": "March 2015 to November 2018"
      }
    ],
    "skills": [
      {
        "category": "Legal capabilities",
        "items": [
          "Legal research and analytical writing",
          "Legal drafting and policy analysis",
          "Civil and criminal procedure",
          "Human-rights law and advocacy",
          "Case management and file handling",
          "Litigation preparation"
        ]
      },
      {
        "category": "Professional capabilities",
        "items": [
          "Communication and legal reasoning",
          "Public speaking and legal education",
          "Stakeholder engagement",
          "Campaign coordination and facilitation",
          "Leadership, teamwork and mobilisation",
          "Confidentiality and professional communication"
        ]
      }
    ],
    "publications": [
      {
        "title": "Navigating Uganda’s Energy Transition: A Comparative Analysis of Legal Frameworks Governing Oil, Gas, and Renewable Energy Integration",
        "kind": "LL.B. dissertation"
      }
    ],
    "leadershipRoles": [
      {
        "title": "Member of Parliament, 26th Student Guild",
        "organization": "Uganda Christian University",
        "period": "2024 to 2025"
      },
      {
        "title": "Minister of Student Welfare, 26th Student Guild",
        "organization": "Uganda Christian University",
        "period": "2024 to 2025"
      }
    ],
    "languages": [
      {
        "name": "Runyakole",
        "proficiency": "Native"
      },
      {
        "name": "English",
        "proficiency": "Proficient"
      },
      {
        "name": "Luganda",
        "proficiency": "Proficient"
      },
      {
        "name": "Kiswahili",
        "proficiency": "Beginner"
      }
    ],
    "directoryGroup": "Legal Team",
    "shortBio": "Rugambwa Jerry is a law graduate whose CV records legal assistant internships at R. Mackay Advocates and the Chief Magistrate’s Court in Mbarara, alongside human-rights volunteering, student leadership and legal research. His internship at R. Mackay Advocates ran from June to September 2024.",
    "professionalContributions": [
      {
        "title": "Best Student Personality",
        "organization": "Uganda Christian University",
        "period": "2023/2024",
        "areas": [
          {
            "title": "Recognition stated in the CV",
            "items": [
              "Best student personality 2023/2024."
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "najjumba-martina-luyinda",
    "name": "Najjumba Martina Luyinda",
    "role": "Legal Assistant",
    "image": "NAJJUMBA MARTINA LUYINDA.JPG",
    "imagePosition": "50% 20%",
    "imageScale": 1.4,
    "imageScaleOrigin": "center top",
    "imageAlt": "Najjumba Martina Luyinda, Legal Assistant.",
    "biography": [
      "Najjumba Martina Luyinda’s CV records legal assistant work at R. Mackay Advocates in 2026, earlier litigation support, public-interest legal aid and juvenile-justice experience, and a Postgraduate Bar Course listed as ongoing."
    ],
    "experience": [
      {
        "title": "Legal Assistant",
        "organization": "R. Mackay Advocates",
        "period": "2026",
        "areas": [
          {
            "title": "Responsibilities",
            "items": [
              "Prepared, reviewed and managed legal documents, agreements, pleadings, affidavits and correspondence.",
              "Researched civil, commercial and regulatory matters and assisted with opinions and case strategies.",
              "Supported advocates with client advice on legal and procedural requirements, risks and options.",
              "Prepared, filed and followed up court and regulatory documents against procedural requirements and deadlines.",
              "Reviewed transaction documents for inconsistencies, missing requirements and potential legal risks.",
              "Maintained client files, case records and confidential documents.",
              "Liaised with clients, registries, opposing counsel and stakeholders.",
              "Assisted with demand notices, applications, submissions and bills of costs.",
              "Monitored legislation, regulations and case law relevant to client matters."
            ]
          }
        ]
      },
      {
        "title": "Legal Assistant",
        "organization": "Nshemereirwe, Arigye & Co. Advocates",
        "period": "May to August 2025",
        "areas": [
          {
            "title": "Responsibilities",
            "items": [
              "Researched case law, statutes and procedural rules for litigation.",
              "Drafted pleadings, motions, affidavits, submissions and legal opinions.",
              "Supported trial preparation, case strategy, client interviews, evidence review and witness statements.",
              "Attended hearings, mentions, mediations and trials and prepared proceedings notes and follow-up briefs.",
              "Managed litigation files, deadlines, filing and service.",
              "Liaised with registries, process servers and opposing counsel.",
              "Interviewed clients and prepared affidavits and case updates under supervision.",
              "Translated documents from Luganda to English and assisted with mediation and negotiations."
            ]
          }
        ]
      },
      {
        "title": "Legal Intern",
        "organization": "Child Concern Initiative Organization Uganda through Public Interest Law Clinic, Makerere University",
        "period": "June to August 2023",
        "areas": [
          {
            "title": "Responsibilities",
            "items": [
              "Provided legal assistance, advice, case intake and referrals to indigent and vulnerable people.",
              "Delivered legal-awareness outreach on access to justice and rights-based issues, including in schools and prisons.",
              "Liaised with courts, prisons, police, Justice Centres Uganda and UGANET to facilitate access to legal services.",
              "Researched human rights, constitutional, family and criminal law and public-interest litigation.",
              "Drafted pleadings, affidavits, opinions and correspondence for legal-aid matters.",
              "Assisted with supervised court representation, including bail applications, mentions and hearings.",
              "Interviewed clients, documented case histories and prepared confidential case files.",
              "Documented human-rights concerns and contributed to advocacy, reports and strategic-litigation work.",
              "Assisted with mediation of community and family disputes with the Office of the Probation, Social and Welfare Officer."
            ]
          }
        ]
      },
      {
        "title": "Legal Extern",
        "organization": "Naguru Remand Home, Uganda",
        "period": "March to May 2023",
        "areas": [
          {
            "title": "Responsibilities",
            "items": [
              "Supported children in conflict with the law under the Children Act and juvenile-justice procedures.",
              "Delivered legal education on plea taking, diversion, children’s rights, court processes and child protection.",
              "Interviewed children about their case backgrounds, legal status and welfare concerns.",
              "Reviewed files to track detention status, court dates and lawful remand periods.",
              "Attended Family and Children Court and followed up on remanded children’s matters.",
              "Liaised with probation and social-welfare officers, magistrates and justice-sector stakeholders.",
              "Supported diversion and rehabilitation initiatives and observed child-protection and confidentiality standards.",
              "Gained exposure to criminal, civil and family-law proceedings in the court setting."
            ]
          }
        ]
      }
    ],
    "education": [
      {
        "degree": "Postgraduate Bar Course, ongoing",
        "institution": "Law Development Centre, Uganda",
        "period": "2024 to present"
      },
      {
        "degree": "Bachelor of Laws",
        "institution": "Makerere University, Uganda",
        "period": "2020 to 2024"
      },
      {
        "degree": "Uganda Advanced Certificate of Education",
        "institution": "Nabisunsa Girls’ School, Uganda",
        "period": "2019"
      },
      {
        "degree": "Uganda Certificate of Education",
        "institution": "Nabisunsa Girls’ School, Uganda",
        "period": "2017"
      },
      {
        "degree": "Certificate of Completion of Primary School Studies",
        "institution": "Kampala Parents School",
        "period": "2004"
      }
    ],
    "skills": [
      {
        "category": "Core competencies",
        "items": [
          "Critical thinking and analysis",
          "Legal research and information analysis",
          "Public communication",
          "Team building",
          "Organisational management",
          "Fact checking and editorial skills",
          "Conflict resolution"
        ]
      }
    ],
    "volunteering": [
      {
        "title": "Member and Volunteer",
        "organization": "Radiant Smile Foundation",
        "period": "August 2020 to present"
      }
    ],
    "publications": [
      {
        "title": "Assessing the Enforcement of the Laws Governing the Juvenile Justice Systems in Uganda: Overcoming the Delays and Case Backlog in Juvenile Judicial Affairs in Alignment with Regional and International Standards",
        "kind": "Research report submitted to Makerere University School of Law"
      }
    ],
    "languages": [
      {
        "name": "English",
        "proficiency": "Fluent"
      },
      {
        "name": "Luganda",
        "proficiency": "Fluent"
      }
    ],
    "directoryGroup": "Legal Team",
    "shortBio": "Najjumba Martina Luyinda’s CV records legal assistant work at R. Mackay Advocates in 2026, earlier litigation support, public-interest legal aid and juvenile-justice experience, and a Postgraduate Bar Course listed as ongoing.",
    "professionalContributions": [
      {
        "title": "Legal Assistant",
        "organization": "R. Mackay Advocates",
        "period": "2026",
        "areas": [
          {
            "title": "Selected contributions stated in the CV",
            "items": [
              "The CV states that she gained two years of practical experience supporting legal services across litigation, commercial matters and client advice.",
              "Developed research, drafting, document-review and analysis skills on time-sensitive assignments.",
              "Supported timely preparation of court and legal documents, with attention to detail and deadlines.",
              "Assessed legal issues and risks and translated requirements into clear advice and documents.",
              "Built working relationships with clients, advocates and court staff while handling sensitive information."
            ]
          }
        ]
      },
      {
        "title": "Legal Assistant",
        "organization": "Nshemereirwe, Arigye & Co. Advocates",
        "period": "May to August 2025",
        "areas": [
          {
            "title": "Selected contributions stated in the CV",
            "items": [
              "Contributed research and drafting support to civil and criminal matters.",
              "Supported trial preparation, case readiness and procedural timelines.",
              "Managed files and schedules against deadlines.",
              "Assisted with mediation and negotiation processes.",
              "The CV notes recognition for accuracy, attention to detail and reliability.",
              "Gained practical exposure to advocacy and case strategy.",
              "Handled confidential information with attention to professional ethics."
            ]
          }
        ]
      },
      {
        "title": "Legal Intern",
        "organization": "Child Concern Initiative Organization Uganda through PILAC, Makerere University",
        "period": "June to August 2023",
        "areas": [
          {
            "title": "Selected contributions stated in the CV",
            "items": [
              "Assisted vulnerable clients with legal remedies, including bail, protection orders, community service and dispute resolution.",
              "Supported resolution of legal-aid matters.",
              "Contributed to rights litigation, advocacy reports and briefs.",
              "Participated in community legal education and access-to-justice work.",
              "Worked with justice-sector stakeholders on timely and fair processes.",
              "The CV notes professionalism, empathy and ethical handling of client matters."
            ]
          }
        ]
      },
      {
        "title": "Legal Extern",
        "organization": "Naguru Remand Home, Uganda",
        "period": "March to May 2023",
        "areas": [
          {
            "title": "Selected contributions stated in the CV",
            "items": [
              "Supported case tracking and attention to statutory remand periods.",
              "Followed up court matters with a view to timely hearings and bail or release where applicable.",
              "Supported diversion and rehabilitation approaches in child matters.",
              "Gained experience in juvenile justice and child protection.",
              "The CV notes professionalism, sensitivity and ethical conduct.",
              "Developed an understanding of links between criminal justice, child rights and social welfare."
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "kunda-susan",
    "name": "Kunda Susan",
    "role": "Legal Assistant",
    "biography": [
      "Kunda Susan’s CV records legal assistant work at R. Mackay Advocates and previous volunteer experience in legal practice, business operations and court support. Her experience includes legal research, document drafting, case-file administration and client support."
    ],
    "experience": [
      {
        "title": "Legal Assistant",
        "organization": "R. Mackay Advocates, Kampala",
        "period": "15th December, 2025 up to date 24th June, 2026",
        "areas": [
          {
            "title": "Responsibilities",
            "items": [
              "Researched corporate, land and family-law matters.",
              "Drafted pleadings, chamber applications, written submissions and legal briefs.",
              "Filed documents and tracked court-registry matters and case schedules.",
              "Interviewed clients and prepared case summaries for senior advocates.",
              "Maintained confidential client files and updated the legal database."
            ]
          }
        ]
      }
    ],
    "volunteering": [
      {
        "title": "Volunteer",
        "organization": "Hallmark Advocates, Lira Town",
        "period": "2023 to 2025",
        "areas": [
          {
            "title": "Responsibilities",
            "items": [
              "Conducted legal research and prepared draft pleadings.",
              "Managed client files and supported legal consultations."
            ]
          }
        ]
      },
      {
        "title": "Volunteer",
        "organization": "100% Enterprises, Post Office",
        "period": "2020 to 2022",
        "areas": [
          {
            "title": "Responsibilities",
            "items": [
              "Assisted with daily business operations and record keeping.",
              "Handled customer enquiries and service delivery."
            ]
          }
        ]
      },
      {
        "title": "Volunteer",
        "organization": "Ibanda Magistrate Court",
        "period": "2018",
        "areas": [
          {
            "title": "Responsibilities",
            "items": [
              "Observed court proceedings and assisted with case filing.",
              "Guided members of the public on court registries and processes."
            ]
          }
        ]
      }
    ],
    "education": [
      {
        "degree": "Bachelor of Laws (LL.B.)",
        "institution": "Islamic University in Uganda, Kampala Campus",
        "period": "2019 to 2023"
      },
      {
        "degree": "Uganda Advanced Certificate of Education",
        "institution": "Lakeside College Luzira",
        "period": "2014 to 2016"
      },
      {
        "degree": "Uganda Certificate of Education",
        "institution": "Old Kampala Secondary School",
        "period": "2009 to 2014"
      },
      {
        "degree": "Primary Leaving Examination",
        "institution": "Mirembe Infant Primary School",
        "period": "2001 to 2008"
      }
    ],
    "skills": [
      {
        "category": "Skills",
        "items": [
          "Research in Ugandan statutes, case law and online legal databases",
          "Drafting contracts, affidavits and letters of demand",
          "Verbal and written communication",
          "File management and multitasking",
          "Legal drafting",
          "Case analysis",
          "Client management",
          "Advocacy support",
          "Court etiquette and judicial procedure",
          "Document organisation",
          "Business administration",
          "Customer relations",
          "Problem solving"
        ]
      }
    ],
    "languages": [
      {
        "name": "English",
        "proficiency": "Fluent (official)"
      },
      {
        "name": "Runyankore",
        "proficiency": "Native speaker"
      },
      {
        "name": "Luganda",
        "proficiency": "Fluent"
      },
      {
        "name": "Kiswahili",
        "proficiency": "Conversational"
      }
    ],
    "directoryGroup": "Legal Team",
    "shortBio": "Kunda Susan’s CV records legal assistant work at R. Mackay Advocates and previous volunteer experience in legal practice, business operations and court support. Her experience includes legal research, document drafting, case-file administration and client support.",
    "qualifications": [
      "Certificate in Bachelor of laws",
      "Transcript of Academic Record",
      "Advanced"
    ]
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
    id: 'leadership-partners', image: 'R Mackay Advocates leadership pair.jpg',
    alt: 'Founding Partner Robert Mackay and Managing Partner Richard Rugambwa standing together.',
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
    alt: 'Robert Mackay, Founding Partner of R. Mackay Advocates.',
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
