import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
  Tag,
  Icon,
  Media,
} from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import { Mailchimp } from "@/components";

// ---- Local, image-driven "Highlights" (Section 1) ----
// Place these images under: /public/images/home (filenames listed below)
const highlights = [
  {
    title: "Connected Tools Platform",
    blurb:
      "Fleet-aware firmware + secure device↔cloud patterns (BLE/Cellular/Wi-Fi, MQTT/HTTPS).",
    src: "/images/home/highlight-connected-tools.jpg",
    alt: "Connected tools platform dashboard and IoT-enabled devices",
    href: "/work",
  },
  {
    title: "HIL & Validation",
    blurb:
      "PyTest + Jenkins + HIL rigs to scale regression for GNSS, power behavior and OTA.",
    src: "/images/home/highlight-hil-bench.jpg",
    alt: "Hardware-in-the-loop test bench with instruments and power analyzer",
    href: "/work",
  },
  {
    title: "Field Telemetry",
    blurb:
      "Signed URLs, structured logs, and Athena queries to observe devices in the wild.",
    src: "/images/home/highlight-field-telemetry.jpg",
    alt: "Field telemetry heatmap and log visualizations",
    href: "/work",
  },
  {
    title: "Firmware Craft",
    blurb:
      "STM32 drivers, FreeRTOS, power modes and robust watchdogs that ship.",
    src: "/images/home/highlight-firmware-lab.jpg",
    alt: "STM32 dev board on lab bench with probes attached",
    href: "/work",
  },
];

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* ===== HERO ======================================================= */}
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="24"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}

          <RevealFx translateY="8" fillWidth horizontal="center" paddingBottom="12">
            <Heading
              wrap="balance"
              variant="display-strong-l"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.35)" }}
            >
              {home.headline}
            </Heading>
          </RevealFx>

          <RevealFx translateY="12" delay={0.15} fillWidth horizontal="center" paddingBottom="24">
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-xl"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.35)" }}
            >
              {home.subline}
            </Text>
          </RevealFx>

          <RevealFx paddingTop="8" delay={0.3} horizontal="center" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Row>
            </Button>
          </RevealFx>
        </Column>
      </Column>

      {/* ===== SECTION 1: Signature Highlights (image grid) =============== */}
      <RevealFx translateY="16">
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>

          <Row flex={1} paddingLeft="l" paddingTop="16" marginBottom="8">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Signature Highlights
            </Heading>
          </Row>

          <Row fillWidth gap="12" s={{ direction: "column" }}>
            {(highlights ?? []).map((h, i) => (
              <Column
                key={`${h.title}-${i}`}
                gap="12"
                radius="l"
                background="transparent"
                border="neutral-medium"
                style={{ overflow: "hidden" }}
              >
                <Media
                  enlarge
                  alt={h.alt}
                  src={h.src}
                  radius="l"
                  sizes="(min-width: 1200px) 33vw, 100vw"
                  style={{
                    aspectRatio: "16 / 9",
                    objectFit: "cover",
                    filter: "saturate(0.95) contrast(1.05)",
                  }}
                />
                <Row
                  padding="16"
                  gap="8"
                  background="overlay"
                  style={{ backdropFilter: "blur(10px)" }}
                >
                  <Column flex={1} gap="4">
                    <Text variant="heading-strong-l">{h.title}</Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {h.blurb}
                    </Text>
                  </Column>
                  <Button
                    href={h.href}
                    variant="secondary"
                    size="s"
                    arrowIcon
                    data-border="rounded"
                    label="View"
                  />
                </Row>
              </Column>
            ))}
          </Row>

          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      </RevealFx>

      {/* ===== SECTION 2: Tech Stack & Capabilities ====================== */}
      {home.tech?.display && home.tech.sections?.length ? (
        <RevealFx translateY="16" delay={0.1}>
          <Column fillWidth gap="24" marginBottom="l">
            <Row fillWidth paddingRight="64">
              <Line maxWidth={48} />
            </Row>

            <Row flex={1} paddingLeft="l" paddingTop="16" marginBottom="8">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Tech Stack & Capabilities
              </Heading>
            </Row>

            <Row fillWidth gap="24" s={{ direction: "column" }}>
              {home.tech.sections.map((sec, idx) => (
                <Column
                  key={idx}
                  gap="8"
                  paddingX="20"
                  paddingY="16"
                  border="neutral-medium"
                  radius="l"
                  background="transparent"
                  style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.06) inset" }}
                >
                  <Text variant="heading-strong-l">{sec.title}</Text>
                  {sec.description && (
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {sec.description}
                    </Text>
                  )}
                  {sec.tags?.length ? (
                    <Row wrap gap="8" paddingTop="8">
                      {sec.tags.map((t, ti) => (
                        <Tag key={`${sec.title}-${ti}`} size="l" prefixIcon={t.icon}>
                          {t.name}
                        </Tag>
                      ))}
                    </Row>
                  ) : null}
                </Column>
              ))}
            </Row>

            <Row fillWidth paddingLeft="64" horizontal="end">
              <Line maxWidth={48} />
            </Row>
          </Column>
        </RevealFx>
      ) : null}

      {/* ===== SECTION 3: Work Process (4 steps) ========================= */}
      {home.process?.display && home.process.steps?.length ? (
        <RevealFx translateY="16" delay={0.15}>
          <Column fillWidth gap="24" marginBottom="l">
            <Row flex={1} paddingLeft="l" paddingTop="16">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Work Process
              </Heading>
            </Row>
            <Row fillWidth gap="12" s={{ direction: "column" }}>
              {home.process.steps.map((step, i) => (
                <Row
                  key={`${step.title}-${i}`}
                  flex={1}
                  border="neutral-medium"
                  radius="l"
                  padding="16"
                  background="transparent"
                  style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.06) inset" }}
                >
                  <Row gap="12" vertical="center">
                    <Row
                      radius="full"
                      width="32"
                      height="32"
                      background="brand-alpha-weak"
                      vertical="center"
                      horizontal="center"
                      style={{ minWidth: 32 }}
                    >
                      <Text variant="label-strong-m">{i + 1}</Text>
                    </Row>
                    {step.icon && <Icon name={step.icon} onBackground="accent-weak" />}
                    <Column gap="4">
                      <Text variant="heading-strong-m">{step.title}</Text>
                      <Text variant="body-default-m" onBackground="neutral-weak">
                        {step.description}
                      </Text>
                    </Column>
                  </Row>
                </Row>
              ))}
            </Row>
          </Column>
        </RevealFx>
      ) : null}

      {/* ===== SECTION 4: Publications & Recognition ===================== */}
      {(home.publications?.items?.length ?? 0) > 0 && (
        <RevealFx translateY="16" delay={0.2}>
          <Column fillWidth gap="24" marginBottom="l">
            <Row flex={1} paddingLeft="l" paddingTop="16">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Publications & Recognition
              </Heading>
            </Row>

            <Column gap="12">
              {(home.publications?.items ?? []).map((pub, i) => (
                <Row
                  key={`${pub.title}-${i}`}
                  border="neutral-medium"
                  radius="l"
                  padding="16"
                  background="transparent"
                  style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.06) inset" }}
                >
                  <Column gap="4">
                    <Text variant="heading-strong-m">{pub.title}</Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {[pub.venue, pub.year].filter(Boolean).join(" · ")}
                    </Text>
                    {pub.link && (
                      <Button
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="s"
                        variant="secondary"
                        data-border="rounded"
                        arrowIcon
                        label="Read"
                      />
                    )}
                  </Column>
                </Row>
              ))}
            </Column>
          </Column>
        </RevealFx>
      )}

      <Mailchimp />
    </Column>
  );
}
