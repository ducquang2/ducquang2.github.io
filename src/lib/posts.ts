import { getCollection, type CollectionEntry } from "astro:content";
import type { Lang } from "../i18n";

export type Post = CollectionEntry<"blog"> & { slug: string; no: number; hasTranslation: boolean };

const slugOf = (id: string) => id.split("/").slice(1).join("/");

/** Posts for one language, numbered in publish order (No. 001 is the first). Newest first. */
export async function getPosts(lang: Lang): Promise<Post[]> {
  const all = await getCollection("blog", (p) => !(import.meta.env.PROD && p.data.draft));
  const otherSlugs = new Set(all.filter((p) => !p.id.startsWith(`${lang}/`)).map((p) => slugOf(p.id)));
  return all
    .filter((p) => p.id.startsWith(`${lang}/`))
    .sort((a, b) => a.data.date.getTime() - b.data.date.getTime())
    .map((p, i) => ({ ...p, slug: slugOf(p.id), no: i + 1, hasTranslation: otherSlugs.has(slugOf(p.id)) }))
    .reverse();
}
