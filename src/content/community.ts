/**
 * “Community content” article library — same destinations as the original
 * iMatrix site, presented in the new design. Links open the legacy article hub
 * where the full historical library lives.
 */

export type CommunityLink = { label: string; href: string };

export type CommunityGroup = {
  title: string | null;
  links: CommunityLink[];
};

export type CommunityHubSection = {
  id: string;
  title: string;
  overviewHref: string;
  intro: string;
  groups: CommunityGroup[];
};

const BASE = "https://abetterlifechiropractic.com";

export const communityHubSections: CommunityHubSection[] = [
  {
    id: "about-chiropractic",
    title: "About chiropractic care",
    overviewHref: `${BASE}/articles/general/category/39542`,
    intro:
      "Foundational articles on what chiropractic is, how it works, and who it helps.",
    groups: [
      {
        title: null,
        links: [
          { label: "What is chiropractic", href: `${BASE}/articles/general/category/40985` },
          { label: "How does it work", href: `${BASE}/articles/general/category/40986` },
          { label: "Who is chiropractic for", href: `${BASE}/articles/general/category/40988` },
          { label: "Vertebral subluxation", href: `${BASE}/articles/general/category/40989` },
          { label: "Wellness resources", href: `${BASE}/articles/general/category/40987` },
        ],
      },
    ],
  },
  {
    id: "common-conditions",
    title: "Common conditions treated",
    overviewHref: `${BASE}/articles/general/category/39539`,
    intro: "Education on pain, injuries, and everyday conditions we see in practice.",
    groups: [
      {
        title: null,
        links: [
          { label: "Auto accident injuries", href: `${BASE}/articles/general/category/40897` },
          { label: "Back and shoulder pain", href: `${BASE}/articles/general/category/40996` },
          { label: "Body pain", href: `${BASE}/articles/general/category/40997` },
          { label: "Herniated discs", href: `${BASE}/articles/general/category/40998` },
          { label: "Improved health", href: `${BASE}/articles/general/category/41000` },
          { label: "Pediatric ailments", href: `${BASE}/articles/general/category/40991` },
          { label: "Repetitive use injuries", href: `${BASE}/articles/general/category/40994` },
          { label: "Respiratory function", href: `${BASE}/articles/general/category/40992` },
        ],
      },
      {
        title: "Chronic condition relief",
        links: [
          { label: "Overview", href: `${BASE}/articles/general/category/40999` },
          { label: "Conditions affecting women", href: `${BASE}/articles/general/category/40993` },
          { label: "Headaches", href: `${BASE}/articles/general/category/40915` },
        ],
      },
    ],
  },
  {
    id: "health-wellness",
    title: "Health & wellness",
    overviewHref: `${BASE}/articles/general/category/64024`,
    intro: "Lifestyle, mindset, and wellness topics to support your care plan.",
    groups: [
      {
        title: "Healthy thinking",
        links: [
          { label: "Overview", href: `${BASE}/articles/general/category/39628` },
          { label: "Get positive", href: `${BASE}/articles/general/category/39629` },
          { label: "Relaxation techniques", href: `${BASE}/articles/general/category/39630` },
        ],
      },
      {
        title: null,
        links: [{ label: "Life in motion", href: `${BASE}/articles/general/category/39543` }],
      },
      {
        title: "Wellness lifestyle tips",
        links: [
          { label: "Overview", href: `${BASE}/articles/general/category/39632` },
          { label: "Treat yourself well", href: `${BASE}/articles/general/category/40977` },
          { label: "Treat others well", href: `${BASE}/articles/general/category/40978` },
          { label: "Eat well", href: `${BASE}/articles/general/category/40979` },
        ],
      },
      {
        title: "Wellness essentials",
        links: [
          { label: "Overview", href: `${BASE}/articles/general/category/39634` },
          { label: "At home", href: `${BASE}/articles/general/category/39639` },
          { label: "At work", href: `${BASE}/articles/general/category/39635` },
          { label: "Exercise", href: `${BASE}/articles/general/category/39636` },
          { label: "Nutrition", href: `${BASE}/articles/general/category/39637` },
          { label: "What you wear", href: `${BASE}/articles/general/category/39638` },
        ],
      },
      {
        title: "Wellness perspectives",
        links: [
          { label: "Overview", href: `${BASE}/articles/general/category/39631` },
          { label: "Mental", href: `${BASE}/articles/general/category/40981` },
          { label: "Spiritual", href: `${BASE}/articles/general/category/40983` },
          { label: "Social", href: `${BASE}/articles/general/category/40982` },
          { label: "Physical", href: `${BASE}/articles/general/category/40980` },
        ],
      },
    ],
  },
  {
    id: "therapies-techniques",
    title: "Therapies & techniques",
    overviewHref: `${BASE}/articles/general/category/64025`,
    intro: "Deeper reading on approaches used in chiropractic care.",
    groups: [
      {
        title: null,
        links: [
          { label: "Techniques", href: `${BASE}/articles/general/category/41001` },
          { label: "Therapies", href: `${BASE}/articles/general/category/41002` },
        ],
      },
    ],
  },
  {
    id: "newsletter-library",
    title: "Newsletter library",
    overviewHref: `${BASE}/articles/general/category/39807`,
    intro: "Archived newsletters by topic — browse at your own pace.",
    groups: [
      {
        title: null,
        links: [
          { label: "Back, body & joint pain", href: `${BASE}/articles/general/category/41052` },
          { label: "Healthy tips", href: `${BASE}/articles/general/category/41045` },
          { label: "Exercise & fitness", href: `${BASE}/articles/general/category/41046` },
          { label: "Injury rehab & prevention", href: `${BASE}/articles/general/category/41057` },
          { label: "Kid’s health", href: `${BASE}/articles/general/category/41043` },
          { label: "Illness prevention", href: `${BASE}/articles/general/category/41053` },
          { label: "Chronic conditions", href: `${BASE}/articles/general/category/41048` },
          { label: "Nutrition & healthy eating", href: `${BASE}/articles/general/category/41042` },
          { label: "Breaking bad habits", href: `${BASE}/articles/general/category/41056` },
          { label: "Senior health", href: `${BASE}/articles/general/category/41051` },
          { label: "Weight loss", href: `${BASE}/articles/general/category/41058` },
          { label: "Pregnancy & parenting", href: `${BASE}/articles/general/category/41044` },
          { label: "Wellness", href: `${BASE}/articles/general/category/41072` },
          { label: "Mind–body connection", href: `${BASE}/articles/general/category/41047` },
          { label: "Stress & anxiety", href: `${BASE}/articles/general/category/41049` },
          { label: "Life–work balance", href: `${BASE}/articles/general/category/41055` },
          { label: "Staying young", href: `${BASE}/articles/general/category/41050` },
          { label: "Staying motivated", href: `${BASE}/articles/general/category/41054` },
        ],
      },
    ],
  },
  {
    id: "wellness4kids",
    title: "Wellness4Kids",
    overviewHref: `${BASE}/articles/general/category/39627`,
    intro: "Family-friendly wellness articles for parents and kids.",
    groups: [
      {
        title: null,
        links: [
          { label: "Browse Wellness4Kids articles", href: `${BASE}/articles/general/category/39627` },
        ],
      },
    ],
  },
];

export const communityNavChildren: CommunityLink[] = communityHubSections.map((s) => ({
  label: s.title,
  href: `/community#${s.id}`,
}));
