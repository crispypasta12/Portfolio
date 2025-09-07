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
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
// import { Projects } from "@/components/work/Projects";
// import { Posts } from "@/components/blog/Posts";

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
        author={{ name: person.name, url: `${baseURL}${about.path}`, image: `${baseURL}${person.avatar}` }}
      />

      {/* ---------- HERO with background video ---------- */}
      <Column fillWidth horizontal="center" gap="m" style={{ position: "relative", overflow: "hidden" }}>
        {/* Background Video */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: -1,
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/og/home.jpg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "saturate(0.9) brightness(0.9) contrast(1.05)",
              transform: "scale(1.02)",
            }}
          >
            {/* Place your file under /public/videos/background/ */}
            <source src="/videos/background/3d_wave.mp4" type="video/mp4" />
          </video>

          {/* Subtle gradient overlay for readability */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(1200px 600px at 50% 60%, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.65) 60%)",
            }}
          />
        </div>

        {/* Featured badge */}
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx fillWidth horizontal="center" paddingTop="16" paddingBottom="32" paddingLeft="12">
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

          {/* Headline */}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>

          {/* Subline */}
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>

          {/* CTA to About */}
          <RevealFx paddingTop="12" delay={0.35} horizontal="center" paddingLeft="12">
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
                  <Avatar marginRight="8" style={{ marginLeft: "-0.75rem" }} src={person.avatar} size="m" />
                )}
                {about.title}
              </Row>
            </Button>
          </RevealFx>
        </Column>
      </Column>

      {/* ---------- Spotlights (small cards) ---------- */}
      {home.spotlights && home.spotlights.length > 0 && (
        <RevealFx translateY="12" delay={0.1}>
          <Row fillWidth gap="12" s={{ direction: "column" }}>
            {home.spotlights.map((s, i) => (
              <Row
                key={`${s.title}-${i}`}
                flex={1}
                border="neutral-medium"
                radius="l"
                padding="16"
                background="surface"
                style={{ backdropFilter: "blur(6px)" }}
              >
                <Row gap="12" vertical="center">
                  {s.icon && <Icon name={s.icon} onBackground="brand-weak" />}
                  <Column gap="4">
                    <Text variant="heading-strong-m">{s.title}</Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {s.description}
                    </Text>
                  </Column>
                </Row>
              </Row>
            ))}
          </Row>
        </RevealFx>
      )}

      {/* ---------- Tech Stack & Capabilities (4) ---------- */}
      {home.tech?.display && home.tech.sections?.length > 0 && (
        <RevealFx translateY="16" delay={0.2}>
          <Column fillWidth gap="24" marginBottom="l">
            <Row fillWidth paddingRight="64">
              <Line maxWidth={48} />
            </Row>

            <Row fillWidth gap="24" marginTop="24" s={{ direction: "column" }}>
              {home.tech.sections.map((sec, idx) => (
                <Row
                  key={idx}
                  flex={1}
                  paddingX="20"
                  paddingY="16"
                  border="neutral-medium"
                  radius="l"
                  background="surface"      // <-- fixed
                  style={{ backdropFilter: "blur(6px)" }}
                >
                  <Column gap="8" fillWidth>
                    <Text variant="heading-strong-l">{sec.title}</Text>
                    {sec.description && (
                      <Text variant="body-default-m" onBackground="neutral-weak">
                        {sec.description}
                      </Text>
                    )}
                    {sec.tags?.length > 0 && (
                      <Row wrap gap="8" paddingTop="8">
                        {sec.tags.map((t, ti) => (
                          <Tag key={`${sec.title}-${ti}`} size="l" prefixIcon={t.icon}>
                            {t.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                  </Column>
                </Row>
              ))}
            </Row>

            <Row fillWidth paddingLeft="64" horizontal="end">
              <Line maxWidth={48} />
            </Row>
          </Column>
        </RevealFx>
      )}

      {/* ---------- Work Process (4 steps) ---------- */}
      {home.process?.display && home.process.steps?.length > 0 && (
        <RevealFx translateY="16" delay={0.25}>
          <Column fillWidth gap="24" marginBottom="l">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Work Process
            </Heading>
            <Row fillWidth gap="12" s={{ direction: "column" }}>
              {home.process.steps.map((step, i) => (
                <Row key={`${step.title}-${i}`} flex={1} border="neutral-medium" radius="l" padding="16" background="surface" style={{ backdropFilter: "blur(6px)" }}>
                  <Row gap="12" vertical="center">
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
      )}

      {/* ---------- Publications & Funding ---------- */}
      {home.publications?.display && home.publications.items?.length > 0 && (
        <RevealFx translateY="16" delay={0.3}>
          <Column fillWidth gap="16" marginBottom="l">
            <Heading as="h2" variant="display-strong-xs">
              Publications & Funding
            </Heading>
            <Column gap="12">
              {home.publications.items.map((pub, i) => (
                <Row
                  key={`${pub.title}-${i}`}
                  border="neutral-medium"
                  radius="l"
                  padding="16"
                  background="surface"
                  s={{ direction: "column" }}
                  style={{ backdropFilter: "blur(6px)" }}
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

      {/* ---------- Contact CTA ---------- */}
      {home.contact?.display && (
        <RevealFx translateY="16" delay={0.35}>
          <Row
            fillWidth
            border="brand-alpha-medium"
            background="brand-alpha-weak"
            radius="xl"
            padding="20"
            vertical="center"
            style={{ backdropFilter: "blur(6px)" }}
            s={{ direction: "column" }}
          >
            <Column flex={1} gap="8">
              <Heading as="h2" variant="display-strong-xs">
                {home.contact.title}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                Happy to chat about prototypes, hardening, or test automation.
              </Text>
            </Column>
            <Button
              href={home.contact.ctaHref}
              size="m"
              variant="secondary"
              weight="default"
              arrowIcon
              data-border="rounded"
              label={home.contact.ctaLabel}
            />
          </Row>
        </RevealFx>
      )}

      {/* Optional: projects/blog blocks */}
      {/*
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>

      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest from the blog
              </Heading>
            </Row>
            <Row flex={3} paddingX="20">
              <Posts range={[1, 2]} columns="2" />
            </Row>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}
      */}

      <Mailchimp />
    </Column>
  );
}
