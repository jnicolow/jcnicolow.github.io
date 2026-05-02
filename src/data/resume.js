/**
 * Portfolio copy aligned with Joel Nicolow — Curriculum Vitae (CV PDF).
 */

export const personal = {
  brand: 'JN',
  name: 'Joel Nicolow',
  location: 'Honolulu, HI',
  email: 'jnicolow@hawaii.edu',
  linkedin: 'https://www.linkedin.com/in/joelnicolow',
  github: 'https://github.com/jnicolow',
  website: 'https://jnicolow.github.io/',
  tagline: 'Ph.D. student · Computer vision, geospatial ML & remote sensing',
  summary:
    'Graduate researcher focused on satellite-derived shorelines, segmentation of Landsat / Sentinel-2 / PlanetScope imagery, and machine learning for environmental monitoring—including fog detection in mountain trail camera imagery. M.S. in Computer Science (UH Mānoa); co-author on work in Scientific Reports and conference posters at AAG, HCC, and related venues.',
  contactBlurb:
    'Open to collaborations on remote sensing, coastal processes, and applied ML. Reach out by email or find code and publications through the links below.',
  about: [
    'I am a Ph.D. student in <strong>Computer Science</strong> at the University of Hawaiʻi at Mānoa, building on an M.S. (thesis on comparative shoreline segmentation) and a B.S. (Honors, cum laude). My work sits at the intersection of <strong>geospatial analysis</strong>, <strong>deep learning</strong>, and coastal / mountain environments.',
    'As a <strong>Graduate Research Assistant</strong> with the Coastal Research Collaborative, I work on semantic segmentation for satellite-derived shoreline frameworks and have co-authored NSF grant proposals. With the <strong>Water Resources Research Center</strong>, I developed fog classification pipelines using pretrained ResNet backbones on trail camera imagery.',
    'Earlier roles span EPSCoR undergraduate research, public-health analytics (R, LaTeX), data ethics–adjacent health systems work, and field conservation with Kupu. I care about reproducible methods, clear science communication, and applications that support Hawaiʻi’s ecosystems and communities.'
  ],
  aboutStats: [
    { value: 'Scientific Reports', label: 'Journal (J1)' },
    { value: 'UH Mānoa', label: 'Ph.D. CS' },
    { value: 'CRC / WRRC', label: 'Research' }
  ]
}

/**
 * Experience: newest first. `expandOnly` optional — see `experienceSettings`.
 */
export const experienceSettings = {
  collapsedCount: 3
}

