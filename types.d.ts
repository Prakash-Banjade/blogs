type BlogMetaData = {
    id: string,
    title: string,
    date: string,
    author?: string,
    tags: string[],
}

type Blog = {
    meta: BlogMetaData,
    content: any,
}