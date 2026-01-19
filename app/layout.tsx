import type React from "react"
import type { Metadata } from 'next'
import {Analytics} from "@vercel/analytics/next"
import {Toaster} from "@/components/ui/toaster"
import "./globals.css"

// Provide a metadata base so Next's metadata API (and any generated URLs) use the canonical host
export const metadata: Metadata = {
    metadataBase: new URL('https://www.wesmun.com'),
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <title>WESMUN 2026</title>
            <link rel="icon" href="/wesmun.svg"/>
            {/* Explicit canonical for the site root */}
            <link rel="canonical" href="https://www.wesmun.com/" />
            {/* Inline critical CSS for instant render */}
            <style dangerouslySetInnerHTML={{__html: `
                @font-face{font-family:"Playfair Display";src:url("/fonts/PlayfairDisplay-Regular.otf") format("opentype");font-weight:100 900;font-style:normal;font-display:swap}
                :root{--background:oklch(0 0 0);--foreground:oklch(1 0 0);--primary:#e0aa3e;--primary-foreground:oklch(0 0 0);--muted-foreground:oklch(0.7 0 0);--border:oklch(0.2 0 0)}
                *{border-color:var(--border);outline-color:rgba(224,170,62,0.5)}
                body{background-color:oklch(0 0 0);color:oklch(1 0 0);font-family:"Tan Mon Cheri",sans-serif;margin:0;-webkit-font-smoothing:antialiased}
                .font-title{font-family:"Playfair Display",cursive}
                .text-primary{color:var(--primary)}
            `.replace(/\s+/g, ' ')}} />
            {/* Preload critical font */}
            <link
                rel="preload"
                href="/fonts/PlayfairDisplay-Regular.otf"
                as="font"
                type="font/otf"
                crossOrigin="anonymous"
                fetchPriority="high"
            />
        </head>
        <body className="font-sans antialiased">
        {children}
        <Toaster />
        <Analytics/>
        </body>
        </html>
    )
}
