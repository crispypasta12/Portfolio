import { IconType } from "react-icons";

// Heroicons v2 (outline)
import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
  HiOutlineCpuChip,
  HiOutlineMapPin,
  HiOutlineBeaker,
  HiOutlineWrenchScrewdriver,
  HiOutlineCloud,
  HiOutlineSparkles,
  HiOutlineSquares2X2,
  HiOutlineArrowTrendingUp,
  HiOutlineUsers,
  HiOutlineMicrophone,
  HiOutlineDocumentText,
} from "react-icons/hi2";

// Phosphor
import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

// Simple Icons
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
  SiPython,
  SiC,
  SiCplusplus,
  SiBluetooth,
  SiMqtt,
  SiAmazonwebservices,
  SiJenkins,
  SiPytest,
  SiDocker,
  SiStmicroelectronics,
  SiRaspberrypi,
  SiArduino,
} from "react-icons/si";

// Font Awesome (brands & socials)
import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaX,
  FaThreads,
  FaXTwitter,
  FaFacebook,
  FaPinterest,
  FaWhatsapp,
  FaReddit,
  FaTelegram,
} from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  // UI / System
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  openLink: HiOutlineLink,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  email: HiEnvelope,
  calendar: HiCalendarDays,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  document: HiOutlineDocument,
  globe: HiOutlineGlobeAsiaAustralia,
  rocket: HiOutlineRocketLaunch,
  cpu: HiOutlineCpuChip,
  pin: HiOutlineMapPin,
  mapPin: HiOutlineMapPin,           // alias so both work
  beaker: HiOutlineBeaker,
  wrench: HiOutlineWrenchScrewdriver,
  cloud: HiOutlineCloud,

  // *** NEW for your content ***
  sparkles: HiOutlineSparkles,
  boxes: HiOutlineSquares2X2,
  chartUp: HiOutlineArrowTrendingUp,
  users: HiOutlineUsers,
  mic: HiOutlineMicrophone,
  fileText: HiOutlineDocumentText,

  // Navigation
  home: PiHouseDuotone,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  gallery: PiImageDuotone,

  // Socials
  discord: FaDiscord,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  twitter: FaXTwitter,
  threads: FaThreads,
  facebook: FaFacebook,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,

  // Tech stack / skills
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  nodejs: SiNodedotjs,
  postgresql: SiPostgresql,
  prisma: SiPrisma,
  supabase: SiSupabase,
  python: SiPython,
  c: SiC,
  cplusplus: SiCplusplus,
  bluetooth: SiBluetooth,
  mqtt: SiMqtt,
  aws: SiAmazonwebservices,
  jenkins: SiJenkins,
  pytest: SiPytest,
  docker: SiDocker,
  stmicro: SiStmicroelectronics,
  raspberrypi: SiRaspberrypi,
  arduino: SiArduino,
  azure: HiOutlineCloud,       
  mathworks: HiOutlineBeaker,    
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
