import CommitteeDetailPageClient from "./CommitteeDetailPageClient"
import {notFound, redirect} from "next/navigation"
import {committees} from "@/lib/data/committees"
import type { Metadata } from 'next'
import type { Committee } from '@/lib/types'

// Generate static paths for SSG
export function generateStaticParams() {
    return committees.map((committee) => ({id: committee.id}))
}

// Provide a user-selected canonical for each dynamic committee page
export async function generateMetadata({ params }: any): Promise<Metadata> {
    const resolvedParams = await params
    const id = resolvedParams?.id
    const idStr = id == null ? undefined : String(id)

    // Try exact match first, then case-insensitive fallback so metadata is correct
    let committee: Committee | undefined = committees.find((c) => c.id === String(idStr))
    if (!committee && idStr) {
        committee = committees.find((c) => c.id.toLowerCase() === idStr.toLowerCase())
    }

    if (!committee) {
        return {}
    }

    return {
        alternates: {
            canonical: `https://wesmun.com/committees/${committee.id}`,
        },
        title: committee.name || 'Committee',
        description: committee.description || undefined,
    }
}

// Server component
export default async function CommitteeDetailPage(props: any) {
    // Defensive resolution: params itself or its id may be a Promise/thenable (per Next generated types)
    let params = props?.params
    if (params && typeof (params as any).then === 'function') {
        params = await params
    }

    let id: any = params?.id ?? params
    if (id && typeof (id as any).then === 'function') {
        id = await id
    }

    const idStr = id == null ? undefined : String(id)

    // Try exact lookup first
    let committee = (idStr == null) ? undefined : committees.find((c) => c.id === idStr)

    if (!committee && idStr) {
        // Case-insensitive match: redirect to canonical path if found
        const ciMatch = committees.find((c) => c.id.toLowerCase() === idStr.toLowerCase())
        if (ciMatch) {
            // Redirect to the canonical (correctly-cased) id
            redirect(`/committees/${ciMatch.id}`)
        }
    }

    // If still not found, return 404
    if (!committee) {
        notFound()
    }

    return <CommitteeDetailPageClient committee={committee}/>
}
