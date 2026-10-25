export type Locale = "en" | "th";

export const locales: readonly Locale[] = ["en", "th"];

type TimelineEntry = {
  title: string;
  location: string;
  description: string;
  date: string;
};

type LabelValue = { label: string; value: string };

export type Dictionary = {
  nav: Record<
    "Home" | "About" | "Projects" | "Skills" | "Experience" | "Education" | "GitHub",
    string
  >;
  hero: {
    kicker: string;
    greeting: string;
    headline: string;
    sub: string;
    status: string;
    copyEmail: string;
    copied: string;
    emailToast: string;
    resume: string;
  };
  about: {
    kicker: string;
    heading: string;
    paragraphs: string[];
    quickFacts: LabelValue[];
  };
  highlights: LabelValue[];
  projects: {
    kicker: string;
    heading: string;
    featured: string;
    code: string;
    demo: string;
  };
  skills: {
    kicker: string;
    heading: string;
    categories: Record<string, string>;
  };
  experience: {
    kicker: string;
    heading: string;
    items: TimelineEntry[];
  };
  education: {
    kicker: string;
    heading: string;
    items: TimelineEntry[];
  };
  github: {
    kicker: string;
    heading: string;
    contributions: string;
    publicActivity: string;
    noDescription: string;
    graphErrorPrefix: string;
    viewOnGithub: string;
  };
  footer: { backToTop: string; builtWith: string };
};

const en: Dictionary = {
  nav: {
    Home: "Home",
    About: "About",
    Projects: "Projects",
    Skills: "Skills",
    Experience: "Experience",
    Education: "Education",
    GitHub: "GitHub",
  },
  hero: {
    kicker: "Computer Engineering · Bangkok, Thailand",
    greeting: "Hi, I'm",
    headline: "Full-stack web developer",
    sub: "Computer Engineering graduate from Chulalongkorn University. Most recently a contract software developer at Agoda, working on their large-scale frontend monorepo. I build fast, accessible web apps with React, Next.js, TypeScript and more.",
    status: "Open to software engineer / frontend roles",
    copyEmail: "Copy email",
    copied: "Copied!",
    emailToast: "Email copied to clipboard",
    resume: "Resume",
  },
  about: {
    kicker: "about",
    heading: "A bit about me",
    paragraphs: [
      "I'm a Computer Engineering graduate from Chulalongkorn University with a strong interest in technology and software development. My focus is full-stack web development — turning ideas into products that are fast, accessible and pleasant to use.",
      "Most recently I was a contract software developer at Agoda, working on the frontend monorepo — CI/CD, tooling, testing and deployment strategy, and developer experience for the 10+ teams building on it. Earlier, during my internship at Gosoft (Thailand), I contributed to production software in the online unit under CPALL. Across coursework and personal projects I've worked with TypeScript, JavaScript, Go, Dart, SQL, C and C++, plus the React and Flutter ecosystems.",
    ],
    quickFacts: [
      { label: "Location", value: "Bangkok, Thailand" },
      { label: "Education", value: "B.Eng. Computer Engineering, Chulalongkorn" },
      { label: "Focus", value: "Full-stack web · React / Next.js" },
      { label: "Status", value: "Open to work" },
    ],
  },
  highlights: [
    { label: "Currently", value: "Building side projects & studying system design" },
    { label: "Favourite stack", value: "Next.js · TypeScript · Tailwind · Postgres" },
    { label: "Also into", value: "Clean UI, DX tooling, and a good keyboard" },
  ],
  projects: {
    kicker: "work",
    heading: "Projects",
    featured: "featured",
    code: "Code",
    demo: "Live demo",
  },
  skills: {
    kicker: "stack",
    heading: "Skills & tools",
    categories: {
      Languages: "Languages",
      Frontend: "Frontend",
      Backend: "Backend",
      Databases: "Databases",
      "DevOps & Infra": "DevOps & Infra",
      Testing: "Testing",
    },
  },
  experience: {
    kicker: "career",
    heading: "Experience",
    items: [
      {
        title: "Contract Software Developer",
        location: "Agoda Company Pte. Ltd.",
        description:
          "Worked on the company's large-scale frontend monorepo used by 10+ product teams — CI/CD pipeline health, monorepo structure and build tooling, integration-testing and CI strategy for shared frontend code, and internal tooling that streamlined the local and CI developer experience.",
        date: "Aug 2025 – Aug 2026",
      },
      {
        title: "Software Engineer Intern",
        location: "Gosoft (Thailand) Co., Ltd. — Online Unit (CPALL)",
        description:
          "Summer internship on the online unit under CPALL. Designed and developed web application features on both front-end and back-end with the engineering team under an Agile workflow.",
        date: "Jun 2024 – Jul 2024",
      },
    ],
  },
  education: {
    kicker: "study",
    heading: "Education",
    items: [
      {
        title: "B.Eng. Computer Engineering",
        location: "Chulalongkorn University, Bangkok",
        description:
          "Coursework across data structures & algorithms, databases, operating systems, computer networks and software engineering.",
        date: "Graduated 2025",
      },
    ],
  },
  github: {
    kicker: "live",
    heading: "GitHub activity",
    contributions: "contributions in the last year",
    publicActivity: "public activity",
    noDescription: "No description",
    graphErrorPrefix: "Couldn't load the contribution graph right now — ",
    viewOnGithub: "view it on GitHub",
  },
  footer: {
    backToTop: "Back to top",
    builtWith:
      "Built with Next.js, TypeScript, Tailwind CSS & Framer Motion. Deployed on Vercel.",
  },
};

