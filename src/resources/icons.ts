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
  HiOutlineCloud, // generic cloud (used for Azure)
} from "react-icons/hi2";

// Phosphor
import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

// Simple Icons (tech logos)
// NOTE: Azure + MathWorks are not available in Simple Icons via react-icons.
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
  // AWS name varies by package version; this alias tends to exist:
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
  beaker: HiOutlineBeaker,
  wrench: HiOutlineWrenchScrewdriver,
  cloud: HiOutlineCloud,   // <— generic “Azure” stand-in

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
  aws: SiAmazonwebservices,       // <— use this alias for AWS
  jenkins: SiJenkins,
  pytest: SiPytest,
  docker: SiDocker,
  stmicro: SiStmicroelectronics,  // STM32
  raspberrypi: SiRaspberrypi,
  arduino: SiArduino,

  // Stand-ins where brand logos are unavailable in SI/react-icons:
  azure: HiOutlineCloud,          // Microsoft/Azure generic
  mathworks: HiOutlineBeaker,     // MATLAB/MathWorks generic
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
