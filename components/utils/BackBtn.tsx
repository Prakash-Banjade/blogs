'use client'

import { Button } from "../ui/button";
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { useRouter } from "next/navigation";

type Prop = {
    text?: string,
    path?: string,
}

export default function BackBtn({ text, path }: Prop) {

    const router = useRouter();

    return <Button variant="outline" className="flex gap-2" size={text ? "default" : 'icon'} onClick={() => path ? router.push(path) : router.back()}>
        <ArrowLeftIcon />
        {text ? text : ''}
    </Button >
}