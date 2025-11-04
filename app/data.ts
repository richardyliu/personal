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

type Essay = {
  title: string
  subtitle: string
  content: string
  date?: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

type Course = {
  acronym: string
  fullName: string
  credits: number
  status: 'enrolled' | 'audit'
  id: string
}

type Semester = {
  name: string
  year: string
  courses: Course[]
  id: string
}

export const PROJECTS: Project[] = [
  {
    name: 'DIY Go Kart',
    description:
      'Low budget go kart built with full suspension and 10km duration.',
    link: 'https://wiki.firstrobotics.com.cn/',
    media: './projects/go-kart.jpeg',
    mediaType: 'image',
    id: 'project11',
  },
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
    name: 'FRC Robotics \'25',
    description:
      '3-DoF mechanical arm, 180° pivoting prop intake, and F-style climbing hook.',
    link: 'https://www.thebluealliance.com/team/6353/2024',
    media: './projects/frc25.jpg',
    mediaType: 'image',
    id: 'project3',
  },
  {
    name: 'FRC Robotics \'24',
    description:
      'Coaxial ground prop intake and rack-and-pinion angle-adjustable shooter.',
    link: 'https://www.thebluealliance.com/team/6353/2024',
    media: './projects/frc24.jpg',
    mediaType: 'image',
    id: 'project4',
  },
  {
    name: 'FRC Robotics \'23',
    description: '1-stage elevator and pneumatic intake.',
    link: 'https://www.thebluealliance.com/team/6353/2023',
    media: './projects/frc23.jpg',
    mediaType: 'image',
    id: 'project5',
  },
  {
    name: 'High School 101',
    description:
      'Cheat sheet for skipping high school and ragebaiting teachers.',
    link: 'https://github.com/EFZ-GKB/EFZ-GKB-101',
    media: './projects/efz101.png',
    mediaType: 'image',
    id: 'project6',
  },

  {
    name: 'FRC Wikipedia',
    description:
      'Technical wiki for the Chinese FRC community.',
    link: 'https://wiki.firstrobotics.com.cn/',
    media: './projects/cnfrc.jpg',
    mediaType: 'image',
    id: 'project10',
  },
  {
    name: 'FRC Match Display',
    description:
      'Locally deployed web app for displaying match data during games.',
    link: 'https://frc-match-display.vercel.app/',
    media: './projects/frc-match-display.jpg',
    mediaType: 'image',
    id: 'project7',
  }
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
    name: 'FHL Vive Center for Enhanced Reality',
    position: 'Machine Learning & Full-Stack Researcher',
    place: 'University of California, Berkeley',
    logo: './logos/Vive-Center-Logo.webp',
    duration: 'Sep. 2025 - Present',
    id: 'lab0',
  },
  {
    name: 'Generalist Embodied AI Lab',
    position: 'Robotics Research Fellow',
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

export const ESSAYS: Essay[] = [
  {
    title: 'On Education',
    subtitle: 'Education, Individual Success or Failure, and Society',
    content: `Even children raised in the same household by the same parents still develop distinctly different personalities. These personalities may have their rough edges polished or be amplified by subsequent education and experience, but they will never fundamentally change throughout life. Even if students with drastically different personalities attend the same school and major, and even if their initial post-graduation career plans are identical, the vast majority of them will, years later, choose a career path best suited to their individual disposition.

To state this less abstractly, detailed personality classifications include the basic MBTI types, the desire for wealth (how much extra time and ambition one dedicates to pursuing more money, beyond a comfortable life), the craving for self-actualization (usually positively correlated with the desire for wealth), the pursuit of personal time (usually opposed to the desire for wealth), and varying definitions of one's social value, among others.

Typical examples include students who graduate from top-tier universities who initially choose high-paying but time-consuming work due to external pressure. Depending on their personality, some will aggressively advance their careers, consequently sacrificing their time and health; others will gradually retreat from the intense competition and instead aim for a better work-life balance. Similarly, for students who did not graduate from top-tier universities, the difference in their early careers compared to elite graduates is that even if some of them aspire to high-paying, time-consuming jobs, such positions are rare or closed off to them. Without the support of external resources like parents or friends, their initial career options will be more limited than those of elite graduates. However, in the long run, they, like the top university students, will subconsciously gravitate toward career choices that best align with their personalities. Regardless of whether one graduates from an elite university, everyone's long-term life and work status will ultimately reach equilibrium with their inherent personality.

Personality and salary are generally positively correlated. For instance, conventionally, individuals with a more diligent personality will see increased income compared to less diligent people due to longer working hours; similarly, ambitious individuals will experience a more volatile career than those who favor stability. However, with the advent of AI, the world's inherent chaos has further increased, giving rise to more factors that can influence salary and life status. Some people embrace risk, aggressively taking out loans, starting businesses, and seeking financing, but a general economic downturn will punish this group; conversely, others are content with serenity, enjoying the passage of time without much fervor, and may inadvertently avoid the disasters brought about by economic decline.

Therefore, an individual's success should not be overly celebrated, as it is a joint product of the era and the individual's personality; nor should an individual's failure be overly lamented, as it is likewise the result of both external circumstances and internal personal factors.

The greatest significance of education does not lie in deliberately twisting a personality to meet a single goal: gaining admission to an elite university. Rather, it is to allow the individual to understand their own personality during the educational process, provide sufficient points of reference so they can understand how their personality differs from others, and then, based on the current era, maximize the match between their personality and the world. As mentioned, no matter the external influences, an independent individual will ultimately choose the career path that feels most comfortable to them; some achieve this early in their careers, while others take a long, winding route to get there years later.

How can individuals most quickly come to understand their own personalities?

One way is through extensive reading. This can significantly improve language skills, allowing for greater information capture per unit of reading time, which aids in standardized tests. Secondly, it allows one to infinitely step into the lives of others. Whether it's fiction, non-fiction, or biography, the experiences of the same person may inspire deep admiration in some readers, while others may feel significantly less empathy. For example, Elon Musk's autobiography may excite and motivate adventurers, yet it may serve as a clear initial career path to avoid for conservative individuals.

A second way is through extensive travel. Literary works or magazines often overstate or understate the characteristics of certain countries and regions. Instead of looking through a filter of imagination, it is better to personally tread upon those lands, taste the local food, learn about the geography, and feel the dominant culture. Food, geography, climate, history, and culture are all highly intertwined. Through travel, one can build these connections in their own mind. Secondly, one can infinitely consider how these external environmental factors have altered the life trajectories of local residents. Factors such as mountains versus plains, cold versus tropical climates, political instability versus stability, or wealth versus poverty create entirely different common traits among people. By engaging in deep travel and communicating with locals, rather than merely superficial appreciation of the scenery or lamenting the ephemerality of life, individuals can more quickly understand what kind of life suits them best.

A third way is robust physical health. A pattern that rarely changes in the initial stages of study and work is that the more time you invest, the greater the return you receive. Good physical stamina can prolong the duration of focused energy, thereby ensuring a greater return during this phase. At the same time, even the most carefully planned educational and career paths may need to change, sometimes requiring a complete restart, due to external environments. It would be a great pity to be constrained by physical health at such a time. The robust physique developed in youth is the best bargaining chip when life requires a fresh start at any stage.

Education is not about cultivating "elite university harvesters," "money machines," "investment banking elites," or "startup backbones," but about nurturing individuals who can know who they are and what they want earlier in their brief lives. Subsequently, they will speak up, informing the outside world of the environment and support they desire.`,
    date: 'Oct. 10, 2025',
    id: 'on-education',
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

export const SEMESTERS: Semester[] = [
  {
    name: 'Fall',
    year: '2025',
    courses: [
      {
        acronym: 'COMPSCI 61A',
        fullName: 'The Structure and Interpretation of Computer Programs',
        credits: 4,
        status: 'enrolled',
        id: 'cs61a-f25',
      },
      {
        acronym: 'DATA C8',
        fullName: 'Foundations of Data Science',
        credits: 4,
        status: 'enrolled',
        id: 'data8-f25',
      },
      {
        acronym: 'LINGUIS 100',
        fullName: 'Introduction to Linguistic Science',
        credits: 4,
        status: 'enrolled',
        id: 'ling100-f25',
      },
      {
        acronym: 'NUSCTX 10',
        fullName: 'Introduction to Human Nutrition',
        credits: 3,
        status: 'enrolled',
        id: 'nst10-f25',
      },
      {
        acronym: 'INDENG 198',
        fullName: 'Directed Group Studies for Advanced Undergraduates',
        credits: 2,
        status: 'enrolled',
        id: 'indeng198-f25',
      },
      {
        acronym: 'POLSCI 5',
        fullName: 'Introduction to International Relations',
        credits: 4,
        status: 'audit',
        id: 'ps5-f25',
      },
    ],
    id: 'fall-2025',
  },
]