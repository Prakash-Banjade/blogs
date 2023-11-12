
export default function Video({ url }: { url: string }) {
    return <div className="aspect-w-16 aspect-h-9 z-10">
        <video src={url} autoPlay />
    </div>
}
