import {
  Badge,
  Column,
  Heading,
  Icon,
  Meta,
  Row,
  Schema,
  Text,
  RevealFx,
} from "@once-ui-system/core";
import { baseURL, about, person, work, home } from "@/resources";
import SectionTitleFx from "@/components/home/SectionTitleFx";
import { Projects } from "@/components/work/Projects";
import styles from "./work.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function WorkPage() {
  const steps = home.process?.steps ?? [];
  const pubs = home.publications?.items ?? [];

  return (
    <Column maxWidth="m" paddingTop="48" paddingBottom="l" gap="xl" horizontal="center">
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
          <Badge background="brand-alpha-weak" marginBottom="16" textVariant="label-default-s" arrow={false}>
            <Row gap="8" vertical="center">
              <Icon name="cpu" />
              Projects · Process · Publications
            </Row>
          </Badge>
          <Heading align="center" variant="display-strong-l" marginBottom="16">
            Impactful firmware from bench to fleet
          </Heading>
          <Text align="center" variant="heading-default-m" onBackground="neutral-weak">
            Selected work across embedded firmware, connectivity, observability, and automated validation.
          </Text>
        </Column>
      </RevealFx>

      <div className={styles.softDivider} />

      {/* WORK PROCESS */}
      {steps.length > 0 && (
        <RevealFx translateY={4}>
          <Column gap="20" fillWidth className={styles.section}>
            <SectionTitleFx
              title={<>Work Process</>}
              subtitle={<>How I move from discovery to measurable impact</>}
            />
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
                      <Text variant="body-default-m" onBackground="neutral-weak">
                        {s.description}
                      </Text>
                    </Column>
                  </Row>
                </div>
              ))}
            </div>
          </Column>
        </RevealFx>
      )}

      <div className={styles.softDivider} />

      {/* PROJECTS */}
      <RevealFx translateY={4} horizontal="center">
        <Column gap="12" className={styles.section}>
          <SectionTitleFx
            title={<>Projects</>}
            subtitle={<>A mix of production features, prototypes, and test infrastructure</>}
          />
        </Column>
      </RevealFx>
      <RevealFx translateY={4}>
        <Projects />
      </RevealFx>

      <div className={styles.softDivider} />

      {/* PUBLICATIONS (single section) */}
      {pubs.length > 0 && (
        <RevealFx translateY={8}>
          <Column gap="20" fillWidth className={styles.section}>
            <SectionTitleFx
              title={<>Publications & Recognition</>}
              subtitle={<>Selected papers & venues</>}
            />
            <div className={styles.grid}>
              {pubs.map((p, i) => (
                <div key={`${p.title}-${i}`} className={`${styles.card} ${styles.glass} ${styles.pubCard}`}>
                  <Column gap="8">
                    <Row gap="12" vertical="center">
                      <Icon name="fileText" />
                      {/* Default text is white; hover color handled in CSS */}
                      <Text as="h4" className={styles.pubTitle} variant="heading-strong-m">
                        {p.title}
                      </Text>
                    </Row>
                    <Text className={styles.pubMeta} variant="body-default-s" onBackground="neutral-weak">
                      {[p.venue, p.year].filter(Boolean).join(" · ")}
                    </Text>
                    {p.link && (
                      <Row paddingTop="8">
                        {/* Use a plain anchor so we don't nest links inside links */}
                        <a
                          className={styles.pubRead}
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Read ${p.title}`}
                        >
                          Read →
                        </a>
                      </Row>
                    )}
                  </Column>
                </div>
              ))}
            </div>
          </Column>
        </RevealFx>
      )}
    </Column>
  );
}
