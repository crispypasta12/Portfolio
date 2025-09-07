import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Syed Raqueed",
  lastName: "Bin Alvee",
  name: "Syed Raqueed Bin Alvee",
  role: "Electrical & Embedded Systems Engineer (Firmware)",
  avatar: "/images/avatar.jpg",
  email: "raqueed@outlook.com",
  location: "America/Chicago",
  languages: ["English", "Bangla"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Updates</>,
  description: <>Occasional notes on firmware, IoT, and secure devices</>,
};

const social: Social = [
  { name: "GitHub", icon: "github", link: "https://github.com/raqueed" },
  { name: "LinkedIn", icon: "linkedin", link: "https://www.linkedin.com/in/raqueed-alvee-270b541a5/" },
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
        <Text marginRight="4" onBackground="brand-medium">Featured work</Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      I’m {person.firstName.split(" ")[0]}, a firmware/embedded engineer at Milwaukee Tool Chicago,
      building production-ready firmware, device↔cloud protocols, and automated testing for connected products.
      Prior research explored AI-driven security for industrial systems.
    </>
  ),

  /** New: small highlight cards */
  spotlights: [
    { icon: "cpu", title: "Embedded Focus", description: <>STM32 · FreeRTOS · Drivers · Power</> },
    { icon: "bluetooth", title: "Connectivity", description: <>BLE · Cellular · Wi-Fi · MQTT/HTTP</> },
    { icon: "beaker", title: "Validation", description: <>PyTest · Jenkins · HIL & lab rigs</> },
  ],

  /** New: Tech Stack & Capabilities (4) */
  tech: {
    display: true,
    sections: [
      {
        title: "Embedded Firmware",
        description: <>HAL/LL, interrupt-safe drivers, state machines, OTA flows.</>,
        tags: [
          { name: "C", icon: "c" },
          { name: "C++", icon: "cplusplus" },
          { name: "STM32", icon: "stmicro" },
          { name: "FreeRTOS", icon: "cpu" },
        ],
      },
      {
        title: "Connectivity & Protocols",
        description: <>BLE, Cellular, Wi-Fi, GPS/GNSS; MQTT/HTTP/CoAP; secure provisioning.</>,
        tags: [
          { name: "BLE", icon: "bluetooth" },
          { name: "MQTT", icon: "mqtt" },
          { name: "HTTP", icon: "globe" },
          { name: "GNSS", icon: "mapPin" },
        ],
      },
      {
        title: "Device↔Cloud & Observability",
        description: <>AWS IoT Core, signed URLs, fleet registry/monitoring, telemetry pipelines.</>,
        tags: [
          { name: "AWS", icon: "aws" },
          { name: "Azure (ADO)", icon: "azure" },
          { name: "Athena", icon: "database" },
        ],
      },
      {
        title: "Test Automation & HIL",
        description: <>PyTest/GoogleTest, Jenkins CI; power analysis & GNSS simulation.</>,
        tags: [
          { name: "PyTest", icon: "pytest" },
          { name: "GoogleTest", icon: "beaker" },
          { name: "Jenkins", icon: "jenkins" },
          { name: "ADO", icon: "azure" },
        ],
      },
    ],
  },

  /** New: Work Process (4 steps) */
  process: {
    display: true,
    steps: [
      { icon: "sparkles", title: "Discover", description: <>Clarify constraints, HW interfaces, and safety states.</> },
      { icon: "boxes", title: "Prototype", description: <>Spike drivers & comms; validate on HIL rigs.</> },
      { icon: "rocket", title: "Ship", description: <>Harden paths, OTA, observability; release candidates.</> },
      { icon: "chartUp", title: "Measure", description: <>Collect telemetry, regressions, and iterate quickly.</> },
    ],
  },

  /** New: Publications (links to public records) */
  publications: {
    display: true,
    items: [
      {
        title: "Device-Centric Firmware Malware Detection for Smart Inverters using Deep Transfer Learning",
        venue: "IEEE DMC",
        year: "2022",
        link: "https://www.researchgate.net/publication/364489901_Device-Centric_Firmware_Malware_Detection_for_Smart_Inverters_using_Deep_Transfer_Learning",
      },
      {
        title: "Digital Twin of an ANPC Inverter with Integrated Design-For-Trust",
        venue: "IEEE DMC",
        year: "2022",
        link: "https://www.proceedings.com/content/065/065764webtoc.pdf",
      },
    ],
  },

  /** Optional: Contact CTA */
  contact: {
    display: true,
    title: <>Have a device that needs secure, reliable firmware?</>,
    ctaLabel: "Get in touch",
    ctaHref: "mailto:raqueed@outlook.com",
  },
};

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
        {person.firstName} is a Chicago-based firmware engineer focused on embedded systems and secure IoT.
        He ships resilient device software (STM32, FreeRTOS, BLE/Cellular/Wi-Fi), implements OTA and telemetry pipelines,
        and builds automated validation (PyTest/Jenkins/HIL). His prior research explored AI-driven threat detection
        and cyber-physical testbeds for critical power systems.
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
        achievements: [
          <>Built and scaled firmware and automated validation across BLE/Cellular/Wi-Fi, from device comms to secure cloud integration.</>,
          <>Implemented OTA and device→cloud patterns (MQTT/HTTPS) with credential hygiene and fleet considerations.</>,
          <>Established PyTest-based regression fixtures; expanded coverage across BLE, Wi-Fi, Cellular, GPS/GNSS.</>,
        ],
        images: [{ src: "/images/projects/mke/cover-01.jpg", alt: "Connected tools platform", width: 16, height: 9 }],
      },
      {
        company: "Milwaukee Tool",
        timeframe: "Jun 2022 – Dec 2023",
        role: "Electrical Engineer I · Platform IoT",
        achievements: [
          <>Shipped FW features (BLE advertisement patterns, watchdog, ADC, power-manager state machine, UART) on STM32/Silabs.</>,
          <>Led debugging, validation/DTP, and introduced unit testing with GoogleTest.</>,
          <>Prototyped MQTT+GPS on Quectel modules and delivered an AWS-backed Python GUI for field monitoring.</>,
        ],
        images: [],
      },
      {
        company: "Texas A&M University – Kingsville",
        timeframe: "May 2021 – Jun 2022",
        role: "Graduate Research Assistant · Cyber-Physical Power & Energy Lab",
        achievements: [
          <>Cybersecurity + ML research for DOE/SETO and KERI projects (HIL testbeds, APT models, ransomware detection).</>,
          <>Deep transfer learning for firmware malware detection in smart inverters.</>,
        ],
        images: [],
      },
      {
        company: "Texas A&M University – Kingsville",
        timeframe: "Jan 2021 – May 2021",
        role: "Graduate Teaching Assistant · DSP & Speech Processing",
        achievements: [<>Designed labs and rubrics; supported students with practical DSP implementations.</>],
        images: [],
      },
    ],
  },

  studies: {
    display: true,
    title: "Studies",
    institutions: [{ name: "Texas A&M University – Kingsville", description: <>Graduate studies in Electrical/Computer Engineering.</> }],
  },

  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Embedded Firmware",
        description: <>STM32 (HAL/LL), FreeRTOS, drivers (UART/DMA), power management, OTA flows.</>,
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
        description: <>BLE, Cellular (Quectel), Wi-Fi; MQTT/HTTP/CoAP; GPS/GNSS integration and logging.</>,
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
        description: <>AWS IoT Core, Athena queries, signed URLs, telemetry pipelines, fleet registry/monitoring.</>,
        tags: [
          { name: "AWS", icon: "aws" },
          { name: "Azure (ADO)", icon: "azure" },
        ],
        images: [],
      },
      {
        title: "Test Automation & HIL",
        description: <>PyTest, GoogleTest, Jenkins CI, Azure DevOps; Keysight N6705C power analysis; R&S GNSS simulation.</>,
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
        description: <>Tooling, data analysis/visualization, model-based prototyping; applied ML for security research.</>,
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
  images: [
    { src: "/images/gallery/horizontal-1.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-1.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/horizontal-2.jpg", alt: "image", orientation: "horizontal" },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
