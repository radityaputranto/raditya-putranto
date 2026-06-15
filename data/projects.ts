export interface Project {
  id: string
  title: string
  slug: string
  description: string
  tech_stack: string[]
  thumbnail_url: string
  live_url: string | null
  is_featured: boolean
  content: string
  category?: string
  gallery?: string[]
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Cloudraya Panel V2",
    slug: "cloudraya-panel-v2",
    description: "Redesign and modern overhaul of the Cloudraya VPS web application panel, providing an enhanced user experience and modern UI.",
    tech_stack: ["Vue.js", "Nuxt", "Tailwind CSS", "TypeScript"],
    thumbnail_url: "/images/projects/cloudraya-v2.jpg",
    live_url: "https://panel.cloudraya.com",
    is_featured: true,
    content: `
      <h3 class="text-2xl font-display text-primary mb-4 mt-8">Project Overview</h3>
      <p class="text-on-surface-variant mb-6 leading-relaxed">A complete redesign of the Cloudraya VPS web application panel aiming to provide a highly intuitive, modern, and efficient user experience for managing cloud infrastructure.</p>
      
      <h3 class="text-2xl font-display text-primary mb-4 mt-8">Key Features</h3>
      <ul class="list-disc list-inside text-on-surface-variant mb-6 space-y-2">
        <li>Modernized dashboard with comprehensive resource monitoring.</li>
        <li>Streamlined virtual machine creation and management flows.</li>
        <li>Improved snapshot, storage, and networking configurations interface.</li>
        <li>Fully responsive design for seamless mobile and desktop access.</li>
      </ul>
      
      <h3 class="text-2xl font-display text-primary mb-4 mt-8">Role & Responsibilities</h3>
      <p class="text-on-surface-variant mb-6 leading-relaxed">Spearheaded the frontend redesign using modern frameworks, ensuring high performance, clean code architecture, and a highly polished UI/UX.</p>
    `,
    category: "Panel",
    gallery: [
      "/images/projects/cloudraya-v2-2.jpg",
      "/images/projects/cloudraya-v2-3.jpg"
    ]
  },
  {
    id: "2",
    title: "Cloudraya",
    slug: "cloudraya",
    description: "Main product VPS web application managed with over 1700++ users. Offers features such as create and manage VM, public IP, VM storage, snapshot, and custom OS.",
    tech_stack: ["Laravel", "Bootstrap 4", "jQuery"],
    thumbnail_url: "/images/projects/cloudraya.jpg",
    live_url: "https://cp.cloudraya.com/",
    is_featured: true,
    content: `
      <h3 class="text-2xl font-display text-primary mb-4 mt-8">Project Overview</h3>
      <p class="text-on-surface-variant mb-6 leading-relaxed">Cloudraya is the main product VPS web application from Wowrack, serving over 1700++ active users. It provides users with a comprehensive panel to manage virtual private clouds, virtual machines, and related resources.</p>
      
      <h3 class="text-2xl font-display text-primary mb-4 mt-8">Key Features</h3>
      <ul class="list-disc list-inside text-on-surface-variant mb-6 space-y-2">
        <li>Create and manage Virtual Machines.</li>
        <li>Resource management including public IPs, VM storage, snapshots, and custom OS.</li>
        <li>Microservices integration for DNS Bucket, AWS Cloud management, Acronis, and S3 Bucket.</li>
      </ul>
      
      <h3 class="text-2xl font-display text-primary mb-4 mt-8">Role & Responsibilities</h3>
      <p class="text-on-surface-variant mb-6 leading-relaxed">Developed the frontend web application using the Laravel and Vue.js framework. Actively researched system requirements from stakeholders, created and evaluated mockup designs, and successfully integrated the UI with provided backend APIs.</p>
    `,
    category: "Web App",
    gallery: []
  },
  {
    id: "3",
    title: "Neucloud Telkom Indonesia",
    slug: "neucloud-telkom",
    description: "White label application similar to Cloudraya but using the Telkom Indonesia brand for their internal employees and subsidiaries.",
    tech_stack: ["Laravel", "Bootstrap 4", "jQuery"],
    thumbnail_url: "/images/projects/neucloud.jpg",
    live_url: "https://portal.neucloud.id/",
    is_featured: true,
    content: `
      <h3 class="text-2xl font-display text-primary mb-4 mt-8">Project Overview</h3>
      <p class="text-on-surface-variant mb-6 leading-relaxed">A white-label cloud management application built exclusively for Telkom Indonesia and its subsidiaries. It utilizes the robust core of Cloudraya while featuring a customized brand identity tailored for Telkom.</p>
      
      <h3 class="text-2xl font-display text-primary mb-4 mt-8">Role & Responsibilities</h3>
      <p class="text-on-surface-variant mb-6 leading-relaxed">Created the white-label application and implemented a single codebase repository to manage multiple brand variants efficiently, ensuring high maintainability and clean code architecture.</p>
    `,
    gallery: []
  },
  {
    id: "4",
    title: "Wowrack Cloud (Seattle Cloud)",
    slug: "wowrack-cloud",
    description: "Cloud management application exclusive for United State customers of Wowrack US.",
    tech_stack: ["Laravel", "Bootstrap 4", "jQuery"],
    thumbnail_url: "/images/projects/wowrack.jpg",
    live_url: "https://cp.serverstadium.com/",
    is_featured: false,
    content: `
      <h3 class="text-2xl font-display text-primary mb-4 mt-8">Project Overview</h3>
      <p class="text-on-surface-variant mb-6 leading-relaxed">An exclusive cloud management panel designed for the US customer base of Wowrack Seattle. Similar to Cloudraya but customized to meet the specific compliance and feature needs of the US market.</p>
    `,
    gallery: []
  },
  {
    id: "5",
    title: "CK Mama Panel",
    slug: "ck-mama-panel",
    description: "Web application used for customers to order and pay for childbirth and baby care services from CKBidan (Malaysia).",
    tech_stack: ["Laravel", "Bootstrap 4", "jQuery"],
    thumbnail_url: "/images/projects/ckmama.jpg",
    live_url: "https://ckbidan.com/",
    is_featured: false,
    content: `
      <h3 class="text-2xl font-display text-primary mb-4 mt-8">Project Overview</h3>
      <p class="text-on-surface-variant mb-6 leading-relaxed">A specialized web application for CK BIDAN Sdn. Bhd. in Selangor, Malaysia. The application allows customers to browse, order, and securely pay for premium childbirth and baby care services.</p>
      
      <h3 class="text-2xl font-display text-primary mb-4 mt-8">Role & Responsibilities</h3>
      <p class="text-on-surface-variant mb-6 leading-relaxed">Developed the frontend web application using Bootstrap 4 and integrated it with a robust Laravel and Vue.js backend system.</p>
    `,
    gallery: []
  },
  {
    id: "6",
    title: "DJP Banten Landing Page",
    slug: "djp-banten",
    description: "Government landing page aimed to simplify and help citizens pay tax by showing step-by-step procedures.",
    tech_stack: ["HTML", "CSS", "Bootstrap 4"],
    thumbnail_url: "/images/projects/djp.jpg",
    live_url: null,
    is_featured: false,
    content: `
      <h3 class="text-2xl font-display text-primary mb-4 mt-8">Project Overview</h3>
      <p class="text-on-surface-variant mb-6 leading-relaxed">A dedicated landing page for Direktorat Jenderal Pajak (DJP) Banten. The project aims to simplify the tax payment process by providing citizens with clear, step-by-step procedures and prerequisites.</p>
      
      <h3 class="text-2xl font-display text-primary mb-4 mt-8">Role & Responsibilities</h3>
      <p class="text-on-surface-variant mb-6 leading-relaxed">Developed a fast, responsive, and accessible frontend landing page using the Bootstrap 4 framework and custom native CSS.</p>
    `,
    gallery: []
  },
  {
    id: "7",
    title: "Greenpeace Indonesia - Forest Fires Petition",
    slug: "greenpeace-petition",
    description: "Landing page for showing information, illustrations, and a petition regarding forest fire disasters in Indonesia.",
    tech_stack: ["HTML", "CSS", "jQuery", "GreenSock.js"],
    thumbnail_url: "/images/projects/greenpeace.jpg",
    live_url: null,
    is_featured: false,
    content: `
      <h3 class="text-2xl font-display text-primary mb-4 mt-8">Project Overview</h3>
      <p class="text-on-surface-variant mb-6 leading-relaxed">A high-impact landing page created for Greenpeace Indonesia to raise awareness about forest fire disasters. The page features rich illustrations, promotional content, and an active petition form.</p>
      
      <h3 class="text-2xl font-display text-primary mb-4 mt-8">Role & Responsibilities</h3>
      <p class="text-on-surface-variant mb-6 leading-relaxed">Developed the landing page utilizing native HTML, CSS, jQuery, and JavaScript. Leveraged the GreenSock.js library to create engaging animations and an immersive parallax scrolling effect.</p>
    `,
    gallery: []
  },
  {
    id: "8",
    title: "Employee Attendance Application",
    slug: "meeber-attendance",
    description: "Internal web-based application for monitoring employee attendance using data taken from fingerprint machines.",
    tech_stack: ["Laravel", "HTML", "CSS"],
    thumbnail_url: "/images/projects/meeber.jpg",
    live_url: null,
    is_featured: false,
    content: `
      <h3 class="text-2xl font-display text-primary mb-4 mt-8">Project Overview</h3>
      <p class="text-on-surface-variant mb-6 leading-relaxed">An internal web-based application developed for PT. Meeber Teknologi Indonesia to efficiently track and monitor employee attendance records synchronized from fingerprint attendance machines.</p>
      
      <h3 class="text-2xl font-display text-primary mb-4 mt-8">Role & Responsibilities</h3>
      <p class="text-on-surface-variant mb-6 leading-relaxed">Created the web-based application using the Laravel framework during my internship as a Front End Developer.</p>
    `,
    gallery: []
  },
  {
    id: "9",
    title: "Looprentice",
    slug: "looprentice",
    description: "Web application used to organize and provide information about a campaign for Looprentice ambassador participants.",
    tech_stack: ["HTML", "CSS", "Bootstrap 4", "PHP"],
    thumbnail_url: "/images/projects/looprentice.jpg",
    live_url: null,
    is_featured: false,
    content: `
      <h3 class="text-2xl font-display text-primary mb-4 mt-8">Project Overview</h3>
      <p class="text-on-surface-variant mb-6 leading-relaxed">A web-based campaign application created for PT. Telkomsel East Division. It served as the central hub to organize and disseminate information to participants of the Looprentice ambassador program.</p>
      
      <h3 class="text-2xl font-display text-primary mb-4 mt-8">Role & Responsibilities</h3>
      <p class="text-on-surface-variant mb-6 leading-relaxed">Developed the frontend web application utilizing HTML, CSS, and Bootstrap 4, and integrated the interface with a native PHP backend.</p>
    `,
    category: "Web App",
    gallery: []
  }
]
