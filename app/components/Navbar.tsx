"use client"

import Image from "next/image";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "./ModeToggle";
import ProfilePic from '../../public/profilePIc.jpg'
import { Button } from "@/components/ui/button";

const Navbar = () => {

    const pathName = usePathname();

    return (
        <nav className="border-b border-border min-w-full sticky top-0 z-50 backdrop-blur-3xl bg-background/80 ">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between px-3 py-2 max-w-maxW mx-auto gap-1.5">
                <Link href="/" className="flex items-center gap-3">
                    <Image src={ProfilePic} alt="Prakash Banjade Image" className="rounded-[50%]" height={45} width={45} priority={true} title="Prakash Banjade" />
                    <span className="scroll-m-20 text-3xl font-semibold tracking-wider first:mt-0 text-main uppercase">Prakash Blogs</span>
                </Link>

                <div className="flex items-center justify-between gap-3">
                    <ul className="flex items-center">
                        <li>
                            <Button variant="link" asChild className={pathName === '/aboutMe' ? 'text-main' : 'opacity-80'}>
                                <Link href="/aboutMe" scroll={false}>About Me</Link>
                            </Button>
                        </li>
                        <li>
                            <Button variant="link" asChild className={pathName === '/contactMe' ? 'text-main' : 'opacity-80'}>
                                <Link href="/contactMe" scroll={false}>Contact Me</Link>
                            </Button>
                        </li>
                    </ul>
                    <ModeToggle />
                </div>
            </div>
        </nav >
    )
}

export default Navbar
