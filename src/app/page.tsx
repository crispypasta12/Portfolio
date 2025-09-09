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
import {
  homeHighlights,
  homeTestimonials,
  homeHobbies,
} from "@/resources/content";
import SectionTitleFx from "@/components/home/SectionTitleFx";
import SignatureCarousel from "@/components/home/SignatureCarousel";
import { getProjectCards } from "@/lib/projects";
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

export default async function HomePage() {
  const highlights = await getProjectCards(3);

  return (
    <Column
      maxWidth="m"
      gap="xl"
      paddingY="12"
      horizontal="center"
      paddingTop="48"
    >
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
        <Column
          maxWidth="s"
          horizontal="center"
          align="center"
          className={styles.heroWrap}
        >
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="48"
              paddingLeft="16"
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

          <div className={styles.heroGlow} aria-hidden />

          <RevealFx
            translateY="8"
            fillWidth
            horizontal="center"
            paddingBottom="16"
          >
            <Heading
              wrap="balance"
              variant="display-strong-l"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,.35)" }}
            >
              {home.headline}
            </Heading>
          </RevealFx>

          <RevealFx
            translateY="12"
            delay={0.15}
            fillWidth
            horizontal="center"
            paddingBottom="32"
          >
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-xl"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,.35)" }}
            >
              {home.subline}
            </Text>
          </RevealFx>

          <RevealFx paddingTop="8" delay={0.3} horizontal="center">
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

        {/* Spotlights / quick strengths */}
        {!!home.spotlights?.length && (
          <RevealFx translateY="12" delay={0.1}>
            <div className={styles.spotlightsRow}>
              {home.spotlights.map((s, i) => (
                <div className={styles.spotlight} key={`${s.title}-${i}`}>
                  <Tag size="l" prefixIcon={s.icon}>
                    {s.title}
                  </Tag>
                  <Text onBackground="neutral-weak" variant="label-default-m">
                    {s.description}
                  </Text>
                </div>
              ))}
            </div>
          </RevealFx>
        )}
      </Column>

      <div className={styles.softDivider} />

      {/* ===== SIGNATURE HIGHLIGHTS ====================================== */}
      <RevealFx translateY="16">
        <Column fillWidth gap="16" marginBottom="l" className={styles.section}>
          <SectionTitleFx
            title={<>Signature Highlights</>}
            subtitle={<>A few focus areas I’m known for</>}
          />
          <SignatureCarousel items={highlights} autoShuffleMs={8000} />
        </Column>
      </RevealFx>

      <div className={styles.softDivider} />

      {/* ===== TECH STACK & CAPABILITIES ================================ */}
      {home.tech?.display && home.tech.sections?.length ? (
        <RevealFx translateY="16" delay={0.1}>
          <Column
            fillWidth
            gap="24"
            marginBottom="l"
            className={styles.section}
          >
            <SectionTitleFx
              title={<>Tech Stack & Capabilities</>}
              subtitle={<>Tools, platforms and protocols I work with</>}
            />

            <div className={styles.techRow}>
              {home.tech.sections.map((sec, idx) => (
                <div className={styles.techCard} key={idx}>
                  <Text variant="heading-strong-l">{sec.title}</Text>
                  {sec.description && (
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {sec.description}
                    </Text>
                  )}
                  {sec.tags?.length ? (
                    <div className={styles.tags}>
                      {sec.tags.map((t, ti) => (
                        <span
                          className={styles.skill}
                          key={`${sec.title}-${ti}`}
                        >
                          <Tag size="l" prefixIcon={t.icon}>
                            {t.name}
                          </Tag>
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </Column>
        </RevealFx>
      ) : null}

      <div className={styles.softDivider} />

      {/* ===== HOBBIES & LIFE =========================================== */}
      {homeHobbies.length > 0 && (
        <RevealFx translateY="16" delay={0.2}>
          <Column
            fillWidth
            gap="16"
            marginBottom="l"
            className={styles.section}
          >
            <SectionTitleFx
              title={<>Hobbies & Life</>}
              subtitle={
                <>Outside work: music, photography, travel, and tinkering</>
              }
            />
            <div className={styles.hobbiesGrid}>
              {homeHobbies.map((h, i) => (
                <a
                  href={`/hobbies/${h.slug}`}
                  className={styles.hobby}
                  key={`${h.title}-${i}`}
                  aria-label={`${h.title} – open page`}
                >
                  <Media src={h.src} alt={h.title} radius="l" />
                  <div className={styles.overlay} />
                  <div className={styles.label}>
                    <span className={styles.pill}>{h.title}</span>
                  </div>
                </a>
              ))}
            </div>
          </Column>
        </RevealFx>
      )}

      <div className={styles.softDivider} />

      {/* ===== TESTIMONIALS ============================================= */}
      {homeTestimonials.length > 0 && (
        <RevealFx translateY="16" delay={0.15}>
          <Column
            fillWidth
            gap="16"
            marginBottom="l"
            className={styles.section}
          >
            <SectionTitleFx
              title={<>Testimonials</>}
              subtitle={<>What teammates say</>}
            />

            <div className={styles.testimonialWrap} aria-label="Testimonials">
              <div className={styles.testimonialTrack}>
                {[...homeTestimonials, ...homeTestimonials].map((t, i) => (
                  <div
                    className={styles.testimonialCard}
                    key={`${t.name}-${i}`}
                  >
                    <Avatar src={t.avatar} size="l" />
                    <Column gap="12">
                      <Text className={styles.quote}>“{t.quote}”</Text>
                      <Text
                        variant="label-default-m"
                        onBackground="neutral-weak"
                      >
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

      {/* ===== CONTACT CTA ============================================== */}
      {home.contact?.display && (
        <RevealFx translateY="16" delay={0.25}>
          <Column fillWidth className={`${styles.section}`}>
            <Row
              fillWidth
              background="brand-alpha-weak"
              radius="xl"
              padding="20"
              s={{ direction: "column" }}
              className={styles.cta}
            >
              <Column flex={1} gap="12">
                <Badge
                  background="brand-alpha-weak"
                  arrow={false}
                  textVariant="label-default-s"
                >
                  Open to collaborations
                </Badge>

                <Heading as="h2" variant="display-strong-xs">
                  {home.contact.title}
                </Heading>

                <Text variant="body-default-m" onBackground="neutral-weak">
                  Firmware prototypes, fleet hardening, test automation—or just
                  say hello.
                </Text>
              </Column>

              {/* Mailchimp subscribe form */}
              <Mailchimp maxWidth="s" />
            </Row>
          </Column>
        </RevealFx>
      )}
    </Column>
  );
}
