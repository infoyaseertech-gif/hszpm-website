export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/leadership", label: "Leadership" },
  { href: "/programmes", label: "Policies" },
  { href: "/news", label: "News" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Timeline" },
  { href: "/contact", label: "Contact" },
];

// Policy priorities — grounded in APM's publicly reported 2027 campaign
// messaging (insecurity, jobs, cost of living, education, healthcare,
// devolution of power). Sources are linked from the News page.
export const programmes = [
  {
    slug: "security",
    title: "National Security & Safety",
    icon: "security",
    description:
      "The party has named insecurity among the most urgent problems facing the country, with a pledge to restore safety and rebuild public trust in government.",
  },
  {
    slug: "jobs",
    title: "Job Creation & Youth Empowerment",
    icon: "youth",
    description:
      "Job creation and youth empowerment sit at the centre of the campaign's case for reversing unemployment and giving young Nigerians a stake in the country's future.",
  },
  {
    slug: "economy",
    title: "Economic Renewal & Cost of Living",
    icon: "skills",
    description:
      "Campaign messaging has focused on prudent management of public resources and easing the cost-of-living crisis, pointing to the presidential candidate's record as governor.",
  },
  {
    slug: "education",
    title: "Quality Education",
    icon: "education",
    description:
      "Quality education is listed among the issues the party says should dominate the 2027 debate, alongside poverty reduction and stronger public services.",
  },
  {
    slug: "health",
    title: "Accessible Healthcare",
    icon: "medical",
    description:
      "Accessible healthcare is named as a core priority, part of the party's broader case for a performance-based 2027 election built on delivery, not promises.",
  },
  {
    slug: "devolution",
    title: "Devolution of Power",
    icon: "devolution",
    description:
      "The party has called for greater devolution of power and resources to states and local communities, so more decisions are made closer to the people they affect.",
  },
];

// Leadership — only verified, publicly reported office holders are listed
// here. Bios are grounded in reported facts, not invented quotes.
// CORRECTED: the VP candidate is Lawal Daura, not Bala Mohammed — Bala
// Mohammed holds the separate role of National Leader. Verify Bala
// Mohammed's current status before presenting; recent reporting (as yet
// unconfirmed) suggests possible defection talks with the APC.
export const leadershipProfiles = [
  {
    name: "Seyi Makinde",
    role: "APM Presidential Candidate",
    bio: "Governor of Oyo State and APM's presidential flagbearer for the 2027 general election, confirmed after formally receiving his Certificate of Return in Ibadan.",
  },
  {
    name: "Lawal Daura",
    role: "APM Vice Presidential Candidate",
    bio: "Former Director-General of the Department of State Services (2015–2018). Unveiled as Governor Makinde's running mate at APM's national convention in Bauchi, days after leaving the African Democratic Congress.",
  },
  {
    name: "Bala Mohammed",
    role: "National Leader",
    bio: "Governor of Bauchi State and former Chairman of the PDP Governors' Forum before defecting to APM. Inaugurated as the party's National Leader at its national convention, where he publicly backed the Makinde–Daura ticket.",
  },
  {
    name: "Yusuf Mamman Dantalle",
    role: "National Chairman",
    bio: "Re-elected National Chairman at APM's national convention for a second term; presented Governor Makinde with his Certificate of Return as the party's presidential candidate.",
  },
  {
    name: "Abubakar Yusuf",
    role: "National Publicity Secretary",
    bio: "Serves as the party's national spokesperson, confirming candidate nominations to INEC and coordinating cross-party alliance talks ahead of 2027.",
  },
];

// News — every item below is grounded in real, dated reporting and links to
// the original source. A few dates are best estimates where the source
// didn't state an exact publication date (noted in the site notes to
// Yaseer); verify against the linked articles before presenting.
export const newsArticles = [
  {
    slug: "makinde-declares-apm-alliance",
    title: "Makinde declares presidential ambition, seals alliance with APM",
    date: "2026-05-30",
    excerpt:
      "At a unity rally at Mapo Hall in Ibadan, Governor Seyi Makinde announced his intention to run for president on APM's platform, shortly before formally accepting the party's presidential ticket.",
    url: "https://www.ripplesnigeria.com/2027-gov-makinde-to-contest-for-presidency-under-apm/",
  },
  {
    slug: "makinde-certificate-of-return",
    title: "Makinde receives Certificate of Return as APM's 2027 flagbearer",
    date: "2026-06-01",
    excerpt:
      "National Chairman Yusuf Mamman Dantalle presented Governor Makinde with his Certificate of Return at a ceremony in Ibadan, formally confirming him as APM's presidential candidate.",
    url: "https://leadership.ng/2027-makinde-emerges-apm-presidential-candidate-receives-certificate-of-return/",
  },
  {
    slug: "daura-running-mate",
    title: "Makinde unveils Lawal Daura as his running mate",
    date: "2026-08-13",
    excerpt:
      "At APM's national convention in Bauchi, Governor Makinde named former DSS Director-General Lawal Daura as his vice-presidential candidate, citing Daura's security background as a deliberate choice given Nigeria's security challenges.",
    url: "https://www.arise.tv/makinde-picks-lawal-daura-as-running-mate-for-2027-presidential-election/",
  },
  {
    slug: "apm-national-convention-bauchi",
    title: "National convention: Dantalle re-elected chairman, Bala Mohammed inaugurated National Leader",
    date: "2026-08-13",
    excerpt:
      "Delegates from all 36 states re-elected Yusuf Mamman Dantalle for a second term as National Chairman, while Bauchi State Governor Bala Mohammed was formally inaugurated as the party's National Leader and pledged support for the Makinde–Daura ticket.",
    url: "https://www.arise.tv/apm-re-elects-dantalle-backs-makinde-daura-ticket-ahead-of-2027/",
  },
  {
    slug: "apm-campaign-office-abuja",
    title: "APM opens presidential campaign office in Abuja",
    date: "2026-09-08",
    excerpt:
      "The party inaugurated its presidential campaign office in Abuja, with running mate Lawal Daura telling reporters the same day that President Tinubu is beatable in 2027.",
    url: "https://thesun.ng/2027-tinubu-can-be-defeated-daura/",
  },
  {
    slug: "apm-cross-party-support",
    title: "APM says cross-party support for Makinde's 2027 bid is growing",
    date: "2026-09-01",
    excerpt:
      "The party pointed to reaffirmed backing from opposition figures, including a PDP chapter in Ekiti State, as evidence of a widening coalition behind the presidential ticket.",
    url: "https://www.arise.tv/apm-rallies-opposition-support-behind-makindes-2027-presidential-bid/",
  },
];

