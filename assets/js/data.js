/* =========================================================
   Publication, presentation & activity data — Haruki Emori
   To add a new entry, push an object into the relevant array.
   The pages pick it up automatically (sorting, search, filters).
   ========================================================= */

/* --- Published Papers --- */
window.PUBLISHED = [
  {
    year: 2026,
    authors: [{ name: "H. Emori", me: true }],
    title: "Quantum-like models and quantum falsifiability: A new horizon for humanities opened by quantum computers",
    venue: "Cognitive Studies: Bulletin of the Japanese Cognitive Science Society",
    detail: "33, 126 (2026)",
    links: [{ label: "DOI", href: "https://doi.org/10.11225/cs.2025.060" }]
  }
];

/* --- Preprints --- */
window.PREPRINTS = [
  {
    year: 2026,
    authors: [{ name: "H. Emori", me: true }],
    title: "Quantum statistical functions",
    venue: "Preprint",
    links: [{ label: "arXiv:2602.05821", href: "https://doi.org/10.48550/arXiv.2602.05821" }]
  },
  {
    year: 2025,
    authors: [{ name: "H. Emori", me: true }, { name: "H. Tajima" }],
    title: "Measuring out-of-time-order correlators on a quantum computer based on an irreversibility–susceptibility method",
    venue: "Preprint",
    links: [{ label: "arXiv:2512.22643", href: "https://doi.org/10.48550/arXiv.2512.22643" }]
  },
  {
    year: 2024,
    authors: [{ name: "H. Emori", me: true }, { name: "M. Ozawa" }, { name: "A. Tomita" }],
    title: "Disturbance Evaluation Circuit in Quantum Measurement",
    venue: "Preprint",
    links: [{ label: "arXiv:2405.11447", href: "https://doi.org/10.48550/arXiv.2405.11447" }]
  },
  {
    year: 2023,
    authors: [{ name: "H. Emori", me: true }, { name: "H. Tajima" }],
    title: "Error and Disturbance as Irreversibility with Applications: Unified Definition, Wigner–Araki–Yanase Theorem and Out-of-Time-Order Correlator",
    venue: "Preprint",
    links: [{ label: "arXiv:2309.14172", href: "https://doi.org/10.48550/arXiv.2309.14172" }]
  },
  {
    year: 2023,
    authors: [
      { name: "N. Kanazawa", note: "*" },
      { name: "H. Emori", me: true, note: "*" },
      { name: "D. C. McKay" }
    ],
    title: "Qutrit state discrimination with mid-circuit measurements",
    venue: "Preprint",
    detail: "*These two authors contributed equally.",
    links: [{ label: "arXiv:2309.11303", href: "https://doi.org/10.48550/arXiv.2309.11303" }]
  }
];

/* --- Patents --- */
window.PATENTS = [
  {
    year: 2024,
    authors: [{ name: "N. Kanazawa" }, { name: "D. C. McKay" }, { name: "H. Emori", me: true }],
    title: "Ternary Quantum State Readout Using Binary-outcome Mid-circuit Measurements",
    venue: "US Patent App. 18/330,452 (2024)",
    links: [{ label: "Patent App.", href: "https://www.freepatentsonline.com/y2024/0412088.html" }]
  }
];

/* --- Visiting positions (Activities page) --- */
window.VISITING = [
  {
    role: "Visiting Student",
    when: "May 17 – August 9, 2026",
    org: "University of California, Berkeley — Leinweber Institute for Theoretical Physics",
    program: "ASPIRE Program: “RIKEN–Berkeley Mathematical Quantum Science Initiative”",
    place: "Berkeley, California, USA",
    invited: true,
    links: [
      { label: "UC Berkeley", href: "https://www.berkeley.edu/" },
      { label: "ROR", href: "https://ror.org/01an7q238" }
    ]
  }
];

/* For presentations, each entry has:
   year, kind ("talk"|"poster"|"flash"), role ("invited"|"contributed"),
   refereed (bool), scope ("international"|"domestic"),
   venueType, title, authors, venue, place, date, venueLink (optional) */
