import Image from "next/image";

type Props = {
    src: string,
    alt: string,
    priority?: boolean,
}

export default function CustomImage({ src, alt, priority }: Props) {
    return (
        <div className="h-full w-full">
            <Image
                src={src}
                alt={alt}
                priority={priority}
                height={650}
                width={650}
                className="rounded-lg mx-auto"
            />
        </div>
    )
}