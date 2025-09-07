import { Badge, Column, Heading, Icon, Meta, Row, Schema, Text, RevealFx, Button } from "@once-ui-system/core";
import { baseURL, about, person, work, home } from "@/resources";
import { Projects } from "@/components/work/Projects";
import styles from "./work.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function WorkPage() {
  const steps = home.process?.steps ?? [];
  const pubs = home.publications?.items ?? [];

  return (
    <Column maxWidth="m" paddingY="l" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* HERO */}
      <RevealFx translateY={2} horizontal="center">
        <Column maxWidth="s" align="center" horizontal="center" gap="8">
          <Badge background="brand-alpha-weak" textVariant="label-default-s" arrow={false}>
            <Row gap="8" vertical="center"><Icon name="cpu" /> Projects · Process · Publications</Row>
          </Badge>
          <Heading align="center" variant="display-strong-xl">Impactful firmware from bench to fleet</Heading>
          <Text align="center" variant="heading-default-m" onBackground="neutral-weak">
            Selected work across embedded firmware, connectivity, observability, and automated validation.
          </Text>
        </Column>
      </RevealFx>

      {/* WORK PROCESS */}
      {steps.length > 0 && (
        <RevealFx translateY={4}>
          <Column gap="20" fillWidth>
            <Heading align="center" variant="display-strong-s">Work Process</Heading>
            <div className={styles.grid}>
              {steps.map((s, i) => (
                <div key={`${s.title}-${i}`} className={`${styles.card} ${styles.tilt}`}>
                  <Row gap="20" vertical="center">
                    <div className={styles.iconWrap}>
                      {s.icon && <Icon name={s.icon} />}
                      <span className={styles.stepIndex}>{i + 1}</span>
                    </div>
                    <Column gap="4">
                      <Text variant="heading-strong-m">{s.title}</Text>
                      <Text variant="body-default-m" onBackground="neutral-weak">{s.description}</Text>
                    </Column>
                  </Row>
                </div>
              ))}
            </div>
          </Column>
        </RevealFx>
      )}

      {/* PROJECTS */}
      <RevealFx translateY={4} horizontal="center">
        <Column gap="12" align="center" maxWidth="s">
          <Heading align="center" variant="display-strong-s">Projects</Heading>
          <Text align="center" onBackground="neutral-weak">
            A mix of production features, prototypes, and test infrastructure.
          </Text>
        </Column>
      </RevealFx>
      <RevealFx translateY={4}><Projects /></RevealFx>

      {/* PUBLICATIONS */}
      {pubs.length > 0 && (
        <RevealFx translateY={8}>
          <Column gap="20" fillWidth>
            <Heading align="center" variant="display-strong-s">Publications & Recognition</Heading>
            <div className={styles.grid}>
              {pubs.map((p, i) => (
                <a
                  key={`${p.title}-${i}`}
                  className={`${styles.card} ${styles.glass} ${styles.glowLink}`}
                  href={p.link || "#"}
                  target={p.link ? "_blank" : undefined}
                  rel={p.link ? "noopener noreferrer" : undefined}
                >
                  <Column gap="8">
                    <Row gap="12" vertical="center">
                      <Icon name="fileText" />
                      <Text as="h4" variant="heading-strong-m">{p.title}</Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {[p.venue, p.year].filter(Boolean).join(" · ")}
                    </Text>
                  </Column>
                </a>
              ))}
            </div>
          </Column>
        </RevealFx>
      )}
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
                   className={`${styles.card} ${styles.glass} ${styles.glowLink}`}
                  style={{
                    boxShadow: "0 0 0 1px rgba(255,255,255,0.06) inset",
                  }}
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
    </Column>
  );
}