export const experience = [
  {
    title: 'Graduate Research Assistant',
    company: 'Coastal Research Collaborative, University of Hawaiʻi at Mānoa',
    location: 'Honolulu, HI',
    dates: '2024 \u2014 Present',
    bullets: [
      'Semantic segmentation of satellite imagery (Landsat, Sentinel-2, PlanetScope) for satellite-derived shoreline frameworks [J1], [C2], [C4]; co-authored two NSF grant proposals.'
    ]
  },
  {
    title: 'Machine Learning Engineer',
    company: 'Water Resources Research Center, University of Hawaiʻi at Mānoa',
    location: 'Honolulu, HI',
    dates: '2024 \u2014 2025',
    bullets: [
      'Classification of fog in mountain trail camera imagery using pretrained ResNet backbones [C1], [C3].'
    ]
  },
  {
    title: 'Introductory Remote Sensing Specialist',
    company: 'Coastal Research Collaborative, University of Hawaiʻi at Mānoa',
    location: 'Honolulu, HI',
    dates: '2022 \u2014 2024',
    bullets: [
      'Geospatial analysis and ML-based pixel classification in Python; QGIS mapping; grant writing; presented at the 2023 Pacific Rim Geospatial Conference and Planet Labs’ Planetary Variables event, San Francisco.'
    ]
  },
  {
    title: 'Undergraduate Researcher',
    company: 'Hawaiʻi Established Program to Stimulate Competitive Research (EPSCoR)',
    location: 'Honolulu, HI',
    dates: '2023 \u2014 2024',
    bullets: [
      'Classification of environmental conditions in images using machine learning; data visualization of temperature and relative humidity data.'
    ]
  },
  {
    title: 'CyberInfrastructure Training for Undergraduates in Summer (CITRUS)',
    company: 'Hawaiʻi Data Science Institute, University of Hawaiʻi at Mānoa',
    location: 'Honolulu, HI',
    dates: 'Summer 2022',
    bullets: [
      'Awarded position in climate-focused one-month program developing key skills and abilities in cyberinfrastructure.'
    ]
  },
  {
    title: 'Data Analyst',
    company: 'Thompson School of Social Work & Public Health, University of Hawaiʻi at Mānoa',
    location: 'Honolulu, HI',
    dates: '2022',
    bullets: [
      'Created R data frameworks to aggregate and de-identify observation-level health data.'
    ]
  },
  {
    title: 'Research Assistant',
    company: 'Pacific Health Analytics Collaborative, University of Hawaiʻi at Mānoa',
    location: 'Honolulu, HI',
    dates: '2019 \u2014 2022',
    bullets: [
      'Web scraping public health data using R; generated aggregate data tables from observation-level data using LaTeX and R; co-authored the Hawaiʻi Opioid Initiative Evaluation report (2020) and Hawaiʻi State Plan for a Data-Driven System of Care on Substance Use (2022).'
    ]
  },
  {
    title: 'Kupu Team Member',
    company: 'Kupu, AmeriCorps Hawaiʻi Youth Conservation Corps',
    location: 'Hawaiʻi',
    dates: 'Summer 2019',
    bullets: [
      'Performed conservation-related tasks in Natural Area Reserves; conducted literary research on maʻa hau hele and its importance to biodiversity in Hawaiʻi.'
    ]
  },
  {
    title: 'Behavioral Health Student Fellow',
    company: 'State of Hawaiʻi, Behavioral Health Administration',
    location: 'Honolulu, HI',
    dates: '2018 \u2014 2019',
    bullets: [
      'Completed fellowship at the Behavioral Health Administration, Alcohol and Drug Abuse Division, compiling a complete list of substance use treatment providers in Hawaiʻi.'
    ]
  }
]

export const projects = [
  {
    title: 'Comparative shoreline segmentation (M.S. thesis)',
    subtitle: 'Six long-term beach survey sites',
    description:
      'Comparative evaluation of five shoreline segmentation methods across six long-term beach survey sites—methods and datasets central to satellite-derived shoreline science in Hawaiʻi.',
    tags: ['Segmentation', 'Remote sensing', 'Thesis'],
    github: 'https://github.com/jnicolow',
    dates: '2024 \u2014 2025'
  },
  {
    title: 'Fog in mountain trail cameras',
    subtitle: 'WRRC · Mt. Kaʻala',
    description:
      'Machine learning pipelines for fog classification using pretrained ResNet backbones on trail camera imagery; related work presented at the Hawaiʻi Conservation Conference and AAG (see posters [C1], [C3], [C5]).',
    tags: ['PyTorch', 'ResNet', 'Computer vision'],
    github: 'https://github.com/jnicolow',
    dates: '2024 \u2014 2025'
  }
]

/** Multiple degrees (newest / highest first) */
export const educationDegrees = [
  {
    school: 'University of Hawaiʻi at Mānoa',
    location: 'Honolulu, HI',
    degree: 'Ph.D. Computer Science',
    dates: '2025 \u2014 Present',
    detail: null
  },
  {
    school: 'University of Hawaiʻi at Mānoa',
    location: 'Honolulu, HI',
    degree: 'M.S. Computer Science',
    dates: '2024 \u2014 2025',
    detail:
      'Thesis: Comparative Evaluation of Five Shoreline Segmentation Methods Across Six Long-Term Beach Survey Sites.'
  },
  {
    school: 'University of Hawaiʻi at Mānoa',
    location: 'Honolulu, HI',
    degree: 'B.S. Computer Science — Honors Program, Cum Laude',
    dates: '2019 \u2014 2024',
    detail: null
  }
]

