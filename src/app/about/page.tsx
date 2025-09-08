import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import AboutTitleFx from "@/components/about/AboutTitleFx";
import HoverGlow from "@/components/about/HoverGlow";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

function Anchor({ id }: { id: string }) {
  return (
    <div
      id={id}
      style={{ scrollMarginTop: "96px" }}
    />
  );
}

export default function About() {
  const structure = [
    { title: about.intro.title, display: about.intro.display, items: [] },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((e) => e.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((i) => i.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((s) => s.title),
    },
  ];

  return (
    <Column maxWidth="m" paddingTop="48">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}

      <Row
        fillWidth
        s={{ direction: "column" }}
        horizontal="center"
        className={styles.pageRow}
      >
        {/* Sticky avatar rail */}
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            position="sticky"
            top="64"
            s={{ position: "relative" }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Row>

            {!!(person.languages?.length ?? 0) && (
              <Row wrap gap="8">
                {person.languages!.map((language, i) => (
                  <Tag key={i} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        )}

        {/* Main column */}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          {/* Intro */}
          <Anchor id={about.intro.title} />
          <Column
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="24"
          >
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>

            {!!(social?.length ?? 0) && (
              <Row
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social.map(
                  (item) =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Row s={{ hide: true }}>
                          <Button
                            href={item.link}
                            prefixIcon={item.icon}
                            label={item.name}
                            size="s"
                            weight="default"
                            variant="secondary"
                          />
                        </Row>
                        <Row hide s={{ hide: false }}>
                          <IconButton
                            size="l"
                            href={item.link}
                            icon={item.icon}
                            variant="secondary"
                          />
                        </Row>
                      </React.Fragment>
                    )
                )}
              </Row>
            )}
          </Column>

          {about.intro.display && (
            <Column
              textVariant="body-default-l"
              fillWidth
              gap="m"
              marginBottom="l"
              className={styles.section}
            >
              {about.intro.description}
            </Column>
          )}

          <div className={styles.softDivider} />

          {/* Work */}
          {about.work.display && (
            <>
              <div className={styles.section}>
                {/* Anchor BEFORE the title effect so ToC finds it */}
                <Anchor id={about.work.title} />
                <AboutTitleFx
                  title={about.work.title}
                  subtitle={<>Where I’ve shipped and learned</>}
                />
              </div>

              <Column fillWidth gap="m" marginBottom="32">
                {about.work.experiences.map((experience, index) => (
                  <HoverGlow
                    key={`${experience.company}-${experience.role}-${index}`}
                    className={`${styles.card} ${styles.glow}`}
                  >
                    <Column fillWidth gap="m">
                      <Row fillWidth horizontal="between" vertical="end">
                        <Text
                          id={experience.company}
                          variant="heading-strong-l"
                        >
                          {experience.company}
                        </Text>
                        <Text
                          variant="heading-default-xs"
                          onBackground="neutral-weak"
                        >
                          {experience.timeframe}
                        </Text>
                      </Row>

                      <Text variant="body-default-s" onBackground="brand-weak">
                        {experience.role}
                      </Text>

                      <Column as="ul" gap="12">
                        {experience.achievements.map(
                          (achievement: React.ReactNode, i: number) => (
                            <Text
                              as="li"
                              variant="body-default-m"
                              key={`${experience.company}-${i}`}
                            >
                              {achievement}
                            </Text>
                          )
                        )}
                      </Column>

                      {(experience.images?.length ?? 0) > 0 && (
                        <Row
                          fillWidth
                          paddingTop="m"
                          paddingLeft="40"
                          gap="12"
                          wrap
                        >
                          {experience.images!.map((image, i) => (
                            <Row
                              key={i}
                              border="neutral-medium"
                              radius="m"
                              minWidth={image.width}
                              height={image.height}
                              className={styles.mediaFrame}
                            >
                              <Media
                                enlarge
                                radius="m"
                                sizes={String(image.width)}
                                alt={image.alt}
                                src={image.src}
                              />
                            </Row>
                          ))}
                        </Row>
                      )}
                    </Column>
                  </HoverGlow>
                ))}
              </Column>
            </>
          )}

          <div className={styles.softDivider} />

          {/* Studies */}
          {about.studies.display && (
            <>
              <div className={styles.section}>
                <Anchor id={about.studies.title} />
                <AboutTitleFx
                  title={about.studies.title}
                  subtitle={<>Formal education</>}
                />
              </div>

              <Column fillWidth gap="m" marginBottom="32">
                {about.studies.institutions.map((institution, i) => (
                  <HoverGlow
                    key={`${institution.name}-${i}`}
                    className={`${styles.card} ${styles.glow}`}
                  >
                    <Column fillWidth gap="8">
                      <Text id={institution.name} variant="heading-strong-l">
                        {institution.name}
                      </Text>
                      <Text
                        variant="heading-default-xs"
                        onBackground="neutral-weak"
                      >
                        {institution.description}
                      </Text>
                    </Column>
                  </HoverGlow>
                ))}
              </Column>
            </>
          )}

          <div className={styles.softDivider} />

          {/* Technical skills */}
          {about.technical.display && (
            <>
              <div className={styles.section}>
                <Anchor id={about.technical.title} />
                <AboutTitleFx
                  title={about.technical.title}
                  subtitle={<>Tools, stacks & patterns</>}
                />
              </div>

              <Column fillWidth gap="m">
                {about.technical.skills.map((skill, i) => (
                  <Column
                    key={`${skill.title}-${i}`}
                    fillWidth
                    gap="8"
                    className={styles.card}
                  >
                    <Text id={skill.title} variant="heading-strong-l">
                      {skill.title}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>

                    {!!(skill.tags?.length ?? 0) && (
                      <Row
                        wrap
                        gap="8"
                        paddingTop="8"
                        className={styles.skillRow}
                      >
                        {skill.tags!.map((tag, ti) => (
                          <span
                            className={styles.skillTag}
                            key={`${skill.title}-${ti}`}
                          >
                            <Tag size="l" prefixIcon={tag.icon}>
                              {tag.name}
                            </Tag>
                          </span>
                        ))}
                      </Row>
                    )}

                    {(skill.images?.length ?? 0) > 0 && (
                      <Row fillWidth paddingTop="m" gap="12" wrap>
                        {skill.images!.map((image, ii) => (
                          <Row
                            key={ii}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                            className={styles.mediaFrame}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={String(image.width)}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Row>
    </Column>
  );
}
