import getBlogsMeta from "@/lib/blogs"
import BlogCard from "./BlogCard";
import { Separator } from "@/components/ui/separator";


export const revalidate = 86400;

export function BlogsCardSection({ blogsMeta }: { blogsMeta: BlogMetaData[] }) {
    return (
        <section className="mt-8 flex flex-col">
            {
                blogsMeta.map((blog, i) => (
                    <div key={blog.id}>
                        <BlogCard blog={blog} />
                        {
                            i !== blogsMeta.length - 1 && <Separator className="my-5" />
                        }
                    </div>
                ))
            }
        </section>
    )
}

export default async function BlogsContainer() {
    const blogsMeta = await getBlogsMeta();

    if (!blogsMeta) return <p>No posts to view!</p>


    return <BlogsCardSection blogsMeta={blogsMeta} />
}


