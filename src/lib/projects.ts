import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type ProjectCard = {
  title: string;
  blurb: string;
  src: string;
  alt: string;
  href: string;
};

export async function getProjectCards(limit = 3): Promise<ProjectCard[]> {
  const dir = path.join(process.cwd(), "src", "app", "work", "projects");
  const files = (await fs.readdir(dir)).filter((f) => f.endsWith(".mdx"));

  const cards: ProjectCard[] = [];
  for (const file of files) {
    const slug = file.replace(/\.mdx$/, "");
    const raw = await fs.readFile(path.join(dir, file), "utf8");
    const { data } = matter(raw);

    cards.push({
      title: String(data.title ?? slug),
      blurb: String(data.summary ?? data.excerpt ?? ""),
      src: String((data.images?.[0] ?? "/images/placeholder.jpg")),
      alt: String(data.title ?? slug),
      href: `/work/${data.slug ?? slug}`,
    });
  }
  return cards.slice(0, limit);
}
