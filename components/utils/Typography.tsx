import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Prop = {
    children: ReactNode,
    className?: string
}

export function TypographyH1({ children, className }: Prop) {
    return (
        <h1 className={twMerge("scroll-m-20 text-4xl mb-5 font-extrabold tracking-tight lg:text-5xl", className)}>
            {children}
        </h1>
    )
}

export function TypographyH2({ children, className }: Prop) {
    return (
        <h2 className={twMerge("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)}>
            {children}
        </h2>
    )
}


export function TypographyH3({ children, className }: Prop) {
    return (
        <h3 className={twMerge("scroll-m-20 text-2xl font-semibold tracking-tight", className)}>
            {children}
        </h3>
    )
}


export function TypographyH4({ children, className }: Prop) {
    return (
        <h4 className={twMerge("scroll-m-20 text-xl font-semibold tracking-tight", className)}>
            {children}
        </h4>
    )
}


export function TypographyP({ children, className }: Prop) {
    return (
        <p className={twMerge("leading-7 [&:not(:first-child)]:mt-6", className)}>
            {children}
        </p>
    )
}


