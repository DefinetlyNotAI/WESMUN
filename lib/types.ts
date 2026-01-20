// Committees
export interface signupLink {
    internal: string,
    external: string
}

export interface Committee {
    id: string
    name: string
    abbreviation: string
    description: string
    topics: string[]
    chair1: {
        name: string
        image: string
    }
    chair2?: {
        name: string
        image: string
    }
    chair3?: {
        name: string
        image: string
    }
    bannerImage: string
    signupLink: signupLink
    detailedDescription: string
    backgroundGuidePdf: string
    committeeSize: string
    difficulty: "Beginner" | "Intermediate" | "Advanced"
    email: string
    easterEggMsg?: string;
}

export interface CommitteeDetailPageClientProps {
    committee: Committee
}

// Departments
export interface DepartmentMember {
    name: string
    position: string
}

export interface Department {
    id: string
    name: string
    description: string
    bannerImage: string
    email?: string
    team: DepartmentMember[]
}

// FAQs
export interface FAQ {
    id: string
    question: string
    answer: string
    category: "General" | "Registration" | "Committees" | "Logistics"
}

// Site Configuration (e.g. footer) and Main page
export interface Offering {
    id: string
    title: string
    description: string
    icon: string
}

// Contact Information
export interface ContactInfo {
    email: string;
    address: string;
    socialMedia: { instagram: string; tiktok: string }
}
