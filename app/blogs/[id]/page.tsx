import { Button } from "@/components/ui/button";
import BackBtn from "@/components/utils/BackBtn";
import { TypographyH1, TypographyH2 } from "@/components/utils/Typography";
import getBlogsMeta, { getBlogByName } from "@/lib/blogs";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { notFound } from "next/navigation";
import 'highlight.js/styles/github-dark.css'
// import styles from './styles.module.css'


export const revalidate = 86400;

type Props = {
    params: {
        id: string,
    }
}

export async function generateStaticParams() { // generateStaticParams won't work for revalidate = 0;
    const res = await getBlogsMeta(); // deduped

    if (res === undefined) return []

    return res.map(post => ({ id: post.id }))
}

export async function generateMetadata({ params: { id } }: Props) {
    const blog = await getBlogByName(id + '.mdx');

    if (!blog) return {
        title: '404 - Not Found',
        description: 'The blog you are searching for is not found.'
    }

    return {
        title: blog.meta.title,
    }
}

export default async function SingleBlogPage({ params: { id } }: Props) {

    const blog = await getBlogByName(id + '.mdx');

    if (!blog) notFound(); // this is the default, we don't need to specify return keyword, TS uses the type never.

    const { meta, content } = blog;

    const pubdate = new Date(meta.date);
    const dateAgo = formatDistanceToNow(pubdate);

    // also create separate links using the tags from meta
    const tags = meta.tags.map(tag => <Button variant="secondary" key={tag} asChild><Link href={`/tags/${tag}`}>{tag}</Link></Button>)

    return (
        <div className="mt-10 prose prose-xl prose-slate dark:prose-invert">
            <time dateTime={pubdate.toLocaleDateString()} className="mb-3" title={pubdate.toLocaleDateString()}>{dateAgo} ago</time>
            <TypographyH1>{meta.title}</TypographyH1>
            <article>
                {content}
            </article>

            <section className="mt-10">
                <TypographyH2>Related: </TypographyH2>
                <div className="flex gap-3 flex-wrap mt-3">
                    {tags}
                </div>
            </section>

            <div className="flex justify-center mt-12"><BackBtn text="Go Back" /></div>
        </div>
    )
}
