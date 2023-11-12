import { BlogsCardSection } from "@/app/components/BlogsContainer";
import { Button } from "@/components/ui/button";
import BackBtn from "@/components/utils/BackBtn";
import { TypographyH1, TypographyH2, TypographyP } from "@/components/utils/Typography";
import getBlogsMeta, { getBlogByName } from "@/lib/blogs";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { notFound } from "next/navigation";
// import styles from './styles.module.css'


export const revalidate = 86400;

type Props = {
    params: {
        tag: string,
    }
}

export async function generateStaticParams() { // generateStaticParams won't work for revalidate = 0;
    const res = await getBlogsMeta(); // deduped

    if (res === undefined) return []

    const tags = new Set(res.map(blog => blog.tags).flat());

    return Array.from(tags).map(tag => ({ tag }))
}

export async function generateMetadata({ params: { tag } }: Props) {
    return ({
        title: `Blogs - Search for '${tag}'`,
        description: `Search results for blogs tagged with '${tag}'`
    })
}

export default async function SingleBlogPage({ params: { tag } }: Props) {

    const blogs = await getBlogsMeta();

    if (!blogs?.length) return <>
        <div className="prose prose-xl prose-slate dark:prose-invert mt-5 flex items-center flex-col gap-8">
            <h3 className="text-center">Sorry, there aren't any blogs by Prakash Banjade.</h3>

            <BackBtn text="Go to home" path="/" />
        </div>
    </>

    const tagBlogs = blogs.filter(blog => blog.tags.includes(tag));

    if (!tagBlogs.length) return <>
        <div className="prose prose-xl prose-slate dark:prose-invert mt-5 flex items-center flex-col gap-8">
            <h3 className="text-center">Sorry, no blogs available for the tag <code>#${tag}</code></h3>

            <BackBtn text="Go to home" path="/" />
        </div>
    </>


    return (
        <>
            <div className="prose prose-xl prose-slate dark:prose-invert mt-5">
                <h2>Results for <code>#{tag}</code></h2>

                <BlogsCardSection blogsMeta={tagBlogs} />
            </div>
        </>

    )
}