const th: Dictionary = {
  nav: {
    Home: "หน้าแรก",
    About: "เกี่ยวกับ",
    Projects: "ผลงาน",
    Skills: "ทักษะ",
    Experience: "ประสบการณ์",
    Education: "การศึกษา",
    GitHub: "GitHub",
  },
  hero: {
    kicker: "วิศวกรรมคอมพิวเตอร์ · กรุงเทพฯ ประเทศไทย",
    greeting: "สวัสดีครับ ผม",
    headline: "นักพัฒนาเว็บแบบ Full-stack",
    sub: "บัณฑิตจากคณะวิศวกรรมศาสตร์ ภาควิชาวิศวกรรมคอมพิวเตอร์ จุฬาลงกรณ์มหาวิทยาลัย ล่าสุดทำงานเป็น Contract Software Developer ที่ Agoda ดูแล frontend monorepo ขนาดใหญ่ของบริษัท ผมสร้างเว็บแอปที่เร็ว เข้าถึงง่าย ด้วย React, Next.js, TypeScript และเทคโนโลยีอื่น ๆ",
    status: "กำลังมองหาโอกาสงานสาย Software Engineer / Frontend",
    copyEmail: "คัดลอกอีเมล",
    copied: "คัดลอกแล้ว!",
    emailToast: "คัดลอกอีเมลแล้ว",
    resume: "Resume",
  },
  about: {
    kicker: "เกี่ยวกับ",
    heading: "เกี่ยวกับผม",
    paragraphs: [
      "ผมเป็นบัณฑิตวิศวกรรมคอมพิวเตอร์ จากจุฬาลงกรณ์มหาวิทยาลัย ที่สนใจด้านเทคโนโลยีและการพัฒนาซอฟต์แวร์เป็นอย่างมาก ผมโฟกัสที่การพัฒนาเว็บแบบ full-stack เปลี่ยนไอเดียให้กลายเป็นผลิตภัณฑ์ที่เร็ว เข้าถึงง่าย และใช้งานได้อย่างลื่นไหล",
      "ล่าสุดผมทำงานเป็น Contract Software Developer ที่ Agoda ดูแล frontend monorepo ทั้งเรื่อง CI/CD, เครื่องมือ, กลยุทธ์การทดสอบและการ deploy รวมถึง developer experience สำหรับทีมกว่า 10 ทีมที่พัฒนาอยู่บนนั้น ก่อนหน้านั้นระหว่างฝึกงานที่ Gosoft (Thailand) ผมได้มีส่วนร่วมพัฒนาซอฟต์แวร์ที่ใช้งานจริงในหน่วยออนไลน์ภายใต้ CPALL นอกจากนี้จากการเรียนและโปรเจกต์ส่วนตัว ผมได้ใช้ TypeScript, JavaScript, Go, Dart, SQL, C และ C++ รวมถึง ecosystem ของ React และ Flutter",
    ],
    quickFacts: [
      { label: "ที่อยู่", value: "กรุงเทพฯ ประเทศไทย" },
      { label: "การศึกษา", value: "วศ.บ. วิศวกรรมคอมพิวเตอร์ จุฬาฯ" },
      { label: "ความเชี่ยวชาญ", value: "เว็บ full-stack · React / Next.js" },
      { label: "สถานะ", value: "กำลังหางาน" },
    ],
  },
  highlights: [
    { label: "ตอนนี้", value: "ทำโปรเจกต์เสริมและศึกษาเรื่อง system design" },
    { label: "Stack ที่ชอบ", value: "Next.js · TypeScript · Tailwind · Postgres" },
    { label: "สนใจเรื่อง", value: "UI ที่สะอาดตา เครื่องมือ DX และคีย์บอร์ดดี ๆ" },
  ],
  projects: {
    kicker: "ผลงาน",
    heading: "ผลงาน",
    featured: "เด่น",
    code: "โค้ด",
    demo: "เดโมสด",
  },
  skills: {
    kicker: "เทคโนโลยี",
    heading: "ทักษะและเครื่องมือ",
    categories: {
      Languages: "ภาษาโปรแกรม",
      Frontend: "Frontend",
      Backend: "Backend",
      Databases: "ฐานข้อมูล",
      "DevOps & Infra": "DevOps & Infra",
      Testing: "การทดสอบ",
    },
  },
  experience: {
    kicker: "การทำงาน",
    heading: "ประสบการณ์",
    items: [
      {
        title: "Contract Software Developer",
        location: "Agoda Company Pte. Ltd.",
        description:
          "ทำงานกับ frontend monorepo ขนาดใหญ่ของบริษัทที่มีทีมพัฒนากว่า 10 ทีมใช้งาน — ดูแลความเสถียรของ CI/CD pipeline, โครงสร้างและเครื่องมือ build ของ monorepo, กลยุทธ์ integration testing และ CI สำหรับโค้ด frontend ที่ใช้ร่วมกัน รวมถึงสร้างเครื่องมือภายในที่ช่วยให้ developer experience ทั้งบนเครื่องและใน CI ราบรื่นขึ้น",
        date: "ส.ค. 2025 – ส.ค. 2026",
      },
      {
        title: "Software Engineer Intern",
        location: "Gosoft (Thailand) Co., Ltd. — หน่วยออนไลน์ (CPALL)",
        description:
          "ฝึกงานภาคฤดูร้อนกับหน่วยออนไลน์ภายใต้ CPALL ออกแบบและพัฒนาฟีเจอร์ของเว็บแอปพลิเคชันทั้งฝั่ง front-end และ back-end ร่วมกับทีมวิศวกรรมภายใต้กระบวนการแบบ Agile",
        date: "มิ.ย. 2024 – ก.ค. 2024",
      },
    ],
  },
  education: {
    kicker: "การศึกษา",
    heading: "การศึกษา",
    items: [
      {
        title: "วศ.บ. วิศวกรรมคอมพิวเตอร์",
        location: "จุฬาลงกรณ์มหาวิทยาลัย กรุงเทพฯ",
        description:
          "เรียนครอบคลุมทั้งโครงสร้างข้อมูลและอัลกอริทึม ฐานข้อมูล ระบบปฏิบัติการ เครือข่ายคอมพิวเตอร์ และวิศวกรรมซอฟต์แวร์",
        date: "จบการศึกษา 2025",
      },
    ],
  },
  github: {
    kicker: "live",
    heading: "GitHub activity",
    contributions: "การมีส่วนร่วมในปีที่ผ่านมา",
    publicActivity: "กิจกรรมสาธารณะบน GitHub",
    noDescription: "ไม่มีคำอธิบาย",
    graphErrorPrefix: "โหลดกราฟการมีส่วนร่วมไม่ได้ในขณะนี้ — ",
    viewOnGithub: "ดูบน GitHub",
  },
  footer: {
    backToTop: "กลับขึ้นด้านบน",
    builtWith:
      "สร้างด้วย Next.js, TypeScript, Tailwind CSS และ Framer Motion · Deploy บน Vercel",
  },
};

export const translations: Record<Locale, Dictionary> = { en, th };
