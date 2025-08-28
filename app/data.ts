type Project = {
  name: string
  description: string
  link: string
  media: string
  mediaType: 'image' | 'video'
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type Lab = {
  name: string
  position: string
  place: string
  logo: string
  duration: string
  description?: string
  link?: string
  id: string
}

type Work = {
  company: string
  position: string
  place: string
  logo: string
  duration: string
  description?: string
  link?: string
  id: string
}

type Book = {
  title: string
  author: string
  description?: string
  link?: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Multimoda Robot Interaction and Kinematics Appication',
    description:
      'A rover robot that interacts with user\'s voice command via an arm.',
    link: '',
    media: './projects/multimodal.jpg',
    mediaType: 'image',
    id: 'project1',
  },
  {
    name: 'Handheld Navigation Device',
    description:
      'A compass-style haptic device to navigate the visually impaired.',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7355982974560935936/',
    media: './projects/advx.jpg',
    mediaType: 'image',
    id: 'project2',
  },
  {
    name: 'Robotics \'25',
    description:
      '3-DoF mechanical arm, 180° pivoting prop intake, and F-style climbing hook.',
    link: 'https://www.thebluealliance.com/team/6353/2024',
    media: './projects/frc25.jpg',
    mediaType: 'image',
    id: 'project3',
  },
  {
    name: 'Robotics \'24',
    description:
      'Coaxial ground prop intake and rack-and-pinion angle-adjustable shooter.',
    link: 'https://www.thebluealliance.com/team/6353/2024',
    media: './projects/frc24.jpg',
    mediaType: 'image',
    id: 'project4',
  },
  {
    name: 'Robotics \'23',
    description:
      '1-stage elevator and pneumatic intake.',
    link: 'https://www.thebluealliance.com/team/6353/2023',
    media: './projects/frc23.jpg',
    mediaType: 'image',
    id: 'project5',
  },/*
  {
    name: 'High School AP Program 101',
    description:
      'Full intro to the high school life.',
    link: 'https://efz101.hsefz-gkb.space/',
    media: './projects/efz101.png',
    mediaType: 'image',
    id: 'project3',
  },*/
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'The AI-driven freelancing platform for hiring match.',
    title: 'PivotHire AI',
    start: 'May 2025',
    end: '',
    link: 'https://www.pivothire.tech/',
    id: 'work1',
  },
  {
    company: 'Something fun with wearable tech.',
    title: 'Stealth',
    start: '2025',
    end: '',
    link: '#',
    id: 'work2',
  },
]

export const LABS: Lab[] = [
  {
    name: 'Generalist Embodied AI Lab',
    position: 'Research Fellow',
    place: 'Tongji University',
    logo: './logos/tongji.svg',
    duration: 'Jul. 2025 - Aug. 2025',
    id: 'lab1',
  },
  {
    name: 'Department of Computer Science and Engineering',
    position: 'Researcher',
    place: 'Shanghai Jiao Tong University',
    logo: './logos/sjtu.png',
    duration: 'Nov. 2023 - May. 2024',
    id: 'lab2',
  },
  {
    name: 'Department of Political Science, Elliott School of International Affairs',
    position: 'Researcher',
    place: 'The George Washington University',
    logo: './logos/gwu.png',
    duration: 'Sep. 2023 - Apr. 2024',
    id: 'lab3',
  },
]

export const WORK: Work[] = [
  {
    company: 'PivotHire AI',
    position: 'Co-Founder & CTO',
    place: 'San Francisco, CA',
    logo: './logos/pivothire.svg',
    duration: 'May 2025 - Present',
    description: 'Building an AI-driven freelancing platform for hiring match.',
    link: 'https://www.pivothire.tech/',
    id: 'work1',
  },
  {
    company: 'Stealth Startup',
    position: 'Founder',
    place: 'Berkeley, CA',
    logo: './logos/stealth.svg',
    duration: '2025 - Present',
    description: 'Something fun with wearable tech.',
    link: '#',
    id: 'work2',
  },
  {
    company: 'Tech Innovation Lab',
    position: 'Software Engineer Intern',
    place: 'Mountain View, CA',
    logo: './logos/techlab.svg',
    duration: 'Summer 2024',
    description: 'Developed scalable backend systems and APIs.',
    id: 'work3',
  },
]

export const BOOKS: Book[] = [
  {
    title: 'One Man\'s View of the World',
    author: 'Lee Kuan Yew',
    id: 'book1',
  },
  {
    title: 'Endurance: Shackleton\'s Incredible Voyage',
    author: 'Alfred Lansing',
    id: 'book2',
  },
  {
    title: 'Nexus',
    author: 'Yuval Noah Harari',
    id: 'book3',
  },
  {
    title: 'My Country And My People',
    author: 'Lin Yutang',
    id: 'book4',
  },
  {
    title: 'The Worlds I See',
    author: 'Fei-Fei Li',
    id: 'book5',
  },
  {
    title: 'The Maniac',
    author: 'Benjamín	Labatut',
    id: 'book6',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  /*{
    label: 'Github',
    link: 'https://github.com/ibelick',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/ibelick',
  },*/
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/richard-yliu',
  },
  {
    label: 'Email',
    link: 'mailto:richard.yliu@berkeley.edu',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/richard.yliu',
  },
]