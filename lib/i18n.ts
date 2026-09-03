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
  github: { kicker: string; heading: string };
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
    sub: "Computer Engineering graduate from Chulalongkorn University. Most recently a contract software developer at Agoda, working on their large-scale frontend monorepo. I build fast, accessible web apps with React, Next.js and TypeScript.",
    status: "Open to software engineer / frontend roles",
    copyEmail: "Copy email",
    copied: "Copied!",
    emailToast: "Email copied to clipboard",
    resume: "Résumé",
  },
  about: {
    kicker: "about",
    heading: "A bit about me",
    paragraphs: [
      "I'm a Computer Engineering graduate from Chulalongkorn University with a strong interest in technology and software development. My focus is full-stack web development — turning ideas into products that are fast, accessible and pleasant to use.",
      "Most recently I was a contract software developer at Agoda, working on the frontend monorepo — CI/CD, tooling, testing and deployment strategy, and developer experience for the 10+ teams building on it. Earlier, during my internship at Gosoft (Thailand), I contributed to production software in the online unit under CPALL. Across coursework and personal projects I've worked with JavaScript, TypeScript, Python, SQL, C and C++, plus frameworks and tooling around the React ecosystem.",
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
      Tools: "Tools",
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
          "Help maintain and evolve the company's frontend monorepo — CI/CD pipeline health, monorepo structure and tooling, integration testing strategy, deployment strategy, and developer experience for the 10+ teams building on a large-scale frontend monorepo.",
        date: "Aug 2025 – Aug 2026",
      },
      {
        title: "Software Engineer Intern",
        location: "Gosoft (Thailand) Co., Ltd. — Online Unit (CPALL)",
        description:
          "Summer internship on the online unit. Worked alongside the engineering team on internal web tooling and feature work.",
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
        date: "Graduated 2024",
      },
    ],
  },
  github: { kicker: "live", heading: "GitHub activity" },
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
    sub: "บัณฑิตวิศวกรรมคอมพิวเตอร์ จุฬาลงกรณ์มหาวิทยาลัย ล่าสุดทำงานเป็น Contract Software Developer ที่ Agoda ดูแล frontend monorepo ขนาดใหญ่ของบริษัท ผมสร้างเว็บแอปที่เร็ว เข้าถึงง่าย ด้วย React, Next.js และ TypeScript",
    status: "กำลังมองหาโอกาสงานสาย Software Engineer / Frontend",
    copyEmail: "คัดลอกอีเมล",
    copied: "คัดลอกแล้ว!",
    emailToast: "คัดลอกอีเมลแล้ว",
    resume: "เรซูเม่",
  },
  about: {
    kicker: "เกี่ยวกับ",
    heading: "เกี่ยวกับผม",
    paragraphs: [
      "ผมเป็นบัณฑิตวิศวกรรมคอมพิวเตอร์ จากจุฬาลงกรณ์มหาวิทยาลัย ที่สนใจด้านเทคโนโลยีและการพัฒนาซอฟต์แวร์เป็นอย่างมาก ผมโฟกัสที่การพัฒนาเว็บแบบ full-stack เปลี่ยนไอเดียให้กลายเป็นผลิตภัณฑ์ที่เร็ว เข้าถึงง่าย และใช้งานได้อย่างลื่นไหล",
      "ล่าสุดผมทำงานเป็น Contract Software Developer ที่ Agoda ดูแล frontend monorepo ทั้งเรื่อง CI/CD, เครื่องมือ, กลยุทธ์การทดสอบและการ deploy รวมถึง developer experience สำหรับทีมกว่า 10 ทีมที่พัฒนาอยู่บนนั้น ก่อนหน้านั้นระหว่างฝึกงานที่ Gosoft (Thailand) ผมได้มีส่วนร่วมพัฒนาซอฟต์แวร์ที่ใช้งานจริงในหน่วยออนไลน์ภายใต้ CPALL นอกจากนี้จากการเรียนและโปรเจกต์ส่วนตัว ผมได้ใช้ JavaScript, TypeScript, Python, SQL, C และ C++ รวมถึงเฟรมเวิร์กและเครื่องมือรอบ ๆ React ecosystem",
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
      Tools: "เครื่องมือ",
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
          "ช่วยดูแลและพัฒนา frontend monorepo ของบริษัท ทั้งความเสถียรของ CI/CD pipeline, โครงสร้างและเครื่องมือของ monorepo, กลยุทธ์การทำ integration testing, กลยุทธ์การ deploy และ developer experience สำหรับทีมกว่า 10 ทีมที่พัฒนาอยู่บน frontend monorepo ขนาดใหญ่",
        date: "ส.ค. 2025 – ส.ค. 2026",
      },
      {
        title: "Software Engineer Intern",
        location: "Gosoft (Thailand) Co., Ltd. — หน่วยออนไลน์ (CPALL)",
        description:
          "ฝึกงานภาคฤดูร้อนกับหน่วยออนไลน์ ทำงานร่วมกับทีมวิศวกรรมด้านเครื่องมือเว็บภายในและการพัฒนาฟีเจอร์",
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
        date: "จบการศึกษา 2024",
      },
    ],
  },
  github: { kicker: "live", heading: "GitHub activity" },
  footer: {
    backToTop: "กลับขึ้นด้านบน",
    builtWith:
      "สร้างด้วย Next.js, TypeScript, Tailwind CSS และ Framer Motion · Deploy บน Vercel",
  },
};

export const translations: Record<Locale, Dictionary> = { en, th };
