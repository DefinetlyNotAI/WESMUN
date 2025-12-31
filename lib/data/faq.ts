import {FAQ} from "@/lib/types";


// FAQs
export const faqs: FAQ[] = [
    {
        id: "what-is-mun",
        question: "What is Model United Nations?",
        answer:
            "Model United Nations (MUN) is an educational simulation where students role-play as delegates to the United Nations and simulate UN committees. Participants research countries, investigate international issues, debate, deliberate, consult, and develop solutions to world problems.",
        category: "General",
    },
    {
        id: "experience-required",
        question: "Do I need prior MUN experience to attend?",
        answer:
            "No! WESMUN welcomes delegates of all experience levels. We offer committees ranging from beginner to advanced difficulty, and our team provides comprehensive background guides and support to help first-time delegates succeed.",
        category: "General",
    },
    {
        id: "registration-cost",
        question: "How much does registration cost?",
        answer:
            "Early bird registration is 220 AED per delegate, and regular registration is 250 AED per delegate. Registration includes all conference materials, meals, and social events. More details can be found on the signup page.",
        category: "Registration",
    },
    {
        id: "registration-deadline",
        question: "When is the registration deadline?",
        answer: "The final registration deadline is January 10th, 2026. However, we encourage early registration as committee spots are limited and fill up quickly. Early bird pricing ends January 1st, 2026.",
        category: "Registration",
    },
    {
        id: "committee-assignment",
        question: "How are committee assignments made?",
        answer:
            "Committee assignments are made based on your preferences indicated during registration, your experience level, and availability. We do our best to accommodate first preferences, but cannot guarantee specific committee placements.",
        category: "Committees",
    },
    {
        id: "country-assignment",
        question: "Can I choose which country I represent?",
        answer:
            "Final country assignments will be sent out two weeks before the conference along with your background guide.",
        category: "Committees",
    },
    {
        id: "dress-code",
        question: "What is the dress code?",
        answer:
            "Western business attire is required for all committee sessions. This typically means suits or blazers with dress pants/skirts for delegates.",
        category: "Logistics",
    },
    {
        id: "meals-provided",
        question: "Are meals provided during the conference?",
        answer:
            "Yes! Your registration includes lunch on all three days of the conference, as well as snacks and refreshments during breaks. Dietary restrictions and preferences can be indicated during registration.",
        category: "Logistics",
    },
    {
        id: "awards",
        question: "Are there awards given at WESMUN?",
        answer:
            "Yes! We recognize outstanding delegates with awards including Best Delegate, Distinguished Delegate, Best Orator and Best Research in each committee. Awards are based on research, diplomacy, speaking ability, and overall contribution to committee debate and are decided by your chairs.",
        category: "General",
    },
]

export const FAQText = {
    PAGE_TITLE: "Frequently Asked Questions",
    PAGE_SUBTITLE: "Find answers to common questions about WESMUN 2026",
    CATEGORY_ALL: "all",
} as const
