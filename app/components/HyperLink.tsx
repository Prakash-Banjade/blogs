type Prop = {
    href: string,
    content: string
}

export default function HyperLink({href, content}: Prop) {
    return (
        <a href={href} rel="noopener noreferrer" target="_blank" className="text-main">{content}</a>
    )
}
