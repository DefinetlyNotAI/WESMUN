"use client"

import React, {useEffect, useMemo, useState} from "react"
import Link from "next/link"
import Image from "next/image"
import {Card, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Navigation} from "@/components/navigation"
import {Footer} from "@/components/footer"
import {ScrollToTop} from "@/components/scroll-to-top"
import {ArrowRight, Users, Download} from "lucide-react"
import {committees, CommitteeText} from "@/lib/data/committees"
import {checkImageExists, checkUrlExists} from "@/lib/checkResource"
import {MdEmail} from "react-icons/md";

export default function CommitteesPage() {
    const [query, setQuery] = useState("")
    const [difficulty, setDifficulty] = useState<"All" | "Beginner" | "Intermediate" | "Advanced">("All")

    // track which committees have valid banners and which have pdfs
    const [visibleCommittees, setVisibleCommittees] = useState(() => committees)
    const [pdfAvailableMap, setPdfAvailableMap] = useState<Record<string, boolean>>({})

    // On mount: validate banner images and PDFs (client-side). We purposely do not remove the
    // committee server-side because this page is client-side. For performance we perform checks
    // in parallel but with modest timeouts in lib/checkResource.
    useEffect(() => {
        let mounted = true

        async function validateResources() {
            const bannerChecks = await Promise.all(
                committees.map(async (c) => ({ id: c.id, ok: await checkImageExists(c.bannerImage || CommitteeText.PLACEHOLDER_IMAGE) }))
            )
            const visible = committees.filter((c) => bannerChecks.find((b) => b.id === c.id)?.ok)

            const pdfEntries = await Promise.all(
                committees.map(async (c) => ({ id: c.id, ok: await checkUrlExists(c.backgroundGuidePdf) }))
            )

            if (!mounted) return
            const pdfMap: Record<string, boolean> = {}
            pdfEntries.forEach((p) => (pdfMap[p.id] = p.ok))

            setVisibleCommittees(visible)
            setPdfAvailableMap(pdfMap)
        }

        validateResources().catch(console.error)

        return () => {
            mounted = false
        }
    }, [])

    // EASTER EGG
    const handleSearch = (q: string) => {
        const normalized = q.trim().toLowerCase()
        if (normalized.includes("shahm")) {
            const rickroll = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            window.open(rickroll, "_blank", "noopener,noreferrer")
            window.location.href = "https://github.com/DefinetlyNotAI"
        }
    }

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase()
        return visibleCommittees.filter((c) => {
            if (difficulty !== "All" && c.difficulty !== difficulty) return false
            if (!q) return true
            return (
                c.name.toLowerCase().includes(q) ||
                c.description.toLowerCase().includes(q) ||
                c.detailedDescription.toLowerCase().includes(q) ||
                c.topics.join(" ").toLowerCase().includes(q)
            )
        })
    }, [query, difficulty, visibleCommittees])

    return (
        <div className="min-h-screen">
            <ScrollToTop/>
            <Navigation/>

            <section className="pt-32 pb-6 px-4">
                <div className="container mx-auto animate-in fade-in duration-1000">
                    <div className="text-center mb-6">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{CommitteeText.PAGE_TITLE}</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{CommitteeText.PAGE_SUBTITLE}</p>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-between max-w-4xl mx-auto mb-6">
                        <div className="flex-1">
                            <input
                                value={query}
                                onChange={(e) => {
                                    const v = e.target.value
                                    setQuery(v)
                                    handleSearch(v)
                                }}
                                placeholder="Search committees..."
                                className="w-full bg-muted border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                aria-label="Search committees"
                            />
                        </div>
                        <div className="w-48">
                            <select
                                value={difficulty}
                                onChange={(e) => setDifficulty(e.target.value as any)}
                                className="w-full bg-muted border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                aria-label="Filter by difficulty"
                            >
                                <option>All</option>
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Advanced</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {filtered.map((committee, index) => (
                            <Link key={committee.id} href={`/committees/${committee.id}`}>
                                <Card
                                    className="bg-card border-border overflow-hidden hover:border-primary/50 transition-all cursor-pointer h-full p-0">
                                    {/* Image-first banner: image controls height, constrained by max-height so layout stays modular */}
                                    <div className="relative w-full rounded-t-xl overflow-hidden">
                                        <Image
                                            src={committee.bannerImage || CommitteeText.PLACEHOLDER_IMAGE}
                                            alt={`${committee.name} Banner`}
                                            width={1280}
                                            height={720}
                                            className="block w-full h-auto object-contain max-h-[60vh] md:max-h-[50vh] rounded-t-xl"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 1280px, 1280px"
                                            priority={index === 0}
                                        />
                                    </div>
                                    <CardHeader className="border-b border-border">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <CardTitle className="text-2xl">{committee.name}</CardTitle>
                                                    <ArrowRight className="text-primary"/>
                                                </div>
                                                <div className="flex flex-wrap gap-2 mb-3">
                                                    <Badge variant="secondary">{committee.abbreviation}</Badge>
                                                    <Badge
                                                        variant="outline"
                                                        className={
                                                            committee.difficulty === "Beginner"
                                                                ? "border-green-500 text-green-500"
                                                                : committee.difficulty === "Intermediate"
                                                                    ? "border-yellow-500 text-yellow-500"
                                                                    : "border-red-500 text-red-500"
                                                        }
                                                    >
                                                        {committee.difficulty}
                                                    </Badge>
                                                    <Badge variant="outline" className="border-muted-foreground/50">
                                                        <Users size={12} className="mr-1"/>
                                                        {committee.committeeSize}
                                                    </Badge>
                                                    <Badge variant="outline" className="border-muted-foreground/50 cursor-pointer">
                                                        <MdEmail size={12} className="mr-1" />
                                                        {committee.email}
                                                    </Badge>
                                                </div>
                                                <p className="text-sm text-muted-foreground leading-relaxed">{committee.description}</p>
                                            </div>

                                            {/* PDF indicator / download availability - show a small icon that reflects availability */}
                                            <div className="flex items-center ml-4">
                                                <button
                                                    className={`inline-flex items-center px-3 py-2 rounded-md text-sm border ${pdfAvailableMap[committee.id] ? 'bg-transparent border-transparent text-primary hover:underline' : 'bg-muted text-muted-foreground cursor-not-allowed'} `}
                                                    aria-disabled={!pdfAvailableMap[committee.id]}
                                                    title={pdfAvailableMap[committee.id] ? 'Download background guide' : 'We are working on creating the background guides'}
                                                    onClick={(e) => {
                                                        if (!pdfAvailableMap[committee.id]) {
                                                            e.preventDefault()
                                                            e.stopPropagation()
                                                        }
                                                    }}
                                                >
                                                    <Download className={pdfAvailableMap[committee.id] ? 'text-primary' : 'text-muted-foreground'} size={16} />
                                                </button>
                                            </div>

                                        </div>
                                    </CardHeader>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}