// Timeline — real, reported milestones on the road to 2027. A couple of
// dates are approximate (noted above); confirm exact dates before using
// this in front of the campaign.
export const events = [
  {
    slug: "mapo-hall-rally",
    title: "Mapo Hall Unity Rally & Presidential Declaration",
    date: "2026-05-14",
    location: "Mapo Hall, Ibadan",
    description:
      "Governor Makinde declared his presidential ambition on APM's platform at a unity rally attended by defecting officeholders from other parties.",
  },
  {
    slug: "certificate-of-return",
    title: "Certificate of Return Presentation",
    date: "2026-06-01",
    location: "Ibadan",
    description:
      "Governor Makinde formally received his Certificate of Return as APM's presidential candidate from National Chairman Yusuf Mamman Dantalle.",
  },
  {
    slug: "national-convention",
    title: "APM National Convention",
    date: "2026-08-13",
    location: "Dr Rilwanu Sulaiman Adamu Square, Government House, Bauchi",
    description:
      "Delegates re-elected Yusuf Mamman Dantalle as National Chairman, inaugurated Bala Mohammed as National Leader, and Makinde unveiled Lawal Daura as his running mate.",
  },
  {
    slug: "oyo-state-congress",
    title: "Oyo State Congress",
    date: "2026-08-20",
    location: "Ibadan",
    description:
      "APM's Oyo State chapter elected new state executives to steer the party's affairs ahead of the 2027 general election.",
  },
  {
    slug: "campaign-office-abuja",
    title: "Presidential Campaign Office Inauguration",
    date: "2026-09-08",
    location: "Abuja",
    description:
      "APM formally opened its presidential campaign office in Abuja, with the Makinde–Daura ticket, party officials, and allies in attendance.",
  },
];

// Real team photos, supplied directly by the organization. Captions are
// intentionally generic — several of these photos are from past, unrelated
// political activity (not APM), so none are labeled as APM-specific events.
export const teamPhotos = [
  { id: "team-01", src: "/images/team/team-01.jpeg", caption: "At a community rally" },
  { id: "team-02", src: "/images/team/team-02.jpeg", caption: "With community leaders" },
  { id: "team-03", src: "/images/team/team-03.jpeg", caption: "Team outreach day" },
  { id: "team-04", src: "/images/team/team-04.jpeg", caption: "With community leaders, Kaduna" },
  { id: "team-05", src: "/images/team/team-05.jpeg", caption: "Community engagement, Kaduna" },
  { id: "team-06", src: "/images/team/team-06.jpeg", caption: "Coordination meeting" },
  { id: "team-07", src: "/images/team/team-07.jpeg", caption: "Team meeting" },
  { id: "team-08", src: "/images/team/team-08.jpeg", caption: "Team meeting" },
  { id: "team-09", src: "/images/team/team-09.jpeg", caption: "Volunteer coordination" },
  { id: "team-10", src: "/images/team/team-10.jpeg", caption: "Community outreach event" },
  { id: "team-11", src: "/images/team/team-11.jpeg", caption: "Community engagement session" },
  { id: "team-12", src: "/images/team/team-12.jpeg", caption: "Meeting with community leaders" },
  { id: "team-13", src: "/images/team/team-13.jpeg", caption: "Team gathering" },
  { id: "team-15", src: "/images/team/team-15.jpeg", caption: "Recognition and awards event" },
  { id: "team-16", src: "/images/team/team-16.jpeg", caption: "Courtesy visit to a community leader" },
  { id: "team-17", src: "/images/team/team-17.jpeg", caption: "Courtesy visit to a community leader" },
  { id: "team-18", src: "/images/team/team-18.jpeg", caption: "At a public event" },
  { id: "team-19", src: "/images/team/team-19.jpeg", caption: "Team engagement" },
];

// Real video clips, supplied directly by the organization.
export const videoClips = [
  { id: "clip-01", src: "/videos/campaign-clip-01.mp4", caption: "Field footage" },
  { id: "clip-02", src: "/videos/campaign-clip-02.mp4", caption: "Field footage" },
  { id: "clip-03", src: "/videos/campaign-clip-03.mp4", caption: "Field footage" },
];
