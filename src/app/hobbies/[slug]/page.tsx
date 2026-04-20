import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import {
  Column,
  Heading,
  Text,
  Meta,
  Schema,
  Row,
  SmartLink,
  Media,
} from "@once-ui-system/core";
import { baseURL, about, person, home, home as homeRes } from "@/resources";
import { homeHobbies } from "@/resources/content";
import { CustomMDX, ScrollToHash } from "@/components";
import type { Metadata } from "next";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  // Source of truth for available slugs
  return homeHobbies.map((h) => ({ slug: h.slug }));
}

// Pull metadata from MDX frontmatter if present
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts = getPosts(["src", "app", "hobbies", "items"]);
  const post = posts.find((p) => p.slug === slugPath);
  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title || `${slugPath} — Hobbies`,
    description: post.metadata.summary || `Notes and images for ${slugPath}`,
    baseURL,
    image:
      post.metadata.image ||
      post.metadata.images?.[0] ||
      `/api/og/generate?title=${encodeURIComponent(
        post.metadata.title || slugPath
      )}`,
    path: `/hobbies/${post.slug}`,
  });
}

export default async function HobbyPage({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const post = getPosts(["src", "app", "hobbies", "items"]).find(
    (p) => p.slug === slugPath
  );

  if (!post) notFound();

  const hobby = homeHobbies.find((h) => h.slug === slugPath);

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l" paddingTop="48">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={`/hobbies/${post!.slug}`}
        title={post!.metadata.title}
        description={post!.metadata.summary}
        image={
          post!.metadata.image ||
          post!.metadata.images?.[0] ||
          `/api/og/generate?title=${encodeURIComponent(post!.metadata.title)}`
        }
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column maxWidth="s" align="center" horizontal="center" gap="8">
        <SmartLink href="/gallery">
          <Text variant="label-strong-m">Hobbies & Life</Text>
        </SmartLink>
        <Heading align="center" variant="display-strong-m">
          {post!.metadata.title}
        </Heading>
        {hobby?.caption && (
          <Text align="center" variant="heading-default-s" onBackground="neutral-weak">
            {hobby.caption}
          </Text>
        )}
      </Column>

      {post!.metadata.images?.length > 0 && (
        <Media
          priority
          aspectRatio="16 / 9"
          radius="m"
          alt={post!.metadata.title}
          src={post!.metadata.images[0]}
        />
      )}

      <Column as="article" maxWidth="xs" style={{ margin: "auto" }}>
        <CustomMDX source={post!.content} />
      </Column>

      <ScrollToHash />
    </Column>
  );
}
