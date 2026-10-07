import { cn } from "@/lib/utils"
import Link from "next/link"
import { BoxReveal } from "../reveal-animations"
import { ReactNode } from "react"

export const SectionHeader = ({ id, title, desc, className }: { id: string, title: string | ReactNode, desc?: string, className?: string }) => {
  return (

    <div className={cn("relative mb-10 md:mb-14", className)}>
      <Link href={`#${id}`}>
        <BoxReveal width="100%">
          <h2
            className={cn(
              "text-3xl text-center md:text-5xl font-bold",
              "text-foreground"
            )}
          >
            {title}
          </h2>
        </BoxReveal>
      </Link>
      <p className="mx-auto line-clamp-4 max-w-3xl font-normal text-base text-center text-muted-foreground">
        {desc}
      </p>
    </div>
  )
}
