export type SocialLinkType = 'linkedin' | 'twitter' | 'github' | 'instagram';

export interface SocialLink {
  type: SocialLinkType;
  url: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
  socialLinks: SocialLink[];
}

export const teamMembers: TeamMember[] = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    bio: "Blockchain visionary with 10+ years in fintech. Previously led innovation at Ethereum Foundation.",
    imageSrc: "/team/member1.jpg",
    socialLinks: [
      { type: 'linkedin', url: "#" },
      { type: 'twitter', url: "#" }
    ]
  },
  {
    name: "David Chen",
    role: "CTO",
    bio: "Full-stack developer with expertise in smart contracts and decentralized applications. Former lead at ConsenSys.",
    imageSrc: "/team/member2.jpg",
    socialLinks: [
      { type: 'linkedin', url: "#" },
      { type: 'github', url: "#" }
    ]
  },
  {
    name: "Maya Patel",
    role: "Head of Product",
    bio: "Product strategist with a background in UX design. Passionate about creating intuitive blockchain experiences.",
    imageSrc: "/team/member3.jpg",
    socialLinks: [
      { type: 'linkedin', url: "#" },
      { type: 'instagram', url: "#" }
    ]
  }
];

export const getSocialIconColor = (type: SocialLinkType): string => {
  // Use a consistent blue/indigo color scheme for all social icons
  // This ensures everything matches with our card design
  return "text-blue-600 hover:text-indigo-600 dark:text-blue-400 dark:hover:text-indigo-400";
};
