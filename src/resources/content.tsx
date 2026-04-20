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
  role: "Platform & Systems Engineer",
  avatar: "/images/avatar.webp",
  email: "raqueed@outlook.com",
  location: "Asia/Dhaka",
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
  {
    name: "Scholar",
    icon: "book",
    link: "https://scholar.google.com/citations?hl=en&user=tQTSPM0AAAAJ",
  },
  { name: "Email", icon: "email", link: `mailto:${person.email}` },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio showcasing edge-to-cloud platform engineering, IoT systems, and data infrastructure by ${person.name}`,
  headline: <>Platform engineering from silicon to cloud</>,
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
      I’m {person.firstName.split(" ")[0]}, a platform & systems engineer with
      4+ years building edge-to-cloud IoT infrastructure — from embedded firmware
      and device protocols to telemetry pipelines, cloud data systems, and
      automated validation. Prior research explored AI-driven security for
      industrial control systems.
    </>
  ),

  spotlights: [
    {
      icon: "cpu",
      title: "Embedded Systems",
      description: <>STM32 · FreeRTOS · BLE · Cellular · GPS</>,
    },
    {
      icon: "database",
      title: "Data & Telemetry",
      description: <>AWS Athena · MQTT · Python · Pipelines</>,
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
          "Ransomware Attack Modeling and Artificial Intelligence-Based Ransomware Detection for Digital Substations",
        authors:
          "S. R. B. Alvee, B. Ahn, T. Kim, Y. Su, Y. Youn, M. Ryu",
        authorIndex: 0,
        venue: "IEEE Workshop on the Electronic Grid (eGRID)",
        year: "2021",
        doi: "10.1109/eGRID52793.2021.9662158",
        link: "https://doi.org/10.1109/eGRID52793.2021.9662158",
        scholar:
          "https://scholar.google.com/scholar?q=Ransomware+Attack+Modeling+Artificial+Intelligence+Digital+Substations+Alvee",
        citations: 38,
        abstract:
          "Ransomware has become a serious threat to the current computing world, requiring immediate attention to prevent it. Ransomware attacks can also have disruptive impacts on operation of smart grids including digital substations. This paper provides a ransomware attack modeling method targeting disruptive operation of a digital substation and investigates an artificial intelligence (AI)-based ransomware detection approach. The proposed ransomware file detection model is designed by a convolutional neural network (CNN) using 2-D grayscale image files converted from binary files. The experimental results show that the proposed method achieves 96.22% of ransomware detection accuracy.",
        bibtexKey: "alvee2021ransomware",
      },
      {
        title:
          "Device-Centric Firmware Malware Detection for Smart Inverters using Deep Transfer Learning",
        authors:
          "S. R. B. Alvee, B. Ahn, S. Ahmad, K.-T. Kim, T. Kim, J. Zeng",
        authorIndex: 0,
        venue: "IEEE Design Methodologies Conference (DMC)",
        year: "2022",
        doi: "10.1109/DMC55175.2022.9906538",
        link: "https://doi.org/10.1109/DMC55175.2022.9906538",
        scholar:
          "https://scholar.google.com/scholar?q=Device-Centric+Firmware+Malware+Detection+Smart+Inverters+Deep+Transfer+Learning",
        citations: 10,
        abstract:
          "Since future power grids are inverter-dominant grids and inverters are getting smarter by incorporating remote access and seamless firmware update, it is anticipated that malware attackers will directly target smart inverters. However, malware threats targeting smart inverters have been less studied yet. This paper explores potential malware attacks targeting smart inverters and proposes a deep transfer-learning (DTL)-based malware detection framework for smart inverters. The proposed DTL method can significantly reduce development time and efforts for an artificial intelligence-based malware detection algorithm while improving detection accuracy. The experimental result shows that the proposed method achieves 98% of firmware malware detection accuracy. This approach will be transformative to other smart grid devices enabling seamless firmware update.",
        bibtexKey: "alvee2022firmware",
      },
      {
        title:
          "Ransomware Security Threat Modeling for Photovoltaic Systems",
        authors:
          "Y. Su, B. Ahn, S. R. B. Alvee, T. Kim, J. Choi, S. C. Smith",
        authorIndex: 2,
        venue: "IEEE Workshop on the Electronic Grid (eGRID)",
        year: "2021",
        doi: "10.1109/eGRID52793.2021.9662163",
        link: "https://doi.org/10.1109/eGRID52793.2021.9662163",
        scholar:
          "https://scholar.google.com/scholar?q=Ransomware+Security+Threat+Modeling+Photovoltaic+Systems+Su",
        citations: 11,
        abstract:
          "Ransomware attacks are one of the most dangerous cyber-attacks which can disrupt the operation of photovoltaic (PV) systems and incur an enormous economic loss. This paper introduces a ransomware security threat modeling method that identifies potential vulnerabilities, threats, and impacts of ransomware attacks targeting a PV system. The security threat modeling consists of three steps: 1) system identification, 2) threat modeling that finds existing vulnerabilities, 3) attack modeling that designs attack profiles to succeed ransomware attacks, and 4) penetration testing that performs authorized cyber-attacks and analyzes impacts of the ransomware attack profiles using a real-time hardware-in-the-loop (HIL) PV system security testbed.",
        bibtexKey: "su2021ransomware",
      },
      {
        title:
          "Advanced Persistent Threat (APT)-Style Attack Modeling and Testbed for Power Transformer Diagnosis System in a Substation",
        authors:
          "S. Ahmad, B. Ahn, S. R. B. Alvee, D. Trevino, T. Kim, Y. Youn, M. H. Cintuglu",
        authorIndex: 2,
        venue:
          "IEEE Power & Energy Society Innovative Smart Grid Technologies Conference (ISGT)",
        year: "2022",
        doi: "10.1109/ISGT50606.2022.9817518",
        link: "https://doi.org/10.1109/ISGT50606.2022.9817518",
        scholar:
          "https://scholar.google.com/scholar?q=Advanced+Persistent+Threat+Power+Transformer+Diagnosis+Substation+Ahmad",
        citations: 10,
        abstract:
          "To meet the high safety and reliability requirements of today's power transformers, advanced online diagnosis systems using seamless communications and information technologies have been developed, which potentially presents growing cybersecurity concerns. This paper provides practical attack models breaching a power transformer diagnosis system (PTDS) in a digital substation by advanced persistent threats (APTs) and proposes a security testbed for developing future security built-in PTDS against APTs. The proposed security testbed includes: 1) a real-time substation power system simulator, 2) a real-time cyber system, and 3) penetration testing tools. Several real cyber-attacks are generated and the impact on a digital substation are provided to validate the feasibility of the proposed security testbed.",
        bibtexKey: "ahmad2022apt",
      },
      {
        title:
          "On-Body Humidity Sensing Antenna with Polyimide for BAN Applications over 5G Networks",
        authors:
          "M. M. Rahman, M. A. Nayeem, S. Nahid, S. R. Bin Alvee, R. Rashidul Hasan, M. A. Rahman",
        authorIndex: 3,
        venue:
          "IEEE International IOT, Electronics and Mechatronics Conference (IEMTRONICS)",
        year: "2020",
        doi: "10.1109/IEMTRONICS51293.2020.9216331",
        link: "https://doi.org/10.1109/IEMTRONICS51293.2020.9216331",
        scholar:
          "https://scholar.google.com/scholar?q=On-Body+Humidity+Sensing+Antenna+Polyimide+BAN+5G",
        citations: 7,
        abstract:
          "This paper proposes an on-body humidity sensing antenna with polyimide working in the 5G network. The chosen operating frequency is 38 GHz which also lies in the mm-wave band. This paper discusses two antennas. The first antenna is designed using polyimide film and the other using polyimide film as a superstate with Rogers RT 5880 as the main substrate. The first antenna exhibits an intensive radiation absorption of 38.7 W/kg for every 10g of tissue, which is mitigated by the design of the second antenna. Therefore, the second antenna is analyzed for on-body humidity sensing. Due to polyimide's high sensitivity towards humidity, any change in humidity is detectable through the changes in the dielectric constant of polyimide and changes in the resonant frequency.",
        bibtexKey: "rahman2020antenna",
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
        {person.firstName} is a platform & systems engineer building edge-to-cloud
        IoT infrastructure. He ships resilient device software (STM32, FreeRTOS,
        BLE/Cellular/Wi-Fi), implements OTA and telemetry pipelines, and builds
        automated validation (PyTest/Jenkins/HIL). His prior research explored
        AI-driven threat detection and cyber-physical security testbeds for
        critical power systems.
      </>
    ),
  },

  research: {
    display: true,
    title: "Research",
    statement: (
      <>
        My research sits at the intersection of cybersecurity and embedded
        systems for critical infrastructure. I have studied how emerging attack
        surfaces — ransomware on digital substations, APT campaigns against
        power-transformer diagnostics, and firmware-level malware on smart
        inverters — threaten the grid as it becomes more distributed and
        software-defined. A recurring thread is applying deep learning
        (convolutional networks on binary-to-image representations, transfer
        learning) as a detection layer when conventional signatures fail at the
        device edge. Earlier work on millimeter-wave wearable antennas for 5G
        body-area networks shaped my interest in the physical-layer constraints
        of connected systems. I am now focused on carrying these lessons into
        production IoT fleets — secure provisioning, OTA integrity, and
        telemetry-driven anomaly detection.
      </>
    ),
    interests: [
      "Firmware & embedded security",
      "AI/ML for malware and anomaly detection",
      "Cyber-physical testbeds for smart grids",
      "OTA integrity & secure device provisioning",
      "Telemetry-driven observability for IoT fleets",
    ],
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
        timeframe: "Jan 2021 – May 2021, Aug 2021 – Dec 2021",
        role: "Graduate Teaching Assistant · Digital Signal Processing & Speech Processing",
        logo: "/images/about/work_A_and_M.webp",
        achievements: [
          <>
            Designed laboratory exercises and evaluation rubrics covering
            signal-processing fundamentals — digital filtering, spectral
            analysis, and time–frequency representations — over two semesters of
            graduate-level DSP and Speech Processing courses.
          </>,
          <>
            Mentored students through practical MATLAB and Python implementations
            of FFT-based analysis, FIR/IIR filter design, and speech feature
            extraction; held office hours and graded problem sets and projects.
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
          { name: "Kubernetes", icon: "kubernetes" },
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
          { name: "PyTorch", icon: "pytorch" },
          { name: "TensorFlow", icon: "tensorflow" },
          { name: "scikit-learn", icon: "scikitlearn" },
          { name: "spaCy", icon: "spacy" },
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
    country: "USA",
    location: "Chicago",
    images: [
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Chicago/DSCF1562", alt: "Chicago — DSCF1562" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Chicago/DSCF1631", alt: "Chicago — DSCF1631" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Chicago/DSCF1714", alt: "Chicago — DSCF1714" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Chicago/DSCF1720", alt: "Chicago — DSCF1720" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Chicago/DSCF3024", alt: "Chicago — DSCF3024" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Chicago/DSCF3797", alt: "Chicago — DSCF3797" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Chicago/DSCF5513", alt: "Chicago — DSCF5513" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Chicago/DSCF5565", alt: "Chicago — DSCF5565" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Chicago/DSCF5656", alt: "Chicago — DSCF5656" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Chicago/DSCF5660", alt: "Chicago — DSCF5660" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Chicago/DSCF5707", alt: "Chicago — DSCF5707" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Chicago/DSCF5843", alt: "Chicago — DSCF5843" },
    ],
  },
  {
    country: "USA",
    location: "Indiana",
    images: [
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Indiana/DSCF1424", alt: "Indiana — DSCF1424" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Indiana/DSCF1434", alt: "Indiana — DSCF1434" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Indiana/DSCF1440", alt: "Indiana — DSCF1440" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Indiana/DSCF1441", alt: "Indiana — DSCF1441" },
    ],
  },
  {
    country: "USA",
    location: "Michigan",
    images: [
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Michigan/DSCF0107", alt: "Michigan — DSCF0107" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Michigan/DSCF0130", alt: "Michigan — DSCF0130" },
    ],
  },
  {
    country: "USA",
    location: "Minnesota",
    images: [
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Minnesota/DSCF1835", alt: "Minnesota — DSCF1835" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Minnesota/DSCF1842", alt: "Minnesota — DSCF1842" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Minnesota/DSCF1865", alt: "Minnesota — DSCF1865" },
    ],
  },
  {
    country: "USA",
    location: "New York",
    images: [
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/New%20York/DSCF2088", alt: "New York — DSCF2088" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/New%20York/DSCF2090", alt: "New York — DSCF2090" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/New%20York/DSCF2092", alt: "New York — DSCF2092" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/New%20York/DSCF2145", alt: "New York — DSCF2145" },
    ],
  },
  {
    country: "USA",
    location: "Ohio",
    images: [
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Ohio/DSCF3254", alt: "Ohio — DSCF3254" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Ohio/DSCF3262", alt: "Ohio — DSCF3262" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Ohio/DSCF3263", alt: "Ohio — DSCF3263" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Ohio/DSCF3273", alt: "Ohio — DSCF3273" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Ohio/DSCF3344", alt: "Ohio — DSCF3344" },
    ],
  },
  {
    country: "USA",
    location: "Tennessee",
    images: [
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Tennessee/DSCF4596", alt: "Tennessee — DSCF4596" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Tennessee/DSCF4725", alt: "Tennessee — DSCF4725" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Tennessee/DSCF4775", alt: "Tennessee — DSCF4775" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Tennessee/DSCF4817", alt: "Tennessee — DSCF4817" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Tennessee/DSCF4910", alt: "Tennessee — DSCF4910" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Tennessee/DSCF4943", alt: "Tennessee — DSCF4943" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Tennessee/DSCF4959", alt: "Tennessee — DSCF4959" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Tennessee/DSCF4975", alt: "Tennessee — DSCF4975" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Tennessee/DSCF4983", alt: "Tennessee — DSCF4983" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Tennessee/DSCF4986", alt: "Tennessee — DSCF4986" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Tennessee/DSCF4988", alt: "Tennessee — DSCF4988" },
    ],
  },
  {
    country: "USA",
    location: "Wisconsin",
    images: [
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Wisconsin/DSCF5098", alt: "Wisconsin — DSCF5098" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Wisconsin/DSCF0842", alt: "Wisconsin — DSCF0842" },
      { src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/USA/Wisconsin/DSCF5061", alt: "Wisconsin — DSCF5061" },
    ],
  },
  {
    country: "Bangladesh",
    location: "Chittagong",
    images: [
      {
        src: "https://res.cloudinary.com/dvgohigq8/image/upload/f_auto,q_auto/portfolio/gallery/Bangladesh/Chittagong/Eco6w0EUwAAPqz",
        alt: "Chittagong — Eco6w0EUwAAPqz",
      },
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
