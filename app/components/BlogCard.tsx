import { TypographyH1, TypographyH2, TypographyH3 } from '@/components/utils/Typography';
import { getBlogByName } from '@/lib/blogs'
import { format } from 'date-fns';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link';


export default async function BlogCard({ blog }: { blog: BlogMetaData }) {

    const res = await getBlogByName(blog.id + '.mdx');

    if (!res) return ''

    const { meta: { title, date, id } } = res;
    const pubdate = new Date(date);
    const dateAgo = format(pubdate, 'MMMM d, yyyy');

    return (
        <>
            <Card className="border-none w-full shadow-none">
                <CardHeader className='px-0'>
                    <TypographyH2 className='border-none scroll-m-20 text-4xl mb-5 font-extrabold tracking-tight lg:text-5xl'>
                        <Link href={`/blogs/${id}`} className='hover:text-main hover:underline focus:text-main focus:underline focus-visible:text-main focus-visible:underline'>{title}</Link>
                    </TypographyH2>
                    <CardDescription>
                        <time dateTime={pubdate.toLocaleDateString()} title={pubdate.toLocaleDateString()}>{dateAgo}</time>
                    </CardDescription>
                </CardHeader>
                {/* <CardContent>
                    <p className='text-muted-foreground text-sm'>{String(content).slice(0, 100)}</p>
                </CardContent> */}
                <CardFooter className='px-0'>
                    <Button variant="link" className="text-main p-0" asChild>
                        <Link href={`/blogs/${id}`}>Read More</Link>
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}
