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
    name: 'Handheld Navigation Device',
    description:
      'A compass-style haptic device to navigate the visually impaired.',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7355982974560935936/',
    media: './projects/advx.jpg',
    mediaType: 'image',
    id: 'project1',
  },
  {
    name: 'Robotics \'25',
    description:
      '3-DoF mechanical arm, 180° pivoting prop intake, and F-style climbing hook.',
    link: 'https://www.thebluealliance.com/team/6353/2024',
    media: './projects/frc25.jpg',
    mediaType: 'image',
    id: 'project2',
  },
  {
    name: 'Robotics \'24',
    description:
      'Coaxial ground prop intake and rack-and-pinion angle-adjustable shooter.',
    link: 'https://www.thebluealliance.com/team/6353/2024',
    media: './projects/frc24.jpg',
    mediaType: 'image',
    id: 'project3',
  },
  {
    name: 'Robotics \'23',
    description:
      '1-stage elevator and pneumatic intake.',
    link: 'https://www.thebluealliance.com/team/6353/2023',
    media: './projects/frc23.jpg',
    mediaType: 'image',
    id: 'project4',
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
    label: 'Instagram',
    link: 'https://www.instagram.com/richard.yliu',
  },
  {
    label: 'Unsplash',
    link: 'http://unsplash.com/@rstarg',
  },
]

export const EMAIL = 'richard.yongle.liu@gmail.com'
