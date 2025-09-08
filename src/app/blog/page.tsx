import {
  Heading,
  Text,
  Column,
  Meta,
  Schema,
  Badge,
  Row,
  Icon,
  RevealFx,
} from "@once-ui-system/core";
import SectionTitleFx from "@/components/home/SectionTitleFx";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, person } from "@/resources";
import styles from "./blog.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default function Blog() {
  return (
    <Column
      maxWidth="m"
      paddingTop="48"
      paddingBottom="l"
      gap="l"
      horizontal="center"
    >
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Top badge (matches Work page style) */}
      <RevealFx translateY={2} horizontal="center">
        <Column maxWidth="s" align="center" horizontal="center" gap="8">
          <Badge
            background="brand-alpha-weak"
            textVariant="label-default-s"
            arrow={false}
          >
            <Row gap="8" vertical="center">
              <Icon name="document" />
              Notes · Firmware · IoT · Validation
            </Row>
          </Badge>
        </Column>
      </RevealFx>

      {/* Page header */}
      <RevealFx translateY="8" fillWidth horizontal="center" paddingBottom="8">
        <div className={styles.section}>
          <Heading align="center" variant="display-strong-l" marginBottom="16">
            Blogs
          </Heading>
          <Text
            align="center"
            variant="heading-default-m"
            onBackground="neutral-weak"
          >
            {blog.description}
          </Text>
        </div>
      </RevealFx>

      {/* Featured / newest */}
      <RevealFx translateY="8" fillWidth horizontal="center" paddingBottom="12">
        <Column fillWidth className={styles.section}>
          <Posts range={[1, 1]} thumbnail />
          <Posts range={[2, 3]} columns="2" thumbnail direction="column" />
        </Column>
      </RevealFx>
      <div className={styles.softDivider} />

      {/* Earlier posts */}
      <div className={styles.gap}>
        <SectionTitleFx
          title={<>Earlier posts</>}
          subtitle={<>Archive</>}
          align="left"
        />
        <div className={styles.gap} />
        <Posts range={[4, 7]} columns="2"/>
      </div>
    </Column>
  );
}
