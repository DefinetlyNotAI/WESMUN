import {Committee} from "@/lib/types";
import {signupBaseUrl} from "@/lib/data/signup";


// Committees
export const committees: Committee[] = [
    {
        id: "who",
        name: "World Health Organization",
        abbreviation: "WHO",
        description: "The WHO coordinates global health initiatives, focusing on preventing disease, promoting health, and responding to international health crises.",
        detailedDescription: "Delegates will examine the ethics of health aid, digital influence, and manipulation in global health. The WHO committee challenges participants to navigate political, technological, and humanitarian dimensions of healthcare.",
        topics: [
            "Discussing the weaponization of health aid and its role in political influence and conditional assistance during global health crises.",
            "Addressing digital warfare and psychological manipulation and their impact on global mental health through information control."
        ],
        chair1: {name: "William Bryant", image: "/img/com/single/William_Bryant_WHO.webp"},
        chair2: {name: "Hussam El Haj", image: "/img/com/single/Hussam_El_Haj_WHO.webp"},
        chair3: {name: "Habiba Mohamed", image: "/img/com/single/Habiba_Mohamed_WHO.webp"},
        bannerImage: "/img/com/banner/who.webp",
        signupLink: {
            internal: `${signupBaseUrl.internal}?usp=pp_url&entry.547941527=WHO&entry.1245311872=Yes`,
            external: `${signupBaseUrl.external}?usp=pp_url&entry.8456407=WHO&entry.905580654=Yes`
        },
        backgroundGuidePdf: "/guides/beginner/WHO.pdf",
        committeeSize: "30-35 delegates",
        difficulty: "Beginner",
        email: "who@wesmun.com"
    },
    {
        id: "unhrc",
        name: "United Nations Human Rights Council",
        abbreviation: "UNHRC",
        description: "The UNHRC works to promote and protect human rights globally through dialogue, monitoring, and recommendations.",
        detailedDescription: "Delegates in UNHRC will explore how nations can uphold human rights amid modern security concerns and technological developments. This committee examines where ethics meet surveillance and state power.",
        topics: [
            "Maintaining a balance between national security and human rights in counterterrorism efforts and sanctioned regions.",
            "Overseeing emerging technologies to stop the misuse of AI and government surveillance."
        ],
        chair1: {name: "Mohamed Matthana", image: "/img/com/single/Mohamed_Matthana_UNHRC.webp"},
        chair2: {name: "Imani Karabu", image: "/img/com/single/Imani_Karabu_UNHRC.webp"},
        chair3: {name: "Ayten Toeima", image: "/img/com/single/AytenToeima_UNHRC.webp"},
        bannerImage: "/img/com/banner/unhrc.webp",
        signupLink: {
            internal: `${signupBaseUrl.internal}?usp=pp_url&entry.547941527=UNHRC&entry.1245311872=Yes`,
            external: `${signupBaseUrl.external}?usp=pp_url&entry.8456407=UNHRC&entry.905580654=Yes`
        },
        backgroundGuidePdf: "/guides/beginner/UNHRC.pdf",
        committeeSize: "30-35 delegates",
        difficulty: "Beginner",
        email: "unhrc@wesmun.com"
    },
    {
        id: "ga3",
        name: "General Assembly Third Committee",
        abbreviation: "GA3",
        description: "GA3 handles social, humanitarian, and cultural issues including human rights, equality, and social development.",
        detailedDescription: "This committee explores the human side of global politics. Delegates will address exploitation, conflict, and human rights abuses through multilateral negotiation.",
        topics: [
            "Combating human trafficking and modern slavery in transnational networks.",
            "Addressing human rights violations arising from geopolitical conflicts."
        ],
        chair1: {name: "Raghad Mohammed", image: "/img/com/single/Raghad_Mohammed_GA3.webp"},
        chair2: {name: "Oshian Thada Magar", image: "/img/com/single/Oshian_Thada_Magar_GA3.webp"},
        chair3: {name: "Tasnime Zermout", image: "/img/com/single/Tasnime_Zermout_GA3.webp"},
        bannerImage: "/img/com/banner/ga3.webp",
        signupLink: {
            internal: `${signupBaseUrl.internal}?usp=pp_url&entry.547941527=GA3&entry.1245311872=Yes`,
            external: `${signupBaseUrl.external}?usp=pp_url&entry.8456407=GA3&entry.905580654=Yes`
        },
        backgroundGuidePdf: "/guides/beginner/GA3.pdf",
        committeeSize: "30-35 delegates",
        difficulty: "Beginner",
        email: "ga3@wesmun.com"
    },
    {
        id: "f1",
        name: "Formula 1 Committee",
        abbreviation: "F1",
        description: "A dynamic, debate-driven committee that simulates governance and ethical discussions within the Formula 1 world.",
        detailedDescription: "Delegates will analyze decision-making and fairness in the world’s most elite motorsport. They will assess safety, competitiveness, and consistency through structured policy debate.",
        topics: [
            "Evaluating the role of sprint races in Formula 1: considering whether to retain, modify, or discontinue them in light of competitive balance, safety, and fan engagement.",
            "Ensuring consistency in driver penalties: weighing the pursuit of fairness against the complex and variable nature of racing incidents."
        ],
        chair1: {name: "Adham Hamdy", image: "/img/com/single/Adham_Hamdy_F1.webp"},
        chair2: {name: "Omar Moamen", image: "/img/com/single/Omar_Moamen_F1.webp"},
        chair3: {name: "Rayyan Chams", image: "/img/com/single/Rayyan_Chams_F1.webp"},
        bannerImage: "/img/com/banner/f1.webp",
        signupLink: {
            internal: `${signupBaseUrl.internal}?usp=pp_url&entry.547941527=F1&entry.1245311872=Yes`,
            external: `${signupBaseUrl.external}?usp=pp_url&entry.8456407=F1&entry.905580654=Yes`
        },
        backgroundGuidePdf: "/guides/beginner/F1.pdf",
        committeeSize: "30-35 delegates",
        difficulty: "Beginner",
        email: "f1@wesmun.com"
    },
    {
        id: "unicef",
        name: "United Nations International Children's Emergency Fund",
        abbreviation: "UNICEF (JR)",
        description: "UNICEF focuses on protecting children's rights, ensuring access to education, and responding to humanitarian crises worldwide.",
        detailedDescription: "UNICEF works globally to promote and protect the rights and well-being of every child, especially those affected by conflict, poverty, or displacement. Delegates will explore the intersection between geopolitics, humanitarian aid, and children’s welfare in the modern world.",
        topics: [
            "Addressing how global challenges such as climate change, natural disasters, and pandemics affect children's health and well-being."
        ],
        chair1: {name: "Wasiq Nabeel", image: "/img/com/single/Wasiq_Nabeel_UNICEF.webp"},
        chair2: {name: "Zaina Islam", image: "/img/com/single/Zeina_Islam_UNICEF.webp"},
        chair3: {name: "Ahmed Saad", image: "/img/com/single/Ahmed_Saad_UNICEF.webp"},
        bannerImage: "/img/com/banner/unicef.webp",
        signupLink: {
            internal: `${signupBaseUrl.internal}?usp=pp_url&entry.547941527=UNICEF+(junior)&entry.1245311872=Yes`,
            external: `${signupBaseUrl.external}?usp=pp_url&entry.8456407=UNICEF+(junior)&entry.905580654=Yes`
        },
        backgroundGuidePdf: "/guides/beginner/UNICEF.pdf",
        committeeSize: "30-35 delegates",
        difficulty: "Beginner",
        email: "unicef@wesmun.com"
    },

    // Intermediate
    {
        id: "ga1",
        name: "General Assembly First Committee",
        abbreviation: "GA1",
        description: "GA1 focuses on international peace and security, disarmament, and the regulation of weapons and defense technologies.",
        detailedDescription: "Delegates in GA1 will debate the future of warfare, automation, and global defense compliance. The committee will focus on how new technologies reshape conflict and deterrence.",
        topics: [
            "Regulating cross-border transfers of emerging military technologies.",
            "Addressing the geopolitical risks of proxy conflicts and foreign military support."
        ],
        chair1: {name: "Leen Elgharably", image: "/img/com/single/Leen_ElgharablyGA1.webp"},
        chair2: {name: "Khalid Ashraf", image: "/img/com/single/Khalid_Ashraf_GA1.webp"},
        chair3: {name: "Rahul Girish", image: "/img/com/single/Rahul_Girish_GA1.webp"},
        bannerImage: "/img/com/banner/ga1.webp",
        signupLink: {
            internal: `${signupBaseUrl.internal}?usp=pp_url&entry.547941527=GA1&entry.1245311872=Yes`,
            external: `${signupBaseUrl.external}?usp=pp_url&entry.8456407=GA1&entry.905580654=Yes`
        },
        backgroundGuidePdf: "/guides/intermediate/GA1.pdf",
        committeeSize: "30-35 delegates",
        difficulty: "Intermediate",
        email: "ga1@wesmun.com"
    },
    {
        id: "arab-league",
        name: "Arab League",
        abbreviation: "AR",
        description: "A regional intergovernmental organization representing the Arab world, focused on unity, stability, and development.",
        detailedDescription: "The Arab League committee addresses critical regional issues affecting Arab states. Delegates will discuss information integrity, water scarcity, and political stability in the Middle East.",
        topics: [
            "Addressing the rise in violence due to political corruption and the lack of cooperation between MENA countries.",
            "Addressing resource scarcity and water security as growing threats to regional stability and unity."
        ],
        chair1: {name: "Layal Melhem", image: "/img/com/single/Layal_Melhem_AL.webp"},
        chair2: {name: "Nadine Tabche", image: "/img/com/single/Nadine_Tabche_AL.webp"},
        chair3: {name: "Fatima Hatem", image: "/img/com/single/Fatima_Hatem_AL.webp"},
        bannerImage: "/img/com/banner/AL.webp",
        signupLink: {
            internal: `${signupBaseUrl.internal}?usp=pp_url&entry.547941527=Arab+League+(AR)&entry.1245311872=Yes`,
            external: `${signupBaseUrl.external}?usp=pp_url&entry.8456407=Arab+League+(AR)&entry.905580654=Yes`
        },
        backgroundGuidePdf: "/guides/intermediate/AL.pdf",
        committeeSize: "20 delegates",
        difficulty: "Intermediate",
        email: "arab.league@wesmun.com"
    },
    {
        id: "unodc",
        name: "United Nations Office on Drugs and Crime",
        abbreviation: "UNODC",
        description: "UNODC works to combat drugs, crime, corruption, and terrorism through international cooperation and legal frameworks.",
        detailedDescription: "Delegates will engage with modern issues of crime, addiction, and digital networks. The committee aims to create solutions to safeguard vulnerable populations and promote justice.",
        topics: [
            "Addressing the challenges faced by individuals who use substances, including homelessness, violence, and the impact of drug distribution.",
            "Addressing the causes of cybercrime and terrorism financing through digital and financial networks."
        ],
        chair1: {name: "Kabeer Anil", image: "/img/com/single/Kabeer_Anil_UNODC.webp"},
        chair2: {name: "Amaan Anas Mohtasham", image: "/img/com/single/Amaan_Anas_Mohtasham_UNODC.webp"},
        chair3: {name: "Ayia Waleed", image: "/img/com/single/Ayia_Waleed_UNODC.webp"},
        bannerImage: "/img/com/banner/unodc.webp",
        signupLink: {
            internal: `${signupBaseUrl.internal}?usp=pp_url&entry.547941527=UNODC&entry.1245311872=Yes`,
            external: `${signupBaseUrl.external}?usp=pp_url&entry.8456407=UNODC&entry.905580654=Yes`
        },
        backgroundGuidePdf: "/guides/intermediate/UNODC.pdf",
        committeeSize: "30-35 delegates",
        difficulty: "Intermediate",
        email: "unodc@wesmun.com"
    },
    {
        id: "unw",
        name: "United Nations Women",
        abbreviation: "UNW",
        description: "UN Women advocates for gender equality and the empowerment of women globally.",
        detailedDescription: "Delegates will discuss feminism’s political dynamics and the evolving digital landscape for women’s rights. The committee tackles equality beyond slogans — through geopolitics and data.",
        topics: [
            "Examining feminism as a geopolitical tool and the westernization of gender equality narratives.",
            "Discussing the challenges caused by digital oppression of women in the age of AI."
        ],
        chair1: {name: "Anthony Sami", image: "/img/com/single/Anthony_Sami_UNW.webp"},
        chair2: {name: "Drishti Lohana", image: "/img/com/single/Drishti_Lohana_UNW.webp"},
        chair3: {name: "Kamilia Akbar", image: "/img/com/single/Kamilia_Imtiaz_UNW.webp"},
        bannerImage: "/img/com/banner/unw.webp",
        signupLink: {
            internal: `${signupBaseUrl.internal}?usp=pp_url&entry.547941527=UNWOMEN&entry.1245311872=Yes`,
            external: `${signupBaseUrl.external}?usp=pp_url&entry.8456407=UNWOMEN&entry.905580654=Yes`
        },
        backgroundGuidePdf: "/guides/intermediate/UNW.pdf",
        committeeSize: "30-35 delegates",
        difficulty: "Intermediate",
        email: "unw@wesmun.com"
    },
    {
        id: "ecosoc",
        name: "Economic and Social Council",
        abbreviation: "ECOSOC",
        description: "ECOSOC coordinates the UN’s economic, social, and development activities across the globe.",
        detailedDescription: "Delegates will explore strategies to reduce inequality, strengthen cooperation, and fight transnational crime to secure global stability.",
        topics: [
            "Addressing the Geopolitical and Economic Effects of AI on Global Employment and Social Development.",
            "Addressing the rise of human trafficking networks and modern slavery as a major transnational threat to security and development."
        ],
        chair1: {name: "Lara Mazen", image: "/img/com/single/Lara_Ameen_ECOSOC.webp"},
        chair2: {name: "Omar El Houssaini", image: "/img/com/single/Omar_El_Houssaini_ECOSOC.webp"},
        chair3: {name: "Lynn Hassan", image: "/img/com/single/Lynn_Hassan_ECOSOC.webp"},
        bannerImage: "/img/com/banner/ecosoc.webp",
        signupLink: {
            internal: `${signupBaseUrl.internal}?usp=pp_url&entry.547941527=ECOSOC&entry.1245311872=Yes`,
            external: `${signupBaseUrl.external}?usp=pp_url&entry.8456407=ECOSOC&entry.905580654=Yes`
        },
        backgroundGuidePdf: "/guides/intermediate/ECOSOC.pdf",
        committeeSize: "30-35 delegates",
        difficulty: "Intermediate",
        email: "ecosoc@wesmun.com"
    },

    // Advanced
    {
        id: "unoosa",
        name: "United Nations Office for Outer Space Affairs",
        abbreviation: "UNOOSA",
        description: "UNOOSA promotes international cooperation in the peaceful use and exploration of outer space.",
        detailedDescription: "Delegates will debate the governance of space as a shared domain. Topics include cybersecurity threats to satellites and militarization of orbit.",
        topics: [
            "Governing space resource exploitation and mitigating the disastrous effects of space debris.",
            "Addressing cybersecurity threats to global satellites and the sovereignty and governance of Earth's observational data."
        ],
        chair1: {name: "Alishba Ahmed", image: "/img/com/single/Alishba_Ahmed_UNOOSA.webp"},
        chair2: {name: "Rohith John", image: "/img/com/single/Rohith_John_UNOOSA.webp"},
        chair3: {name: "Syeda Naba Adnan", image: "/img/com/single/Syeda_Naba_Adnan_UNOOSA.webp"},
        bannerImage: "/img/com/banner/unoosa.webp",
        signupLink: {
            internal: `${signupBaseUrl.internal}?usp=pp_url&entry.547941527=UNOOSA&entry.1245311872=Yes`,
            external: `${signupBaseUrl.external}?usp=pp_url&entry.8456407=UNOOSA&entry.905580654=Yes`
        },
        backgroundGuidePdf: "/guides/advanced/UNOOSA.pdf",
        committeeSize: "30-35 delegates",
        difficulty: "Advanced",
        email: "unoosa@wesmun.com"
    },
    {
        id: "unsc",
        name: "United Nations Security Council",
        abbreviation: "UNSC",
        description: "UNSC maintains international peace and security and has the authority to make binding resolutions.",
        detailedDescription: "A fast-paced and high-stakes committee dealing with global crises, security, and conflict intervention. Delegates must balance diplomacy, strategy, and realism.",
        topics: [
            "Protecting international peace amid transnational terrorism and extremist networks.",
            "Assessing the geopolitical and security implications of foreign military bases in conflict-affected regions."
        ],
        chair1: {name: "Mishall Shahid", image: "/img/com/single/Mishall_Shahid_UNSC.webp"},
        chair2: {name: "Ram Prasad", image: "/img/com/single/Ram_Prasad_UNSC.webp"},
        chair3: {name: "Antony Michael", image: "/img/com/single/Antony_Michael_UNSC.webp"},
        bannerImage: "/img/com/banner/unsc.webp",
        signupLink: {
            internal: `${signupBaseUrl.internal}?usp=pp_url&entry.547941527=UNSC&entry.1245311872=Yes`,
            external: `${signupBaseUrl.external}?usp=pp_url&entry.8456407=UNSC&entry.905580654=Yes`
        },
        backgroundGuidePdf: "/guides/advanced/UNSC.pdf",
        committeeSize: "15 delegates",
        difficulty: "Advanced",
        email: "unsc@wesmun.com"
    },
    {
        id: "pbc",
        name: "Peacebuilding Commission",
        abbreviation: "PBC",
        description: "The PBC supports peace efforts in countries emerging from conflict and coordinates international aid for stability.",
        detailedDescription: "Delegates will tackle interference, AI ethics, and the complex post-conflict rebuilding process. The PBC demands diplomacy with long-term vision.",
        topics: [
            "Addressing the militarization of humanitarian aid in active and post-conflict zones and its implications for peacebuilding.",
            "Addressing how gender-based political violence and structural discrimination hinder women's role in peacebuilding."
        ],
        chair1: {name: "Qurratulain Azza Kazmi", image: "/img/com/single/QurratulainAzzaKazmi_PBC.webp"},
        chair2: {name: "Maryam Jandali", image: "/img/com/single/Maryam_Jandali_PBC.webp"},
        chair3: {name: "Dhruv Hitesh", image: "/img/com/single/Dhruv_Hitesh_PBC.webp"},
        bannerImage: "/img/com/banner/pbc.webp",
        signupLink: {
            internal: `${signupBaseUrl.internal}?usp=pp_url&entry.547941527=PBC&entry.1245311872=Yes`,
            external: `${signupBaseUrl.external}?usp=pp_url&entry.8456407=PBC&entry.905580654=Yes`
        },
        backgroundGuidePdf: "/guides/advanced/PBC.pdf",
        committeeSize: "30-35 delegates",
        difficulty: "Advanced",
        email: "pbc@wesmun.com"
    },
    {
        id: "interpol",
        name: "INTERPOL",
        abbreviation: "INTERPOL",
        description: "CLASSIFIED",
        detailedDescription: "CLASSIFIED INFORMATION",
        topics: ["CLASSIFIED INFORMATION"],
        chair1: {name: "Saisha Shukla", image: "/img/com/single/Saisha_Shukla_INTERPOL.webp"},
        chair2: {name: "Joshua John Ligo", image: "/img/com/single/Joshua_John_Ligo_INTERPOL.webp"},
        chair3: {name: "Dua Ghani", image: "/img/com/single/Dua_Ghani_INTERPOL.webp"},
        bannerImage: "/img/com/banner/interpol.webp",
        signupLink: {
            internal: `${signupBaseUrl.internal}?usp=pp_url&entry.547941527=INTERPOL&entry.1245311872=Yes`,
            external: `${signupBaseUrl.external}?usp=pp_url&entry.8456407=INTERPOL&entry.905580654=Yes`
        },
        backgroundGuidePdf: "CLASSIFIED",
        committeeSize: "CLASSIFIED",
        difficulty: "Advanced",
        email: "interpol@wesmun.com"
    },
    {
        id: "hcc",
        name: "Historical Crisis Committee",
        abbreviation: "HCC",
        description: "CLASSIFIED",
        detailedDescription: "CLASSIFIED INFORMATION",
        topics: ["CLASSIFIED INFORMATION"],
        chair1: {name: "Eyad Samara", image: "/img/com/single/Eyad_Samara_HCC.webp"},
        chair2: {name: "Hamza Mohamad", image: "/img/com/single/Hamza_Mohamad_Al_Wahsh_HCC.webp"},
        chair3: {name: "Rawan Helali", image: "/img/com/single/Rawan_Helali_HCC.webp"},
        bannerImage: "/img/com/banner/hcc_final.webp",
        signupLink: {
            internal: `${signupBaseUrl.internal}?usp=pp_url&entry.547941527=HCC&entry.1245311872=Yes`,
            external: `${signupBaseUrl.external}?usp=pp_url&entry.8456407=HCC&entry.905580654=Yes`
        },
        backgroundGuidePdf: "CLASSIFIED",
        committeeSize: "CLASSIFIED",
        difficulty: "Advanced",
        email: "hcc@wesmun.com",
        best: true
    }
];

export const CommitteeDetailPage = {
    BACK_BUTTON: "Back to Committees",
    COMMITTEE_LEADERSHIP_TITLE: "Committee Leadership",
    CHAIR_LABEL: "Chair",
    VICE_CHAIR_LABEL: "Vice Chair",
    ABOUT_COMMITTEE_TITLE: "About This Committee",
    TOPICS_TITLE: "Topics for Debate",
    DOWNLOAD_BG_GUIDE: "Download Background Guide",
    APPLY_BUTTON: {
        INTERNAL: "Apply via Internal Delegate Form",
        EXTERNAL: "Apply via External Delegate Link"
    },
    PLACEHOLDER_IMAGE: "/placeholder.svg",
} as const

export const CommitteeText = {
    PAGE_TITLE: "Our Committees",
    PAGE_SUBTITLE: "Choose from 15 diverse committees, each tackling critical global issues",
    TOPICS_TITLE: "Topics for Debate",
    CHAIR_LABEL: "Chair",
    VICE_CHAIR_LABEL: "Vice Chair",
    PLACEHOLDER_IMAGE: "/placeholder.svg",
} as const
