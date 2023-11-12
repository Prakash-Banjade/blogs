import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { ReactNode } from "react"

type Props = {
    children: ReactNode,
    title: ReactNode | string
}

export default function TooltipV2({ children, title }: Props) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>{children}</TooltipTrigger>
                <TooltipContent>
                    {title}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    )
}