/** Journal articles (from CV) */
export const publicationsJournals = [
  {
    title:
      'Wave driven cross shore and alongshore transport reveal more extreme projections of shoreline change in island environments',
    authors:
      'R. U. Moskvichev, A. B. Mikkelsen, T. R. Anderson, S. F. Vitousek, J. C. Nicolow, and C. H. Fletcher',
    venue: 'Scientific Reports, vol. 15, no. 1, p. 10 794, Mar. 2025',
    link: 'https://doi.org/10.1038/s41598-025-95074-y',
    linkLabel: 'DOI'
  }
]

/** Conference posters & talks (abbreviated titles; full text on CV) */
export const publicationsPosters = [
  {
    cite: 'C1',
    title: 'Determining Fog Frequency with Elevation on Mt. Kaʻala',
    venue: 'American Association of Geographers Annual Meeting, Honolulu, HI, Apr. 2024'
  },
  {
    cite: 'C2',
    title: 'A Systematic Error Analysis of Satellite-Derived Shorelines',
    venue: 'American Association of Geographers Annual Meeting (Virtual), Dec. 2024'
  },
  {
    cite: 'C3',
    title: 'A Machine Learning Method for Detecting Fog in Mountain Trail Camera Images',
    venue: 'Hawaii Conservation Conference, Honolulu, HI, Jul. 2024',
    link: 'https://jnicolow.github.io/publications/hcc2024.html',
    linkLabel: 'Page'
  },
  {
    cite: 'C4',
    title: 'Advancing Satellite-Derived Shoreline Identification Frameworks for Complex Reef-Fronted Beaches in Hawaiʻi',
    venue: 'American Association of Geographers Annual Meeting (Virtual), Dec. 2023'
  },
  {
    cite: 'C5',
    title: 'FogVision: A Machine Learning Method for Detecting Fog in Mountain Trail Camera Images',
    venue: 'American Association of Geographers Annual Meeting, San Francisco, Dec. 2023',
    link: 'https://jnicolow.github.io/publications/agu2023.html',
    linkLabel: 'Page'
  },
  {
    cite: 'C6',
    title: 'Measuring Fog Frequency With Elevation On Mt. Kaala Using Trail Cameras: Initial Findings',
    venue: 'American Association of Geographers Annual Meeting (Virtual), Dec. 2022',
    link:
      'https://agu2022fallmeeting-agu.ipostersessions.com/Default.aspx?s=E6-2A-D7-F0-F6-E6-F4-00-C6-A0-30-24-43-CE-7B-82',
    linkLabel: 'Poster'
  },
  {
    cite: 'C7',
    title: 'Using Meteorological Monitoring and Image Recognition to Inform Species Relocation',
    venue: 'American Association of Geographers Annual Meeting (Virtual), 2022'
  },
  {
    cite: 'C8',
    title: 'Slope Environmental Lapse Rates and Fog on Oʻahu’s Highest Mountain',
    venue: 'American Association of Geographers Annual Meeting (Virtual), Dec. 2020',
    link:
      'https://agu2020fallmeeting-agu.ipostersessions.com/Default.aspx?s=76-A1-DE-D7-1F-32-28-4A-73-E8-86-7C-F9-C4-92-52',
    linkLabel: 'Poster'
  }
]

/** Optional leadership block — empty bullets hides the card */
export const leadership = {
  title: '',
  org: '',
  dates: '',
  bullets: []
}

export const honorsList = [
  {
    title: 'Outstanding Undergraduate Student Poster Presentation',
    context: 'Hawaiʻi Conservation Conference',
    year: '2024'
  },
  {
    title: 'Research Award',
    context: 'Associated Students of the University of Hawaiʻi at Mānoa',
    year: '2021'
  },
  {
    title: 'Project Funding',
    context: 'Undergraduate Research Opportunities Program',
    year: '2020'
  }
]

export const affiliations = []

export const skills = {
  Languages: ['Python', 'R', 'LaTeX'],
  'ML & DL': ['PyTorch', 'TensorFlow', 'scikit-learn', 'OpenCV'],
  Geospatial: ['GDAL', 'Rasterio', 'GeoPandas', 'Google Earth Engine', 'QGIS'],
  'Misc.': ['Academic research', 'Technical writing', 'Grant applications']
}

/* Gallery: `src/assets/media/gallery/` — see `src/data/media.js` */
