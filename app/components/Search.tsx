'use client'

import { useEffect, useRef } from 'react'
import { Label } from "@/components/ui/label"
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'


export default function Search() {

    const inputRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus();
    }, [])

    return (
        <div className="focus-within:outline-none focus-within:ring-1 focus-within:ring-ring border flex items-center rounded-md px-3 py-2.5 gap-2">
            <Label htmlFor="search" className="sr-only">Search</Label>
            <MagnifyingGlassIcon className="h-[22px] w-[22px]" />
            <input type="search" ref={inputRef} id="search" className="w-full bg-background border-none focus:outline-none focus:border-none text-sm placeholder:text-muted-foreground" placeholder="Search blogs..." />
        </div>
    )
}