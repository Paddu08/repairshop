
"use client"

import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { ButtonHTMLAttributes } from "react"

type props={
    title:string,
    classname?:string,
    variant?:"ghost" | "outline" | "default",
}& ButtonHTMLAttributes<HTMLButtonElement>

export function BackButton({
    title,variant,className, ...props
}: props) {
    const router = useRouter()
    return (
        <Button
            variant={variant}
            className={className}
            onClick={() => router.back()}
            {...props}
        >
            {title}
        </Button>
    )
}