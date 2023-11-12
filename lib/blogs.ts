import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutoLinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import rehypePrisma from 'rehype-prism-plus' // for code highlighting, rehypeHighlight has some type issue with next-mdx-remote
import Video from "@/app/components/Video";
import CustomImage from "@/app/components/CustomImage";
import HyperLink from "@/app/components/HyperLink";

type FileTree = {
    "tree": [
        {
            "path": string
        }
    ]
}


export async function getBlogByName(fileName: string): Promise<Blog | undefined> {

    const res = await fetch(`https://raw.githubusercontent.com/prakash-banjade/my_blogs/master/${fileName}`, {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.API_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        }
    });

    if (!res.ok) return undefined;

    const rawMDX = await res.text();

    if (rawMDX === '404: Not Found') return undefined;

    const { frontmatter, content } = await compileMDX<{ title: string, date: string, tags: string[] }>({
        source: rawMDX,
        components: {
            Video,
            CustomImage,
            HyperLink
        },
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                rehypePlugins: [
                    rehypePrisma,
                    rehypeSlug,
                    [rehypeAutoLinkHeadings, {
                        behaviour: 'wrap'
                    }]
                ]
            }
        }
    })

    const id = fileName.replace(/\.mdx$/, '');
    const blogObj: Blog = {
        meta: {
            id,
            title: frontmatter.title,
            date: frontmatter.date,
            tags: frontmatter.tags,
        },
        content
    }

    return blogObj;
}

export default async function getBlogsMeta(): Promise<BlogMetaData[] | undefined> {
    const res = await fetch(`https://api.github.com/repos/prakash-banjade/my_blogs/git/trees/master?recursive=1`, {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.API_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        }
    });

    // console.log(res)

    if (!res.ok) return undefined;


    const repoFileTree: FileTree = await res.json();
    // console.log(repoFileTree)

    const filesArray = repoFileTree.tree.map(obj => obj.path).filter(path => path.endsWith('.mdx')); // processing only the mdk files

    const Blogs: BlogMetaData[] = []

    for (const file of filesArray) {
        const post = await getBlogByName(file);
        if (post) {
            const { meta } = post;
            Blogs.push(meta);
        }
    }


    return Blogs.sort((a, b) => a.date < b.date ? 1 : -1);

}