window.PRESENTATIONS = [
  // ===== Refereed =====
  { year: 2026, kind: "talk", role: "contributed", refereed: true, scope: "international", venueType: "Conference",
    authors: [{name:"H. Emori", me:true}],
    title: "Quantum statistical functions",
    venue: "QPL 2026 — 23rd International Conference on Quantum Physics and Logic",
    place: "University of Amsterdam",
    date: "August 17–21, 2026",
    venueLink: "https://qplconference.org" },

  { year: 2025, kind: "flash", role: "contributed", refereed: true, scope: "international", venueType: "Conference",
    authors: [{name:"H. Emori", me:true}],
    title: "Quantum statistical functions",
    venue: "QuiDiQua 3 — Quasiprobability distributions in quantum mechanics, optics and information",
    place: "Institut Henri Poincaré",
    date: "November 5–7, 2025",
    venueLink: "https://quidiqua3.sciencesconf.org" },

  { year: 2025, kind: "poster", role: "contributed", refereed: true, scope: "international", venueType: "Symposium",
    authors: [{name:"H. Emori", me:true}, {name:"A. Tomita"}, {name:"M. Ozawa"}],
    title: "Parameterized quantum instruments",
    venue: "Quantum Innovation 2025",
    place: "Congrès Square Grand Green Osaka",
    date: "July 29 – August 2, 2025",
    venueLink: "https://www.qi2025.jp/" },

  { year: 2025, kind: "poster", role: "contributed", refereed: true, scope: "international", venueType: "Conference",
    authors: [{name:"H. Emori", me:true}, {name:"A. Tomita"}, {name:"M. Ozawa"}],
    title: "Parameterized quantum instruments",
    venue: "QPL 2025 — 22nd International Conference on Quantum Physics and Logic",
    place: "Hotel Cherno More",
    date: "July 14–18, 2025",
    venueLink: "https://qpl2025.github.io" },

  { year: 2025, kind: "poster", role: "contributed", refereed: true, scope: "international", venueType: "Workshop",
    authors: [{name:"H. Emori", me:true}, {name:"A. Tomita"}, {name:"M. Ozawa"}],
    title: "Quantum algorithm for implementing arbitrary quantum instruments based on parameterized quantum circuits",
    venue: "Quantinuum May 2025 Training Session",
    place: "The University of Osaka Nakanoshima Center",
    date: "May 19–20, 2025",
    venueLink: "https://quantinuum.co.jp/quantinuum-spring-2025-training-session/" },

  { year: 2025, kind: "poster", role: "contributed", refereed: true, scope: "international", venueType: "Conference",
    authors: [{name:"H. Emori", me:true}, {name:"M. Ozawa"}, {name:"A. Tomita"}],
    title: "Disturbance Evaluation Circuit in Quantum Measurement",
    venue: "QIP 2025 — International Conference on Quantum Information Processing",
    place: "Raleigh Convention Center",
    date: "February 22–28, 2025",
    venueLink: "https://rsvp.duke.edu/event/qip2025/home" },

  { year: 2024, kind: "poster", role: "contributed", refereed: true, scope: "international", venueType: "Conference",
    authors: [{name:"H. Emori", me:true}, {name:"H. Tajima"}],
    title: "Error and Disturbance as Irreversibility with Applications: Unified Definition, Wigner–Araki–Yanase Theorem and Out-of-Time-Order Correlator",
    venue: "AQIS 24 — 24th Asian Quantum Information Science Conference",
    place: "Hokkaido University",
    date: "August 26–30, 2024",
    venueLink: "http://aqis-conf.org/2024/" },

  { year: 2024, kind: "poster", role: "contributed", refereed: true, scope: "international", venueType: "Conference",
    authors: [{name:"H. Emori", me:true}, {name:"M. Ozawa"}, {name:"A. Tomita"}],
    title: "Disturbance Evaluation Circuit in Quantum Measurement",
    venue: "AQIS 24 — 24th Asian Quantum Information Science Conference",
    place: "Hokkaido University",
    date: "August 26–30, 2024",
    venueLink: "http://aqis-conf.org/2024/" },

  { year: 2024, kind: "talk", role: "contributed", refereed: true, scope: "international", venueType: "Conference",
    authors: [{name:"H. Emori", me:true}, {name:"H. Tajima"}],
    title: "Error and Disturbance as Irreversibility with Applications: Unified Definition, Wigner–Araki–Yanase Theorem and Out-of-Time-Order Correlator",
    venue: "QPL 2024 — 21st International Conference on Quantum Physics and Logic",
    place: "Instituto de Ciencias de la Computación",
    date: "July 15–19, 2024",
    venueLink: "https://qpl2024.dc.uba.ar" },

  { year: 2024, kind: "poster", role: "contributed", refereed: true, scope: "international", venueType: "Conference",
    authors: [{name:"H. Emori", me:true}, {name:"H. Tajima"}],
    title: "Error and Disturbance as Irreversibility with Applications: Unified Definition, Wigner–Araki–Yanase Theorem and Out-of-Time-Order Correlator",
    venue: "QIP 2024 — International Conference on Quantum Information Processing",
    place: "Taipei International Convention Center",
    date: "January 13–19, 2024",
    venueLink: "https://qip2024.tw/site/page.aspx?pid=901&sid=1522&lang=en" },

  { year: 2023, kind: "poster", role: "contributed", refereed: true, scope: "international", venueType: "Symposium",
    authors: [{name:"H. Emori", me:true}, {name:"H. Tajima"}],
    title: "Error and Disturbance as Irreversibility with Applications: Unified Definition, Wigner–Araki–Yanase Theorem and Out-of-Time-Order Correlator",
    venue: "Quantum Innovation 2023",
    place: "Tokyo Convention Hall",
    date: "November 15–17, 2023",
    venueLink: "https://quantum-innovation.riken.jp/archives/QI2023/index.html" },

  { year: 2022, kind: "poster", role: "contributed", refereed: true, scope: "international", venueType: "Conference",
    authors: [{name:"H. Emori", me:true}, {name:"M. Ozawa"}, {name:"A. Tomita"}],
    title: "Disturbance Evaluation Circuit in Quantum Measurement",
    venue: "AQIS 22 — 22nd Asian Quantum Information Science Conference",
    place: "Online, hosted by University of Science and Technology of China",
    date: "December 17–18, 2022",
    venueLink: "http://aqis-conf.org/2022/" },

  // ===== Non-refereed =====
  { year: 2025, kind: "talk", role: "invited", refereed: false, scope: "international", venueType: "Conference",
    authors: [{name:"H. Emori", me:true}],
    title: "Falsifiable Quantum Simulation: Experimental Probes of Error–Disturbance Relation, OTOC, and Arai–Miyamoto Inequality Using Quantum Computers",
    venue: "Perspective on Time, Uncertainty and Quantum Computation",
    place: "Nishijin Plaza of Kyushu University",
    date: "December 8–11, 2025",
    venueLink: "https://www2.math.kyushu-u.ac.jp/~hiroshima/TIME.html" },

  { year: 2025, kind: "talk", role: "invited", refereed: false, scope: "international", venueType: "Workshop",
    authors: [{name:"H. Emori", me:true}, {name:"A. Khrennikov"}, {name:"A. Iriki"}],
    title: "Insight as Measurement: Emergence of Conscious Awareness and Language From Algebraic Path Interference",
    venue: "Emerging Mathematical Approaches in Cognitive Science",
    place: "Queensland University of Technology",
    date: "October 29–30, 2025" },

  { year: 2025, kind: "talk", role: "contributed", refereed: false, scope: "international", venueType: "Workshop",
    authors: [{name:"H. Emori", me:true}, {name:"A. Tomita"}, {name:"M. Ozawa"}],
    title: "Parametrized quantum instruments",
    venue: "QI 2025 Satellite Workshop on Practical Quantum Computing",
    place: "Osaka University",
    date: "July 24–25 & 28, 2025",
    venueLink: "https://qi2025satellite.github.io/" },

  { year: 2025, kind: "talk", role: "contributed", refereed: false, scope: "international", venueType: "Conference",
    authors: [{name:"H. Emori", me:true}, {name:"A. Tomita"}, {name:"M. Ozawa"}],
    title: "Parametrized quantum instruments",
    venue: "QIP25 — Quantum Information and Probability: from Foundations to Engineering",
    place: "Linnaeus University",
    date: "June 10–13, 2025",
    venueLink: "https://lnu.se/en/meet-linnaeus-university/current/events/2025/konferenser/qip25--10-13-juni/" },

  { year: 2025, kind: "talk", role: "invited", refereed: false, scope: "domestic", venueType: "Seminar",
    authors: [{name:"H. Emori", me:true}],
    title: "New Frontiers in Quantum Measurement: Experimental Evaluation of Error and Disturbance on Quantum Computers",
    venue: "IMI Colloquium at the Institute of Mathematics for Industry, Kyushu University",
    place: "Kyushu University",
    date: "May 13, 2025",
    venueLink: "https://www.math.kyushu-u.ac.jp/activities/13491/" },

  { year: 2025, kind: "talk", role: "invited", refereed: false, scope: "domestic", venueType: "Seminar",
    authors: [{name:"H. Emori", me:true}],
    title: "Error and Disturbance as Irreversibility",
    venue: "Mathematical Physics Seminar, Graduate School of Mathematics, Kyushu University",
    place: "Kyushu University",
    date: "May 14, 2025",
    venueLink: "https://www.math.kyushu-u.ac.jp/activities/13630/" },

  { year: 2024, kind: "talk", role: "invited", refereed: false, scope: "domestic", venueType: "Conference",
    authors: [{name:"H. Emori", me:true}],
    title: "Applications of quantum computers to cognitive sciences",
    venue: "41st Annual Meeting of Japanese Cognitive Science Society",
    place: "University of Tokyo",
    date: "October 13, 2024",
    venueLink: "https://jcss.gr.jp/meetings/jcss2024/proceedings/OS-2-1.html" },

  { year: 2024, kind: "talk", role: "invited", refereed: false, scope: "international", venueType: "Workshop",
    authors: [{name:"H. Emori", me:true}],
    title: "Applications of quantum computers to cognitive sciences based on Quantum Instrument",
    venue: "RIKEN Quantum Workshop on \"Quantum-Like Modeling\" in Cognitive & Social Sciences",
    place: "RIKEN, Wako",
    date: "October 11, 2024",
    venueLink: "https://indico2.riken.jp/event/5002/" },

  { year: 2024, kind: "poster", role: "contributed", refereed: false, scope: "international", venueType: "Conference",
    authors: [{name:"H. Emori", me:true}, {name:"H. Tajima"}],
    title: "Error and Disturbance as Irreversibility with Applications: Unified Definition, Wigner–Araki–Yanase Theorem and Out-of-Time-Order Correlator",
    venue: "Causalworlds",
    place: "Perimeter Institute for Theoretical Physics",
    date: "September 16–20, 2024",
    venueLink: "https://events.perimeterinstitute.ca/event/69/" },

  { year: 2024, kind: "poster", role: "contributed", refereed: false, scope: "international", venueType: "Conference",
    authors: [{name:"H. Emori", me:true}, {name:"M. Ozawa"}, {name:"A. Tomita"}],
    title: "Disturbance Evaluation Circuit in Quantum Measurement",
    venue: "Causalworlds",
    place: "Perimeter Institute for Theoretical Physics",
    date: "September 16–20, 2024",
    venueLink: "https://events.perimeterinstitute.ca/event/69/" },

  { year: 2024, kind: "talk", role: "invited", refereed: false, scope: "international", venueType: "Workshop",
    authors: [{name:"H. Emori", me:true}, {name:"M. Ozawa"}, {name:"A. Tomita"}],
    title: "Disturbance Evaluation Circuit in Quantum Measurement",
    venue: "3rd Young Researchers' Workshop of the Extreme Universe Collaboration & 6th \"Extreme Universe\" School",
    place: "Grand Park Otaru",
    date: "September 12–15, 2024",
    venueLink: "https://sites.google.com/view/the-3rd-young-researchers-work/home" },

  { year: 2024, kind: "poster", role: "contributed", refereed: false, scope: "international", venueType: "Workshop",
    authors: [{name:"H. Emori", me:true}, {name:"M. Ozawa"}, {name:"A. Tomita"}],
    title: "Disturbance Evaluation Circuit in Quantum Measurement",
    venue: "RIKEN–LBNL Workshop on Quantum Information Science",
    place: "Lawrence Berkeley National Laboratory",
    date: "September 3–6, 2024",
    venueLink: "https://conferences.lbl.gov/event/1747/" },

  { year: 2024, kind: "talk", role: "contributed", refereed: false, scope: "international", venueType: "Conference",
    authors: [{name:"H. Emori", me:true}, {name:"M. Ozawa"}, {name:"A. Tomita"}],
    title: "Disturbance Evaluation Circuit for Quantum Measurements and Its Experimental Demonstration on a Quantum Computer",
    venue: "QIP24 — Quantum Information and Probability: from Foundations to Engineering",
    place: "Linnaeus University",
    date: "June 11–14, 2024",
    venueLink: "https://lnu.se/en/meet-linnaeus-university/current/events/2024/conferences/qip24/" },

  { year: 2024, kind: "talk", role: "contributed", refereed: false, scope: "domestic", venueType: "Society and Meeting",
    authors: [{name:"H. Emori", me:true}, {name:"M. Ozawa"}, {name:"A. Tomita"}],
    title: "Disturbance Evaluation Circuit for Quantum Measurements and Its Experimental Demonstration on a Quantum Computer",
    venue: "50th Quantum Information Technology Symposium (QIT50)",
    place: "AIST",
    date: "May 28–30, 2024",
    venueLink: "https://www.ieice.org/es/qit/qit50/index_e.html" },

  { year: 2024, kind: "talk", role: "invited", refereed: false, scope: "domestic", venueType: "Workshop",
    authors: [{name:"H. Emori", me:true}, {name:"H. Tajima"}],
    title: "Error and Disturbance as Irreversibility with Applications: Unified Definition, Wigner–Araki–Yanase Theorem and Out-of-Time-Order Correlator",
    venue: "35th Quantum Information Kanto Student Chapter",
    place: "University of Tokyo",
    date: "March 29, 2024",
    venueLink: "https://quangaroo.web.fc2.com/meetings/35/meeting.html" },

  { year: 2024, kind: "talk", role: "contributed", refereed: false, scope: "domestic", venueType: "Conference",
    authors: [{name:"H. Emori", me:true}, {name:"H. Tajima"}],
    title: "Error and Disturbance as Irreversibility with Applications: Unified Definition, Wigner–Araki–Yanase Theorem and Out-of-Time-Order Correlator",
    venue: "JPS Spring Meeting 2024",
    place: "Online",
    date: "March 18–21, 2024",
    venueLink: "https://www.jps.or.jp/english/meetings-and-awards/spring/spring-meeting.html" },

  { year: 2024, kind: "talk", role: "contributed", refereed: false, scope: "international", venueType: "Conference",
    authors: [{name:"H. Emori", me:true}, {name:"H. Tajima"}],
    title: "Error and Disturbance as Irreversibility with Applications: Unified Definition, Wigner–Araki–Yanase Theorem and Out-of-Time-Order Correlator",
    venue: "APS March Meeting 2024",
    place: "Minneapolis Convention Center",
    date: "March 3–8, 2024",
    venueLink: "https://march.aps.org" },

  { year: 2024, kind: "talk", role: "contributed", refereed: false, scope: "international", venueType: "Workshop",
    authors: [{name:"H. Emori", me:true}, {name:"H. Tajima"}],
    title: "Error and Disturbance as Irreversibility with Applications: Unified Definition, Wigner–Araki–Yanase Theorem and Out-of-Time-Order Correlator",
    venue: "2nd Young Researchers' Workshop of the Extreme Universe Collaboration",
    place: "Shirahamaso",
    date: "February 19–23, 2024",
    venueLink: "https://sites.google.com/view/workshopofexuforyr2" },

  { year: 2024, kind: "poster", role: "contributed", refereed: false, scope: "domestic", venueType: "Society and Meeting",
    authors: [{name:"H. Emori", me:true}, {name:"A. Tomita"}],
    title: "Characteristic Function and Susceptibility as Quasiprobability",
    venue: "10th Quantum Theory & Technology Un-Official Meeting (QUATUO)",
    place: "Kochi University of Technology",
    date: "January 6–7, 2024" },

  { year: 2023, kind: "poster", role: "contributed", refereed: false, scope: "domestic", venueType: "Symposium",
    authors: [{name:"H. Emori", me:true}, {name:"A. Tomita"}],
    title: "Characteristic Function and Susceptibility as Quasiprobability",
    venue: "49th Quantum Information Technology Symposium (QIT49)",
    place: "OIST",
    date: "December 17–19, 2023",
    venueLink: "https://www.ieice.org/es/qit/qit49/index_e.html" },

  { year: 2023, kind: "talk", role: "invited", refereed: false, scope: "domestic", venueType: "Workshop",
    authors: [{name:"H. Emori", me:true}, {name:"M. Ozawa"}, {name:"A. Tomita"}, {name:"H. Tajima"}],
    title: "Disturbance Evaluation Circuit in Quantum Measurement / Error and Disturbance as Irreversibility (two-talk set)",
    venue: "Chubu Quantum Workshop 2023",
    place: "Chubu University",
    date: "October 9–10, 2023" },

  { year: 2023, kind: "talk", role: "invited", refereed: false, scope: "domestic", venueType: "Workshop",
    authors: [{name:"H. Emori", me:true}, {name:"M. Ozawa"}, {name:"A. Tomita"}],
    title: "Disturbance Evaluation Circuit in Quantum Measurement",
    venue: "1st Chubu Quantum Young Workshop",
    place: "Chubu University",
    date: "March 8–9, 2023" },

  { year: 2023, kind: "poster", role: "contributed", refereed: false, scope: "domestic", venueType: "Society and Meeting",
    authors: [{name:"H. Emori", me:true}, {name:"M. Ozawa"}, {name:"A. Tomita"}],
    title: "Disturbance Evaluation Circuit in Quantum Measurement",
    venue: "Aspects of Quantum Information and Quantum Foundations",
    place: "University of Tokyo",
    date: "February 9–10, 2023",
    venueLink: "https://www.iis.u-tokyo.ac.jp/~lee/QMQIF/index.html" },

  { year: 2022, kind: "poster", role: "contributed", refereed: false, scope: "domestic", venueType: "Symposium",
    authors: [{name:"H. Emori", me:true}, {name:"M. Ozawa"}, {name:"A. Tomita"}],
    title: "Disturbance Evaluation Circuit in Quantum Measurement",
    venue: "47th Quantum Information Technology Symposium (QIT47)",
    place: "Keio University",
    date: "December 8–9, 2022",
    venueLink: "https://www.ieice.org/es/qit/qit47/index_e.html" },

  { year: 2022, kind: "poster", role: "contributed", refereed: false, scope: "domestic", venueType: "School",
    authors: [{name:"H. Emori", me:true}, {name:"A. Okamoto"}, {name:"A. Tomita"}],
    title: "Mitigation-based benchmarking for NISQ devices",
    venue: "QEd Summer School 2022",
    place: "OIST",
    date: "September 23–30, 2022",
    venueLink: "https://www.sqei.c.u-tokyo.ac.jp/qed/" },

  { year: 2022, kind: "talk", role: "invited", refereed: false, scope: "domestic", venueType: "Seminar",
    authors: [{name:"H. Emori", me:true}],
    title: "Correspondence of weak value and correlation function",
    venue: "Formal Seminar of Yukawa Institute for Theoretical Physics",
    place: "Kyoto University",
    date: "September 16, 2022",
    venueLink: "https://www.yukawa.kyoto-u.ac.jp/seminar/s53037?lang=en-GB" },

  { year: 2022, kind: "talk", role: "contributed", refereed: false, scope: "domestic", venueType: "Symposium",
    authors: [{name:"H. Emori", me:true}, {name:"A. Okamoto"}, {name:"A. Tomita"}],
    title: "Mitigation-based benchmarking for NISQ devices",
    venue: "46th Quantum Information Technology Symposium (QIT46)",
    place: "Online",
    date: "May 30–31, 2022",
    venueLink: "https://www.ieice.org/es/qit/qit46/index_e.html" },

  { year: 2022, kind: "poster", role: "contributed", refereed: false, scope: "domestic", venueType: "Workshop",
    authors: [{name:"H. Emori", me:true}, {name:"A. Okamoto"}, {name:"A. Tomita"}],
    title: "Quantitative Evaluation of Measurement Errors and Gate Benchmarking on a Quantum Computer",
    venue: "31st Quantum Information Kanto Student Chapter",
    place: "Online",
    date: "March 29, 2022",
    venueLink: "https://quangaroo.web.fc2.com/meetings/31/meeting.html" },

  { year: 2022, kind: "talk", role: "contributed", refereed: false, scope: "domestic", venueType: "Symposium",
    authors: [{name:"H. Emori", me:true}, {name:"A. Okamoto"}, {name:"A. Tomita"}],
    title: "Quantitative Evaluation of Measurement Errors and Gate Benchmarking on a Quantum Computer",
    venue: "2022 IEICE Hokkaido Section Internet Symposium",
    place: "Online",
    date: "February 24 – March 2, 2022",
    venueLink: "https://www.ieice.org/hokkaido/?page_id=1084&lang=en" }
];
