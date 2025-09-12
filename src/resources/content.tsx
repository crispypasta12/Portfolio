import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Syed Raqueed",
  lastName: "Bin Alvee",
  name: "Syed Raqueed Bin Alvee",
  role: "Electrical & Embedded Systems Engineer (Firmware)",
  avatar: "/images/avatar.webp",
  email: "raqueed@outlook.com",
  location: "America/Chicago",
  languages: ["English", "Bangla"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}&apos;s Updates</>,
  description: <>Occasional notes on firmware, IoT, and secure devices</>,
};

const social: Social = [
  { name: "GitHub", icon: "github", link: "https://github.com/raqueed" },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/raqueed-alvee-270b541a5/",
  },
  { name: "Email", icon: "email", link: `mailto:${person.email}` },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio showcasing firmware, embedded systems, and secure IoT projects by ${person.name}`,
  headline: <>Firmware that scales from board to cloud</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Connected Tools</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      I’m {person.firstName.split(" ")[0]}, a firmware/embedded engineer at
      Milwaukee Tool Chicago, building production-ready firmware, device↔cloud
      protocols, and automated testing for connected products. Prior research
      explored AI-driven security for industrial systems.
    </>
  ),

  spotlights: [
    {
      icon: "cpu",
      title: "Embedded Focus",
      description: <>STM32 · FreeRTOS · Drivers · Power</>,
    },
    {
      icon: "bluetooth",
      title: "Connectivity",
      description: <>BLE · Cellular · Wi-Fi · MQTT/HTTP</>,
    },
    {
      icon: "beaker",
      title: "Validation",
      description: <>PyTest · Jenkins · HIL & lab rigs</>,
    },
  ],

  tech: {
    display: true,
    sections: [
      {
        title: "Embedded Firmware",
        description: (
          <>HAL/LL, interrupt-safe drivers, state machines, OTA flows.</>
        ),
        tags: [
          { name: "C", icon: "c" },
          { name: "C++", icon: "cplusplus" },
          { name: "STM32", icon: "stmicro" },
          { name: "FreeRTOS", icon: "cpu" },
        ],
      },
      {
        title: "Connectivity & Protocols",
        description: (
          <>
            BLE, Cellular, Wi-Fi, GPS/GNSS; MQTT/HTTP/CoAP; secure provisioning.
          </>
        ),
        tags: [
          { name: "BLE", icon: "bluetooth" },
          { name: "MQTT", icon: "mqtt" },
          { name: "HTTP", icon: "globe" },
          { name: "GNSS", icon: "mapPin" },
        ],
      },
      {
        title: "Device↔Cloud & Observability",
        description: (
          <>
            AWS IoT Core, signed URLs, fleet registry/monitoring, telemetry
            pipelines.
          </>
        ),
        tags: [
          { name: "AWS", icon: "aws" },
          { name: "Azure (ADO)", icon: "azure" },
          { name: "Athena", icon: "database" },
        ],
      },
      {
        title: "Test Automation & HIL",
        description: (
          <>PyTest/GoogleTest, Jenkins CI; power analysis & GNSS simulation.</>
        ),
        tags: [
          { name: "PyTest", icon: "pytest" },
          { name: "GoogleTest", icon: "beaker" },
          { name: "Jenkins", icon: "jenkins" },
          { name: "ADO", icon: "azure" },
        ],
      },
    ],
  },

  process: {
    display: true,
    steps: [
      {
        icon: "sparkles",
        title: "Discover",
        description: (
          <>Clarify constraints, HW interfaces, and safety states.</>
        ),
      },
      {
        icon: "boxes",
        title: "Prototype",
        description: <>Spike drivers & comms; validate on HIL rigs.</>,
      },
      {
        icon: "rocket",
        title: "Ship",
        description: <>Harden paths, OTA, observability; release candidates.</>,
      },
      {
        icon: "chartUp",
        title: "Measure",
        description: <>Collect telemetry, regressions, and iterate quickly.</>,
      },
    ],
  },

  publications: {
    display: true,
    items: [
      {
        title:
          "On-Body Humidity Sensing Antenna with Polyimide for BAN Applications over 5G Networks",
        venue: "IEEE IEMTRONICS",
        year: "2020",
        link: "https://ieeexplore.ieee.org/document/9216331",
        scholar:
          "https://scholar.google.com/scholar?q=On-Body%20Humidity%20Sensing%20Antenna%20with%20Polyimide%20for%20BAN%20Applications%20over%205G%20Networks",
        citations: 7,
      },
      {
        title:
          "Advanced Persistent Threat (APT)-style attack modeling and testbed for power transformer diagnosis system in a substation",
        venue: "IEEE PES ISGT",
        year: "2022",
        link: "https://scholar.google.com/scholar?q=Advanced%20Persistent%20Threat%20(APT)-style%20attack%20modeling%20and%20testbed%20for%20power%20transformer%20diagnosis%20system%20in%20a%20substation",
        scholar:
          "https://scholar.google.com/scholar?q=Advanced%20Persistent%20Threat%20(APT)-style%20attack%20modeling%20and%20testbed%20for%20power%20transformer%20diagnosis%20system%20in%20a%20substation",
        citations: 10,
      },
      {
        title:
          "Device-centric firmware malware detection for smart inverters using deep transfer learning",
        venue: "IEEE DMC",
        year: "2022",
        link: "https://scholar.google.com/scholar?q=Device-centric%20firmware%20malware%20detection%20for%20smart%20inverters%20using%20deep%20transfer%20learning",
        scholar:
          "https://scholar.google.com/scholar?q=Device-centric%20firmware%20malware%20detection%20for%20smart%20inverters%20using%20deep%20transfer%20learning",
        citations: 10,
      },
      {
        title:
          "Ransomware attack modeling and AI-based ransomware detection for digital substations",
        venue: "IEEE eGRID",
        year: "2021",
        link: "https://scholar.google.com/scholar?q=Ransomware%20attack%20modeling%20and%20AI-based%20ransomware%20detection%20for%20digital%20substations",
        scholar:
          "https://scholar.google.com/scholar?q=Ransomware%20attack%20modeling%20and%20AI-based%20ransomware%20detection%20for%20digital%20substations",
        citations: 38,
      },
      {
        title: "Ransomware security threat modeling for photovoltaic systems",
        venue: "IEEE eGRID",
        year: "2021",
        link: "https://scholar.google.com/scholar?q=Ransomware%20security%20threat%20modeling%20for%20photovoltaic%20systems",
        scholar:
          "https://scholar.google.com/scholar?q=Ransomware%20security%20threat%20modeling%20for%20photovoltaic%20systems",
        citations: 11,
      },
    ],
  },

  contact: {
    display: true,
    title: <>Have a device that needs secure, reliable firmware?</>,
    ctaLabel: "Get in touch",
    ctaHref: "mailto:raqueed@outlook.com",
  },
};

const homeHighlights = [
  {
    title: "Connected Tools Platform",
    blurb:
      "Fleet-aware firmware + secure device↔cloud patterns (BLE/Cellular/Wi-Fi, MQTT/HTTPS).",
    src: "/images/home/highlight-connected-tools.png",
    alt: "Connected tools platform dashboard and IoT-enabled devices",
    href: "/work",
  },
  {
    title: "HIL & Validation",
    blurb:
      "PyTest + Jenkins + HIL rigs to scale regression for GNSS, power behavior and OTA.",
    src: "/images/home/highlight-hil-bench.png",
    alt: "Hardware-in-the-loop test bench with instruments and power analyzer",
    href: "/work",
  },
  {
    title: "Field Telemetry",
    blurb:
      "Signed URLs, structured logs, and Athena queries to observe devices in the wild.",
    src: "/images/home/highlight-field-telemetry.webp",
    alt: "Field telemetry heatmap and log visualizations",
    href: "/work",
  },
  {
    title: "Firmware Craft",
    blurb:
      "STM32 drivers, FreeRTOS, power modes and robust watchdogs that ship.",
    src: "/images/home/highlight-firmware-lab.png",
    alt: "STM32 dev board on lab bench with probes attached",
    href: "/work",
  },
] as const;

const homeTestimonials = [
  {
    quote:
      "Raqueed’s firmware landed cleanly in production—robust drivers, clear state machines, and logs that made fleet issues debuggable.",
    name: "Srinivas K.",
    role: "Sr. Platform Architect",
    avatar: "/images/home/testimonial1.jpg",
  },
  {
    quote:
      "He built a pragmatic OTA + telemetry pipeline end-to-end. Our field teams finally had real signal instead of guesswork.",
    name: "Amy L.",
    role: "Product Manager, Connected Tools",
    avatar: "/images/home/testimonial2.jpg",
  },
  {
    quote:
      "Brought discipline to validation with PyTest + HIL rigs. Regression coverage improved—and so did our sleep.",
    name: "Dave R.",
    role: "Validation Lead",
    avatar: "/images/home/testimonial3.jpg",
  },
  {
    quote:
      "Solid communicator who moves features from bench to fleet with observability in place.",
    name: "Anita P.",
    role: "Firmware Manager",
    avatar: "/images/home/testimonial4.jpg",
  },
] as const;

const homeHobbies = [
  {
    title: "Music",
    slug: "music",
    caption: "Guitar + lo-fi jams.",
    src: "/images/home/hobby-music.jpg",
  },
  {
    title: "Photography",
    slug: "photography",
    caption: "Light, lines & details.",
    src: "/images/home/hobby-photography.jpg",
  },
  {
    title: "Traveling",
    slug: "traveling",
    caption: "New cities, new coffee.",
    src: "/images/home/hobby-traveling.jpg",
  },
  {
    title: "Gaming",
    slug: "gaming",
    caption: "Strategy & chill co-ops.",
    src: "/images/home/hobby-gaming.jpg",
  },
  {
    title: "Guitar Rig",
    slug: "guitar-rig",
    caption: "Pedals, tone and practice.",
    src: "/images/home/hobby-guitter.jpg", 
  },
] as const;

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} based in ${person.location}`,
  tableOfContent: { display: true, subItems: false },
  avatar: { display: true },
  calendar: { display: false, link: "" },

  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.firstName} is a Chicago-based firmware engineer focused on
        embedded systems and secure IoT. He ships resilient device software
        (STM32, FreeRTOS, BLE/Cellular/Wi-Fi), implements OTA and telemetry
        pipelines, and builds automated validation (PyTest/Jenkins/HIL). His
        prior research explored AI-driven threat detection and cyber-physical
        testbeds for critical power systems.
      </>
    ),
  },

  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Milwaukee Tool",
        timeframe: "Jan 2024 – Present",
        role: "Electrical Engineer II · Platform IoT",
        logo: "/images/about/work_milwaukee.webp",
        achievements: [
          <>
            Built and scaled firmware and automated validation across
            BLE/Cellular/Wi-Fi, from device comms to secure cloud integration.
          </>,
          <>
            Implemented OTA and device→cloud patterns (MQTT/HTTPS) with
            credential hygiene and fleet considerations.
          </>,
          <>
            Established PyTest-based regression fixtures; expanded coverage
            across BLE, Wi-Fi, Cellular, GPS/GNSS.
          </>,
        ],
      },
      {
        company: "Milwaukee Tool",
        timeframe: "Jun 2022 – Dec 2023",
        role: "Electrical Engineer I · Platform IoT",
        logo: "/images/about/work_milwaukee.webp",
        achievements: [
          <>
            Shipped FW features (BLE advertisement patterns, watchdog, ADC,
            power-manager state machine, UART) on STM32/Silabs.
          </>,
          <>
            Led debugging, validation/DTP, and introduced unit testing with
            GoogleTest.
          </>,
          <>
            Prototyped MQTT+GPS on Quectel modules and delivered an AWS-backed
            Python GUI for field monitoring.
          </>,
        ],
        images: [],
      },
      {
        company: "Texas A&M University – Kingsville",
        timeframe: "May 2021 – Jun 2022",
        role: "Graduate Research Assistant · Cyber-Physical Power & Energy Lab",
        logo: "/images/about/work_A_and_M.webp",
        achievements: [
          <>
            Cybersecurity + ML research for DOE/SETO and KERI projects (HIL
            testbeds, APT models, ransomware detection).
          </>,
          <>
            Deep transfer learning for firmware malware detection in smart
            inverters.
          </>,
        ],
        images: [],
      },
      {
        company: "Texas A&M University – Kingsville",
        timeframe: "Jan 2021 – May 2021",
        role: "Graduate Teaching Assistant · DSP & Speech Processing",
        logo: "/images/about/work_A_and_M.webp",
        achievements: [
          <>
            Designed labs and rubrics; supported students with practical DSP
            implementations.
          </>,
        ],
        images: [],
      },
    ],
  },

  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "American International University–Bangladesh (AIUB)",
        logo: "/images/about/studies_aiub.webp",
        thesis:
          "Thesis: On-body humidity sensing antenna with polyimide for BAN applications over 5G networks",
        description: (
          <>
            Bachelor of Science (B.S.), Electrical & Electronics Engineering,{" "}
            <strong>2016–2020</strong>.
          </>
        ),
      },
      {
        name: "Texas A&M University – Kingsville",
        logo: "/images/about/studies_A_and_M.webp",
        thesis:
          "Thesis: Study on Artificial Intelligence-Based Ransomware Detection for Digital Substations",
        description: (
          <>
            Master of Science (M.S.), Electrical & Electronics Engineering,{" "}
            <strong>2020–2022</strong>.
          </>
        ),
      },
    ],
  },

  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Embedded Firmware",
        description: (
          <>
            STM32 (HAL/LL), FreeRTOS, drivers (UART/DMA), power management, OTA
            flows.
          </>
        ),
        tags: [
          { name: "C", icon: "c" },
          { name: "C++", icon: "cplusplus" },
          { name: "STM32", icon: "stmicro" },
          { name: "FreeRTOS", icon: "cpu" },
        ],
        images: [],
      },
      {
        title: "Connectivity & Protocols",
        description: (
          <>
            BLE, Cellular (Quectel), Wi-Fi; MQTT/HTTP/CoAP; GPS/GNSS integration
            and logging.
          </>
        ),
        tags: [
          { name: "BLE", icon: "bluetooth" },
          { name: "MQTT", icon: "mqtt" },
          { name: "HTTP", icon: "globe" },
          { name: "CoAP", icon: "globe" },
        ],
        images: [],
      },
      {
        title: "Device↔Cloud & Observability",
        description: (
          <>
            AWS IoT Core, Athena queries, signed URLs, telemetry pipelines,
            fleet registry/monitoring.
          </>
        ),
        tags: [
          { name: "AWS", icon: "aws" },
          { name: "Azure (ADO)", icon: "azure" },
        ],
        images: [],
      },
      {
        title: "Test Automation & HIL",
        description: (
          <>
            PyTest, GoogleTest, Jenkins CI, Azure DevOps; Keysight N6705C power
            analysis; R&S GNSS simulation.
          </>
        ),
        tags: [
          { name: "PyTest", icon: "pytest" },
          { name: "GoogleTest", icon: "beaker" },
          { name: "Jenkins", icon: "jenkins" },
          { name: "ADO", icon: "azure" },
        ],
        images: [],
      },
      {
        title: "Python, MATLAB, ML",
        description: (
          <>
            Tooling, data analysis/visualization, model-based prototyping;
            applied ML for security research.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "MATLAB", icon: "mathworks" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Notes on firmware, IoT & testing",
  description: `What ${person.name} has been exploring lately`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Selected firmware, connectivity, and test automation projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  groups: [
  {
    location: "Chicago",
    images: [
      { src: "/images/gallery/USA/Chicago/DSCF1562.avif", alt: "Chicago — DSCF1562" },
      { src: "/images/gallery/USA/Chicago/DSCF1631.avif", alt: "Chicago — DSCF1631" },
      { src: "/images/gallery/USA/Chicago/DSCF1714.avif", alt: "Chicago — DSCF1714" },
      { src: "/images/gallery/USA/Chicago/DSCF1720.avif", alt: "Chicago — DSCF1720" },
      { src: "/images/gallery/USA/Chicago/DSCF3024.avif", alt: "Chicago — DSCF3024" },
      { src: "/images/gallery/USA/Chicago/DSCF3797.avif", alt: "Chicago — DSCF3797" },
      { src: "/images/gallery/USA/Chicago/DSCF5513.avif", alt: "Chicago — DSCF5513" },
      { src: "/images/gallery/USA/Chicago/DSCF5565.avif", alt: "Chicago — DSCF5565" },
      { src: "/images/gallery/USA/Chicago/DSCF5656.avif", alt: "Chicago — DSCF5656" },
      { src: "/images/gallery/USA/Chicago/DSCF5660.avif", alt: "Chicago — DSCF5660" },
      { src: "/images/gallery/USA/Chicago/DSCF5707.avif", alt: "Chicago — DSCF5707" },
      { src: "/images/gallery/USA/Chicago/DSCF5843.avif", alt: "Chicago — DSCF5843" },
    ],
  },
  {
    location: "Indiana",
    images: [
      { src: "/images/gallery/USA/Indiana/DSCF1424.avif", alt: "Indiana — DSCF1424" },
      { src: "/images/gallery/USA/Indiana/DSCF1434.avif", alt: "Indiana — DSCF1434" },
      { src: "/images/gallery/USA/Indiana/DSCF1440.avif", alt: "Indiana — DSCF1440" },
      { src: "/images/gallery/USA/Indiana/DSCF1441.avif", alt: "Indiana — DSCF1441" },
    ],
  },
  {
    location: "Michigan",
    images: [
      { src: "/images/gallery/USA/Michigan/DSCF0107.avif", alt: "Michigan — DSCF0107" },
      { src: "/images/gallery/USA/Michigan/DSCF0130.avif", alt: "Michigan — DSCF0130" },
    ],
  },
  {
    location: "Minnesota",
    images: [
      { src: "/images/gallery/USA/Minnesota/DSCF1970.avif", alt: "Minnesota — DSCF1970" },
      { src: "/images/gallery/USA/Minnesota/DSCF1835.avif", alt: "Minnesota — DSCF1835" },
      { src: "/images/gallery/USA/Minnesota/DSCF1842.avif", alt: "Minnesota — DSCF1842" },
      { src: "/images/gallery/USA/Minnesota/DSCF1865.avif", alt: "Minnesota — DSCF1865" },
    ],
  },
  {
    location: "New York",
    images: [
      { src: "/images/gallery/USA/New York/DSCF2088.avif", alt: "New York — DSCF2088" },
      { src: "/images/gallery/USA/New York/DSCF2090.avif", alt: "New York — DSCF2090" },
      { src: "/images/gallery/USA/New York/DSCF2092.avif", alt: "New York — DSCF2092" },
      { src: "/images/gallery/USA/New York/DSCF2095.avif", alt: "New York — DSCF2095" },
      { src: "/images/gallery/USA/New York/DSCF2145.avif", alt: "New York — DSCF2145" },
    ],
  },
  {
    location: "Ohio",
    images: [
      { src: "/images/gallery/USA/Ohio/DSCF3254.avif", alt: "Ohio — DSCF3254" },
      { src: "/images/gallery/USA/Ohio/DSCF3262.avif", alt: "Ohio — DSCF3262" },
      { src: "/images/gallery/USA/Ohio/DSCF3263.avif", alt: "Ohio — DSCF3263" },
      { src: "/images/gallery/USA/Ohio/DSCF3273.avif", alt: "Ohio — DSCF3273" },
      { src: "/images/gallery/USA/Ohio/DSCF3344.avif", alt: "Ohio — DSCF3344" },
    ],
  },
  {
    location: "Tennesse",
    images: [
      { src: "/images/gallery/USA/Tennesse/DSCF4596.avif", alt: "Tennesse — DSCF4596" },
      { src: "/images/gallery/USA/Tennesse/DSCF4725.avif", alt: "Tennesse — DSCF4725" },
      { src: "/images/gallery/USA/Tennesse/DSCF4775.avif", alt: "Tennesse — DSCF4775" },
      { src: "/images/gallery/USA/Tennesse/DSCF4817.avif", alt: "Tennesse — DSCF4817" },
      { src: "/images/gallery/USA/Tennesse/DSCF4910.avif", alt: "Tennesse — DSCF4910" },
      { src: "/images/gallery/USA/Tennesse/DSCF4943.avif", alt: "Tennesse — DSCF4943" },
      { src: "/images/gallery/USA/Tennesse/DSCF4959.avif", alt: "Tennesse — DSCF4959" },
      { src: "/images/gallery/USA/Tennesse/DSCF4975.avif", alt: "Tennesse — DSCF4975" },
      { src: "/images/gallery/USA/Tennesse/DSCF4983.avif", alt: "Tennesse — DSCF4983" },
      { src: "/images/gallery/USA/Tennesse/DSCF4986.avif", alt: "Tennesse — DSCF4986" },
      { src: "/images/gallery/USA/Tennesse/DSCF4988.avif", alt: "Tennesse — DSCF4988" },
    ],
  },
  {
    location: "Wisconsin",
    images: [
      { src: "/images/gallery/USA/Wisconsin/DSCF5098.avif", alt: "Wisconsin — DSCF5098" },
      { src: "/images/gallery/USA/Wisconsin/DSCF0842.avif", alt: "Wisconsin — DSCF0842" },
      { src: "/images/gallery/USA/Wisconsin/DSCF5061.avif", alt: "Wisconsin — DSCF5061" },
    ],
  },
]

};

export {
  person,
  social,
  newsletter,
  home,
  homeHighlights,
  homeTestimonials,
  homeHobbies,
  about,
  blog,
  work,
  gallery,
};
