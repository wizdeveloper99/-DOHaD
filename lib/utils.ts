import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const headingStyles = "text-xl md:text-2xl xl:text-3xl [@media(min-height:768px)]:xl:text-5xl [@media(min-height:850px)]:2xl:text-6xl font-bold text-foreground leading-tight"
