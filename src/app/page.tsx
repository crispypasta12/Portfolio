// src/app/page.tsx
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
  Media,
  IconButton,
} from "@once-ui-system/core";
import { home, about, person, baseURL, social } from "@/resources";
import { homeHighlights, homeTestimonials, homeHobbies } from "@/resources/content";
import { Mailchimp } from "@/components";
import styles from "./home.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function HomePage() {
  const github   = social.find((s) => s.name.toLowerCase() === "github")?.link
                || "https://github.com/raqueed";
  const linkedin = social.find((s) => s.name.toLowerCase() === "linkedin")?.link
                || "https://www.linkedin.com/in/raqueed-alvee-270b541a5/";

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

      {/* ===== HERO ======================================================= */}
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx fillWidth horizontal="center" paddingTop="16" paddingBottom="24" paddingLeft="12">
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
            <Heading wrap="balance" variant="display-strong-l" style={{ textShadow: "0 2px 12px rgba(0,0,0,.35)" }}>
              {home.headline}
            </Heading>
          </RevealFx>

          <RevealFx translateY="12" delay={0.15} fillWidth horizontal="center" paddingBottom="24">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl" style={{ textShadow: "0 1px 8px rgba(0,0,0,.35)" }}>
              {home.subline}
            </Text>
          </RevealFx>

          <RevealFx paddingTop="8" delay={0.3} horizontal="center" paddingLeft="12">
            <Button id="about" data-border="rounded" href={about.path} variant="secondary" size="m" weight="default" arrowIcon>
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (<Avatar marginRight="8" style={{ marginLeft: "-0.75rem" }} src={person.avatar} size="m" />)}
                {about.title}
              </Row>
            </Button>
          </RevealFx>
        </Column>
      </Column>

      {/* ===== SECTION 1: Signature Highlights =========================== */}
      <RevealFx translateY="16">
        <Column fillWidth gap="24" marginBottom="l">
          <div className={styles.sectionTitleRow}>
            <Heading as="h2" variant="display-strong-xs" wrap="balance">Signature Highlights</Heading>
            <Line maxWidth={48} />
          </div>

          <div className={styles.highlightsGrid}>
            {homeHighlights.map((h, i) => (
              <div className={styles.highlightCard} key={`${h.title}-${i}`}>
                <Media alt={h.alt} src={h.src} radius="l" enlarge sizes="(min-width:1200px) 25vw, 100vw" />
                <div className="content">
                  <Text variant="heading-strong-l">{h.title}</Text>
                  <Text variant="body-default-m" onBackground="neutral-weak">{h.blurb}</Text>
                  <Row paddingTop="8">
                    <Button href={h.href} variant="secondary" size="s" arrowIcon data-border="rounded" label="View" />
                  </Row>
                </div>
              </div>
            ))}
          </div>
        </Column>
      </RevealFx>

      {/* ===== SECTION 2: Tech Stack & Capabilities ====================== */}
      {home.tech?.display && home.tech.sections?.length ? (
        <RevealFx translateY="16" delay={0.1}>
          <Column fillWidth gap="24" marginBottom="l">
            <div className={styles.sectionTitleRow}>
              <Heading as="h2" variant="display-strong-xs" wrap="balance">Tech Stack & Capabilities</Heading>
              <Line maxWidth={48} />
            </div>

            <div className={styles.techRow}>
              {home.tech.sections.map((sec, idx) => (
                <div className={styles.techCard} key={idx}>
                  <Text variant="heading-strong-l">{sec.title}</Text>
                  {sec.description && (<Text variant="body-default-m" onBackground="neutral-weak">{sec.description}</Text>)}
                  {sec.tags?.length ? (
                    <div className={styles.tags}>
                      {sec.tags.map((t, ti) => (<Tag key={`${sec.title}-${ti}`} size="l" prefixIcon={t.icon}>{t.name}</Tag>))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </Column>
        </RevealFx>
      ) : null}

      <div className={styles.softDivider} />

      {/* ===== SECTION 3: Testimonials (auto-scrolling marquee) ========== */}
      {homeTestimonials.length > 0 && (
        <RevealFx translateY="16" delay={0.15}>
          <Column fillWidth gap="16" marginBottom="l">
            <div className={styles.sectionTitleRow}>
              <Heading as="h2" variant="display-strong-xs" wrap="balance">Testimonials</Heading>
              <Line maxWidth={48} />
            </div>

            <div className={styles.testimonialWrap} aria-label="Testimonials">
              <div className={styles.testimonialTrack}>
                {[...homeTestimonials, ...homeTestimonials].map((t, i) => (
                  <div className={styles.testimonialCard} key={`${t.name}-${i}`}>
                    <Avatar src={t.avatar} size="l" />
                    <Column gap="8">
                      <Text className={styles.quote}>“{t.quote}”</Text>
                      <Text variant="label-default-m" onBackground="neutral-weak">
                        {t.name} · {t.role}
                      </Text>
                    </Column>
                  </div>
                ))}
              </div>
            </div>
          </Column>
        </RevealFx>
      )}

      <div className={styles.softDivider} />

      {/* ===== SECTION 4: Hobbies & Life (mosaic links to Gallery) ======= */}
      {homeHobbies.length > 0 && (
        <RevealFx translateY="16" delay={0.2}>
          <Column fillWidth gap="16" marginBottom="l">
            <div className={styles.hobbiesHeader}>
              <Heading as="h2" variant="display-strong-xs" wrap="balance">Hobbies & Life</Heading>
              <Text onBackground="neutral-weak">Outside work: music, photography, travel, and tinkering.</Text>
            </div>

            <div className={styles.hobbiesGrid}>
              {homeHobbies.map((h, i) => (
                <a href="/gallery" className={styles.hobby} key={`${h.title}-${i}`} aria-label={`${h.title} – open gallery`}>
                  <img src={h.src} alt={h.title} />
                  <div className="overlay" />
                  <div className="label">
                    <Text variant="heading-strong-m">{h.title}</Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">{h.caption}</Text>
                  </div>
                </a>
              ))}
            </div>
          </Column>
        </RevealFx>
      )}

      {/* ===== SECTION 5: Contact CTA =================================== */}
      {home.contact?.display && (
        <RevealFx translateY="16" delay={0.25}>
          <Row
            fillWidth
            background="brand-alpha-weak"
            radius="xl"
            padding="20"
            vertical="center"
            s={{ direction: "column" }}
            style={{
              backdropFilter: "blur(6px) saturate(1.05)",
              boxShadow: "0 30px 80px rgba(0,0,0,.35), inset 0 0 0 1px rgba(255,255,255,.06)",
              backgroundImage:
                "radial-gradient(120% 140% at 90% -20%, rgba(0,170,255,.08) 0, rgba(16, 30, 38, .8) 42%)",
            }}
          >
            <Column flex={1} gap="8">
              <Badge background="brand-alpha-weak" arrow={false} textVariant="label-default-s">
                Open to collaborations
              </Badge>
              <Heading as="h2" variant="display-strong-xs">
                {home.contact.title}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                Firmware prototypes, fleet hardening, test automation—or just say hello.
              </Text>
              <Row gap="8" paddingTop="8">
                <Button href={home.contact.ctaHref} size="m" variant="secondary" weight="default" arrowIcon data-border="rounded" label={home.contact.ctaLabel} />
                <IconButton href={linkedin} icon="linkedin" variant="secondary" />
                <IconButton href={github} icon="github" variant="secondary" />
                <IconButton href={`mailto:${person.email}`} icon="email" variant="secondary" />
              </Row>
            </Column>
          </Row>
        </RevealFx>
      )}

      <Mailchimp />
    </Column>
  );
}
