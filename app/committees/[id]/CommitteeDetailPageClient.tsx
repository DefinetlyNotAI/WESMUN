"use client"

import Link from "next/link"
import Image from "next/image"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Navigation} from "@/components/navigation"
import {Footer} from "@/components/footer"
import {ScrollToTop} from "@/components/scroll-to-top"
import {ArrowLeft, Download, ExternalLink, Users} from "lucide-react"
import {CommitteeDetailPage} from "@/lib/data/committees";
import {CommitteeDetailPageClientProps} from "@/lib/types";
import React, {useEffect, useState} from "react"
import {checkUrlExists} from "@/lib/checkResource"
import {MdEmail} from "react-icons/md";
import {useToast} from "@/hooks/use-toast"

export default function CommitteeDetailPageClient({committee}: CommitteeDetailPageClientProps) {
    const {toast} = useToast()
    const [pdfAvailable, setPdfAvailable] = useState<boolean | null>(null)
    const [chair1Src, setChair1Src] = useState(committee.chair1?.image || CommitteeDetailPage.PLACEHOLDER_IMAGE)
    const [chair2Src, setChair2Src] = useState(committee.chair2?.image || CommitteeDetailPage.PLACEHOLDER_IMAGE)
    const [chair3Src, setChair3Src] = useState(committee.chair3?.image || CommitteeDetailPage.PLACEHOLDER_IMAGE)

    // Easter egg for HCC committee (deferred to idle time to avoid main-thread lag)
    useEffect(() => {
        if (!committee.easterEggMsg) return;

        let mounted = true;
        let idleId: number | undefined;
        let timeoutId: number | undefined;

        const runToast = () => {
            if (!mounted) return;
            timeoutId = window.setTimeout(() => {
                if (!mounted) return;
                toast({
                    title: committee.easterEggMsg,
                    duration: 2000,
                });
            }, 500);
        };

        if (typeof window !== "undefined") {
            // requestIdleCallback is not on all TS lib defs, so cast to any
            const w = window as any;
            if ("requestIdleCallback" in w) {
                idleId = w.requestIdleCallback(runToast);
            } else {
                timeoutId = window.setTimeout(runToast, 0);
            }
        }

        return () => {
            mounted = false;
            if (idleId !== undefined) (window as any).cancelIdleCallback?.(idleId);
            if (timeoutId !== undefined) clearTimeout(timeoutId);
        };
    }, [committee.easterEggMsg, toast]);


    useEffect(() => {
        let mounted = true
        async function check() {
            const ok = await checkUrlExists(committee.backgroundGuidePdf)
            if (!mounted) return
            setPdfAvailable(ok)
        }
        check().catch(console.error)
        return () => { mounted = false }
    }, [committee.backgroundGuidePdf])

    // fallback handlers update state so Next/Image will render placeholder
    const handleChair1Error = () => setChair1Src(CommitteeDetailPage.PLACEHOLDER_IMAGE)
    const handleChair2Error = () => setChair2Src(CommitteeDetailPage.PLACEHOLDER_IMAGE)
    const handleChair3Error = () => setChair3Src(CommitteeDetailPage.PLACEHOLDER_IMAGE)

    return (
        <div className="min-h-screen">
            <ScrollToTop/>
            <Navigation/>

            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-5xl animate-in fade-in duration-1000">
                    {/* Back Button */}
                    <Link
                        href="/committees"
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
                        onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
                    >
                        <ArrowLeft className="mr-2" size={16}/>
                        {CommitteeDetailPage.BACK_BUTTON}
                    </Link>

                    {/* Image-first banner: image controls height, constrained by max-height so layout stays modular */}
                    <div className="relative w-full rounded-t-xl overflow-hidden mb-8">
                        <Image
                            src={committee.bannerImage || CommitteeDetailPage.PLACEHOLDER_IMAGE}
                            alt={`${committee.name} Banner`}
                            width={1280}
                            height={720}
                            priority
                            className="block w-full h-auto object-contain max-h-[60vh] md:max-h-[50vh] rounded-t-xl"
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 1280px, 1280px"
                        />
                    </div>

                    {/* Committee Header */}
                    <div className="mb-8">
                        <div className="flex flex-wrap gap-3 mb-4">
                            <Badge variant="secondary" className="text-base px-4 py-1">
                                {committee.abbreviation}
                            </Badge>
                            <Badge
                                variant="outline"
                                className={`text-base px-4 py-1 ${
                                    committee.difficulty === "Beginner"
                                        ? "border-green-500 text-green-500"
                                        : committee.difficulty === "Intermediate"
                                            ? "border-yellow-500 text-yellow-500"
                                            : "border-red-500 text-red-500"
                                }`}
                            >
                                {committee.difficulty}
                            </Badge>
                            <Badge variant="outline" className="text-base px-4 py-1 border-muted-foreground/50">
                                <Users size={14} className="mr-2"/>
                                {committee.committeeSize}
                            </Badge>
                            <a href={`mailto:${committee.email}`} className="inline-block">
                                <Badge variant="outline" className="text-base px-4 py-1 border-muted-foreground/50">
                                    <MdEmail size={14} className="mr-2" />
                                    {committee.email}
                                </Badge>
                            </a>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{committee.name}</h1>
                        <p className="text-lg text-muted-foreground text-pretty">{committee.description}</p>
                    </div>

                    {/* Leadership section */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle>{CommitteeDetailPage.COMMITTEE_LEADERSHIP_TITLE}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {committee.chair1 && (
                                    <div className="flex items-center gap-4">
                                        <Image
                                            src={chair1Src}
                                            alt={committee.chair1.name}
                                            width={80}
                                            height={80}
                                            className="rounded-full object-cover border-2 border-primary"
                                            onError={handleChair1Error}
                                        />
                                        <div>
                                            <p className="text-lg font-semibold text-foreground">{committee.chair1.name}</p>
                                        </div>
                                    </div>
                                )}

                                {committee.chair2 && (
                                    <div className="flex items-center gap-4">
                                        <Image
                                            src={chair2Src}
                                            alt={committee.chair2.name}
                                            width={80}
                                            height={80}
                                            className="rounded-full object-cover border-2 border-primary"
                                            onError={handleChair2Error}
                                        />
                                        <div>
                                            <p className="text-lg font-semibold text-foreground">{committee.chair2.name}</p>
                                        </div>
                                    </div>
                                )}

                                {committee.chair3 && (
                                    <div className="flex items-center gap-4">
                                        <Image
                                            src={chair3Src}
                                            alt={committee.chair3.name}
                                            width={80}
                                            height={80}
                                            className="rounded-full object-cover border-2 border-primary"
                                            onError={handleChair3Error}
                                        />
                                        <div>
                                            <p className="text-lg font-semibold text-foreground">{committee.chair3.name}</p>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </CardContent>
                    </Card>

                    {/* About Section */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle>{CommitteeDetailPage.ABOUT_COMMITTEE_TITLE}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed">{committee.detailedDescription}</p>
                        </CardContent>
                    </Card>

                    {/* Topics Section */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle>{CommitteeDetailPage.TOPICS_TITLE}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {committee.topics.map((topic, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-primary font-bold text-lg mt-0.5">{index + 1}.</span>
                                        <span className="text-muted-foreground leading-relaxed">{topic}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {committee.backgroundGuidePdf.includes("CLASSIFIED") ? (
                            <Button variant="outline" className="h-12 text-base bg-transparent opacity-60 cursor-not-allowed" disabled>
                                CLASSIFIED
                            </Button>
                        ) : (
                            <Button asChild variant="outline" className={`h-12 text-base bg-transparent ${pdfAvailable === false ? 'opacity-60 cursor-not-allowed' : ''}`} aria-disabled={pdfAvailable === false}>
                                <a href={committee.backgroundGuidePdf} download onClick={(e) => { if (pdfAvailable === false) e.preventDefault() }} title={pdfAvailable === false ? 'We are working on creating the background guides' : ''}>
                                    <Download className="mr-2" size={12}/>
                                    {CommitteeDetailPage.DOWNLOAD_BG_GUIDE}
                                </a>
                            </Button>
                        )}

                        <Button
                            asChild
                            className="h-12 text-base bg-primary text-primary-foreground hover:bg-primary/90"
                            onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
                        >
                            <Link href={committee.signupLink.internal} target="_blank">
                                {CommitteeDetailPage.APPLY_BUTTON.INTERNAL}
                                <ExternalLink className="ml-2" size={12}/>
                            </Link>
                        </Button>

                        <Button
                            asChild
                            className="h-12 text-base bg-primary text-primary-foreground hover:bg-primary/90"
                            onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
                        >
                            <Link href={committee.signupLink.external} target="_blank">
                                {CommitteeDetailPage.APPLY_BUTTON.EXTERNAL}
                                <ExternalLink className="ml-2" size={12}/>
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}
